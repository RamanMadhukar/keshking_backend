const express = require("express");
const env = require("dotenv");
const app = express();
const cors = require("cors");
require("./db/conn")


const path = require("path");

//Routes

const authRoutes = require("./routes/auth");


//Environment Variables
env.config();

// MiddleWares
app.use(cors())
app.use(express.json())
app.use('/api', authRoutes);




const port = process.env.PORT|| 8000
app.listen(port, (req, res) => {
    console.log(`server is running on 8000`);
})