import React from "react";
import PatientCard from "./PatientCard";

const PatientSelector = ({ patients, onSelectPatient }) => {
    return (
        <>
            <div className='selector-header'>Select Patient</div>
            <div className='flex-container'>
                {patients.map((p) => (
                    <PatientCard patient={p} onClick={() => onSelectPatient(p)} />
                ))}
            </div>
        </>
    );
};

export default PatientSelector;
