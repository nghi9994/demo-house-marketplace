import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {ReactComponent as ArrowRightIcon} from '../../assets/svg/keyboardArrowRightIcon.svg'
import { auth } from '../../firebase.config';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const onChange = (e: any) => {
    setEmail(e.target.value)
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    } catch (error) {
      console.log('🚀 ~ onSubmit ~ error', error);
      toast.error('Could not send reset email')
    }
  }

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">
          Forgot Password
        </p>

        <main>
          <form onSubmit={onSubmit}>
            <input type="email" className='emailInput' placeholder='Email' id='email' value={email} onChange={onChange} />
            <Link className='forgotPasswordLink' to="/sign-in">Sign In</Link>
            <div className="signInBar">
              <div className="signInText">Send Reset Link</div>
              <button className="signInButton">
                <ArrowRightIcon fill='#fff' width="34px" height="34px"></ArrowRightIcon>
              </button>
            </div>
          </form>
        </main>
      </header>
    </div>
  )
}
