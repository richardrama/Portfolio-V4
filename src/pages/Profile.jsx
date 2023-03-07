import React from 'react'
import styles from '../style'
import { Navbar } from '../components'

const Profile = () => {
  return (
    <div className="bg-black flex justify-center font-poppins">
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
      About
    </div>
  )
}

export default Profile