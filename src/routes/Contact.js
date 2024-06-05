import React from "react";
import "../styles/Contact.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ValidationError, useForm } from '@formspree/react';



const Contact = () => {
    const [state, handleSubmit] = useForm("mnqeorrj");
    if (state.succeeded) {
        return <h1 id="thanks">Thanks for contacting me, I will be in touch with you as soon as possible.</h1>;
    }
    return (
        <div id="fill-page">
            <Form id="form" onSubmit={handleSubmit} method="POST" >
                <h1 id="contact-title">Contact Me</h1>
                <Form.Group >
                    <Form.Label className="labels">Name</Form.Label>
                    <Form.Control className="input-area" type="textarea" rows={1} placeholder="Name" />
                </Form.Group> 
                <Form.Group >
                    <Form.Label htmlFor="email" className="labels">Email address</Form.Label>
                    <Form.Control className="input-area" type="email" placeholder="name@example.com" name="email"/>
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="labels">Message</Form.Label>
                    <Form.Control className="input-area"  as="textarea" rows={4} name="message"/>
                </Form.Group>
                <Button variant="primary" type="submit" id="submit">
                    Submit
                </Button>
            </Form>
            <footer>
                <p>This form is powered by <a href="https://formspree.io/" target="_blank" rel="noreferrer">Formspree</a></p>
            </footer>

        </div>
    );
};

export default Contact;