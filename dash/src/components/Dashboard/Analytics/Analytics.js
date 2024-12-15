import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import './Analytics.css';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Analytics = () => {
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Course Progress',
                data: [65, 75, 70, 85, 80, 90],
                fill: false,
                borderColor: '#007bff',
                tension: 0.4,
            },
        ],
    };

    const barChartData = {
        labels: ['Python', 'Java', 'React', 'Node.js', 'mongodb', 'mysql'],
        datasets: [
            {
                label: 'Skill Proficiency (%)',
                data: [65, 80, 60, 75, 65, 80],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };

    return (
        <div className="analytics-container">
            <Row>
                <Col md={6}>
                    <Card className="chart-card">
                        <Card.Body>
                            <h5>Learning Progress</h5>
                            <Line data={lineChartData} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="chart-card">
                        <Card.Body>
                            <h5>Skills Distribution</h5>
                            <Bar data={barChartData} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="mt-4">
                        <Card.Body>
                            <h5>Recent Activities</h5>
                            <div className="activity-list">
                                {[
                                    { activity: 'Completed states', time: '2 hours ago' },
                                    { activity: 'Started React Project', time: '1 day ago' },
                                    { activity: 'Dsa Problem solving', time: '3 days ago' },
                                ].map((item, index) => (
                                    <div key={index} className="activity-item">
                                        <span className="activity-text">{item.activity}</span>
                                        <span className="activity-time">{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Analytics; 