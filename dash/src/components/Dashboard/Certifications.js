import React from 'react';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import { FaStar, FaCertificate, FaDownload } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            name: 'JAVA PROGRAMMING',
            provider: 'NPTEL',
            completionDate: '2022-06-15',
            rating: 5,
            progress: 100,
            status: 'Completed'
        },
        {
            name: 'React.js Professional',
            provider: ' KG Academy',
            completionDate: null,
            rating: null,
            progress: 75,
            status: 'In Progress'
        },
        {
            name: 'Web Development',
            provider: 'Internshala',
            completionDate: '2023-08-20',
            rating: 4,
            progress: 100,
            status: 'Completed'
        },
        {
            name: 'Data-anayltics',
            provider: 'Course-era',
            completionDate: '2023-08-20',
            rating: 4,
            progress: 100,
            status: 'Completed'
        }, {
            name: 'Backend-development ',
            provider: 'Course-era',
            completionDate: '2023-08-20',
            rating: 4,
            progress: 100,
            status: 'Completed'
        }
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar 
                key={index}
                className={`star ${index < rating ? 'filled' : ''}`}
            />
        ));
    };

    return (
        <div className="certifications-container">
            <Row>
                {certifications.map((cert, index) => (
                    <Col md={4} key={index}>
                        <Card className="certification-card">
                            <Card.Body>
                                <div className="cert-icon">
                                    <FaCertificate />
                                </div>
                                <h5>{cert.name}</h5>
                                <p className="provider">{cert.provider}</p>
                                <ProgressBar 
                                    now={cert.progress} 
                                    label={`${cert.progress}%`}
                                    variant={cert.progress === 100 ? "success" : "primary"}
                                />
                                <div className="cert-footer">
                                    {cert.rating && (
                                        <div className="rating">
                                            {renderStars(cert.rating)}
                                        </div>
                                    )}
                                    
                                </div>
                                <span className={`status-badge ${cert.status.toLowerCase()}`}>
                                    {cert.status}
                                </span>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Certifications; 