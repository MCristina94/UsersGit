import React from 'react'
import d from './styleComponents/detailcard.module.css'

const DetailCard = ({user}) => {
  return (
    <div className={d.complait}>
      <div className={d.container}>
        <img src={user.avatar_url} className={d.img}  />
        <h3 >{user.name}</h3>
        <p>Followers: {user.followers}</p>
        <p>Public Repositories: {user.public_repos}</p>
        <p>Location: {user.location}</p>
      </div>
    </div>
  )
}

export default DetailCard
