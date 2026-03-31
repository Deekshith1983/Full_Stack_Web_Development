const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//For cross Function Access
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
})
const routerRoot=require("./routes/routerroot");
const UserRoute=require("./routes/UserRoute"); // Importing the UserRoute to register its routes with the app
app.use("/",routerRoot);
app.use("/user",UserRoute); // Using the UserRoute for user-related endpoints

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});