import { Col, Container, Row } from "react-bootstrap";
import Labels from "./compLabels";

function CompBrewery({id, name, country}) {
    return (
      <Container>
          <Row>
              <Col><h1>{ name }</h1></Col>
              {country}
          </Row>
          <div>
              <Labels breweryId={id} />
          </div>
      </Container>
    );
  }
  
  export default CompBrewery;
  