const R = require("ramda");

// in a real, production application this would be coming from 
// a database or another, secure data source
const cerner = [
    { id: "12724070", name: "Frederick Smart", source: "Cerner" },
    { id: "12742399", name: "Sandy Smart", source: "Cerner" },
    { id: "12724071", name: "Valerie Smart", source: "Cerner" },
];

const smartHealth = [
    { id: "smart-1482713", name: "Susan Clark", source: "SmartHealth" },
    { id: "f25f1296-3764-4e61-a1e1-32d0ed9aab85", name: "Roger Hintz", source: "SmartHealth" },
    { id: "d55999ce-dea1-46da-a390-c8aca549508d", name: "Hallie Reinger", source: "SmartHealth" },
];

const getPatientList = () => R.sortBy(R.prop("name"), [...cerner, ...smartHealth]);

module.exports = { getPatientList };
