import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


import './Footer.css'

const Footer = () => {
    return (
        <BrowserRouter>
            <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">

                <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                    <br></br>
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="3    " xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase-font-weight-bold">
                                <img className='logo' src='./Logo.png' style={{ height: 250, width: 250 }}></img>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        </MDBCol>
                        <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase-font-weight-bold">
                                <strong>Links</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p><Link to="/farmer" className="dark-grey-text">Farmer</Link></p>
                            <p><Link to="/consumer" className="dark-grey-text">Consumer </Link></p>
                            <p><Link to="/supplier" className="dark-grey-text">Supplier</Link></p>
                            <p><Link to="/cart" className="dark-grey-text">Cart</Link></p>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="4" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase-font-weight-bold">
                                <strong>Contact</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p><i className="fa fa-home mr-3" /> Jaipur,Rajasthan</p>
                            <p><i className="fa fa-envelope mr-3" /> kisanksaath@gmail.com</p>
                            <p><i className="fa fa-phone mr-3" /> +91 1234567890</p>
                        </MDBCol>
                        <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase-font-weight-bold">
                                <strong>Get in touch</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                                <a href=""><i className="fa fa-facebook mr-3"/>Facebook</a><br/><br/>
                                <a href=""><i className="fa fa-instagram mr-3"/>Instagram</a><br/><br/>
                                <a href=""><i className="fa fa-twitter mr-3"/>Twitter</a><br/><br/>
                                <a href=""><i className="fa fa-github mr-3"/>GitHub</a><br/><br/>
                                <a href=""><i className="fa fa-linkedin-in mr-3"/>Linked-in</a><br/>
                                
                            
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright-text-center-py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        Kisan-ke-Saath
                        <br />
                    </MDBContainer>
                </div>
            </MDBFooter>
        </BrowserRouter>
    )
}

export default Footer
