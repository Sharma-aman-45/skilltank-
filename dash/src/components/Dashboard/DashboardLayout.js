import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Header from './Header';
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <Container fluid className="dashboard-content block">
                    {children}
                </Container>
            </div>
        </div>
    );
};

export default DashboardLayout; 