import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

function ControlPanel() {
  const [robotStatus, setRobotStatus] = useState({
    status: 'Active',
    battery: 85,
    speed: 5,
    currentTask: 'Delivery in progress'
  });

  const [speed, setSpeed] = useState(5);

  const handleSpeedChange = (e) => {
    const newSpeed = parseInt(e.target.value);
    setSpeed(newSpeed);
    // TODO: Implement speed adjustment logic
  };

  const handleEmergencyStop = () => {
    // TODO: Implement emergency stop logic
    alert('Emergency stop activated!');
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <h2 className="text-center mb-4">Robot Control Panel</h2>
          <Row className="g-4">
            <Col xs={12} md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Header className="bg-primary text-white">
                  <h5 className="mb-0">Robot Status</h5>
                </Card.Header>
                <Card.Body className="p-4">
                  <Row className="g-3">
                    <Col xs={6} md={12}>
                      <div className="p-3 bg-light rounded">
                        <p className="mb-1"><strong>Status:</strong></p>
                        <p className="mb-0">{robotStatus.status}</p>
                      </div>
                    </Col>
                    <Col xs={6} md={12}>
                      <div className="p-3 bg-light rounded">
                        <p className="mb-1"><strong>Battery Level:</strong></p>
                        <p className="mb-0">{robotStatus.battery}%</p>
                      </div>
                    </Col>
                    <Col xs={6} md={12}>
                      <div className="p-3 bg-light rounded">
                        <p className="mb-1"><strong>Current Speed:</strong></p>
                        <p className="mb-0">{robotStatus.speed} km/h</p>
                      </div>
                    </Col>
                    <Col xs={6} md={12}>
                      <div className="p-3 bg-light rounded">
                        <p className="mb-1"><strong>Current Task:</strong></p>
                        <p className="mb-0">{robotStatus.currentTask}</p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Header className="bg-primary text-white">
                  <h5 className="mb-0">Speed Control</h5>
                </Card.Header>
                <Card.Body className="p-4">
                  <Form.Group>
                    <Form.Label>Adjust Speed (km/h)</Form.Label>
                    <Form.Range
                      min={0}
                      max={10}
                      value={speed}
                      onChange={handleSpeedChange}
                      className="mb-3"
                    />
                    <div className="p-3 bg-light rounded text-center">
                      <p className="mb-0">Current Setting: {speed} km/h</p>
                    </div>
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col xs={12}>
              <Card className="shadow-sm">
                <Card.Header className="bg-danger text-white">
                  <h5 className="mb-0">Emergency Controls</h5>
                </Card.Header>
                <Card.Body className="p-4">
                  <Row className="g-3">
                    <Col xs={12} md={6}>
                      <div className="d-grid">
                        <Button 
                          variant="danger" 
                          size="lg"
                          onClick={handleEmergencyStop}
                          className="py-3"
                        >
                          Emergency Stop
                        </Button>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div className="d-grid">
                        <Button 
                          variant="warning" 
                          size="lg"
                          className="py-3"
                        >
                          Return to Base
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ControlPanel;
