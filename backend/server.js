import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get("/api", (req, res) => {
    res.status(200).json({ message: "Welcome to the Express server!" });
});
app.get("/api/data", (req, res) => {
    const data = [{
        id: Date.now(),
        name: "Kumari",

    },
    {
        id: Date.now() + 1,
        name: "Suman",
    }];
    res.status(200).json({
        success: true,
        data
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});