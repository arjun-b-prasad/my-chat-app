import React from 'react';
import Header from './components/Header';
import Signin from './components/Signin';
import Chat from './components/Chat';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth'

// Replace the process.env variables with your own keys
firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
})
const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">

      <section>
        <Header auth={auth} user={user} />
        {" "}
        {user ? <Chat user={user} /> : <Signin auth={auth} />}
      </section>
    </div>
  );
}

export default App;
