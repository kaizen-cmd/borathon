import React from 'react'
import { Container, Table } from 'react-bootstrap'

export default function DBStatus() {
    return (
        <Container>
            <br></br>
            <h2>DBStatus</h2>
            <br></br>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Cluster</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Master Cluster - DECC</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Slave Cluster - AWS</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}
