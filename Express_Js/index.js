// const express=require("express");
// const app=express();
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.get("/",(req,res)=>{
//     res.send("Hello World!");
//     res.statusCode=200;
// });


// app.get("/user",(req,res)=>{
//     res.sendFile(__dirname + '/index.js');
// });


// app.post("/Contact",(req,res)=>{
//     console.log(req.body);
//     res.send("Your Data is Delivered")
// });

const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testdb");

const schema=new mongoose.Schema({
    name:{ type: String, required: true },
    age:{ 
        type: Number,
        validate:{
            validator:function(value){
                return value > 0;
            },
            message:"Age must be a positive number"
        }
     },
    address:{ type: String},
    phone_number:{ type: String },
    skills:{ type: [String] }
});

const User=mongoose.model("User",schema);

const user1=new User({
    name:"Jhon Doe",
    age:45,
    address:"123 Main St",
    phone_number:"123-456-7890",
    skills:["JavaScript", "Node.js"]
});
user1.save().then(()=>{console.log("User Data Saved Successfully")}).catch((err)=>{console.log("Error Saving User Data:",err.message)});

// //find the data
// User.findOne({name:"Jhon Doe"}).then((user)=>{
//     console.log(user);
// });

// //update the specified data
// User.updateOne({ name: "Jhon Doe" }, { address: "123 Main St", phone_number: "123-456-7890", skills: ["JavaScript", "Node.js"] })
// .then(() => {
//     console.log("Data Updated Successfully");
// });

// //delete the document
// User.deleteOne({ name: "Jhon Doe" })
// .then(() => {
//     console.log("Data Deleted Successfully");
// });

// app.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// });