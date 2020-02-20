import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AddJiraForm extends Component
{
    render(){
        return(
            <>                
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="text-center">Add Jira</h2>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Title
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="title" type="text" placeholder="Title"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Description
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="description" as="textarea" placeholder="Description" ></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Priority
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="priority" as="select" >
                                        <option value="High">High</option>
                                        <option selected value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Story Points
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="story_points" type="number" min="0" max="10" ></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Project
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="project_id" as="select" >
                                        <option value="1">1 - DAC Refinement</option>
                                        <option selected value="2">2 - DAM Refinement</option>
                                        <option value="3">3 - CES Refinement</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Sprint
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="sprint" as="select" >
                                        <option value="52.1">52.1</option>
                                        <option value="52.2">52.2</option>
                                        <option value="53.1">53.1</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Assignee
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="assignee" plaintext readOnly defaultValue="Praful Martis" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Assigned To
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="assigned_to" as="select" >
                                        <option value="1">Amruthkala Bhat</option>
                                        <option selected value="2">Akshat Singhal</option>
                                        <option value="3">Amit Valse</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Date Created
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="date_created" plaintext readOnly defaultValue="2020-02-21" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Status
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control id="status" plaintext readOnly defaultValue="Ready For Review" />
                                </Col>
                            </Form.Group>

                        </Form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </>
        )
    }
}

export default AddJiraForm;