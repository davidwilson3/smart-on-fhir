const R = require("ramda");
const { ERROR_MSG } = require("./constants");

const formatCernerData = (raw) => {
    const summaryResource = raw.summary.entry[0].resource;

    const { given, family } = summaryResource.name.filter((entry) => entry.use === "official")[0];
    const name = `${family.join(" ")}, ${given.join(" ")}`;

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
        .map((item, idx) => ({
            key: idx,
            name: item.resource.code.text,
            onsetDateTime: item.resource.onsetDateTime,
        }));

    const sortedConditions = R.sortBy(R.prop("name"), conditions);

    return { name, gender, birthDate, conditions: sortedConditions };
};

const formatSmartHealthData = (raw) => {
    const summary = raw.summary;

    const { given, family } = summary.name.filter((entry) => entry.use === "official")[0];
    const name = `${family.join(" ")}, ${given.join(" ")}`;

    const gender = summary.gender;
    const birthDate = summary.birthDate;

    const conditions = raw.conditions.entry
        .filter(
            (entry) =>
                entry.resource.resourceType === "Condition" &&
                entry.resource.clinicalStatus === "active" &&
                entry.resource.code.text
        )
        .map((item, idx) => ({
            key: idx,
            name: item.resource.code.text,
            onsetDateTime: item.resource.onsetDateTime,
        }));

    const sortedConditions = R.sortBy(R.prop("name"), conditions);

    return { name, gender, birthDate, conditions: sortedConditions };
};

// though the responses are very similar
// there are minor JSON structure differences
// that require slightly different parsing
const formatPatientData = (source, raw) => {
    switch (source.toLowerCase()) {
        case "cerner":
            return formatCernerData(raw);
        case "smarthealth":
            return formatSmartHealthData(raw);
        default:
            return ERROR_MSG;
    }
};

module.exports = { formatPatientData };
