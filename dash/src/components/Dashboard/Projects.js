import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'PAYING GUEST',
            description: 'A web application help for bachelors looking for home like places',
            image: '/project1.jpg',
            githubLink: 'https://github.com/Sharma-aman-45/xenonstack-hotelrental-app',
            liveLink: '',
            technologies: ['HTML&CSS', 'js', 'MYSQL', 'php'],
            status: 'Completed',
            completion: '2023'
        },
        {
            title: 'NEWS-APP - REACT BASED WEBSITE',
            description: 'Developed a highly interactive and user-friendly News App utilizing React, showcasing advanced web development skills and a strong understanding of front-end technologies',
            image: '/project2.jpg',
            githubLink: 'https://github.com/Sharma-aman-45/Newsapp-using-react',
            liveLink: '',
            technologies: ['React', 'BootStrap', 'api'],
            status: 'Completed',
            completion: '2024'
        },
        {
            title: 'BRIGHT-HAND - E-LEARNING WEBSITE FOR DEAF AND MUTE CHILDREN',
            description: 'Created an interactive e-learning platform for deaf and mute children.',
            image: '/project2.jpg',
            githubLink: 'https://github.com/Sharma-aman-45/mindbright',
            liveLink: '',
            technologies: ['React', 'BootStrap', 'api','node.js','Express.js', 'Mongodb'],
            status: 'Completed',
            completion: '2024'
        },
        // Add more projects as needed
    ];

    return (
        <div className="projects-container">
            <Row>
                {projects.map((project, index) => (
                    <Col md={6} lg={4} key={index} className="mb-4">
                        <Card className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-start">
                                    <Card.Title>{project.title}</Card.Title>
                                    <Badge bg={project.status === 'Completed' ? 'success' : 'primary'}>
                                        {project.status}
                                    </Badge>
                                </div>
                                <Card.Text>{project.description}</Card.Text>
                                <div className="tech-stack">
                                    {project.technologies.map((tech, i) => (
                                        <Badge key={i} bg="light" text="dark">
                                            <FaCode className="me-1" />
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Projects; 