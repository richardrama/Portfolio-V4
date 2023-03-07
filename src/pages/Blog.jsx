import React from 'react'
import styles from '../style'
import { Footer, Navbar } from '../components'

const Blog = () => {
    return (
        <div className="bg-black flex flex-col items-center font-poppins relative">
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
            <div className={`${styles.boxWidth} py-[20px] sm:py-[20px]`}>
                <h1 className='text-[25px] sm:text-[35px] font-[700] text-white'>Blog</h1>
            </div>
            <div className={`h-[66vh] w-[100%] ${styles.boxWidth}`}>
                <div className="mt-[0px]">
                    <div class="border-l-4 border-cyan-400 bg-lightGray p-4 text-sm color-cyan">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-5 w-5 text-cyan-400"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div class="ml-3 text-cyan-400">Blog hasn't been uploaded yet. Be patient, will be back in a moment.</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog