import React from 'react'

const MessageComment = ({comment, index, removeComment}) => {
  
   
  return (
    <div>
      <p>Name: {comment.name}</p>
      <p>{comment.comment}</p>
      <button onClick={() => removeComment(index)}>Delete</button>
    </div>
  )
}

export default MessageComment
