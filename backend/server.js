import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static("public"))

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
        name: "king",
    }];
    res.status(200).json({
        success: true,
        data
    });
})
app.get("*name", (req, res) => {
    res.sendFile('public/index.html', { root: __dirname });
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});