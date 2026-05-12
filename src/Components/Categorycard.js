import Card from 'react-bootstrap/Card';

function Categorycard() {
  return (
    <Card className="bg-dark text-white" style={{width:'250px',height:'250px'}}>
      <Card.Img src="/v1.jpg" alt="Card image" height={'300px'}/>
      <Card.ImgOverlay style={{background:"rgba(0,0,0,0)" ,display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Card.Title style={{fontSize:"35px"}}>Card title</Card.Title>
        
      </Card.ImgOverlay>
    </Card>
  );
}

export default Categorycard;