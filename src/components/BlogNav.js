import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BlogNav() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container fluid>
        <img src='https://media.geeksforgeeks.org/gfg-gg-logo.svg' loading='lazy' height={30}></img>
        <Navbar.Brand href="#" style={{color: 'green', marginLeft: 10}}>GeeksforGeeks</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Javascript</Nav.Link>
            <Nav.Link href="#action2">Data Structure</Nav.Link>
            <Nav.Link href="#action3">Algorithm</Nav.Link>
            <Nav.Link href="#action4">Computer Network</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BlogNav;