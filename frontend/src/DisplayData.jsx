import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import axios from 'axios';
import { useState } from 'react';

export default function DisplayData() {
    const [data, setData] = useState([]);
    const [databaseInfo, setDatabaseInfo] = useState("");
    const ipToNameMap = {
        "10.168.4.110" : "First Active DB - DECC",
        "10.182.153.175" : "Second Active DB - AWS"
    }
    useEffect(() => {
        async function fetchData() {
            let response =  await axios({
                url: "http://localhost:5001/getpeople",
                method: "GET",
            });
            setData(response);
            setDatabaseInfo(response.data.server_url)
            console.log(response);
        }
        fetchData();
    }, [])

    return (
        <Container>
            <br></br>
            <h2 style={{color:"white"}}>The Data Fetched from DB</h2>
            <h2 style={{color:"white"}}>{ipToNameMap[databaseInfo]} ({databaseInfo})</h2>
\
            <br></br>
            <br></br>
            <Table striped bordered hover size="sm" variant="light">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User ID</th>
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
