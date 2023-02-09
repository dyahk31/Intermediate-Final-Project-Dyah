import express from "express";
import cors from "cors";
import CustRoute from "./routes/CustRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(CustRoute);

app.listen(2000, () => console.log('Server up and running...'));