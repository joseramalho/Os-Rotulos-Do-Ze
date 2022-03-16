import { useState } from "react";
import { Badge,  Col, Container, FloatingLabel, Form, ListGroup, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import breweries from '../data/breweries.json'
import countries from '../data/countries.json'
import labels from '../data/labels.json'

function Breweries () {
    const [ search, setSearch ] = useState({name: '', countryId: 0}); 
    
    const searchByCountry = (e) => {
        let newSearch = {};
        newSearch.countryId = e.target.value;
        newSearch.name = search.name;
        setSearch(newSearch);
    }
    
    const searchByName = (e) => {
        let newSearch = {};
        newSearch.countryId = search.countryId;
        newSearch.name = e.target.value;
        setSearch(newSearch);
    }

    return (
        <Container >
            <Row>
                <Col>
                    <h1>Cervejeiras</h1>
                </Col>
            </Row>
            <Form>
                <Row className="mt-3">
                    <Col sm={6}>
                        <FloatingLabel
                            label="Procurar por nome"
                            className="mb-3"
                        >
                            <Form.Control id="inputSearch" placeholder="dois corvos" value={search.name} onChange={searchByName} />
                        </FloatingLabel>
                    </Col>
                    <Col sm={4}>
                        <FloatingLabel  label="País">
                            <Form.Select id="floatingSelect" aria-label="Floating label select" value={search.countryId}  onChange={searchByCountry}>
                                <option key="0" value="0">Procurar por país</option>
                                {
                                    countries.map( country => 
                                        <option key={country.id} value={country.id}>{country.name}</option>
                                        )
                                }
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
            </Form>
            <Row className="mt-3" >
                <Col md={6}>
                    <ListGroup className=" mx-0 w-auto">
            {
                breweries
                .filter( b => search.countryId == 0 || b.countryId == search.countryId )
                .filter(b => b.name.toLowerCase().includes(search.name.toLowerCase()))
                .map( brewery =>
                    <LinkContainer key={brewery.id} to={process.env.PUBLIC_URL + "/brewery/"+brewery.id}>
                        <ListGroup.Item
                        className="d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                                <div className="fw-bold">{ brewery.name }</div>
                                { countries.find(c => c.id === brewery.countryId ).name }
                            </div>
                            <Badge bg="primary" pill>
                                { labels.filter(b => b.breweryId === brewery.id).length }
                            </Badge>
                        </ListGroup.Item>
                    </LinkContainer> 
                )
            }
            </ListGroup>
            </Col>
            </Row>
        </Container>
    )
}

export default Breweries;