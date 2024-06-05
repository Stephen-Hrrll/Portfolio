import React from "react";
import "../styles/Contact.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD

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
=======
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
>>>>>>> gh-pages
                </Form.Group>
                <Button variant="primary" type="submit" id="submit">
                    Submit
                </Button>
            </Form>
<<<<<<< HEAD
=======
            <footer>
                <p>This form is powered by <a href="https://formspree.io/" target="_blank" rel="noreferrer">Formspree</a></p>
            </footer>

>>>>>>> gh-pages
        </div>
    );
};

export default Contact;