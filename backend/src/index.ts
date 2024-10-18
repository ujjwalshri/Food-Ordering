import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/test', (req, res) => {
    res.json({mssg: 'Hello World'});
});

app.listen(4000, () => {
    console.log(`Server is running on port ${4000}`);
})