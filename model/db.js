const mongoose = require("mongoose");


const NotesSchema = new mongoose.Schema (
     {
title : {
type:String,
required: true
}, 
content: {
    type: String
},

} ,


 {timestamps: true }

)



module.exports= mongoose.model("Notes" , NotesSchema);