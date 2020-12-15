import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [mode, setMode] = useState("loading"); // loading | patients | error
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        axios("api/patientList")
            .then((res) => {
                setPatients(res.data);
                setMode("patients");
            })
            .catch(() => setMode("error"));
    }, []);

    const patientGrid = patients.map((p) => <PatientCard patient={p} />);

    const display = {
        loading: <div>Loading...</div>,
        error: <div>An error occurred, please refresh and try again</div>,
        patients: <div>{patientGrid}</div>,
    };

    return <div>{display[mode]}</div>;
};

export default Home;
