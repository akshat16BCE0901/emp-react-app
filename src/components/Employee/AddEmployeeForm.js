import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

class AddEmployeeForm extends Component
{
    render(){
        return(
            <>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="text-center">Add Employee</h2>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Name
                                </Form.Label>
                                <Col sm="10">
                                    <Row>
                                        <Col>
                                            <Form.Control id="firstName" type="text" placeholder="First Name"></Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control id="lastName" type="text" placeholder="Last Name"></Form.Control>
                                        </Col>
                                    </Row>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Address
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="address" as="textarea" placeholder="Address" ></Form.Control>
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Address
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="address" as="textarea" placeholder="Address" ></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Email
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="email" type="email" placeholder="Email"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Date of birth
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="date_of_birth" type="date"></Form.Control>
                                </Col>
                            </Form.Group>
                            
                            
                        </Form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </>
        )
    }
}

export default AddEmployeeForm;