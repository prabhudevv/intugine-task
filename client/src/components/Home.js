import React, { Component } from "react";
import { MDBCol, MDBRow, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

class Home extends Component {

    render() {
        return (
            <div>
                <MDBRow className="square-box-container">
                    <div className="square-box-active">
                        <p>DEL</p>
                        <h3 style={{ textAlign: "center" }}>916</h3>
                    </div>
                    <div className="square-box">
                        <p>INT</p>
                        <h3 style={{ textAlign: "center" }}>232</h3>
                    </div>
                    <div className="square-box">
                        <p>INT</p>
                        <h3 style={{ textAlign: "center" }}>232</h3>
                    </div>
                    <div className="square-box">
                        <p>INT</p>
                        <h3 style={{ textAlign: "center" }}>232</h3>
                    </div>
                    <div className="square-box">
                        <p>INT</p>
                        <h3 style={{ textAlign: "center" }}>232</h3>
                    </div>
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
                            <div className="step completed">
                                <div className="v-stepper">
                                    <div className="circle"></div>
                                    <div className="line"></div>
                                </div>
                                <div>
                                    <p>Delivered <span className="date-time">04-07-2019 14:00</span></p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="v-stepper">
                                    <div className="circle"></div>
                                    <div className="line"></div>
                                </div>
                                <div>
                                    <p>Delivered <span className="date-time">04-07-2019 14:00</span></p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="v-stepper">
                                    <div className="circle"></div>
                                    <div className="line"></div>
                                </div>
                                <div>
                                    <p>Delivered <span className="date-time">04-07-2019 14:00</span></p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="v-stepper">
                                    <div className="circle"></div>
                                    <div className="line"></div>
                                </div>
                                <div>
                                    <p>Delivered <span className="date-time">04-07-2019 14:00</span></p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="v-stepper">
                                    <div className="circle"></div>
                                    <div className="line"></div>
                                </div>
                                <div>
                                    <p>Delivered <span className="date-time">04-07-2019 14:00</span></p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="v-stepper">
                                    <div className="circle"></div>
                                    <div className="line"></div>
                                </div>
                                <div>
                                    <p>Delivered <span className="date-time">04-07-2019 14:00</span></p>
                                </div>
                            </div>
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
                                <tr>
                                    <td>#273126375</td>
                                    <td>DTDC</td>
                                    <td>Bangalore</td>
                                    <td>Delhi</td>
                                    <td>USPA</td>
                                    <td>01/07/2019</td>
                                    <td>01/07/2019</td>
                                </tr>
                                <tr>
                                    <td>#273126375</td>
                                    <td>DTDC</td>
                                    <td>Bangalore</td>
                                    <td>Delhi</td>
                                    <td>USPA</td>
                                    <td>01/07/2019</td>
                                    <td>01/07/2019</td>
                                </tr>
                                <tr>
                                    <td>#273126375</td>
                                    <td>DTDC</td>
                                    <td>Bangalore</td>
                                    <td>Delhi</td>
                                    <td>USPA</td>
                                    <td>01/07/2019</td>
                                    <td>01/07/2019</td>
                                </tr>
                                <tr>
                                    <td>#273126375</td>
                                    <td>DTDC</td>
                                    <td>Bangalore</td>
                                    <td>Delhi</td>
                                    <td>USPA</td>
                                    <td>01/07/2019</td>
                                    <td>01/07/2019</td>
                                </tr>
                                <tr>
                                    <td>#273126375</td>
                                    <td>DTDC</td>
                                    <td>Bangalore</td>
                                    <td>Delhi</td>
                                    <td>USPA</td>
                                    <td>01/07/2019</td>
                                    <td>01/07/2019</td>
                                </tr>
                                <tr>
                                    <td>#273126375</td>
                                    <td>DTDC</td>
                                    <td>Bangalore</td>
                                    <td>Delhi</td>
                                    <td>USPA</td>
                                    <td>01/07/2019</td>
                                    <td>01/07/2019</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}

export default Home;