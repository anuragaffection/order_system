import Express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from "cors"
import adminRouter from "./routes/adminRoutes.js";
import productRouter from './routes/productRoutes.js'

dotenv.config();
const app = Express();
const mongodb_url = process.env.MONGODB_URL;



// mongodb 
mongoose.connect(mongodb_url, {
    dbName: "OrderSystem",
}).then(() => { console.log("Mongodb Connected") })



// middleware
app.use(Express.json());
app.use(cookieParser()) 
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))



// Routing 
app.get('/', (req, res) => {
    res.send("Hello Order Sysem")
})
app.use('/admin', adminRouter)
app.use('/product', productRouter)




// listening 
app.listen(3000, () => {
    console.log("Server is Running on http://localhost:3000");
})