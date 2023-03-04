import React from 'react'
import styles from './style'
import { Navbar } from './components'

const App = () => {
  return (
    <div className="bg-black flex justify-center font-poppins">
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  )
}

export default App