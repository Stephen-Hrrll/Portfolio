import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "../styles/About.css";

const About = () => {

    return ( 
        <Container fluid>
            <Row className="my-3">
                <Col>
                    <h1 id="title">About Me</h1>
                </Col>
            </Row>
            <Row className="my-3 align-items-center">
                <Col xs={12} md={6} className="my-name text-center">
                    <div className="name-container">
                        <h2>Stephen</h2>
                        <h2>Harrell</h2>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <Image src="https://avatars.githubusercontent.com/u/89717600?v=4" fluid />
                </Col>
            </Row>
            <Row className="my-3">
                <Col className="social-icon">
                    <a href="https://github.com/Stephen-Hrrll" target="_blank" >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </Col>
                <Col className="social-icon">
                    <a href="https://www.linkedin.com/in/stephen-harrell-0b1b3b1b4/" target="_blank"  >
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </Col>
            </Row>
            <Row className="my-3" id="bio">
                <div className="bio-container">
                    <h3>Bio:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi at libero fugiat ipsa quaerat quam enim aliquam deleniti voluptatibus placeat repellat obcaecati eos repudiandae, nam reprehenderit sit maxime animi!</p>

                </div>
            </Row>
        </Container>
    );
};

export default About;