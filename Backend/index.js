import express from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRouter from "./router/user.js"
import authRouter from "./router/auth.js"
import postRouter from "./router/posts.js"
dotenv.config();

const PORT  = process.env.PORT;
const MONGO_URl = process.env.MONGO_URL;
const app = express();

mongoose.connect(MONGO_URl)
.then(()=>{console.log("database connected")})
.catch((error)=>{console.log(error.message)})


//middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));


//routers
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/posts",postRouter);


app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
})

