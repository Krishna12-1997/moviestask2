const express = require('express');
const moviesRoute = require('./routes/movieRoutes');
const app = express();
const PORT = 5000

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Api runing on server")
})

app.use('/movies', moviesRoute);

app.listen(PORT, () => console.log(`server lisning on ${PORT}`));