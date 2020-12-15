import React from "react";
import { Card, Button } from "react-bootstrap";

const PatientCard = ({ patient, onClick }) => {
    const { name, id, source } = patient;

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant='top' src='/default-picture.png' />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <div className={"card-line card-top-line"}>{`Patient ${id}`}</div>
                    <div className={"card-line card-bottom-line"}>{`Date source: ${source}`}</div>
                </Card.Text>
                <Button variant='primary' onClick={onClick}>
                    View
                </Button>
            </Card.Body>
        </Card>
    );
};

export default PatientCard;
