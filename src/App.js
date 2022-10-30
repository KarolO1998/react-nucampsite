import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import NucampLogo from "./app/assets/img/logo.png";
import "./App.css";
import CampsitesList from "./features/campsites/CampsitesList.js";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={NucampLogo} alt="nucamp logo" />
          </NavbarBrand>
        </Container>
      </Navbar>
      <CampsitesList />
    </div>
  );
}

export default App;
