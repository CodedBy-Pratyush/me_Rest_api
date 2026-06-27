const express = require("express");

const router = express.Router();

const {  getNotes,
    getNotesId,
    createNotes,
    deleteNotes   }= require("../controller/controll")





    router.route("/")
    .get(getNotes)
    .post(createNotes);


    router.route("/:id")
    .get(getNotesId)
    .delete(deleteNotes);



    module.exports=router;