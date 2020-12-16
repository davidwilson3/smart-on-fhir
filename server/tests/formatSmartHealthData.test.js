const { formatPatientData } = require("../services/formatPatientData");
const smartHealthInput = require("./mockData/sampleSmartHealthRaw").response;
const smartHealthOutput = require("./mockData/sampleSmartHealthFormatted").results;
const { ERROR_MSG } = require("../services/constants");

test("Verify formatPatientData.js correctly SmartHealth patient data", () => {
    const outputData = formatPatientData("SmartHealth", smartHealthInput);
    expect(outputData).toMatchObject({
        name: smartHealthOutput["name"],
        gender: smartHealthOutput["gender"],
        birthDate: smartHealthOutput["birthDate"],
    });
    expect(outputData.conditions.length).toBe(smartHealthOutput.conditions.length);
    expect(formatPatientData("Does Not Exist", smartHealthInput)).toBe(ERROR_MSG);
});
