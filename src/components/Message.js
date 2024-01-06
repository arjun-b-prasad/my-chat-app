import React from 'react'
import defaultUser from '../asset/default_user.png'
const Message = ({ message, user }) => {
    const { text, uid, photoURL } = message;
    const messageClass = uid === user.uid ? "sender" : "receiver";
    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL || defaultUser} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default Message