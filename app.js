const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'styles')));

app.get("/", (req, res) => {
    res.sendFile('UnderDevelopment.html', {root: __dirname});
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});