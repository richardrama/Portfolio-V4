import React from 'react'
import styles from './style'
import { Navbar, HomeProfile, ToTop, Footer } from './components'

const App = () => {
  return (
    <div className="bg-black flex flex-col items-center font-poppins">
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <ToTop />
      </div>
      <HomeProfile />
      <Footer />
    </div >
  )
}

export default App