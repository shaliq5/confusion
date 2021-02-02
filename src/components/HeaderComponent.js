import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

class Header extends Component{

    render() {
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                    <NavbarBrand href="/" >Confusion Site</NavbarBrand>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Welcome to Confusion Site</h1>
                                <p>This is a demo site to clear all confusion on react js</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;