import { useEffect, useRef } from 'react';

export default function useScrollReveal(direction = 'left') {
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
                rootMargin: '0px 0px -50px 0px',
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return ref;
}
