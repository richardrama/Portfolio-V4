import React from 'react'
import styles from './style'
import { Navbar, HomeProfile, ToTop } from './components'

const App = () => {
  return (
    <div className="bg-black flex flex-col items-center font-poppins">
      <div className={`${styles.boxWidth} relative`}>
        <Navbar />
        <ToTop />
      </div>
      <HomeProfile />
    </div >
  )
}

export default App