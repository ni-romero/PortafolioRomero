import React, {Component, useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { useForm } from 'react-hook-form'
// import { init } from 'emailjs-com';
init("user_VOkIPiyJWwBXHOfJP1kTB");

class Contacto extends Component  {

   name = React.createRef();
   email = React.createRef();
   asunto = React.createRef();

   state = {
     name = '',
     email = '' ,
     asunto = ''

   }
   comprobarCambios = () => {
     var name = this.name.current.value;
     var email = this.email.current.value;
     var asunto = this.asunto.current.value;
     this.setState({

      name : name ,
      email : email,
      asunto : asunto
     });
   };
   constructor() {
    super() ; 
    this.enviarEmail = this.enviarEmail.bind(this);
  }
    async(e) {
      e.preventDefault();
      const { name, email, asunto} = this.state;
      const form = await axios.post("/api/form", {
        name,
        email,
        asunto
      });
    } 
   render(){
   return (
    <>

      <Container fluid className="conteinerskills p-5">
        <h1 className="text-center tituloContacto text-white my-4"> Contact me <spam className="punto">.</spam></h1>
        <Row className="p-5 contacto">
          <Col xs={12} lg={6} xl={6} className="p-4">
            <a href="tel:+ 03875643808"> <h1 className="redescontac text-white my-5"> <i class="fas fa-lg fa-phone-alt iconos"></i> 3875643808</h1> </a>
            <h1 className="redescontac text-white my-5"> <i class="fas fa-lg fa-map-marker-alt iconos"></i> Tucumán|Argentina</h1>
            <a href="mailto:luz.nicole.maria@gmail.com"><h1 className="redescontac text-white my-5"> <i class="far fa-lg fa-envelope iconos"></i> luz.nicole.maria@gmail.com</h1></a>
            <a href="https://www.linkedin.com/in/nicole-romero-2218361a2/"><h1 className="redescontac text-white my-5"> <i class="fab fa-lg fa-linkedin-in iconos"></i> Nicole-romero</h1></a>


          </Col>
          <Col xs={12} lg={6} xl={6} className="p-5">
            <Form  onSubmit={this.enviarEmail}>
              <Form.Group controlId="formBasicName">
                <Form.Control type="name"
                  placeholder="Enter name"
                  className="form-basic"
                  onChange={this.comprobarCambios}
                  ref={this.name}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email"
                  placeholder="Enter Email"
                  className="form-basic"
                  onChange={this.comprobarCambios}
                  ref={this.email}
                />
                <span className="text-danger text-small d-block mb-2">
                  {errors.email && errors.email.message}
                </span>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1 ">
                <Form.Label className="text-white" >Affair</Form.Label>
                <Form.Control 
                className="form-basic-area"
                 as="textarea"
                  rows={3}
                  name="asunto"
                  onChange={this.comprobarCambios}
                  ref={this.asunto}
                   />
              </Form.Group>

              <Button type="submit" className="form-control botones">
                Send
  </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

}

export default Contacto;