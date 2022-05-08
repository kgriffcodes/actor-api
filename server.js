const express = require("express");
const app = express();
const cors = require("cors");
const apiData = require("./actorList.json");
const PORT = 8000;

app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
    // switch requested name to lower case
    const stageName = req.params.name.toLowerCase();
    // stageName.replace(/\./g, "");
    // console.log("updated stage name:", stageName);
    // remove any per
    if (apiData[stageName]) {
        res.json(apiData[stageName]);
    } else {
        res.json(apiData["unknown"]);
    }
    res.json(apiData);
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
