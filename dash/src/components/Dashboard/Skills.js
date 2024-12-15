import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
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

    return (
        <Card className="skill-card">
            <Card.Body>
                <h5 className="skill-title">Skill Set</h5>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-header">
                                <span>{skill.name}</span>
                                <span>{skill.proficiency}%</span>
                            </div>
                            <ProgressBar 
                                now={skill.proficiency} 
                                variant="info" 
                                className="skill-progress"
                            />
                        </div>
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Skills; 