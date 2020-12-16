const axios = require("axios");
const { ERROR_MSG } = require("./constants");

// get Cerner Patient demographic and conditions information
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

// get Smart Health IT demographic and conditions information
const getSmartHealthPatient = async (patientId) => {
    const baseUrl = "https://r2.smarthealthit.org";
    const headers = { Accept: "application/json" };

    const summary = await axios
        .get(`${baseUrl}/Patient/${patientId}`, { headers: headers })
        .then((response) => response.data)
        .catch(() => ERROR_MSG);

    const conditions = await axios
        .get(`${baseUrl}/Condition?patient=${patientId}`, { headers: headers })
        .then((response) => response.data)
        .catch(() => ERROR_MSG);

    if (summary === ERROR_MSG || conditions === ERROR_MSG) return ERROR_MSG;

    return { summary, conditions };
};

// get patient information from all sources and place in standard object structure
const getPatientData = async (source, patientId) => {
    switch (source.toLowerCase()) {
        case "cerner":
            return getCernerPatient(patientId);
        case "smarthealth":
            return getSmartHealthPatient(patientId);
        default:
            return ERROR_MSG;
    }
};

module.exports = { getPatientData, ERROR_MSG };
