import React from 'react';
import { Navbar, Nav, Form, InputGroup, Dropdown } from 'react-bootstrap';
import { FaBell, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css';

const Header = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        // Clear the token from local storage
        localStorage.removeItem('token');
        // Redirect to the login page
        navigate('/login');
    };

    return (
        <Navbar bg="white" className="dashboard-header">
            <div className="d-flex justify-content-between w-100 align-items-center">
                <div className="d-flex align-items-center">
                    <h2 className="mb-0 mr-5"> My Dashboard</h2>
                </div>

                <div className="header-search">
                    <InputGroup>
                        <Form.Control
                            placeholder="What are you looking for?"
                            aria-label="Search"
                        />
                        <InputGroup.Text>
                            <FaSearch />
                        </InputGroup.Text>
                    </InputGroup>
                </div>

                <div className="d-flex align-items-center">
                    <Nav.Link className="notification-icon">
                        <FaBell />
                    </Nav.Link>
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="link" className="user-dropdown">
                            <img
                                src="/profile.png"
                                alt="Profile"
                                className="profile-image"
                            />
                            <span className="ms-2 text-black">AMAN</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Profile</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item> {/* Add onClick handler */}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </Navbar>
    );
};

export default Header;