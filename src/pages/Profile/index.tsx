import { getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'


export const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const auth = getAuth();

  useEffect(() => {
    if (auth?.currentUser) {
      setUser(auth?.currentUser)
    }
  }, [])
  
  return (
    <div>
      <h1>Profile</h1>
      <p>{user?.displayName || 'Not available'}</p>
    </div>
  )
}
