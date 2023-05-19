const express = require('express');
const axios = require('axios');

const app = express();



app.get('/api/comments', async (req, res) => {
    const limit = req.query.limit || 10;
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`);
        res.json(response.data);
    }   catch (error) {
        console.error(error);
        res.status(500).json({error: 'An unexpected error has occured'});
    }
});

app.get('/api/posts', async (req, res) => {
    const limit = req.query.limit || 10;
    try {
        const respnse = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        res.json(response.data);
    }   catch (error) {
        console.error(error);
        res.status(500).json({error: 'An unexpected error has occured'});
    }
});



const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
