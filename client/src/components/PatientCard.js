import React from "react";
import { Card, Button } from "react-bootstrap";

const PatientCard = ({ patient, onClick }) => {
    const { name, id, source } = patient;

    return (
        <Card className={"card"} border='primary'>
            <Card.Header className={"card-title"}>{name}</Card.Header>

            <Card.Body className='card-body'>
                <div>{`ID: ${id}`}</div>
                <div className={"card-source"}>{`Source: ${source}`}</div>
            </Card.Body>
            <Card.Footer>
                <Button variant='primary' onClick={onClick} style={{ width: "80%" }}>
                    View
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default PatientCard;
