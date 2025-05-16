import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Project Lead',
      description: 'Oversees the entire robot delivery system development.'
    },
    {
      name: 'Jane Smith',
      role: 'Robotics Engineer',
      description: 'Responsible for robot hardware and navigation systems.'
    },
    {
      name: 'Mike Johnson',
      role: 'Software Developer',
      description: 'Develops the web interface and backend systems.'
    }
  ];

  const futureUpgrades = [
    'Enhanced navigation system with AI-powered obstacle avoidance',
    'Extended battery life for longer operation hours',
    'Multiple package compartments for efficient delivery routes',
    'Integration with smart home systems for automated delivery acceptance'
  ];

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>About Our Robot Delivery System</h2>
          <p className="lead">
            Our autonomous delivery robot represents the cutting edge of last-mile delivery technology,
            combining advanced robotics with user-friendly interfaces to revolutionize package delivery.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3>Technical Specifications</h3>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h5>Robot Specifications</h5>
                  <ul>
                    <li>Maximum Speed: 10 km/h</li>
                    <li>Battery Life: 8 hours</li>
                    <li>Payload Capacity: 20 kg</li>
                    <li>Navigation: GPS + Computer Vision</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h5>Safety Features</h5>
                  <ul>
                    <li>360° obstacle detection</li>
                    <li>Emergency stop system</li>
                    <li>Remote monitoring</li>
                    <li>Secure package compartment</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3>Our Team</h3>
          <Row>
            {teamMembers.map((member, index) => (
              <Col md={4} key={index}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                    <Card.Text>{member.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Future Upgrades</h3>
          <Card>
            <Card.Body>
              <ul>
                {futureUpgrades.map((upgrade, index) => (
                  <li key={index}>{upgrade}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
