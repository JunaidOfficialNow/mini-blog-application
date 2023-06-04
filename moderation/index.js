const express  = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();



app.use(cors())
app.use(express.json());

app.post('/events', async (req, res)=> {


  switch(req.body.type) {
    case 'CommentCreated':
      const status = req.body.data.content.includes('orange') ? 'rejected' : 'approved';
      await axios.post('http://localhost:4002/events', {
        type: 'CommentModerated',
        data: {
          id: req.body.data.id,
          postId: req.body.data.postId,
          status,
          content:  req.body.data.content,
        }
      }).catch(console.log);
      break;

  }

  res.json({});

})



app.listen(4005, ()=> console.log('listening 4001'));