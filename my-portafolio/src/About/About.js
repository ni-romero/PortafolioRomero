import React from 'react'
import { Button, Row, Col, Nav, Navbar } from 'react-bootstrap'
import SobreMi from '../SobreMi/SobreMi'
import Skills from '../Skills/Skills'
import Contacto from '../Contacto/Contacto'



const About = () => {
  return (
    <>
      <div className="container-fluid img-fondo">
        <Navbar className="navbar-expand-lg navbar-dark navegador scrolling-navbar fixed-top">
          <Navbar.Brand href="#home">Nicole</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
        <Row>

          <Col xs={12} lg={6} xl={6}></Col>
          <Col xs={12} lg={6} xl={6} className="m-auto">
            <h1 className="textoPrincipal p-3 animate__animated animate__backInDown">HI, i'm Nicole Romero developer Fullstack</h1>
            <br></br>
            <br></br>
            <h4 className="text-white presentacion mb-4">I am a motivated person, passionate about new technologies,
             with a great desire to learn, ability to work as a team and super responsible.
            My goal is to enter the IT world and participate in new projects.
            I am currently working on freelance projects.</h4>
            <br></br>
            <br></br>
            <div className="d-flex flex-direction-row">
            <a href="#contact" className="m-3"> <Button size="lg" className="text-center form-control botones m-4" >Contact  me</Button></a>
            <a href="https://github.com/ni-romero" className="m-3"> <Button size="lg" className="text-center botones-trans form-control m-4">Ultimos Trabajos</Button>{' '}</a>
            </div>

          </Col>

        </Row>
      </div>
      <SobreMi />
      <Skills />
      <Contacto />
    </>
  )
}

export default About;