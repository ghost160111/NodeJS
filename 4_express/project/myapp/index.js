const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Express.js");
});

app.listen(PORT, () => {
    console.log(`Exampple app listening on port ${PORT}`);
});