const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'dist')));

// app.get("/", (req, res) => {
//     res.sendFile('dist/UnderDevelopment.html', {root: __dirname});
// });

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});