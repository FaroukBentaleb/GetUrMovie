import { useEffect, useState } from "react";

export function useFilter(props){
    const [ Movies, setMovies ] = useState([]);
    const [ Error, setError ] = useState("");
    useEffect(() => {
        const url = props.url;
        const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json => setMovies(json.results))
        .catch(err => setError(err));
    },[]);
    return {Movies, Error};
}