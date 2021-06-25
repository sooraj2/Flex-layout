import React from 'react'
import { Container,Row, Col,Form, Button } from 'react-bootstrap'


export default function Buttonflex() {
    return (
        <div>
            <Container>
                    <div className="text-center my-3">
                        <h1>Repeat Todo</h1>

                    </div>

                <Row >

                    <Col md={8}>
                        <Form.Control type="text" placeholder="type your note" />        
                     </Col>
                    <Col md={4} className="d-flex flex-fill  ">
                        <Button variant="primary">
                            Add
                        </Button>
                    </Col>

                </Row>

                
                <Row >

                    <div className="text-center mt-3">
                        <h5>1. Butter</h5>
                     </div> 

                     <div className="d-flex justify-content-center ">
                     <Button variant="success mx-2 ">
                            Complete
                        </Button>
                        <Button variant="warning">
                            Delete
                        </Button>

                     </div>



                </Row>


            </Container>

        </div>
    )
}
