const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require('bcryptjs');
//Register
router.post('/register', async(req,res)=>{
    const{name,email,password}=req.body;

    try{
        let user = await User.findOne({ email });
        if (user) return res.status(400).json("User already exists");
        const hashedPassword=await bcrypt.hash(password,10);

        user=new User.create({    
            name,
            email,
            password:hashedPassword,});
            
            await user.save();
            res.json("User registered successfully");
    } catch (error) {
        res.status(500).json("Error registering user");
    }
});

//Login
const jwt=require('jsonwebtoken');

router.post('/login', async(req,res)=>{
    const {email,password}=req.body;
    try{
       const user = await User.findOne({email});
        if(!user) return res.status(400).json("User not found");
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json("Invalid credentails");
    
        //token assigning
        const token=jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
    );
    res.json({token});
    }catch(error){
        res.status(500).json("Error logging in user");
    }
});

module.exports=router;