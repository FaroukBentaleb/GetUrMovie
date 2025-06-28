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
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzc1MDY0YzgyMTBkNjkzMGRkMzQ1MWJlM2EwZDFjNCIsIm5iZiI6MTc1MTA1NjgyMy4xNTgwMDAyLCJzdWIiOiI2ODVmMDFiNzU4OWY2ODdhZjU5MTU1MDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NGGztkY026WCAwWKt3HX8WBxMwPsrpewJsCN3M3R5c4`
            }
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json => setMovies(json.results))
        .catch(err => setError(err));
    },[]);
    return {Movies, Error};
}