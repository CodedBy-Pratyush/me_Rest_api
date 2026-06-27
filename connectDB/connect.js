const mongoose = require("mongoose");



async function connection() {

try{
    await mongoose.connect(process.env.MONGO_L);

    console.log("database connected Bro chill !! ")

}
catch(err){
    console.error(err.message);
        process.exit(1);
    
}

    
}
module.exports=connection;