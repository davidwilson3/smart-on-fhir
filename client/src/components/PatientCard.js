import React from "react";
import { Card, Button } from "react-bootstrap";

// Cards that show very basic patient summary information
const PatientCard = ({ patient, onClick }) => {
    const { name, id, source } = patient;

    return (
        <Card className={"card"} border='primary'>
            <Card.Header className={"card-title"} aria-label={"patient name"}>
                {name}
            </Card.Header>

            <Card.Body className='card-body' aria-label={"patient id, data source"}>
                <div>{`ID: ${id}`}</div>
                <div className={"card-source"}>{`Source: ${source}`}</div>
            </Card.Body>
            <Card.Footer>
                <Button
                    variant='primary'
                    onClick={onClick}
                    style={{ width: "80%" }}
                    aria-label={"view patient details, button"}
                >
                    View
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default PatientCard;
