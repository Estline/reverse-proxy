const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello World! am runing in Port ' + PORT);
});

app.get('/user', (req, res) => {
    res.send('user' + PORT);
});

app.listen(PORT, () => {
    console.log('API listening on port : ' + PORT);
});
