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
          {/* Reemplazar Nav.Link con enlaces <a> */}
          <a className="nav-link" href="#top">About me</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#hire-me">Hire me</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
