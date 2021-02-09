const express = require("express");

const app = express();

const port = process.env.port | 3000;

app.get("/", (req, res) => {
    res.send("Something is being worked on by ladderackroyd...");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});