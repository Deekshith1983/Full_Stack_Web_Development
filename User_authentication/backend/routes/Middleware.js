const { JsonWebTokenError } = require("jsonwebtoken");

const authMiddleware=(req,res,next)=>{
    const toke= req.headers.authorization?.apilt(" ")[1];

    if(!token) return res.status(401).json("NO token");

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(err){
        res.status(401).json("invalid token");
    }
    };

module.exports=authMiddleware;