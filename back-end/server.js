//requiring packages
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const cors = require('cors');





//express app
const app = express();



//////middleware///

//body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());


//for static files(css/html)*might not be needed because we have react...
app.use(express.static(__dirname + "/public"));

//log all requests 
app.use((req, res, next)=>{
    console.log(req.path , req.method );
    next();
})

//handling workout requests 
app.use("/api/workouts" ,workoutRoutes);




//DB (MONGODB , mongoose)

mongoose.connect(process.env.MONGO_URI)
//when connection complete .then method runs
.then(()=>{
    //listen route   
    app.listen(process.env.PORT, ()=>{
        console.log("Connected to DB and listening on port " + process.env.PORT );
        })
})
//catches any error in the conection
.catch((err)=>{console.log(err);});











 


