import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Members from "./Movies";
import Movies from "./Members";
import NoPage from "./NoPage";
export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">DPU-CI:CD</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/Members">Members</Nav.Link>
              <Nav.Link href="/Movies">Movies</Nav.Link>
            </Nav>
            <div style={{ color: "white" }}>Team #1</div>
          </Container>
        </Navbar>
        <p></p>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Members />} />
                <Route path="members" element={<Members />} />
                <Route path="movies" element={<Movies />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}
