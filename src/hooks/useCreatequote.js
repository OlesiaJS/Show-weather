import { useState, useEffect } from "react";

export default function useQuote() {
    const [author, setAuthor] = useState('');
    const [quote, setQuote] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        fetch('https://favqs.com/api/qotd')
            .then((data) => {
                return data.json();
            })
            .then(data => {
                setIsloading(false);
                setQuote(data?.quote?.body);
                setAuthor(data?.quote?.author);
            })
            .catch(() => {
                setIsloading(false);
                setError(true);
            });
    }, []);

    return { error, isLoading, quote, author };
}

