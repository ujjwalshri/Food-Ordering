import express from "express";
import cors from "cors";
import mongoose from "mongoose";    
import 'dotenv/config';



const app = express();

app.use(express.json());
app.use(cors());

app.get('/test', (req, res) => {
    res.json({mssg: 'Hello World'});
});


mongoose.connect(process.env.MONGO_CONNECTION_STRING as string).then(()=> console.log('Connected to MongoDB')).catch((err) => console.log(err));


app.listen(4000, () => {
    console.log(`Server is running on port ${4000}`);
})