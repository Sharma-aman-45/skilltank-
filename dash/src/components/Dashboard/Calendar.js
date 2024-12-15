import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './Calendar.css';

const Calendar = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Example events
    const events = {
        5: { text: ' React Class', type: 'primary' },
        12: { text: 'Project Deadline', type: 'danger' },
        17: { text: 'UX Research Workshop', type: 'success' },
        25: { text: 'Team Meeting', type: 'warning' }
    };

    return (
        <div className="calendar-container">
            <Card>
                <Card.Body>
                    <div className="calendar-header">
                        <h4>{currentMonth} {currentYear}</h4>
                        <div className="calendar-actions">
                            <button className="btn btn-outline-primary me-2">Today</button>
                            <div className="btn-group">
                                <button className="btn btn-outline-secondary">&lt;</button>
                                <button className="btn btn-outline-secondary">&gt;</button>
                            </div>
                        </div>
                    </div>
                    <div className="calendar-grid mt-4">
                        <Row className="days-header">
                            {daysOfWeek.map(day => (
                                <Col key={day} className="text-center">{day}</Col>
                            ))}
                        </Row>
                        <div className="dates-grid">
                            {[...Array(31)].map((_, index) => (
                                <div 
                                    key={index} 
                                    className={`date-cell ${events[index + 1] ? `event-${events[index + 1].type}` : ''}`}
                                >
                                    <span className="date-number">{index + 1}</span>
                                    {events[index + 1] && (
                                        <div className="event-indicator">
                                            {events[index + 1].text}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Calendar; 