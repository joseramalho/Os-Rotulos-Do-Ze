import { useParams } from "react-router-dom";
import breweries from '../data/breweries.json'
import countries from '../data/countries.json'
import CompBrewery from '../components/compBrewery';

function Brewery() {
    let { breweryId } = useParams();

    let brewery = breweries.find( b => b.id == breweryId );

    return (
        <CompBrewery {... brewery} country={countries.find(c => c.id === brewery.countryId).name}></CompBrewery>
    );
}

export default Brewery;