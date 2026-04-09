const mongoose=require('mongoose');

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        mongoose.disconnect();
        process.exit(1);
    }finally{
        mongoose.disconnect();
    }
};

module.exports=connectDB;
