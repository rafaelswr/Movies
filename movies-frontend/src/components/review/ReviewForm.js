import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const ReviewForm = ({handleSubmit, revText, labelText,defaultValue}) => {
    return (
        <Form className="FormContainer">
    
            <Form.Group className="mb-3" controlId="formBasicTextArea">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control ref={revText} as="textarea" rows={3}  defaultValue={defaultValue}></Form.Control>
            </Form.Group>

            <div className="button">
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Send <span><FontAwesomeIcon icon={faPaperPlane} style={{paddingLeft:10}}/></span>
                </Button>
                
            </div>
           

        </Form>
    )

}

export default ReviewForm; 