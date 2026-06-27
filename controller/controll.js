const Notes = require("../model/db");


async function  getNotes(req,res,next) {
    try{

const sort = req.query.sort;
let note;

if(sort==="new"){
    note = await Notes.find().sort({createdAt:-1});
}

else if (sort==="old"){
    note = await Notes.find().sort({ createdAt: 1 });
}

else if (sort==="az"){
    note = await Notes.find().sort({ title: 1 });
}


else if (sort==="za"){
    note = await Notes.find().sort({ title: -1 });
}

else {
note = await Notes.find();
}
res.json(note)
    }
    catch(err){
        next(err)
    }
    
}









async function  getNotesId(req,res,next) {
    try{
const note = await Notes.findById(req.params.id)

if(!note){
    return res.json({message:"Notes not here"})
}

res.json(note);
    }
    catch(err){
        next(err);
    }
    
}








async function  createNotes(req,res,next) {
    try{

const {title,content} = req.body;

if(!title || !content){
   return res.json({message:"required db things "})
}

const note = await Notes.create({
    title ,
    content
})
res.json(note)
    }
    catch(err){
        next(err)
    }
    
}


async function  deleteNotes(req,res,next) {
    try{

const note = await Notes.findByIdAndDelete(req.params.id)

if(!note){
    return res.json({message:"Notes never was  "})
}

 res.json(note)
    }
    catch(err){
        next(err)
    }

   
    
}



module.exports = {
    getNotes,
    getNotesId,
    createNotes,
    deleteNotes
}