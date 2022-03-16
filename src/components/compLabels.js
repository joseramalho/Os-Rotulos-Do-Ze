import { Card, Col, Row } from 'react-bootstrap';
import labels from '../data/labels.json'

function Labels({breweryId}) {
    var labelsToDisplay = labels.filter( l => l.breweryId == breweryId)
    return (
        <Row xs={1} md={4} className="mt-4 g-4">
            {
                labelsToDisplay.map( label =>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/labels/'+ label.id +'.jpg' } />
                        <Card.Body>
                            <Card.Title>{ label.name }</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
    );
  }
  
  export default Labels;
  