import React from 'react'
import styles from '../style'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <nav>
                <ul className={`flex py-6`}>
                    <li className='mr-4 text-[16px] text-white font-[600]'><a href="#">Home</a></li>
                    <li className='mr-4 text-[16px] text-gray font-[200] hover:text-white'><a href="#">About</a></li>
                    <li className='mr-4 text-[16px] text-gray font-[200] hover:text-white'><a href="#">Blog</a></li>
                    <li className='mr-4 text-[16px] text-gray font-[200] hover:text-white'><a href="#">Project</a></li>
                    <li className='mr-4 text-[16px] text-gray font-[200] hover:text-white'><a href="#">Dashboard</a></li>
                </ul>
            </nav>
            <div className="w-[30px] h-[30px] bg-white rounded-[50%]">

            </div>
        </div>
    )
}

export default Navbar