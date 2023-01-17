import express from 'express';

const app = express();  //initializing 
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`server running successfully on port ${PORT}`);
})