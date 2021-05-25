const express = require("express");
const app = express();
const port = 3000;
const db = require('./db.js');

//Middleware
app.use(express.json());
app.use


//Connecting to the database
db
.then(()=>{
    //Starting server
    app.listen(port, () => console.log(`Servidor levantado en http://localhost:${port}`));
})
.catch((err)=> console.log(err.message));