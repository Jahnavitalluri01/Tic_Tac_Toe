import { Container, Navbar,Nav,Stack, NavbarBrand,Card, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
  // const srcc="https://media.istockphoto.com/id/1065329058/photo/premium-mens-watch-on-hand-close-up.jpg?s=612x612&w=0&k=20&c=VdpUac8ObrDZZ0I8OCD_vOxPqyOUCa3cM8zoqXsPkuE="
  const arr=[1,2,3,4,4,5,6,7,8];
    return (
      <div>
        <Navbar  >
        <Container fluid style={{backgroundColor:"#5cdb95"}}>
        <NavbarBrand style={{marginLeft:"10%"}}>Home</NavbarBrand>
        <Nav style={{marginRight:"10%"}}>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link >Home</Nav.Link></Nav>
        </Container>
        </Navbar>
       <Container>
          <Row className='mx-auto '>
            {arr.map((i)=>(
            <Col className='mt-4'>
          <Card style={{width:"18rem",padding:"0"}} >
            <Card.Img variant='top' style={{alignContent:"center"}} src="https://media.istockphoto.com/id/1065329058/photo/premium-mens-watch-on-hand-close-up.jpg?s=612x612&w=0&k=20&c=VdpUac8ObrDZZ0I8OCD_vOxPqyOUCa3cM8zoqXsPkuE="></Card.Img>
            <Card.Body>
              <Card.Title>  Watch </Card.Title>
              <Card.Text>This is the text that can be written</Card.Text>
              <Button variant="primary">Click</Button>
            </Card.Body>
          </Card>
          </Col>
              ))} 
          </Row>
          </Container>
      
      </div>
    );
  }
  
  export default Header;