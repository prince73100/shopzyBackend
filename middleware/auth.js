import jwt from 'jsonwebtoken';
const handleauthentication = (req,res,next)=>{
    const token = req.header('token')
    if(!token){
         res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try {
            const data = jwt.verify(token,process.env.SECERET_KEY)
            req.user = data
            next()
        } catch (error) {
            res.status(401).send({error:"Please authenticate a valid token"})
        }
    }
}


export default handleauthentication;