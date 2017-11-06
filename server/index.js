const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3005;
const db = require("./data.js")

const data_controllers = require('./controllers/data_controllers')

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/dnpGif', data_controllers.getdnp)
app.get('/api/happyGif', data_controllers.getHappyGifs)
app.get('/api/sadGif', data_controllers.getSadGifs)
// app.post('/api/funnyPhoto', data_controllers.funnyPhoto)
// app.put('/api/sadPhoto/:id', data_controllers.sadPhoto)
// // app.delete('/api/messages/:id', messages.delete)



app.listen(port, () => console.log(`Listening to port: ${port}`));