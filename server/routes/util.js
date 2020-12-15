const url = require("url");

const parameters = (req) => url.parse(req.url, true).query;

const sendStandardError = (res, message = "An error occurred") => res.status(404).send({ message });

const sendDataResults = (res, results) => res.json(results);

module.exports = { parameters, sendStandardError, sendDataResults };
