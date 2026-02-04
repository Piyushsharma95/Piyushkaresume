import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = '', threshold = 0.1, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add a small delay if requested for staggered effect
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            // eslint-disable-next-line
            if (ref.current) observer.disconnect();
        };
    }, [threshold, delay]);

    return (
        <div
            ref={ref}
            className={`reveal-wrapper ${isVisible ? 'visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
