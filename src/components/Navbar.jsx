import React from 'react'
import styles from '../style'
import { Link, NavLink } from "react-router-dom";
import { profileImg } from '../assets';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between sm:px-[0px]'>
            <nav>
                <ul className={`flex py-6`}>
                    <li className='mr-4 text-[13px] sm:text-[16px] text-gray font-[200] hover:text-white'><NavLink to='/'>Home</NavLink></li>
                    <li className='mr-4 text-[13px] sm:text-[16px] text-gray font-[200] hover:text-white'><NavLink to="/about">About</NavLink></li>
                    <li className='mr-4 text-[13px] sm:text-[16px] text-gray font-[200] hover:text-white'><NavLink to="/blog">Blog</NavLink></li>
                    <li className='mr-4 text-[13px] sm:text-[16px] text-gray font-[200] hover:text-white'><NavLink to='/project'>Project</NavLink></li>
                    <li className='mr-4 text-[13px] sm:text-[16px] text-gray font-[200] hover:text-white'><NavLink to='/dashboard'>Dashboard</NavLink></li>
                </ul>
            </nav>
            <div className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] sm:mr-[10px]">
                <Link to="/about">
                    <img src={profileImg} alt="" className='rounded-[50%] ' />
                </Link>
            </div>
        </div>

    )
}

export default Navbar