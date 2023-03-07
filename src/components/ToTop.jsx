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
                className={`${styles.scrollupButton} ${isVisible ? styles.visible : ''}`}
                onClick={handleScrollUp}
                aria-label="Scroll to top"
            >
                <img src={arrowUp} alt="" className='w-[15px]' />
            </button>
        </div>
    );
};

export default ToTop;
