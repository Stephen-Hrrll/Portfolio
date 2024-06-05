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
                    <h1 id="about-title">About Me</h1>
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
                    <Image src="portfolio/images/profile_pic.png" fluid className="frosted-image"/>
                </Col>
            </Row>
            <Row className="my-3">
                <Col className="social-icon" id="github">
                    <a href="https://github.com/Stephen-Hrrll" target="_blank"  rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </Col>
                <Col className="social-icon" id="linkedin">
                    <a href="https://www.linkedin.com/in/stephen-harrell-0b1b3b1b4/" target="_blank"   rel="noreferrer">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </Col>
            </Row>
            <Row className="my-3" id="bio">
                <div className="bio-container">
                    <h3>Bio:</h3>
                    <p>I recently graduated college from University of Maryland at College Park with a B.S. in 
                        computer science. I am aspiring to be a software/web developer, and have hands-on experience 
                        with various personal projects, including: </p> 
                        <ul>
                            <li>Android Development: Using Java and Kotlin. </li>
                            <li>Desktop Applications: Utilizing Python Qt6. </li>
                            <li>Web Apps: Implemented with React and Flask (this portfolio was built using React). </li>
                        </ul>
                    
                        <p>Before discovering programming, I served in the military as a vehicle mechanic, and worked as an
                        industrial mechanic following that. Although I am relatively new to programming, my background has 
                        helped me to develop a technical mindset in troubleshooting faults, which directly translates to 
                        debugging and problem solving in software development.  I am currently trying to blaze a path for 
                        myself as a freelance software/web developer, and continously looking for a full-time position on 
                        the east coast in the U.S or Ireland.  </p>

                </div>
            </Row>
        </Container>
    );
};

export default About;