import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {Form,Button,Container} from 'react-bootstrap';

export default function InputData() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        let body = {fname, lname, age}
        let response =  await axios({
            url: "http://localhost:5001/personadd",
            method: "POST",
            data: body,
          });
        
          console.log(response);
    }
    return (
        <Container>
            <br></br>
            <h2 style={{color:"white"}}>DB HA on Multi Cloud</h2>
            <h2></h2>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <Form>
            <Form.Group className="mb-3 FormGroup d-inline-flex align-items-center" controlId="formFirstName">
                <Form.Label style={{width: '200px', color:'white', fontWeight : 'bold'}}>First Name </Form.Label>
                <Form.Control value={fname} onChange={e => setFname(e.currentTarget.value)} className="FormItem" type="firstName" placeholder="First Name" style={{width:'70%'}} />
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3 FormGroup d-inline-flex" controlId="formLastName">
                <Form.Label style={{width: '200px', color:'white', fontWeight : 'bold'}}>Last Name </Form.Label>
                <Form.Control value={lname} onChange={e => setLname(e.currentTarget.value)} type="lastName" placeholder="Last Name" style={{width:'70%'}} />
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3 FormGroup d-inline-flex align-items-center" controlId="formAge">
                <Form.Label style={{width: '200px', color:'white', fontWeight : 'bold'}}>User ID </Form.Label>
                <Form.Control value={age} onChange={e => setAge(e.currentTarget.value)} type="age" placeholder="User ID" style={{width:'70%'}}/>
            </Form.Group>
            <br></br>
            <Button onClick={e => handleSubmit(e)} variant="dark" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}
