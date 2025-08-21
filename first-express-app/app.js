import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log('Good morning Morio-cho!');
})