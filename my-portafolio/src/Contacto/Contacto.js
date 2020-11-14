import react from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contacto = () => {
    return(
        <>
        
        <Container fluid className="conteinerskills p-5">
        <h1 className="text-center tituloContacto text-white my-4"> Contact me <spam className="punto">.</spam></h1>
            <Row className="p-5 contacto">
                <Col xs={12} lg={6} xl={6} className="p-4">
                <h1 className="redescontac text-white my-5"> <i class="fas fa-lg fa-phone-alt iconos"></i> 3875643808</h1>
                <h1 className="redescontac text-white my-5"> <i class="fas fa-lg fa-map-marker-alt iconos"></i> Tucumán|Argentina</h1>     
                <h1 className="redescontac text-white my-5"> <i class="far fa-lg fa-envelope iconos"></i> luz.nicole.maria@gmail.com</h1>
                <h1 className="redescontac text-white my-5"> <i class="fab fa-lg fa-linkedin-in iconos"></i> Nicole-romero</h1> 
                

                </Col>
                <Col xs={12} lg={6} xl={6} className="p-5">
                <Form>
  <Form.Group controlId="formBasicName">
    <Form.Control type="name" placeholder="Enter name" className="form-basic" /> 
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter Email"className="form-basic"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1 ">
    <Form.Label className="text-white" >Affair</Form.Label>
    <Form.Control className="form-basic-area" as="textarea" rows={3} />
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
export default Contacto;