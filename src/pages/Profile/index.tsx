import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase.config';
import { ProfileWrapper } from './style';
import { toast } from 'react-toastify';


export const Profile = () => {
  const navigate = useNavigate()
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    name: auth?.currentUser?.displayName || '',
    email: auth?.currentUser?.email || '',
  })
  const {name, email} = formData

  const onLogout = () => {
    auth.signOut()
    navigate('/sign-in')
  }

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const onSubmit = async () => {
    try {
      if (auth.currentUser && auth.currentUser?.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name
        })
  
        // Update in firestore
        const userRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(userRef, {
          name
        })
      }
    } catch (error) {
      console.log('🚀 ~ onSubmit ~ error', error);
      toast.error('Could not update profile details')
    }
  }

  return (
    <ProfileWrapper className='profile'>
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="button" className="logOut" onClick={onLogout}>Logout</button>
      </header>

      <main>
        <div className="profileDetailsHeader">
          <p className="personalDetailsText">Personal Details</p>
          <p className="changePersonalDetails" onClick={() => {
            changeDetails && onSubmit()
            setChangeDetails((prevState) => !prevState)
          }}>
            {changeDetails ? 'done' : 'change'}
          </p>
        </div>

        <div className="profileCard">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="name"
              className={!changeDetails ? 'profileName' : 'profileNameActive'}
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
            />
            <input
              type="text"
              id="email"
              className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </div>
      </main>
    </ProfileWrapper>
  )
}
