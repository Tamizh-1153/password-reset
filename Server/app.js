const express=require('express')
const app = express()
require('dotenv').config()
const cors=require('cors')



const connectDB=require('./db/connectDB')

const userRouter=require('./routes/user')

app.use(express.json())
app.use(cors())
app.use('/api/v1',userRouter)


const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(5000,()=>console.log('Server is listening on port 5000...'))
    }catch(err){
        console.log(err);
    }
}
start()

