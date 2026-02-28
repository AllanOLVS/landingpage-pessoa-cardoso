import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, direction = 'left', className = '' }) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('revealed');
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -30px 0px',
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    const revealClass = direction === 'right' ? 'scroll-reveal-right' : 'scroll-reveal-left';

    return (
        <div ref={ref} className={`${revealClass} ${className}`}>
            {children}
        </div>
    );
}
