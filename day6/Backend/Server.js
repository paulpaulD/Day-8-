const express=require('express');
const app=express();

app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    console.log("hi");
    //res.status(500).send("Error message");
   // res.status(500).send({error:"Error Occured"});
    //res.json({express:"Learning express"});
    // res.send("Hello World");

    res.render("index", {text:"world"});
});

const userRoute=require('./routes/user');
app.use('/user',userRoute);

app.listen(3000);

