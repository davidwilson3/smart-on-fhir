const router = require("express").Router();
const { parameters, sendStandardError, sendDataResults } = require("./util");
const { getPatientData } = require("../services/getPatientData");
const { formatPatientData } = require("../services/formatPatientData");
const { getPatientList } = require("../services/getPatientList");
const { ERROR_MSG } = require("../services/constants");

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

    const data = formatPatientData(source, raw);
    if (raw === ERROR_MSG) sendStandardError(res, "Error formatting patient data");

    sendDataResults(res, data);
});

module.exports = router;
