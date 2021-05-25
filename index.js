const express = require("express");
// const db = require("./db.js");
const app = express();
const port = 3000;

//Middleware
app.use(express.json());

app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));


