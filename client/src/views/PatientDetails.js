import { Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ConditionsTable from "../components/ConditionsTable";
import LoadingBubble from "../components/LoadingBubble";

const PatientDetails = ({ patient, onBack }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const { id, source } = patient;

    useEffect(() => {
        axios(`api/patient?source=${source}&patientId=${id}`)
            .then((res) => setData(res.data))
            .catch(() => setData(null))
            .finally(() => setLoading(false));
    }, [id, source]);

    const lineLabel = (label, value) => (
        <div style={{ width: "100%", marginBottom: "4px" }}>
            <b>{label}</b>: {value}
        </div>
    );

    if (loading) return <LoadingBubble text={" [ getting patient details ] "} />;

    return (
        <>
            <Button
                variant='secondary'
                size='lg'
                active
                onClick={onBack}
                className={"back-button"}
                aria-label={"go back, button"}
            >
                Back
            </Button>
            <div className={"flex-container"}>
                <Card>
                    <Card.Header aria-label={"header, patient details"}>
                        <b>Patient Details</b>
                    </Card.Header>
                    <Card.Body class={"card-body"} aria-label={"card, demographics"}>
                        {lineLabel("Name", data["name"])}
                        {lineLabel("DOB", data["birthDate"])}
                        {lineLabel("Gender", data["gender"])}
                    </Card.Body>
                </Card>
                <div style={{ width: "100%" }}>
                    <div style={{ fontWeight: "bold", marginBottom: "14px" }} aria-label={"table header"}>
                        Patient Conditions
                    </div>
                </div>
                <div style={{ maxWidth: "70%" }}>
                    <ConditionsTable data={data["conditions"]} />
                </div>
            </div>
        </>
    );
};

export default PatientDetails;
