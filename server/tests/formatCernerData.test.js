const { formatPatientData } = require("../services/formatPatientData");
const cernerInput = require("./mockData/sampleCernerRaw").response;
const cernerOutput = require("./mockData/sampleCernerFormatted").results;
const { ERROR_MSG } = require("../services/constants");

test("Verify formatPatientData.js correctly formats Cerner patient data", () => {
    const outputData = formatPatientData("cerner", cernerInput);
    expect(outputData).toMatchObject({
        name: cernerOutput["name"],
        gender: cernerOutput["gender"],
        birthDate: cernerOutput["birthDate"],
    });
    expect(outputData.conditions.length).toBe(cernerOutput.conditions.length);
    expect(formatPatientData("Does Not Exist", cernerInput)).toBe(ERROR_MSG);
});
