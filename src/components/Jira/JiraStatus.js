import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

class JiraStatus extends Component
{
    render(){
        return(
            <>
                <h2 className="text-center">Status</h2>
                <Row>
                    <Col md={12}>
                        <Table size="sm" responsive hover striped bordered>
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-success">DONE</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td className="text-info">IN PLAY</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td className="text-primary">ON HOLD</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td className="text-danger">CANCELLED</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        )
    }
}

export default JiraStatus;