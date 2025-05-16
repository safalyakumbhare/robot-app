import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Tracking() {
  const [trackingId, setTrackingId] = useState('');
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement tracking ID verification
    setShowMap(true);
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <h2 className="text-center mb-4">Track Your Delivery</h2>
          
          <Card className="mb-4 shadow-sm">
            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Enter Tracking ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="Enter your tracking ID"
                    required
                    className="form-control-lg"
                  />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Track Order
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          {showMap && (
            <Card className="shadow-sm">
              <Card.Body className="p-4">
                <h3 className="mb-3 text-center">Delivery Status: In Transit</h3>
                <div className="mb-4">
                  <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
                    >
                      <Marker position={center} />
                    </GoogleMap>
                  </LoadScript>
                </div>
                <div className="mt-4">
                  <Row>
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                      <div className="p-3 bg-light rounded">
                        <p className="mb-1"><strong>Estimated Delivery:</strong></p>
                        <p className="mb-0">25 minutes</p>
                      </div>
                    </Col>
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                      <div className="p-3 bg-light rounded">
                        <p className="mb-1"><strong>Current Location:</strong></p>
                        <p className="mb-0">Main Street, Downtown</p>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div className="p-3 bg-light rounded">
                        <p className="mb-1"><strong>Delivery OTP:</strong></p>
                        <p className="mb-0">1234</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Tracking;
