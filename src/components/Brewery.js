import { ListGroupItem } from "react-bootstrap";
import Labels from "./Labels";

function Brewery({id, name, country}) {
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
  
  export default Brewery;
  