import { useEffect, useState } from "react";
export function useDetails(props){
    const [ Movie, setMovie ] = useState([]);
    const [ Error, setError ] = useState("");
    const fetchFunction = async () => {
        const url = `https://api.themoviedb.org/3/movie/${props.id}`;
        const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzc1MDY0YzgyMTBkNjkzMGRkMzQ1MWJlM2EwZDFjNCIsIm5iZiI6MTc1MTA1NjgyMy4xNTgwMDAyLCJzdWIiOiI2ODVmMDFiNzU4OWY2ODdhZjU5MTU1MDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NGGztkY026WCAwWKt3HX8WBxMwPsrpewJsCN3M3R5c4`
            }
        };
        try{
            const moovie = await fetch(url, options);
            setMovie(moovie);
        }
        catch(e){
            setError(err);
        }
    } 
    useEffect(fetchFunction,[]);
    return {Movie, Error};
}