import { useState, useCallback, useRef} from "react";


const useHttp = (requestConfig) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequestRef = useRef(requestConfig);

    const sendRequest = useCallback(async (queryConfig) => {
        setIsLoading(true);
        setError(null);
        const { url, method = 'GET', body, headers = {} } = {...sendRequestRef.current, ...queryConfig};

        try {
            const response = await fetch(
                url,
                {
                    method: method,
                    headers: headers,
                    body: body ? JSON.stringify(body) : null
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            return await response.json();
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { isLoading, error, sendRequest };
}


export default useHttp;