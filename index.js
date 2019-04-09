require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello There</h1>
    `);
});
app.listen(PORT, () => {
    console.log(`youre running on port ${PORT}`)
});