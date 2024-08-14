const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
const allowedOrigins = ["http://localhost:5173" , "https://sample-deploy-orpin.vercel.app"]
//cors config
const corsOption = {
    origin:(origin , callback)=>{
        if(!origin || allowedOrigins.includes(origin)){
            callback(null ,true);
        }
        else{
            console.log("blocked by cors: " , origin);
            callback(new Error("not allowed by cors"));
        }
    },
    credentials:true,
    // optionsSuccessStatus: 200 
}
app.use(cors(corsOption));
//routes
const simpleRoutes = require("./routes/simple.routes");
app.use("/api/v1/user" , simpleRoutes);

module.exports = app;
