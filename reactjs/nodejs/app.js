const express = require("express");
const mongoose = require("mongoose");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const db = 'mongodb+srv://Rajeswari:raje1992@cluster1.wm1nl.mongodb.net/loginregister'

//DB Connection
mongoose.connect(db , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB CONNECTED");
}).catch(()=>{
    console.log("UNABLE TO CONNECT DB");
})

//Use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//Import routes
const userRoutes = require("./routes/user")

//Using routes
app.use('/api', userRoutes)

const port = process.env.PORT

//Starting as a server
app.listen(port, () => {
    console.log(`App is running at ${port}`);
})