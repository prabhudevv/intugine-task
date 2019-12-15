import React, { Component } from "react";
import { MDBCol, MDBRow, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
var axios = require('axios');
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            trackingData: [],
            tableData: []
        }
    }
    async componentDidMount() {
        var apiData = {}, newDataList = {};
        var bearerToken = {
            headers: { 'Authorization': 'Bearer tTU3gFVUdP' }
        };
        var bodyParameters = {
            email: "mayankmittal@intugine.com"
        }
        apiData = axios.post('https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank', bodyParameters, bearerToken)
            .then(response => {
                return response
            })
            .catch(err => {
                const response = {
                    message: err.response.data.message,
                    status: err.response.status
                }
                return response;
            })
        const dataList = await apiData;
        dataList.data.data.map((list) => {
            if (list.current_status_code in newDataList) {
                newDataList[list.current_status_code].count++;
                newDataList[list.current_status_code].data.push(list)
            } else {
                newDataList[list.current_status_code] = {
                    count: 0,
                    data: [],
                    class: list.current_status_code === 'DEL' ? `square-box-active` : `square-box`
                };
                newDataList[list.current_status_code].count++;
                newDataList[list.current_status_code].data.push(list)
            }
        })
        this.setState({
            data: newDataList,
            tableData: newDataList.DEL.data,
            trackingData: newDataList.DEL.data[0].scan
        })
    }
    stepperHandler = (data) => {
        this.setState({
            trackingData: data
        })
    }
    statusClickHandler(event) {
        let newList = { ...this.state.data }
        Object.keys(newList).map((list) => {
            list === event ? newList[list].class = `square-box-active` : newList[list].class = `square-box`;
        })
        this.setState({
            tableData: this.state.data[event].data,
            trackingData: this.state.data[event].data[0].scan
        })
    }
    render() {
        const data = this.state.tableData;
        const trackingData = this.state.trackingData !== undefined ? this.state.trackingData : [];
        const StatusCount = this.state.data !== undefined ? this.state.data : [];
        return (
            <div>
                <MDBRow className="square-box-container">
                    {
                        Object.keys(StatusCount).map((list) => {
                            return (
                                <div className={this.state.data[list].class} key={list} id={list}
                                    onClick={() => this.statusClickHandler(list)} ref={list}>
                                    <p>{list}</p>
                                    <h3 style={{ textAlign: "center" }}>{this.state.data[list].count}</h3>
                                </div>
                            )
                        })
                    }
                </MDBRow>
                <MDBRow style={{ padding: "1rem" }}>
                    <MDBCol className="col-md-4 left-nav">
                        <div className="stepper-container">
                            <div className="step">
                                <div className="v-stepper">
                                    <div className="circle icon">
                                        <img src={require('../assets/destination.svg')} style={{ margin: "10px" }} width="15px" height="auto" alt="verefi-logo" />
                                    </div>
                                    <div className="line"></div>
                                </div>
                            </div>
                            {
                                trackingData.map((list, index) => {
                                    const activeclass = (list.status_detail === 'DELIVERED') ? 'content active' : 'content';
                                    return (
                                        <div className="step completed" key={index}>
                                            <div className="v-stepper">
                                                <div className="circle"></div>
                                                <div className="line"></div>
                                            </div>
                                            <div className={activeclass}>
                                                <p>{list.location} <span className="date-time">{new Date(list.time).getDate() + '-' + (new Date(list.time).getMonth() + 1) + '-' + new Date(list.time).getFullYear()} {(new Date(list.time).getHours() < 10 ? `0` + new Date(list.time).getHours() : new Date(list.time).getHours()) + ':' + (new Date(list.time).getMinutes() < 10 ? `0` + new Date(list.time).getMinutes() : new Date(list.time).getMinutes())}</span></p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="step">
                                <div className="v-stepper">
                                    <div className="circle icon">
                                        <img src={require('../assets/warehouse.svg')} style={{ margin: "10px" }} width="15px" height="auto" alt="verefi-logo" />
                                    </div>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol className="col-md-8 right-nav">
                        <MDBTable borderless>
                            <MDBTableHead>
                                <tr>
                                    <th>AWB NUMBER</th>
                                    <th>TRANSPORTER</th>
                                    <th>SOURCE</th>
                                    <th>DESTINATION</th>
                                    <th>BRAND</th>
                                    <th>START DATE</th>
                                    <th>ETD</th>
                                    <th>STATUS</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody id="scrollbar-style">
                                {
                                    data.map((list) => {
                                        return (
                                            <tr key={list._id} onClick={() => this.stepperHandler(list.scan)}>
                                                <td>{list.awbno}</td>
                                                <td>{list.carrier}</td>
                                                <td>{list.from}</td>
                                                <td>{list.to}</td>
                                                <td>{list.order_data}</td>
                                                <td>{new Date(list.pickup_date).getDate() + '/' + (new Date(list.pickup_date).getMonth() + 1) + '/' + new Date(list.pickup_date).getFullYear()}</td>
                                                <td>{new Date(list.time).getDate() + '/' + (new Date(list.time).getMonth() + 1) + '/' + new Date(list.time).getFullYear()}</td>
                                                {
                                                    list.current_status !== `Delivered` ?
                                                        <td>{list.current_status}</td> :
                                                        <td style={{ color: `#2BD564` }}>{list.current_status}</td>
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}

export default Home;