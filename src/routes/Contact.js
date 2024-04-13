import React from "react";
import "../styles/Contact.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {

    return (
        <div id="full-page">
            <Form id="form">
                <h1 id="title">Contact Me</h1>
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="textarea" rows={1} placeholder="Name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>
                <Button variant="primary" type="submit" id="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Contact;