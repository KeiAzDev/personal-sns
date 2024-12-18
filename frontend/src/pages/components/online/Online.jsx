import React from 'react'

export default function Online({user}) {
  const PUBLIC_FOLDER = import.meta.env.VITE_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="rightProfileImgContainer">
        <img src={PUBLIC_FOLDER + user.profilePicture} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}
