import React from 'react'
import google from '../asset/google.png';
// import firebase from 'firebase/auth'
import firebase from 'firebase/compat/app'
import './Signin.css'
    
const Signin = ({ auth }) => {
    const signInWithGoogle = e => {
        e.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
  return (
      <div>
          <p>Sign-in with google to chat</p>
          <button className='signin-btn'onClick={signInWithGoogle}>
              <img src={google} alt="" />
              <span>Sign-in with google</span>
          </button>
    </div>
  )
}

export default Signin