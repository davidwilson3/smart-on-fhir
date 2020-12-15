import React, { useEffect, useState } from "react";
import axios from "axios";
import PatientDetails from "./PatientDetails";

const ChoosePatient = () => {
    const [mode, setMode] = useState("loading"); // loading | patients | error
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

    useEffect(() => {
        axios("api/patientList")
            .then((res) => {
                setPatients(res.data);
                setMode("grid");
            })
            .catch(() => setMode("error"));
    }, []);

    const handleSelectPatient = (patient) => {
        setSelectedPatient(patient);
        setMode("details");
    };

    const handleResetHome = () => {
        setSelectedPatient(null);
        setMode("grid");
    };

    const display = {
        loading: <div>Loading...</div>,
        error: <div>An error occurred, please refresh and try again</div>,
        grid: patients.map((p) => <PatientCard patient={p} onClick={handleSelectPatient} />),
        details: <PatientDetails patient={selectedPatient} onBack={handleResetHome} />,
    };

    return <div>{display[mode]}</div>;
};

export default ChoosePatient;
