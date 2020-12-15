const axios = require("axios");

const ERROR_MSG = "ERR_PATIENT_DATA";

const getCernerPatient = async (patientId) => {
    const baseUrl = `https://fhir-open.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d`;
    const headers = { Accept: "application/json+fhir" };
    const summary = await axios
        .get(`${baseUrl}/Patient?_id=${patientId}`, { headers: headers })
        .then((response) => response.data)
        .catch(() => ERROR_MSG);

    const conditions = await axios
        .get(`${baseUrl}/Condition?patient=${patientId}`, { headers: headers })
        .then((response) => response.data)
        .catch(() => ERROR_MSG);

    if (summary === ERROR_MSG || conditions === ERROR_MSG) return ERROR_MSG;

    return { summary, conditions };
};
//https://r2.smarthealthit.org/Patient/smart-1482713
//https://r2.smarthealthit.org/Condition?patient=smart-1482713

const getPatientData = async (source, patientId) => {
    switch (source.toLowerCase()) {
        case "cerner":
            return getCernerPatient(patientId);
        case "smarthealth":
            return () => null;

        default:
            return ERROR_MSG;
    }
};

module.exports = { getPatientData, ERROR_MSG };
