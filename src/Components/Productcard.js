import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productcard({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         price:${product.price}
        </Card.Text>
        <Card.Text>
         category:{product.category}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Productcard;