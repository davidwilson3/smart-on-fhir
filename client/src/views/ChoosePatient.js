import React, { useEffect, useState } from "react";
import axios from "axios";
import PatientDetails from "./PatientDetails";
import PatientSelector from "../components/PatientSelector";

// the home page for this particular project
// where a user selects a patient to get more information
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

    // this is a very rudimentary finite state machine method of rendering
    // useful in very linear navigated applications as you avoid conflicting states
    const display = {
        loading: <div aria-label={"message, loading"}>Loading...</div>,
        error: (
            <div className='error' aria-label={"error message, error loading"}>
                An error occurred getting patient information, please refresh and try again
            </div>
        ),
        grid: <PatientSelector patients={patients} onSelectPatient={handleSelectPatient} />,
        details: <PatientDetails patient={selectedPatient} onBack={handleResetHome} />,
    };

    return <div className={"container-main"}>{display[mode]}</div>;
};

export default ChoosePatient;
