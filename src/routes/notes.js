const express=require("express");
const router=express.Router();

const Note=require("../models/Node")
//Notes route

router.post("/list",async function(req,res){
    const notes=await Note.find({userid: req.body.userid});
    res.json(notes);
});
router.post("/add",async function(req,res){
    await Note.deleteOne({id: req.body.id});

    var newnote=new Note(
        {
            id: req.body.id,
            userid: req.body.userid,
            title: req.body.title,
            content: req.body.content


        }
    );
    await newnote.save();
    const response={message: "New node created: " + `id: ${req.body.id}`};
    res.json(response);
});
router.post("/delete",async function(req,res){
    await Note.deleteOne({id: req.body.id});

    const response={message: "Note Deleted" + `id: ${req.body.id}`};
    res.json(response);

})

module.exports=router;