import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Form,
  Row,
  Col,
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>          
          <Navbar bg="success" variant="light">
            <Navbar.Brand className="last" href="#home">MyFirstApp</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about-us">About us</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
          </Navbar>
          

          
            <center><h1 className="title" >Sign up now to Join </h1></center>
          <Form>
            <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Username" />
            </Form.Group>
              

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className='mb-3' controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

            

            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Address" />
            </Form.Group>

            
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Country</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Algeria</option>
                  <option>Italia</option>
                  <option>France</option>
                  <option>Spain</option>
                  <option>USA</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Algiers</option>
                  <option>Roma</option>
                  <option>Paris</option>
                  <option>Bracelona</option>                  
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Post code</Form.Label>
                <Form.Control placeholder="Post code" />                
              </Form.Group>
            </Row>

           
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
          <div className="my-5 pt-5 text-muted text-center text-small">
    <p className="mb-1">&copy; 2023 Copyrights reserved to Zahida</p>
    <ul className="list-inline">
      <li className="list-inline-item"><a href="#">Privacy</a></li>
      <li className="list-inline-item"><a href="#">Terms</a></li>
      <li className="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </div>
        </Container>
      </header>
    </div>
    
  );
}


export default App;
