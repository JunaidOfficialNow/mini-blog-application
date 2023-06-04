const express  = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');
const app = express();



const posts = {}


app.use(cors())
app.use(express.json());


app.get('/posts', (req, res)=> res.send(posts))

app.post('/posts', async (req, res)=> {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  posts[id] = { id, title };
   await axios.post('http://localhost:4002/events', {type: 'PostCreated', data: { id, title  }}).catch((err)=> console.log)
  res.status(201).send(posts[id]);
});

app.post('/events', (req, res)=> {
  console.log(req.body);
  res.json({success: true});
})

app.listen(4000, ()=> console.log('listening'));