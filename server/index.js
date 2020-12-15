const routes = require("./routes/main"); // api routes would go here
const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();

app.use("/api", routes);

const server = http.createServer(app);

const port = process.env.PORT || 5001;

server.listen(port, () => console.log(`server is running on port ${port}`));
