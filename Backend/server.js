import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import { addFood } from "./controllers/foodController.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app=express()
const port=4000

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/food",foodRouter);
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);
app.use("/image",express.static('uploads'));

app.get("/",(req,res)=>{ 
    res.send("API working");
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})