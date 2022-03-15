import { Badge, Col, Container, ListGroup, Row } from 'react-bootstrap';
import breweries from '../data/breweries.json'
import countries from '../data/countries.json'

function Countries () {
    return (
        <Container >
            <Row>
                <Col md={3}>
                    <ListGroup className=" mx-0 w-auto">
            {
                countries.map( country =>
                    <ListGroup.Item
                    className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{ country.name }</div>
                        </div>
                        <Badge bg="primary" pill>
                            { breweries.filter(b => b.countryId === country.id).length }
                        </Badge>
                    </ListGroup.Item>
                )
            }
            </ListGroup>
            </Col>
            </Row>
        </Container>
    )
}

export default Countries;