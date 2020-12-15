const response = {
    summary: {
        resourceType: "Patient",
        id: "smart-1482713",
        meta: {
            versionId: "1",
            lastUpdated: "2019-05-26T02:28:51.476-04:00",
            tag: [
                {
                    system: "https://smarthealthit.org/tags",
                    code: "smart-8-2017",
                },
            ],
        },
        text: {
            status: "generated",
            div: '<div xmlns="http://www.w3.org/1999/xhtml"> <p>Susan Clark</p> </div>',
        },
        identifier: [
            {
                use: "usual",
                type: {
                    coding: [
                        {
                            system: "http://hl7.org/fhir/v2/0203",
                            code: "MR",
                            display: "Medical record number",
                        },
                    ],
                    text: "Medical record number",
                },
                system: "http://hospital.smarthealthit.org",
                value: "1482713",
            },
        ],
        active: true,
        name: [
            {
                use: "official",
                family: ["Clark"],
                given: ["Susan", "A."],
            },
        ],
        telecom: [
            {
                system: "phone",
                value: "800-576-9327",
                use: "home",
            },
            {
                system: "email",
                value: "susan.clark@example.com",
            },
        ],
        gender: "female",
        birthDate: "2000-12-27",
        address: [
            {
                use: "home",
                line: ["52 Highland St"],
                city: "Tulsa",
                state: "OK",
                postalCode: "74116",
                country: "USA",
            },
        ],
    },
    conditions: {
        resourceType: "Bundle",
        id: "533c0c5c-7115-4961-8d30-d9864fd0e5a4",
        meta: {
            lastUpdated: "2020-12-15T12:01:30.831-05:00",
        },
        type: "searchset",
        total: 10,
        link: [
            {
                relation: "self",
                url: "https://r2.smarthealthit.org/Condition?patient=smart-1482713",
            },
        ],
        entry: [
            {
                fullUrl: "https://r2.smarthealthit.org/Condition/smart-Condition-314",
                resource: {
                    resourceType: "Condition",
                    id: "smart-Condition-314",
                    meta: {
                        versionId: "1",
                        lastUpdated: "2018-05-07T13:39:19.223-04:00",
                        tag: [
                            {
                                system: "https://smarthealthit.org/tags",
                                code: "smart-8-2017",
                            },
                        ],
                    },
                    text: {
                        status: "generated",
                        div: '<div xmlns="http://www.w3.org/1999/xhtml">Acute upper respiratory infection</div>',
                    },
                    patient: {
                        reference: "Patient/smart-1482713",
                    },
                    code: {
                        coding: [
                            {
                                system: "http://snomed.info/sct",
                                code: "54150009",
                                display: "Acute upper respiratory infection",
                            },
                        ],
                        text: "Acute upper respiratory infection",
                    },
                    clinicalStatus: "active",
                    verificationStatus: "confirmed",
                    onsetDateTime: "2004-01-31",
                },
                search: {
                    mode: "match",
                },
            },
            {
                fullUrl: "https://r2.smarthealthit.org/Condition/smart-Condition-320",
                resource: {
                    resourceType: "Condition",
                    id: "smart-Condition-320",
                    meta: {
                        versionId: "1",
                        lastUpdated: "2018-05-07T13:36:15.908-04:00",
                        tag: [
                            {
                                system: "https://smarthealthit.org/tags",
                                code: "smart-8-2017",
                            },
                        ],
                    },
                    text: {
                        status: "generated",
                        div: '<div xmlns="http://www.w3.org/1999/xhtml">Disruptive behavior disorder</div>',
                    },
                    patient: {
                        reference: "Patient/smart-1482713",
                    },
                    code: {
                        coding: [
                            {
                                system: "http://snomed.info/sct",
                                code: "277843001",
                                display: "Disruptive behavior disorder",
                            },
                        ],
                        text: "Disruptive behavior disorder",
                    },
                    clinicalStatus: "active",
                    verificationStatus: "confirmed",
                    onsetDateTime: "2008-12-31",
                },
                search: {
                    mode: "match",
                },
            },
            {
                fullUrl: "https://r2.smarthealthit.org/Condition/smart-Condition-322",
                resource: {
                    resourceType: "Condition",
                    id: "smart-Condition-322",
                    meta: {
                        versionId: "1",
                        lastUpdated: "2018-05-07T13:31:59.311-04:00",
                        tag: [
                            {
                                system: "https://smarthealthit.org/tags",
                                code: "smart-8-2017",
                            },
                        ],
                    },
                    text: {
                        status: "generated",
                        div: '<div xmlns="http://www.w3.org/1999/xhtml">Disturbance in speech</div>',
                    },
                    patient: {
                        reference: "Patient/smart-1482713",
                    },
                    code: {
                        coding: [
                            {
                                system: "http://snomed.info/sct",
                                code: "20301004",
                                display: "Disturbance in speech",
                            },
                        ],
                        text: "Disturbance in speech",
                    },
                    clinicalStatus: "active",
                    verificationStatus: "confirmed",
                    onsetDateTime: "2009-04-01",
                },
                search: {
                    mode: "match",
                },
            },
            {
                fullUrl: "https://r2.smarthealthit.org/Condition/smart-Condition-318",
                resource: {
                    resourceType: "Condition",
                    id: "smart-Condition-318",
                    meta: {
                        versionId: "1",
                        lastUpdated: "2018-05-07T13:29:43.483-04:00",
                        tag: [
                            {
                                system: "https://smarthealthit.org/tags",
                                code: "smart-8-2017",
                            },
                        ],
                    },
                    text: {
                        status: "generated",
                        div:
                            '<div xmlns="http://www.w3.org/1999/xhtml">Contact dermatitis and other eczema, unspecified cause</div>',
                    },
                    patient: {
                        reference: "Patient/smart-1482713",
                    },
                    code: {
                        coding: [
                            {
                                system: "http://snomed.info/sct",
                                code: "43116000",
                                display: "Contact dermatitis and other eczema, unspecified cause",
                            },
                        ],
                        text: "Contact dermatitis and other eczema, unspecified cause",
                    },
                    clinicalStatus: "active",
                    verificationStatus: "confirmed",
                    onsetDateTime: "2005-09-25",
                },
                search: {
                    mode: "match",
                },
            },
            {
                fullUrl: "https://r2.smarthealthit.org/Condition/smart-Condition-313",
                resource: {
                    resourceType: "Condition",
                    id: "smart-Condition-313",
                    meta: {
                        versionId: "1",
                        lastUpdated: "2018-05-07T13:27:57.812-04:00",
                        tag: [
                            {
                                system: "https://smarthealthit.org/tags",
                                code: "smart-8-2017",
                            },
                        ],
                    },
                    text: {
                        status: "generated",
                        div: '<div xmlns="http://www.w3.org/1999/xhtml">Eruption</div>',
                    },
                    patient: {
                        reference: "Patient/smart-1482713",
                    },
                    code: {
                        coding: [
                            {
                                system: "http://snomed.info/sct",
                                code: "271807003",
                                display: "Eruption",
                            },
                        ],
                        text: "Eruption",
                    },
                    clinicalStatus: "active",
                    verificationStatus: "confirmed",
                    onsetDateTime: "2003-12-11",
                },
                search: {
                    mode: "match",
                },
            },
            {
                fullUrl: "https://r2.smarthealthit.org/Condition/smart-Condition-317",
                resource: {
                    resourceType: "Condition",
                    id: "smart-Condition-317",
                    meta: {
                        versionId: "1",
                        lastUpdated: "2018-05-07T13:27:27.301-04:00",
                        tag: [
                            {
                                system: "https://smarthealthit.org/tags",
                                code: "smart-8-2017",
                            },
                        ],
                    },
                    text: {
                        status: "generated",
                        div:
                            '<div xmlns="http://www.w3.org/1999/xhtml">Other diseases of nasal cavity and sinuses</div>',
                    },
                    patient: {
                        reference: "Patient/smart-1482713",
                    },
                    code: {
                        coding: [
                            {
                                system: "http://snomed.info/sct",
                                code: "68235000",
                                display: "Other diseases of nasal cavity and sinuses",
                            },
                        ],
                        text: "Other diseases of nasal cavity and sinuses",
                    },
                    clinicalStatus: "active",
                    verificationStatus: "confirmed",
                    onsetDateTime: "2005-06-25",
                },
                search: {
                    mode: "match",
                },
            },
            {
                fullUrl: "https://r2.smarthealthit.org/Condition/smart-Condition-316",
                resource: {
                    resourceType: "Condition",
                    id: "smart-Condition-316",
                    meta: {
                        versionId: "1",
                        lastUpdated: "2018-05-07T13:22:56.237-04:00",
                        tag: [
                            {
                                system: "https://smarthealthit.org/tags",
                                code: "smart-8-2017",
                            },
                        ],
                    },
                    text: {
                        status: "generated",
                        div:
                            '<div xmlns="http://www.w3.org/1999/xhtml">Insect bite, nonvenomous, of other, multiple, and unspecified sites, without mention of infection</div>',
                    },
                    patient: {
                        reference: "Patient/smart-1482713",
                    },
                    code: {
                        coding: [
                            {
                                system: "http://snomed.info/sct",
                                code: "429305003",
                                display:
                                    "Insect bite, nonvenomous, of other, multiple, and unspecified sites, without mention of infection",
                            },
                        ],
                        text:
                            "Insect bite, nonvenomous, of other, multiple, and unspecified sites, without mention of infection",
                    },
                    clinicalStatus: "active",
                    verificationStatus: "confirmed",
                    onsetDateTime: "2005-06-25",
                },
                search: {
                    mode: "match",
                },
            },
            {
                fullUrl: "https://r2.smarthealthit.org/Condition/smart-Condition-321",
                resource: {
                    resourceType: "Condition",
                    id: "smart-Condition-321",
                    meta: {
                        versionId: "1",
                        lastUpdated: "2018-05-07T13:22:13.871-04:00",
                        tag: [
                            {
                                system: "https://smarthealthit.org/tags",
                                code: "smart-8-2017",
                            },
                        ],
                    },
                    text: {
                        status: "generated",
                        div:
                            '<div xmlns="http://www.w3.org/1999/xhtml">Other specified pervasive developmental disorders, current or active state</div>',
                    },
                    patient: {
                        reference: "Patient/smart-1482713",
                    },
                    code: {
                        coding: [
                            {
                                system: "http://snomed.info/sct",
                                code: "23560001",
                                display: "Other specified pervasive developmental disorders, current or active state",
                            },
                        ],
                        text: "Other specified pervasive developmental disorders, current or active state",
                    },
                    clinicalStatus: "active",
                    verificationStatus: "confirmed",
                    onsetDateTime: "2009-02-04",
                },
                search: {
                    mode: "match",
                },
            },
            {
                fullUrl: "https://r2.smarthealthit.org/Condition/smart-Condition-315",
                resource: {
                    resourceType: "Condition",
                    id: "smart-Condition-315",
                    meta: {
                        versionId: "1",
                        lastUpdated: "2018-05-07T13:17:36.572-04:00",
                        tag: [
                            {
                                system: "https://smarthealthit.org/tags",
                                code: "smart-8-2017",
                            },
                        ],
                    },
                    text: {
                        status: "generated",
                        div: '<div xmlns="http://www.w3.org/1999/xhtml">Otitis media</div>',
                    },
                    patient: {
                        reference: "Patient/smart-1482713",
                    },
                    code: {
                        coding: [
                            {
                                system: "http://snomed.info/sct",
                                code: "65363002",
                                display: "Otitis media",
                            },
                        ],
                        text: "Otitis media",
                    },
                    clinicalStatus: "active",
                    verificationStatus: "confirmed",
                    onsetDateTime: "2004-01-31",
                },
                search: {
                    mode: "match",
                },
            },
            {
                fullUrl: "https://r2.smarthealthit.org/Condition/smart-Condition-319",
                resource: {
                    resourceType: "Condition",
                    id: "smart-Condition-319",
                    meta: {
                        versionId: "1",
                        lastUpdated: "2018-05-07T13:09:21.870-04:00",
                        tag: [
                            {
                                system: "https://smarthealthit.org/tags",
                                code: "smart-8-2017",
                            },
                        ],
                    },
                    text: {
                        status: "generated",
                        div: '<div xmlns="http://www.w3.org/1999/xhtml">Poliomyelitis vaccination</div>',
                    },
                    patient: {
                        reference: "Patient/smart-1482713",
                    },
                    code: {
                        coding: [
                            {
                                system: "http://snomed.info/sct",
                                code: "170539009",
                                display: "Poliomyelitis vaccination",
                            },
                        ],
                        text: "Poliomyelitis vaccination",
                    },
                    clinicalStatus: "active",
                    verificationStatus: "confirmed",
                    onsetDateTime: "2006-09-03",
                },
                search: {
                    mode: "match",
                },
            },
        ],
    },
};

module.exports = { response };