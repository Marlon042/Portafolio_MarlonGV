import { Navbar, Nav, Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Image
          src="next.svg"
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="Brand logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Header">Home</Nav.Link>
          <Nav.Link href="#ProjectCarousel">Projects</Nav.Link>
          <Nav.Link href="#Footer">Hire me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
