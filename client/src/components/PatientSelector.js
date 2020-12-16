import React from "react";
import PatientCard from "./PatientCard";

// a grid of patient cards that allow selection of a given patient
const PatientSelector = ({ patients, onSelectPatient }) => {
    return (
        <>
            <div className='selector-header' aria-label={"page header, select patient"}>
                Select Patient
            </div>
            <div className='flex-container'>
                {patients.map((p) => (
                    <PatientCard patient={p} onClick={() => onSelectPatient(p)} />
                ))}
            </div>
        </>
    );
};

export default PatientSelector;
