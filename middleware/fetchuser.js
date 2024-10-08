import jwt from "jsonwebtoken";
const JWT_SECRET="vaibhav";

const fetchuser=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).json({error:"Please authenticate using valid token"})
    }
    try {
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    } catch (error) {
        res.status(401).json({error:"Please authenticate using valid token"})

    }
}
export default fetchuser;