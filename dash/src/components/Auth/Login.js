import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null); // State for error messages
    const [loading, setLoading] = useState(false); // State for loading indicator
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when the request starts
        setError(null); // Reset error state

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) { // Check if the response is successful
                localStorage.setItem('token', data.token);
                navigate('/dashboard');
            } else {
                // Handle errors based on the response
                setError(data.message || 'Login failed. Please try again.'); // Set error message
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred. Please try again.'); // Set generic error message
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="auth-container">
            <Card className="auth-card">
                <Card.Body>
                    <h2 className="auth-title">Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>} {/* Show error message */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
                        </Button>
                    </Form>
                    <div className="text-center mt-3">
                        Don't have an account? <Link to="/register">Register</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;