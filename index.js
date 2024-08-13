import express from 'express'
import dotenv from 'dotenv'
import dbconnections from './dB_connection/index.js'
import productRouter from './router/product.routes.js'
import userRouter from  './router/user.route.js'
import cors from 'cors';
import cookieParser from 'cookie-parser'
const app  = express()
dotenv.config({path:'./.env'})

app.use(cors())
app.use("/imgae",express.static('upload/imgae'))
app.use(express.json())
app.use(cookieParser())

// db.connection
dbconnections().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server run",process.env.PORT);
    })
}).catch((e)=>{
    console.log('Error during server run',e);
})


app.use('/',productRouter)
app.use('/user',userRouter)


