const express = require('express');
const dotenv = require('dotenv');


//Environment variable set-up
dotenv.config();

//Express server set-up
const app = express();

//Middleware set-up
//CORS set-up

//Body-parser set-up

//Routes set-up 

//Server response on Successful connection.
app.get("/", (req, res) => {
    res.send("Server is running successfully.");
});

//Error handling Server response connection.
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

//Server port set-up
const port = process.env.PORT;    
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

module.exports = app;
