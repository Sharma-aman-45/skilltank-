const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());
app.use(express.json())



// Connect to MongoDB
connectToMongo();
// available routes(
app.use('/api/auth',require('./routes/auth'))


app.get('/', (_req, res) => {
  res.send('Hello World!');
});
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

