import React, { useState } from "react";
import axios from "axios";

export default function  CoommentReactComponent({postId}) {
  const [content, setContent] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
     await axios.post(`http://localhost:4001/posts/${postId}/comments`, {content})
     setContent('');
  }
   return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="" className="form-control">New comment</label>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button className="btn btn-primary">Create</button>
      </form>

    </div>
   )
}