import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import Star from '../assets/img/star.png';
import { Footer } from '../components/Footer/Footer';
export function MovieDetails() {
    const { id } = useParams();
    const [ Movie, setMovie ] = useState([]);
    const [ Error, setError ] = useState("");
    const [ loading, setLoading ] = useState(true);
    const fetchFunction = async () => {
        const url = `https://api.theMoviedb.org/3/movie/${id}`;
        const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzc1MDY0YzgyMTBkNjkzMGRkMzQ1MWJlM2EwZDFjNCIsIm5iZiI6MTc1MTA1NjgyMy4xNTgwMDAyLCJzdWIiOiI2ODVmMDFiNzU4OWY2ODdhZjU5MTU1MDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NGGztkY026WCAwWKt3HX8WBxMwPsrpewJsCN3M3R5c4`
            }
        };
        try{
            const rep = await fetch(url, options);
            const moovie = await rep.json();
            console.log("Here: ",moovie);
            setMovie(moovie);
        }
        catch(e){
            setError(err);
        }
    } 
    useEffect(() => {
        fetchFunction();
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    const handleClick = () => {
        window.open(Movie.homepage);
    }
    console.log("Movie:", Movie);
    console.log("Error:", Error);
    return (
        <>
            {!loading && 
            <>
                <div className="flex flex-col justify-center items-center border border-white md:w-[80%] mx-auto p-10 sm:mt-32 sm:mb-32 gap-2 text-white">
                    {Movie.poster_path && (
                        <img
                        src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
                        alt={Movie.title}
                        style={{ maxWidth: "300px", marginTop: "1rem" }}
                        />
                    )}
                    <h1 className="text-2xl sm:text-3xl xl:text-4xl">{Movie.title}</h1>
                    <p>"<em>{Movie.tagline}</em>"</p>
                    <div className="flex flex-col justify-center items-start rounded-xl lg:w-[90%] bg-[#161733] gap-2 p-4 flex-wrap">
                        <h1 className="font-bold text-xl">About</h1>
                        <p className="text-sm sm:text-base">{Movie.overview}</p>
                        <ul className="flex flex-wrap gap-3 text-xs sm:text-base">
                            {Movie.release_date?.slice(0, 4)}
                            {Movie.genres?.map(g => (
                                <li key={g.id}> <span className="font-bold text-gray-400"> . </span>{g.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-start items-start lg:justify-between w-full lg:h-56 lg:w-[90%] mb-10 gap-2">
                        <div className="flex flex-col justify-center items-start rounded-xl h-full w-full lg:w-[30%] bg-[#161733] gap-2 p-4 flex-wrap">
                            <h1 className="font-bold text-xl">More Details</h1>
                            <p><strong>Runtime:</strong> {Movie.runtime} minutes</p>
                            <p><strong>Popularity:</strong> {Movie.popularity}</p>
                            <div className="flex flex-row justify-evenly items-center text-white gap-2">
                                <strong>Note:</strong> 
                                <img src={Star} className="w-3 h-3"/>
                                <p>{Movie.vote_average}</p>
                            </div>
                            <p><strong>Status:</strong> {Movie.status}</p>
                        </div>
                        <div className="flex flex-col justify-center items-start rounded-xl h-full w-full lg:w-[30%] bg-[#161733] gap-2 p-4 flex-wrap">
                            <h3>Companies:</h3>
                            <ul>
                                {Movie.production_companies?.map(pc => (
                                <li key={pc.id}>
                                    {pc.name} {pc.origin_country && `(${pc.origin_country})`}
                                </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center items-start rounded-xl h-full w-full lg:w-[30%] bg-[#161733] gap-2 p-4 flex-wrap">
                            <h3>Country:</h3>
                            <ul>
                                {Movie.production_countries?.map(c => (
                                <li key={c.iso_3166_1}>{c.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        {Movie.homepage && 
                            <button onClick={handleClick} type="button" className="cursor-pointer text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Official Website</button>

                        }
                        <Link to={"/"}>
                            <button type="button" className="cursor-pointer text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Back Home</button>
                        </Link>

                    </div>
                </div>
                <Footer/>
            </>
            }
            {loading && 
                <div className="flex justify-center items-center mx-auto h-screen">
                    <div class="w-10 h-10 border-4 border-[#161733] border-t-gray-300 rounded-full animate-spin"></div>
                </div>
            }
        </>
    );
}