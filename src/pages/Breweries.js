import { Badge, Col, Container, ListGroup, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import breweries from '../data/breweries.json'
import countries from '../data/countries.json'
import labels from '../data/labels.json'

function Breweries () {
    return (
        <Container >
            <Row>
                <Col md={3}>
                    <ListGroup className=" mx-0 w-auto">
            {
                breweries.map( brewery =>
                    <LinkContainer to={process.env.PUBLIC_URL + "/brewery/"+brewery.id}><ListGroup.Item
                    className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{ brewery.name }</div>
                            { countries.find(c => c.id === brewery.countryId ).name }
                        </div>
                        <Badge bg="primary" pill>
                            { labels.filter(b => b.breweryId === brewery.id).length }
                        </Badge>
                    </ListGroup.Item></LinkContainer> 
                )
            }
            </ListGroup>
            </Col>
            </Row>
        </Container>
    )
}

export default Breweries;