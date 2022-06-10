import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import axios from 'axios';
import { useState } from 'react';

export default function DisplayData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let response =  await axios({
                url: "http://localhost:5001/getpeople",
                method: "GET",
            });
            setData(response);
            console.log(response);
        }
        fetchData();
    }, [])

    return (
        <Container>
            <br></br>
            <h2>The Data fom Database</h2>
            <br></br>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                {Object.keys(data).length != 0 && data.data.person.map(person => {
                    return (<tr>
                        <td>{person.fname}</td>
                        <td>{person.lname}</td>
                        <td>{person.age}</td>
                    </tr>)
                }) }
                </tbody>
            </Table>
        </Container>
    )
}
