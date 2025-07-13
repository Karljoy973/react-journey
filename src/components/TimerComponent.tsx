import { useState, useRef, type ChangeEventHandler, useEffect } from "react";

export const TimerComponent = () => {
    const [timer, setTimer] = useState(5);
        const [remainingSeconds, setRemainingSeconds] = useState(5);
        const intervalRef = useRef<NodeJS.Timeout | null>(null);
    
    
        const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
            setTimer(+e.target.value);
            setRemainingSeconds(+e.target.value);
    };
    
        useEffect(() => {
            intervalRef.current = setInterval(() => {
                setRemainingSeconds((value) => {
                    if (value <= 1) {
                        if (intervalRef.current) clearInterval(intervalRef.current);
                        return 0;
                    }
                    return value - 1;
                });
            }, 1000);
    
            return () => {
                if (intervalRef.current) clearInterval(intervalRef.current);
            };
        }, [timer]);
    return <>
    <div>
                    
                    <input
                        value={timer}
                        onChange={handleChange}
                        placeholder="Timer..."
                    />
                    <p id="text-timer">Il vous reste : {remainingSeconds}s</p>
                </div>
    </>
}