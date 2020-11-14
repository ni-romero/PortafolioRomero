import react from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';


const Skills = () => {
    return (
        <>
        
            <Container fluid className="my-5">
            <h1 className="text-center my-4 skills"> Skills <spam className="punto">.</spam></h1>
                <Row className="p-5">
                    <Col  sm={12} lg={6} xl={4}>
                        <h2 className="text-center">Html</h2>
                        <ProgressBar animated now={75} className="skills1" />
                    </Col>
                    <Col sm={12} lg={6} xl={4}>
                        <h2 className="text-center">Css</h2>
                        <ProgressBar animated now={70} className="skills1" />
                    </Col>
                    <Col sm={12} lg={6} xl={4}>
                        <h2 className="text-center">Javascript</h2>
                        <ProgressBar animated now={35} className="skills1" />
                    </Col>
                </Row>
                </Container>

             <Container fluid className="my-5">
                 <Row className="p-5">
                    <Col sm={12} lg={6} xl={4}>
                        <h2 className="text-center">React</h2>
                        <ProgressBar animated now={65} variant="warning" />
                    </Col>
                    <Col sm={12} lg={6} xl={4}>
                        <h2 className="text-center">Node.js</h2>
                        <ProgressBar animated now={35} variant="primary" />
                    </Col>
                    <Col sm={12} lg={6} xl={4}>
                        <h2 className="text-center">Github</h2>
                        <ProgressBar animated now={70} variant="secondary" />
                    </Col>
                    </Row>
             </Container>
             <Container fluid className="my-5">
                 <Row className="p-5">
                    <Col sm={12} lg={6} xl={4}>
                        <h2 className="text-center">Bootstrap</h2>
                        <ProgressBar animated now={70} variant="info" />
                    </Col>
                    <Col sm={12} lg={6} xl={4}>
                        <h2 className="text-center">Ad. Photoshop</h2>
                        <ProgressBar animated now={55} variant="danger" />
                    </Col>
                    <Col sm={12} lg={6} xl={4}>
                        <h2 className="text-center">Ad. Ilustrator</h2>
                        <ProgressBar animated now={40} variant="warning" />
                    </Col>
                    </Row>
             </Container>


        </>

    )
}
export default Skills;