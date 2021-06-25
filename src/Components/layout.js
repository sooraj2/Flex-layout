import React from "react";

import { Container,Row, Col,Form, Button, ListGroup } from 'react-bootstrap'

import Buttonflex from './Buttonflex';

export default function Layout() {
  return (
    <div>
    <Container className="my-5">
      <Row>
        
        <Col md={3} className="mx-2">
          <ListGroup>
            <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col >

            <Buttonflex/>

            
        </Col>

        
      </Row>

</Container>

    </div>
  );
}
