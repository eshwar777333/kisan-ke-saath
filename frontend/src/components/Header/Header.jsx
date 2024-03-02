import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavDropdown, Image, Button } from 'react-bootstrap';
import './Header.css'

import { logout } from './../../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }// Remove or comment out this block
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "en",
                autoDisplay: true,
            },
            "google_translate_element"
        );
    };

    useEffect(() => {
        var addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);


    return (
        <Navbar collapseOnSelect expand="lg" fixed="top">
            <LinkContainer to="/">
                <Navbar.Brand className="nav-cal" >
                    <Image width="100px" src="/Logo.png" />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ">
                    <LinkContainer to="/">
                        <button className="custom-button">HOME</button>
                    </LinkContainer>
                    <LinkContainer to="/farmer">
                        <button className="custom-button">FARMER</button>
                    </LinkContainer>
                    <LinkContainer to="/consumer">
                        <button className="custom-button">CONSUMER</button>
                    </LinkContainer>
                    <LinkContainer to="login?redirect=supplier">
                        <button className="custom-button">SUPPLIER</button>
                    </LinkContainer>
                    {/* <LinkContainer to="/">
                        <Nav.Link className="nav-cal">HOME</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/farmer">
                        <Nav.Link className="nav-cal">FARMER</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/consumer">
                        <Nav.Link className="nav-cal">CONSUMER</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="login?redirect=supplier">
                        <Nav.Link className="nav-cal">SUPPLIER</Nav.Link>
                    </LinkContainer> */}
                    <div className='trans' id="google_translate_element"></div>
                    {/* <LinkContainer to="/cart" >
                        <Nav.Link className={`${userInfo ? "remove-space" : "add-space cart nav-cal"} `}>
                            <i className="fas fa-shopping-cart"></i>
                            CART
                        </Nav.Link>
                    </LinkContainer> */}
                    <LinkContainer to="/cart">
                        <Nav.Link className={`${userInfo ? "remove-space" : "add-space cart nav-cal"} cart-button`}>
                            <i className="fas fa-shopping-cart"></i>
                            CART
                        </Nav.Link>
                    </LinkContainer>

                    {
                        userInfo ? (
                            <NavDropdown title={userInfo.name.toUpperCase()} id='username'>
                                {
                                    userInfo && userInfo.isAdmin && (
                                        <LinkContainer to='/admin/dashboard'>
                                            <NavDropdown.Item>DASHBOARD</NavDropdown.Item>
                                        </LinkContainer>
                                    )
                                }
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>PROFILE</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/login'>
                                    <NavDropdown.Item onClick={logoutHandler}>LOGOUT</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        ) : (
                            <LinkContainer to="/login">
                                <button className="custom-button">SIGN IN</button>
                                {/* <Nav.Link className="login nav-cal">SIGN IN</Nav.Link> */}
                            </LinkContainer>
                        )
                    }
                    {
                        userInfo && userInfo.isAdmin && (
                            <NavDropdown title="ADMIN" id='adminmenu'>
                                <LinkContainer to='/admin/userlist'>
                                    <NavDropdown.Item>USERS</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/admin/productlist'>
                                    <NavDropdown.Item>PRODUCTS</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/admin/orderlist'>
                                    <NavDropdown.Item>ORDERS</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
