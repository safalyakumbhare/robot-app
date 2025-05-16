import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';

function OrderManagement() {
  const [orderForm, setOrderForm] = useState({
    name: '',
    address: '',
    phone: '',
    items: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement order submission to backend
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <h2 className="text-center mb-4">Place New Order</h2>
          {submitted && (
            <Alert variant="success" className="text-center">
              Order submitted successfully! We'll send you tracking details shortly.
            </Alert>
          )}
          <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={orderForm.name}
                onChange={handleChange}
                required
                className="form-control-lg"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Delivery Address</Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                value={orderForm.address}
                onChange={handleChange}
                required
                rows={3}
                className="form-control-lg"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={orderForm.phone}
                onChange={handleChange}
                required
                className="form-control-lg"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Items Description</Form.Label>
              <Form.Control
                as="textarea"
                name="items"
                value={orderForm.items}
                onChange={handleChange}
                placeholder="Please list the items you want to send"
                required
                rows={4}
                className="form-control-lg"
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" size="lg">
                Submit Order
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderManagement;
