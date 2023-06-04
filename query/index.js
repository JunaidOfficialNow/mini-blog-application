const express  = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');
const app = express();





const posts = {}


function handleEvent(event) {
  console.log(event);
  switch(event.type) {
    case 'PostCreated':
      posts[event.data.id] = event.data;
      posts[event.data.id]['comments'] = [];
      break
    case 'CommentCreated':
      posts[event.data.postId]['comments'].push(event.data);
      break;
    case 'CommentUpdated':
      const { id, postId, content, status } = event.data;
      const post = posts[postId];
      const comment = post.comments.find(c => c.id === id);
      comment.status = status;
      comment.content = content;
  }

}

app.use(cors())
app.use(express.json());

app.post('/events', (req, res)=> {
  handleEvent(req.body);
  res.json({success: true});
})

app.get('/posts', (req, res)=> res.json(posts));


app.listen(4003, async ()=> {
  const res = await axios.get('http://localhost:4002/events');
  for (let event of res.data) {
    console.log(event)
    console.log('processing ' + event.type)
    handleEvent(event);
  }
  console.log('listening')
});