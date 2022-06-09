import React from 'react'
import {Form,Button,Container} from 'react-bootstrap';

export default function InputData() {
    return (
        <Container>
            <br></br>
            <h2>Borathon Demo</h2>
            <h2></h2>
        <Form>
            <Form.Group className="mb-3 FormGroup d-inline-flex align-items-center" controlId="formFirstName">
                <Form.Label style={{width: '200px'}}>First Name </Form.Label>
                <Form.Control className="FormItem" type="firstName" placeholder="First Name" style={{width:'70%'}} />
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3 FormGroup d-inline-flex" controlId="formLastName">
                <Form.Label style={{width: '200px'}}>Last Name </Form.Label>
                <Form.Control type="lastName" placeholder="Last Name" style={{width:'70%'}} />
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3 FormGroup d-inline-flex align-items-center" controlId="formAge">
                <Form.Label style={{width: '200px'}}>Age </Form.Label>
                <Form.Control type="age" placeholder="Age" style={{width:'70%'}}/>
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}
