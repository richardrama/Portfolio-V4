import React, { useState } from 'react'
import styles from '../style'
import style from '../components/FilteredList.module.css';
import { Footer, Navbar, ToTop } from '../components'
import { Link } from "react-router-dom";
import { bootstrap, canva, css, figma, html, js, nodejs, photoshop, port1, profileImg, reactjs, tailwindcss, typescript } from '../assets'

const Project = () => {
    const [activeFilter, setActiveFilter] = useState('');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };
    const handleRemoveFilterClick = () => {
        setActiveFilter('');
    };

    const filterItems = (id) => {
        if (activeFilter === '') {
            return true;
        }
        return id === activeFilter;
    };
    return (
        <div className="bg-black flex flex-col items-center font-poppins">
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
            <div className={`${styles.boxWidth} flex flex-col justify-start py-[20px] sm:py-[20px]  min-h-[80vh]`}>
                <h1 className='text-[25px] sm:text-[35px] font-[700] text-white'>Projects</h1>
                <p className='text-[12px] sm:text-[15px] sm:text-[16px] text-white my-[20px]'>
                    This section serves as digital portfolio of my past projects. There are lot of projects that I have done,
                    but I will only showcase projects that I think was the best.
                </p>
                <div className='flex justify-center gap-5 relative mb-2 items-center'>
                    <button onClick={() => handleFilterClick('html')} className={`${style.filterButton} ${activeFilter === 'html' ? style.active : ''} text-white font-[600]`}>
                        HTML
                    </button>
                    <button onClick={() => handleFilterClick('react')} className={`${style.filterButton} ${activeFilter === 'react' ? style.active : ''} text-white font-[600]`}>
                        React
                    </button>
                    <button onClick={() => handleFilterClick('design')} className={`${style.filterButton} ${activeFilter === 'design' ? style.active : ''} text-white font-[600]`}>
                        Design
                    </button>
                    <button onClick={handleRemoveFilterClick} className='absolute right-0 text-white font-[400] text-[13px]' >
                        Remove filter
                    </button>
                </div>
                <div className="relative grid gap-6 pb-6 xs:grid-cols-2 mt-[10px]">
                    <div id='html' style={{ display: filterItems('html') ? 'list-item' : 'none' }} className="group relative overflow-hidden rounded-md bg-darkGray transition-colors hover:bg-lightGray">
                        <a href="https://richardrama.github.io/Random-Quotes/" target={'_blank'} className='overflow-hidden text-white'>
                            <div className="relative">
                                <img src={port1} alt="" className='object-cover object-center' />
                                <div className="absolute left-3 bottom-3">
                                    <ul className='flex gap-1'>
                                        <li className='relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border-[.2px] border-[#646464] bg-darkGray tracking-widest'>
                                            <img src={html} className="absolute w-[0.9rem] h-[auto]" />
                                        </li>
                                        <li className='relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border-[.2px] border-[#646464] bg-darkGray tracking-widest'>
                                            <img src={css} className="absolute w-[0.9rem] h-[auto]" />
                                        </li>
                                        <li className='relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border-[.2px] border-[#646464] bg-darkGray tracking-widest'>
                                            <img src={js} className="absolute w-[0.9rem] h-[auto]" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-t-[.5px] border-zinc-400 p-3 text-center">
                                <h3 className='pb-1 font-semibold transition-colors'>
                                    Quote of The Day
                                </h3>
                                <p className='text-sm text-[#D0D0D0]  pb-[6px]'>
                                    A little boost to start the day will be nice. Just be sure to stay confident all the time.
                                </p>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
            <Footer />
            <ToTop />
        </div>
    )
}

export default Project