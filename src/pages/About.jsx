import React from 'react'
import styles from '../style'
import { Footer, Navbar, ToTop } from '../components'
import { Link } from 'react-router-dom'
import { bootstrap, canva, css, figma, html, js, nodejs, photoshop, port1, profileImg, reactjs, tailwindcss, typescript } from '../assets'

const About = () => {
    return (
        <div className="bg-black flex flex-col items-center font-poppins">
            <div className={`${styles.boxWidth}`}>
                <Navbar />
                <div id='shortProfile' className="flex py-[20px] sm:py-[20px] border-b-[1px] border-gray">
                    <div className="sm:max-w-[95%]">
                        <h1 className='text-[25px] sm:text-[35px] font-[700] text-white'>About Me</h1>
                        <p className='text-[12px] sm:text-[15px] sm:text-[16px] text-white my-[20px]'>
                            Hi there! I'm a Front-end Web Developer with over 3 years of experience in the industry.
                            I specialize in HTML, CSS, and vanilla JavaScript, and I'm also proficient in Reactjs. I also
                            working as a freelancer in platform like <a target='_blank' href="https://www.fiverr.com/richardramaab" className='hover-green text-greenPrimary'>Fiverr</a> and <a target='_blank' href="https://www.upwork.com/freelancers/~018c4c2e085cd95fce?viewMode=1" className='hover-green text-greenPrimary'>Upwork</a>.
                            I'm committed to staying up-to-date with the latest web development trends and technologies.
                        </p>
                        <p className='text-[12px] sm:text-[15px] sm:text-[16px] text-white my-[20px]'>
                            In addition to my coding skills, I also have a passion for graphic design and other related skills. I take
                            pride in delivering high-quality work. Currently I'm working as graphic designer in one of organization in my
                            college.
                        </p>
                        <p className='text-[12px] sm:text-[15px] sm:text-[16px] text-white my-[20px]'>
                            If you're looking for someone to hire, you can consider me as one and you may visit my <Link to='/linktree' target='_blank' className='hover-cyan text-cyan-300'>linktree here.</Link>
                        </p>
                    </div>
                </div>

                <div id='expertise' className={`py-[20px] sm:py-[40px] border-b-[1px] border-gray`}>
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
                <div id='contact' className={`py-[20px] sm:py-[40px] `}>
                    <h1 className="text-[20px] sm:text-[23px] font-[700] text-white">Contacts</h1>
                    <p className='text-[11px] sm:text-[14px] text-white font-[400] mt-[15px]'>You can contact me by email to <a href="mailto:richardramaab@gmail.com" target='_blank' className='hover-cyan text-cyan-300'>richardramaab@gmail.com</a> or we can connect using the social media below    </p>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
            <ToTop />
            <Footer />
        </div >
    )
}

export default About