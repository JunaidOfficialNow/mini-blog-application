import React, { useState } from "react";
import axios from 'axios';

export default function PostCreateComponent() {
  const [title, setTitle] = useState('');

  async function onSumbit(e) {
    e.preventDefault()
    axios.post('http://localhost:4000/posts', {title});
    setTitle('');

  }
  return (
    <div>
      <form action="" onSubmit={onSumbit}>
        <div>
          <label htmlFor="">Title</label>
          <input value={title}  onChange={e => setTitle(e.target.value)} type="text" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}