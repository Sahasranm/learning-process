const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./Models/Employee')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/crud')
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(3001, () => {
            console.log("Server is running on port 3001");
        });
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

app.post('/register',(req,res)=>
{

    console.log("hi=ello")
    EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err =>res.status(500).json(err))

});