import React, {Component} from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class CardSection extends Component
{
    render(){
        return(
            <div className="row">
                <CardColumns>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header className="text-center h4">TPM - 19591</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-center">Reduce DAC Build Time</Card.Title>
                            <Card.Text className="text-center text-justify">
                                As an IDL user, I want to reduce the DAC build time in order to make it faster to run.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button variant="primary">Open</Button>
                        </Card.Footer>
                    </Card>
                </CardColumns>
            </div>
        )
    }
}

export default CardSection;