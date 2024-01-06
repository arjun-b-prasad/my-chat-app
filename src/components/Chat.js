import React, { useState, useRef, useEffect } from 'react';
import Send from '../asset/send-text.png';
import './Chat.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message';

const Chat = ({ user }) => {
    const firestore = firebase.firestore();
    const [message, setMessage] = useState("");
    const dummy = useRef();
    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy("createdAt");
    const [messages] = useCollectionData(query, { idField: "id" });

    const sendMessage = async (e) => {
        e.preventDefault();
        if (message.trim() === "") {
            alert("Message feild is empty guru! 🙏😂😁 enadru type madappa bega");
            return;
        }
        const { uid, photoURL } = user;
        await messageRef.add({
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
        });
        setMessage("");
        dummy.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        dummy.current.scrollIntoView({ behavior: "auto" });
    }, [messages]);

    return (
        <div className="chat-window">
            {messages && messages.map((msg) => <Message key={msg.id} message={msg} user={user} />)}
            <span ref={dummy}></span>
            <form onSubmit={sendMessage}>
                <input
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    placeholder="Type your text here..."
                />
                <button type="submit">
                    <img src={Send} alt="" />
                </button>
            </form>
        </div>
    );
};

export default Chat;
