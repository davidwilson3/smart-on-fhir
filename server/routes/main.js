const router = require("express").Router();
const { parameters, sendStandardError, sendDataResults } = require("./util");
const { getPatientData, ERROR_MSG } = require("../services/getPatientData");
const { standardizePatientData } = require("../services/standardizePatientData");
const { getPatientList } = require("../services/getPatientList");

router.get("/patientList", (req, res) => {
    const data = getPatientList();
    sendDataResults(res, data);
});

router.get("/patient", async (req, res) => {
    const { source, patientId } = parameters(req);

    if (!source) sendStandardError(res, "No source provided");
    if (!patientId) sendStandardError(res, "No patient ID provided");

    const raw = await getPatientData(source, patientId);
    if (raw === ERROR_MSG) sendStandardError(res, "Error retrieving external patient information");
    const data = standardizePatientData(source, raw);

    sendDataResults(res, data);
});

module.exports = router;
