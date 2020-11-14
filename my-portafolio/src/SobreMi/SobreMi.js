import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const SobreMi = () => {
    return (
        <>
            <Container fluid>
                <Row className="p-5">
                    <Col xs={12} md={12} lg={8} xl={7} className="cajaSobremi p-5">
                        <h1 className="text-center textosobremi my-4">About me <spam className="punto">.</spam></h1>
                        <br></br>
                        <h2 className="textoInfo ">I took a Fullstack course at Rolling Code School with a duration of 9 months,
                            they were months of pure learning and a whole new world where there is a long way to go,
                            While I was studying, I followed tutorials on YouTube to reinforce what I had learned.
                            I am currently studying English in Aticana Tucumán and looking for my first IT job!
                            </h2>
                            <br></br>
                        
                            
           

                            <hr className="linea"></hr>

                    </Col>
                    <Col xs={0} md={4} lg={4} xl={5} className="fotoSonbremi">

                    </Col>
                </Row>
            </Container>

        </>
    )

}
export default SobreMi;