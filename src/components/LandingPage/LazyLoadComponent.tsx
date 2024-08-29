import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

interface LazyLoadComponentProps {
    children: ReactNode;
    onLoad?: () => void;
    onEnterViewport?: () => void;
    loadingHeight?: string | number;
    threshold?: number;
    showConsole?: boolean;
}

const LazyLoadComponent = ({
    children,
    onLoad,
    onEnterViewport,
    loadingHeight = '100vh',
    threshold = 0.5,
    showConsole = false
}: LazyLoadComponentProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const onLoadCalled = useRef<boolean>(false);

    const callOnLoad = useCallback(() => {
        if (!onLoadCalled.current) {
            onLoad && onLoad();
            onLoadCalled.current = true;
        }
    }, [onLoad]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    callOnLoad();
                }
                showConsole && console.log("entry.intersectionRatio: ", entry.intersectionRatio);
                if (entry.isIntersecting && onEnterViewport && entry.intersectionRatio >= threshold) {
                    onEnterViewport();
                }
            },
            { threshold: [0, threshold] }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [callOnLoad, onEnterViewport, isVisible, threshold]);

    return (
        <div ref={ref}>
            {isVisible ? children : <div style={{ height: loadingHeight }}></div>}
        </div>
    );
}

export default LazyLoadComponent;