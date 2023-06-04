import React from 'react';
import PostCreateComponent from './PostCreate';
import PostListComponent from './PostList';

function App() {
  return (<div>
     <h1>Create post</h1>
     <PostCreateComponent/>
     <hr />
     <h2>Posts</h2>
     <PostListComponent/>
  </div>)
}

export default App;