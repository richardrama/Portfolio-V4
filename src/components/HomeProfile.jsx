import React from 'react'
import styles from '../style'
import { Link } from "react-router-dom";
import { bootstrap, canva, css, figma, html, js, nodejs, photoshop, port1, profileImg, reactjs, tailwindcss, typescript } from '../assets'

const HomeProfile = () => {
    return (
        <div className="bg-black flex flex-col items-center font-poppins">
            <div className={`${styles.marginY} ${styles.boxWidth}`}>
                <div id='shortProfile' className="flex my-[25px] sm:my-[50px] ">
                    <div className="sm:max-w-[60%]">
                        <h1 className='text-[25px] sm:text-[35px] font-[700] text-cyan-300'>Richard Rama A. B.</h1>
                        <h2 className='text-[20px] sm:text-[25px] mt-[-10px] font-[600] text-cyan-700'>Front-end Web Developer</h2>
                        <p className='text-[14px] sm:text-[16px] text-white my-[20px]'>Hello, I'm a Front-end Web Developer for more than 3 years now. I'm looking to be a help to others. Nice to meet you.</p>
                    </div>
                    <div className="w-[70%] sm:grid place-items-center hidden">
                        <div className="w-[170px] h-[170px] bg-white rounded-[10%] ">
                            <img src={profileImg} alt="" className='rounded-[10%]' />
                        </div>
                    </div>
                </div>
                <div id='expertise' className={`${styles.marginY} sm:mt-5 mt-5`}>
                    <h1 className="text-[20px] sm:text-[23px] font-[700] text-white">Technology & Tools Expertise</h1>
                    <div class="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-6 mt-[15px] sm:mt-[30px]">
                        <div className="flex items-center">
                            <img src={html} alt="html-5" className='w-[20px] sm:w-[25px]' />
                            <p className='ml-[15px] text-[16px] text-white font-[400]'>HTML</p>
                        </div>
                        <div className="flex items-center">
                            <img src={css} alt="html-5" className='w-[20px] sm:w-[25px]' />
                            <p className='ml-[15px] text-[16px] text-white font-[400]'>CSS</p>
                        </div>
                        <div className="flex items-center">
                            <img src={js} alt="html-5" className='w-[20px] sm:w-[25px]' />
                            <p className='ml-[15px] text-[16px] text-white font-[400]'>JavaScript</p>
                        </div>
                        <div className="flex items-center">
                            <img src={typescript} alt="html-5" className='w-[20px] sm:w-[25px]' />
                            <p className='ml-[15px] text-[16px] text-white font-[400]'>TypeScript</p>
                        </div>
                        <div className="flex items-center">
                            <img src={nodejs} alt="html-5" className='w-[20px] sm:w-[25px]' />
                            <p className='ml-[15px] text-[16px] text-white font-[400]'>Node.Js</p>
                        </div>
                        <div className="flex items-center">
                            <img src={reactjs} alt="html-5" className='w-[20px] sm:w-[25px]' />
                            <p className='ml-[15px] text-[16px] text-white font-[400]'>React</p>
                        </div>
                        <div className="flex items-center">
                            <img src={tailwindcss} alt="html-5" className='w-[20px] sm:w-[25px]' />
                            <p className='ml-[15px] text-[16px] text-white font-[400]'>Tailwind CSS</p>
                        </div>
                        <div className="flex items-center">
                            <img src={bootstrap} alt="html-5" className='w-[20px] sm:w-[25px]' />
                            <p className='ml-[15px] text-[16px] text-white font-[400]'>Bootstrap</p>
                        </div>
                        <div className="flex items-center">
                            <img src={figma} alt="html-5" className='w-[20px] sm:w-[25px]' />
                            <p className='ml-[15px] text-[16px] text-white font-[400]'>Figma</p>
                        </div>
                        <div className="flex items-center">
                            <img src={photoshop} alt="html-5" className='w-[20px] sm:w-[25px]' />
                            <p className='ml-[15px] text-[16px] text-white font-[400]'>Photoshop</p>
                        </div>
                        <div className="flex items-center">
                            <img src={canva} alt="html-5" className='w-[20px] sm:w-[25px]' />
                            <p className='ml-[15px] text-[16px] text-white font-[400]'>Canva</p>
                        </div>
                    </div>
                </div>
                <div id='featuredProject' className={`${styles.marginY}`}>
                    <h1 className="text-[20px] sm:text-[23px] font-[700] text-white">Featured Projects</h1>
                    <div className="relative grid gap-6 pb-6 md:grid-cols-2 mt-[30px]">
                        <div className="group relative overflow-hidden rounded-md bg-darkGray transition-colors hover:bg-lightGray">
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
                                    <p className='text-sm text-[#D0D0D0]'>
                                        A little boost to start the day will be nice. Hahahaha
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="group relative overflow-hidden rounded-md bg-darkGray transition-colors hover:bg-lightGray">
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
                                    <p className='text-sm text-[#D0D0D0]'>
                                        A little boost to start the day will be nice. Hahahaha
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="font-medium">
                        <Link to="/project" className='inline-flex items-center gap-2 text-gray transition-colors hover:text-white'>
                            <p>View More</p>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
                        </Link>
                    </div>
                </div>
                <div id='featuredBlog' className={`${styles.marginY}`}>
                    <h1 className="text-[20px] sm:text-[23px] font-[700] text-white">Featured Blogs</h1>
                    <div className="mt-[30px]">
                        <div class="border-l-4 border-cyan-400 bg-cyan-50 p-4 text-sm color-cyan">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-5 w-5 text-cyan-400"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div class="ml-3 text-cyan-700">Blog hasn't been uploaded yet. Be patient, will be back in a moment.</div>
                            </div>
                        </div>
                    </div>
                    <div className="font-medium hidden">
                        <Link to="/blog" className='inline-flex items-center gap-2 text-gray transition-colors hover:text-white'>
                            <p>View More</p>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProfile