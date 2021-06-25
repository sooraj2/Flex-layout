import React from 'react';

import { Col, Row, Card, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default function Cards() {
    return (
        <div>
            
            <Container className="mt-5" >
        {/* <Row>
          <Col>
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

          </Col>
        </Row> */}


        <Row className="my-3 ">
          <Col md={4}>
            
          <Card >
              <Card.Header as="h5">new Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
                </Card>
          </Col>
          
          <Col md={4} >
            <Card >
              <Card.Header as="h5">new Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
                </Card>
            </Col>
          
          <Col md={4}>
          <Card >
              <Card.Header as="h5">new Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
                </Card>
          
          </Col>

          <Col md={4}>
          <Card >
              <Card.Header as="h5">new Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
                </Card>
          
          </Col>
          <Col md={4} >
          <Card >
              <Card.Header as="h5">new Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
                </Card>
          
          </Col>
          <Col md={4} >
          <Card >
              <Card.Header as="h5">new Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
                </Card>
          
          </Col>
        </Row>
      </Container>


        </div>
    )
}
