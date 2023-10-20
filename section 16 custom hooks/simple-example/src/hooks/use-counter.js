import { useState, useEffect } from "react";

export const CounterType = {
    forward: "forward",
    backward: "backward"
}

const useCounter = (type) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => {
                switch (type) {
                    case CounterType.forward:
                        return prevCounter + 1;
                    case CounterType.backward:
                        return prevCounter - 1;
                    default:
                        throw new Error('useCounter must have a type - "forwad" or "backword"')
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [type]);

    return counter;
}


export default useCounter;