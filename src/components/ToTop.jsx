import { useState, useEffect } from 'react';
import { arrowUp } from '../assets';
import styles from './ScrollUpButton.module.css';

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`px-[20px] sm:px-[0px] sm:max-w-[728px] w-full relative`}>
            <button
                className={`${styles.scrollupButton} ${isVisible ? styles.visible : ''} sm:w-[2.5rem] sm:h-[2.5rem] w-[30px] h-[30px] sm:bottom-[2rem] sm:right[2rem] bottom-[20px] right-[20px]`}
                onClick={handleScrollUp}
                aria-label="Scroll to top"
            >
                <img src={arrowUp} alt="" className='w-[10px] sm:w-[15px]' />
            </button>
        </div>
    );
};

export default ToTop;
