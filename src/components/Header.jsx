import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Logo from "../assets/logo_small.png";

const Header = () => {
    return (
        <Navbar id="PPNavbar" className="navbar navbar-expand-md navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="https://www.google.com/">
                <img src={Logo} height="40" alt="BSCPad" className="me-2" /></a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item me-2">
                            <a className="btn btn-primary btn-sm" href="#" data-bs-toggle="modal" data-bs-target="#connectWalletModal">
                            <i className="mdi mdi-wallet-plus-outline me-1"></i>
                            <span>Connect Wallet</span>
                            </a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="btn btn-outline-primary btn-sm" aria-current="page" href="https://www.google.com/">
                            <i className="mdi mdi-fire me-1"></i>
                            <span>Projects</span>
                            </a>
                        </li>
                        <li className="nav-item me-2">
                            <Button className="nav-link btn btn-sm btn-outline-primary btn-circle" type="button">
                                <i className="mdi mdi-lightbulb-on"></i>
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </Navbar>
    );
}

export default Header;
