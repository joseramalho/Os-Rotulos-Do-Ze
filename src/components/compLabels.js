import { Card, CardGroup } from 'react-bootstrap';
import labels from '../data/labels.json'

function Labels({breweryId}) {
    var labelsToDisplay = labels.filter( l => l.breweryId == breweryId)
    return (
        <CardGroup>
            {
                labelsToDisplay.map( label =>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/labels/pt/'+ label.id +'.jpg' } />
                </Card>
            )}
        </CardGroup>
    );
  }
  
  export default Labels;
  