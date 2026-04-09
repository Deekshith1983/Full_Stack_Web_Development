const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


//routes
app.use('/api/auth',require('./routes/Auth'));

//protected route
const authMiddleware=require('./routes/Middleware');

app.get('/api/dashboard',authMiddleware,(req,res)=>{
    res.json("Welcome to the dashboard");
});

app.listen(3000, ()=>console.log("Server running on port 3000"));