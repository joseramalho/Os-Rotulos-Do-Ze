import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {  Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Breweries  from './pages/Breweries';
import Brewery  from './pages/Brewery';
import Countries from './pages/Countries';

function App() {
  return (
      <Routes>
          <Route path={ "/" + process.env.PUBLIC_URL} element={<Layout />}>
            <Route index element={<Breweries />} />
            <Route path="breweries" element={<Breweries />} />
            <Route path="brewery/:breweryId" element={<Brewery />} />
            <Route path="countries" element={<Countries />} />
          </Route>
      </Routes>
  );
}
function Layout() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href={process.env.PUBLIC_URL}>
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/favicon.png"}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Os Rótulos do Zé
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to={process.env.PUBLIC_URL + "/breweries"}><Nav.Link>Cervejeiras</Nav.Link></LinkContainer>
              <LinkContainer to={process.env.PUBLIC_URL + "/countries"}><Nav.Link>Países</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col as="main" className="pt-5" >
            <Outlet />
          </Col>
        </Row>
      </Container>
  </>
  );
}

export default App;
