import express from 'express'
import cors from 'cors'
import session from 'express-session'
import dotenv from  'dotenv'
// import db from './config/Database.js'
import UserRoute from './routes/UserRoute.js'
import ProductRoute from './routes/ProductRoute.js'
import AuthRoute from  './routes/AuthRoute.js'
dotenv.config();
const app = express();
// (async()=>{
//     await db.sync({force:true})
// })

// middleware
app.use(express.json())

// session
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:  {
        secure: 'auto'
    }
}))

app.use(cors({
    credentials:true,
    origin: "http://localhost:9000"
}))





// router


app.use(AuthRoute)
app.use(UserRoute)
app.use(ProductRoute)








app.listen(process.env.APP_PORT,()=>{
    console.log(`sever  up and running ${process.env.APP_PORT}`)
})