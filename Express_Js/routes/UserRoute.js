const router=require("../routes/routerroot");
const mongoose=require("mongoose");
const dbconnect= require("../DBconnect/DBConnect");
const User=require("../Schema/userSchema");

router.get("/",(req,res)=>{
    res.send("This is the Noraml Landing Page ");
});

router.get("/user", async (req,res)=>{
    try{
     await dbconnect;
     const users= await User.find();
     res.json(users);
    }
    catch(err){
        mongoose.connection.close();
        res.status(500).send("Error connecting to the database");
    }finally{
        mongoose.connection.close();
    }
});

router.post("/user", async (req,res)=>{
    try{
    await dbconnect;
    const userschema=require("../Schema/userSchema");
    const newuser=new userschema(req.body);
    await newuser.save();
    res.json(newuser);
    }catch(err){
        mongoose.connection.close();
        res.status(500).send("Error connecting to the database");
    }finally{
    mongoose.connection.close();
}
});

router.put("/user/:name", async (req,res)=>{
    try{
    await dbconnect;
    const userschema=require("../Schema/userSchema");
    const updateduser= await userschema.findOneAndUpdate({ name: req.params.name }, req.body, { new: true });
    res.json(updateduser);
    }catch(err){
        mongoose.connection.close();
        res.status(500).send("Error connecting to the database");
    }finally{
    mongoose.connection.close();
}});

router.delete("/user/:name", async (req,res)=>{
    try{
    await dbconnect;
    const userschema=require("../Schema/userSchema");
    await userschema.findOneAndDelete({ name: req.params.name });
    res.send("User Deleted Successfully");
    }catch(err){
        mongoose.connection.close();
        res.status(500).send("Error connecting to the database");
    }finally{
    mongoose.connection.close();
}
});


module.exports=router;