import React, { Component } from "react";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBIcon
} from "mdbreact";

class TopNavBar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    onSearchInputChange = event => {
        console.log("Search Function");
    };

    render() {
        return (
            <MDBNavbar color="" dark expand="md">
                <MDBNavLink to={{ pathname: `/` }}>
                    <img src={require('../assets/logo.svg')} width="40px" height="auto" alt="verefi-logo" />
                </MDBNavLink>
                <MDBNavLink to={{ pathname: `/`, state: { lang: "k" } }}>
                    Intugine
              </MDBNavLink>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink to={{ pathname: `/home` }}>
                                Home
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to={{ pathname: `/brands` }}>
                                Brands
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to={{ pathname: `/transporters` }}>
                                Transporters
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <div className="profile-icon">
                                    <img src={require('../assets/profile.svg')} width="20px" height="auto" alt="profile-icon" />
                                </div>
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                    <MDBDropdownItem href="#!">Change Password</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Logout</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNavBar;