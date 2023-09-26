const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/User",{
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Server is connected successfully")
})
.catch((e) =>{
    console.log("Unable to connect to database" , e)
})