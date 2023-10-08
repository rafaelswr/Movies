import React from "react"
import "./Contact.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
        <section className="body">
            <div className="title"> 
                <h1 style={{color:"black"}}>Contact us</h1> 
            </div>
        
            <Form className="FormContainer">
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTextArea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3}  placeholder="Enter your message"></Form.Control>
                </Form.Group>

                <div className="button">
                    <Button variant="primary" type="submit">
                        Send <span><FontAwesomeIcon icon={faPaperPlane} style={{paddingLeft:10}}/></span>
                    </Button>
                    
                </div>
               

            </Form>
        </section>
    )
};

export default Contact; 

