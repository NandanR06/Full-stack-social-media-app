import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import multer from "multer";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import path from "path";
import userRouter from "./router/user.js";
import authRouter from "./router/auth.js";
import postRouter from "./router/posts.js";

dotenv.config();
const app = express();

app.use(express.json());
// app.use(cors())


 app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// app.use(cors({ origin: 'http://localhost:5173' }));

app.use(helmet({crossOriginResourcePolicy: false,}));
app.use(morgan("dev"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT;
const MONGO_URl = process.env.MONGO_URL;

app.use("/images", express.static(path.join(__dirname, "public/images")));

//image uploading
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: { fieldNameSize: 100 },
});

const upload = multer({ storage });

//uploading post
app.post("/posts", upload.single("file"), (req, res) => {
  try {
    console.log("File info:", req.file);
    return res.status(200).json("file uploaded successfully");
  } catch (error) {
    return res.status(404).json("uploading error");
  }
});

mongoose
  .connect(MONGO_URl)
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log(error.message);
  });

//middlewares

//routers
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
