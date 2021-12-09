import express from "express";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from 'mongoose'
import bodyParser from 'body-parser'
import  LoginClass from "./routes/login.routes";
import UserClass from "./routes/user.routes";


const app = express();

dotenv.config()

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
    
    res.json({
        message: "APP is running fine"
    })
})

app.use('/', new LoginClass().router)
app.use('/', new UserClass().router)

//const db = 'mongodb+srv://Rajeswari:raje1992@cluster0.cf3cw.mongodb.net/Data'
//const db = 'mongodb+srv://Rajeswari:raje1992@cluster0.vznru.mongodb.net/login'
const db = 'mongodb+srv://Rajeswari:raje1992@cluster1.wm1nl.mongodb.net/loginregister'

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, }as ConnectOptions).then(() => {
    console.log("Successfully connected to the database !!");
    
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
    }).catch((err: any) => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
    });


