import { useState, useCallback, useRef, useEffect } from "react";

async function sendHttpRequest(url, config) {
    const { body, headers = { 'Content-Type': 'application/json' }, method = 'GET' } = config;
    config.headers = headers;
    config.body = body ? JSON.stringify(body) : null;
    config.method = method;
    debugger

    const response = await fetch(url, config);
    const resData = await response.json();

    if (!response.ok) {
        throw new Error(resData.message || 'Failed to send request');
    }
    return resData;
}

const useHttp = (url, config) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const sendRequest = useCallback(async (data) => {
        setIsLoading(true);
        setError(null);

        try {
            const responseData = await sendHttpRequest(url, { ...config, body: data });

            setData(responseData);
        } catch (err) {
            setError(err.message || 'Somethign went wrong seding request');
        } finally {
            setIsLoading(false);
        }
    }, [url, config]);

    useEffect(() => {
        console.log('usehttp mounted !')
        if (config && config.triggerFirstLoad) {
            sendRequest();
        }
    }, [sendRequest, config])

    return { isLoading, error, data, sendRequest };
}


export default useHttp;