//initialization
const express=require('express');
const app =express();

const mongoose=require('mongoose');
const Note=require('./models/Node')

const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//true->Nested objects(correct)
//false -> Nested objects are not correct
mongoose.connect('mongodb+srv://teerath:Teerath2001%40@cluster0.uegpopy.mongodb.net/?retryWrites=true&w=majority').then(function(){
    app.get("/",function(req,res){
        const response={message: "Api works"};
        res.json(response);
    })
    const noteRouter=require("./routes/notes");
    app.use("/notes",noteRouter);
});

// home route(/)


//Starting the server on a PORT
const port= process.env.port || 5000;
app.listen(port,function(){
    console.log("Server started at PORT : "+ port);
});