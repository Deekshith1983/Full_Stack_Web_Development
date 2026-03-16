const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Hello World!");
    res.statusCode=200;
});


app.get("/user",(req,res)=>{
    res.sendFile(__dirname + '/index.js');
});


app.post("/Contact",(req,res)=>{
    console.log(req.body);
    res.send("Your Data is Delivered")
});




app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});