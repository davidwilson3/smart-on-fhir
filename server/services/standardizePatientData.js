const R = require("ramda");

const formatCernerData = (raw) => {
    const summaryResource = raw.summary.entry[0].resource;

    const name = summaryResource.name.filter((entry) => entry.use === "official")[0].text;

    const gender = summaryResource.gender;
    const birthDate = summaryResource.birthDate;

    // in the sample data set there are duplicate conditions
    // we are not filtering them out because I am assuming the doctors control active conditions
    // per docs here: http://fhir.cerner.com/millennium/dstu2/general-clinical/condition/
    //    -> can be "clinicalStatus": "resolved" or "clinicalStatus": "active",
    const conditions = raw.conditions.entry
        .filter(
            (entry) =>
                entry.resource.resourceType === "Condition" &&
                entry.resource.clinicalStatus === "active" &&
                entry.resource.code.text
        )
        .map((item) => ({ name: item.resource.code.text, onsetDateTime: item.resource.onsetDateTime }));

    const sortedConditions = R.sortBy(R.prop("name"), conditions);

    return { name, gender, birthDate, sortedConditions };

    //const conditions = Object.keys(raw.conditions).map(())
};

const standardizePatientData = (source, raw) => {
    switch (source.toLowerCase()) {
        case "cerner":
            return formatCernerData(raw);
        case "r3":
            return () => null;
        default:
            return ERROR_MSG;
    }
};

module.exports = { standardizePatientData };
