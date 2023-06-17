import { useRef, useEffect } from 'react';

export const useIsAfterFirstRender = () => {
    const isMountRef = useRef(false);
    useEffect(() => {
        isMountRef.current = true;
    }, []);
    return isMountRef.current;
};