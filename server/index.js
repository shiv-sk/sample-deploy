const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({path:"./.env"});
const connection = require("./connection/DB.connection");


connection()
.then(()=>{
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log(`server is listening on port ${process.env.PORT}`);
    })
})
.catch(()=>{
    console.log("the server is not running succesfully: " , error);
    process.exit(1);
})
