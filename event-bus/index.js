const express  = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');
const app = express();



const events = [];


app.use(cors())
app.use(express.json());

app.post('/events', async (req, res)=> {
  events.push(req.body);
  await axios.post('http://localhost:4000/events', req.body).catch(console.log)
  await axios.post('http://localhost:4001/events', req.body).catch(console.log)
  await axios.post('http://localhost:4003/events', req.body).catch(console.log)
  await axios.post('http://localhost:4005/events', req.body).catch(console.log)
  res.json({success: true});
})

app.get('/events', (req, res)=> res.json(events));

 
app.listen(4002, ()=> console.log('listening'));