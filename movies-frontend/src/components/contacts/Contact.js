import React, { useEffect } from "react"
import "./Contact.css"
import api from "../../api/axiosConfig";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";


const Contact = ({contacts, setContacts}) => {

    const [valid, setValid] = useState(false);

    const emailRef = useRef(), bodyRef = useRef();

    const addContact = async (e)=>{
        e.preventDefault(); 
 
        const refEmail = emailRef.current; 
        const refBody = bodyRef.current; 

        try{
            
            const response = await api.post("/api/v1/contact",{email:refEmail.value,bodyContact:refBody.value});
            
            if(response.status === 200 || response.status === 201){
                console.log("POST request bem-sucedido");
                setValid(true);
                setContacts([...contacts,{email:refEmail.value, bodyContact:refBody.value}]);
            }else{
                console.log("POST request Erro");
                setValid(false);
            }
               
                    
        }catch(error){
            console.error(error);
        }
    }

    useEffect(()=>{
        setValid(false);
    },[]);

  return (
        <section className="body">
            <div className="title"> 
                <h1 style={{color:"black"}}>Contact us</h1> 
            </div>
        
            <Form className="FormContainer">
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTextArea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control ref={bodyRef} as="textarea" rows={3}  placeholder="Enter your message"></Form.Control>
                </Form.Group>

                { valid ? <p>Enviado com sucesso!</p>:null}

                <div className="button">
                    <Button variant="primary" type="submit" onClick={addContact}>
                        Send <span><FontAwesomeIcon icon={faPaperPlane} style={{paddingLeft:10}}/></span>
                    </Button>
                    
                </div>
               

            </Form>
        </section>
    )
};

export default Contact; 

