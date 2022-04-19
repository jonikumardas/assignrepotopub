
import 'bootstrap/dist/css/bootstrap.min.css';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'


const Manu = () => {
  const [user] = useAuthState(Auth);
  const handleSignOut = () =>{
    signOut(Auth);
}
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top"  variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/home"> <span className='text-info'>Jhon</span> Photo<span className='text-info'>graphy</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav
     className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/service">Service</Nav.Link>
      <Nav.Link as={Link} to="/chackout">Chack Out</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

    </Nav>
    <Nav>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              {
                user ?
                  <button className='bg-none' onClick={handleSignOut}>Sign out</button>
                  :
                  <Nav.Link eventKey={2}as={Link} to="/login">Log In </Nav.Link>
              }
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      
    </div>
 );
};

export default Manu;