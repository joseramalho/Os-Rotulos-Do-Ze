import { ListGroup } from 'react-bootstrap';
import breweries from '../data/breweries.json'
import countries from '../data/countries.json'

import Brewery from './Brewery';

function Breweries() {
    return (
        <ListGroup>
            {
                breweries.map( brewery =>
                    <Brewery {... brewery} country={countries.find(c => c.id === brewery.countryId).name}></Brewery>
                )
            }
        </ListGroup>
    );
  }
  
  export default Breweries;
  