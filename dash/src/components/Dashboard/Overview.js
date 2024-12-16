import React from 'react';
import { Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap';
import { FaStar, FaBriefcase, FaCertificate, FaCalendar, FaCode } from 'react-icons/fa';
import './Overview.css';

const Overview = () => {
    const userStats = {
        rating: 8.2,
        completedProjects: 75,
        proficientSkills: 10
    };

    const skills = [
        { name: 'Java', proficiency: 85 },
        { name: 'python', proficiency: 65 },
        { name: 'HTML&CSS', proficiency: 90 },
        { name: 'javascript', proficiency: 70 },
        { name: 'react', proficiency: 85 },
        { name: 'nodejs', proficiency: 70 },
        { name: 'mongodb', proficiency: 85 },
        { name: 'mysql', proficiency: 70 },
    ];

    const certifications = [
        { name: 'JAVA PROGRAMMING', rating: 5 },
        { name: 'Web Development', rating: 4 },
        { name: 'React Development', rating: 4 },
        
    ];

    const experience = [
        {
            role: 'Web Developer Intern',
            company: 'Next-24-tech',
            duration: '2024 Jul - 2024 sep',
            description: 'Leading frontend development team and implementing backend'
        },
        {
            role: 'Full Stack Developer',
            company: 'Digital Bhem',
            duration: '2024 Jul - 2024 Aug',
            description: 'Developed and maintained web applications using MERN stack'
        }
    ];

    const recentProjects = [
        {
            title: 'PAYING GUEST',
            description: 'A web application help for bachelors looking for home like places',
            technologies: ['HTML&CSS', 'js', 'MYSQL', 'php'],
            completion: '100%'
        },
        {
            title: 'NEWS-APP - REACT BASED WEBSITE',
            description: 'Developed a highly interactive  News App utilizing React', 
            technologies: ['React', 'BootStrap', 'api'],
            completion: '100%'
        }
    ];

    const upcomingEvents = [
        { date: '2024-01-15', title: 'Project Deadline' },
        { date: '2024-01-18', title: 'Team Meeting' },
        { date: '2024-01-20', title: 'Code Review' }
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
        <div className="overview-container">
            <Row className="g-4">
                <Col lg={3}>
                    <div className="profile-section">
                        <img 
                            src="/profile.png" 
                            alt="Profile" 
                            className="profile-image-large"
                        />
                        <h3>Aman</h3>
                        <p className="text-muted">"Web Developer"</p>
                        
                        <div className="stats-container">
                            <div className="stat-item">
                                <h4>{userStats.rating}</h4>
                                <p>Overall Rating</p>
                            </div>
                            <div className="stat-item">
                                <h4>{userStats.completedProjects}%</h4>
                                <p>Completed Projects</p>
                            </div>
                            <div className="stat-item">
                                <h4>{userStats.proficientSkills}</h4>
                                <p>Proficient Skills</p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col lg={9}>
                    <Card>
                        <Card.Body>
                            <h5 className="section-title">
                                <span className="icon"><FaBriefcase /></span>
                                Skills
                            </h5>
                            <div className="skills-grid">
                                {skills.slice(0, 6).map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="d-flex justify-content-between mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.proficiency}%</span>
                                        </div>
                                        <ProgressBar 
                                            now={skill.proficiency} 
                                            variant="info"
                                        />
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12}>
                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="equal-height-card">
                                <Card.Body>
                                    <h5 className="section-title">
                                        <span className="icon"><FaBriefcase /></span>
                                        Work Experience
                                    </h5>
                                    <div className="experience-timeline">
                                        {experience.map((exp, index) => (
                                            <div key={index} className="experience-item">
                                                <div className="timeline-dot"></div>
                                                <h6>{exp.role}</h6>
                                                <p className="company">{exp.company}</p>
                                                <p className="duration">{exp.duration}</p>
                                                <p className="description">{exp.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="equal-height-card">
                                <Card.Body>
                                    <h5 className="section-title">
                                        <span className="icon"><FaCode /></span>
                                        Recent Projects
                                    </h5>
                                    {recentProjects.map((project, index) => (
                                        <div key={index} className="project-preview">
                                            <h6>{project.title}</h6>
                                            <p>{project.description}</p>
                                            <div className="tech-tags">
                                                {project.technologies.map((tech, i) => (
                                                    <Badge key={i} bg="light" text="dark">{tech}</Badge>
                                                ))}
                                            </div>
                                            <ProgressBar 
                                                now={parseInt(project.completion)} 
                                                label={project.completion}
                                                variant="success"
                                                className="mt-2"
                                            />
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="equal-height-card">
                                <Card.Body>
                                    <h5 className="section-title">
                                        <span className="icon"><FaCertificate /></span>
                                        Recent Certifications
                                    </h5>
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="certification-item">
                                            <h6>{cert.name}</h6>
                                            <div className="rating">
                                                {renderStars(cert.rating)}
                                            </div>
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Overview; 
