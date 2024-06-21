import React, { useState } from 'react'
import MessageComment from './MessageComment'

const Comments = () => {
    const [comment, setComment] = useState({
        name: '',
        email: '',
        comment: '',
    });
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(comment.name && comment.email && comment.comment){
            setShow(true);
            setError(false);
            setComments([...comments, comment])
            setComment({name: '', email: '', comment: ''})
        }else{
            setShow(false);
            setError(true)
        }
    }

    const removeComment = (index) => {
        setComments(comments.filter((_,i) => i !== index));
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type='text' placeholder='Enter your name' value={comment.name} onChange={(e) => setComment({...comment, name: e.target.value})}/>
        <label>Email: </label>
        <input type="email" placeholder='Enter your Email' value={comment.email} onChange={(e) => setComment({...comment, email: e.target.value})}/>
        <label>Comment: </label>
        <textarea id="comment" name="comment" rows="4" cols="50" placeholder="Escribe tu comentario aquí..." value={comment.comment} onChange={(e) => setComment({...comment, comment: e.target.value})}></textarea>
        <button>Comment</button>
        {error && <h3 style={{color: 'red'}}>Incomplete Fields</h3>}
      </form>
      {comments.map((com, index) => (
                <MessageComment key={index} comment={com} index={index} removeComment={removeComment} />
            ))}
    </div>
  )
}

export default Comments
