import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import CoommentReactComponent from './CommentCreate';
import CommentListComponent from './CommentList';

export default function PostListComponent(props) {
  const [posts, setPosts] =  useState({})

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4003/posts');
    setPosts(res.data)
  }


   useEffect(()=> {fetchPosts()}, [])
  return (
    <div  style={{width: '100%', height: 'auto'}}>
      {Object.values(posts).map((post) => {
        return (
           <div key={post.id}>
            <h3>{post.title}</h3>
            <CoommentReactComponent postId= {post.id}/>
            {post.comments.map(comment=> <CommentListComponent status={comment.status} key={comment.id}  content={comment.content}/>)}
           </div>
        )
      })}



    </div>
  )
}