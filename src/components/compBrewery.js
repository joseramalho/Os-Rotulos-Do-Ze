import { ListGroupItem } from "react-bootstrap";
import Labels from "./compLabels";

function CompBrewery({id, name, country}) {
    return (
      <ListGroupItem>
          <div className="ms-2 me-auto">
              <div className="fw-bold">{ name }</div>
              {country}
          </div>
          <div>
              <Labels breweryId={id} />
          </div>
      </ListGroupItem>
    );
  }
  
  export default CompBrewery;
  