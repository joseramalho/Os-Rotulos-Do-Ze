import { Container, Nav, Navbar } from 'react-bootstrap';
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
              <Nav.Link href={process.env.PUBLIC_URL + "/breweries"}>Cervejeiras</Nav.Link>
              <Nav.Link href={process.env.PUBLIC_URL + "/countries"}>Países</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
  </>
  );
}

export default App;
