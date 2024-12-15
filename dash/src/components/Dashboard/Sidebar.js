import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { 
    FaHome, 
    FaChartBar, 
    FaCalendar, 
    FaCertificate,
    FaBriefcase,
    FaCog 
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { path: '/dashboard', icon: <FaHome />, label: 'Overview' },
        { path: '/analytics', icon: <FaChartBar />, label: 'Analytics' },
        { path: '/calendar', icon: <FaCalendar />, label: 'Calendar' },
        { path: '/certifications', icon: <FaCertificate />, label: 'Certifications' },
        { path: '/projects', icon: <FaBriefcase />, label: 'Projects' },
       
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src="https://thumbs.dreamstime.com/z/dashboard-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-134070079.jpg?w=768" alt="Logo" className="logo" />
            </div>
            <Nav className="flex-column">
                {menuItems.map((item) => (
                    <Nav.Link
                        as={Link}
                        to={item.path}
                        key={item.path}
                        className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="label">{item.label}</span>
                    </Nav.Link>
                ))}
            </Nav>
        </div>
    );
};

export default Sidebar; 