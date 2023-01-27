import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import _ from 'lodash';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from "firebase/firestore"; 
import {auth, db} from '../../firebase.config'

import {ReactComponent as ArrowRightIcon} from '../../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../../assets/svg/visibilityIcon.svg'
import { toast } from 'react-toastify';

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData
  
  const navigate = useNavigate()

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
        const formDataCopy: any = _.omit(formData, "password")
        formDataCopy.timestamp = serverTimestamp();

        // Save user to firestore
        await setDoc(doc(db, 'users', user.uid), formDataCopy)
        navigate('/')
      }
    } catch (error) {
      console.log('🚀 ~ onSubmit ~ error', error);
      toast.error('Something went wrong with registration')
    }
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form onSubmit={onSubmit}>
          <input type="text" className='nameInput' placeholder='Name' id="name" value={name} onChange={onChange} />
          <input type="email" className='emailInput' placeholder='Email' id="email" value={email} onChange={onChange} />
          <div className="passwordInputDiv">
            <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder="Password" id="password" value={password} onChange={onChange} />
            <img src={visibilityIcon} alt="show password" className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} />
          </div>

          <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#ffffff" width='34px' height='34px' />
            </button>
          </div>
        </form>

        {/* Google OAuth */}

        <Link to='/sign-in' className='registerLink'>Sign In Instead</Link>
      </div>
    </>
  )
}
