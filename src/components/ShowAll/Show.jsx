import { useState } from 'react';
import Search from '../../assets/img/search.svg';
import Star from '../../assets/img/star.png';
import { useFilter } from "../../hooks/useEffect";
import { SearchFunct } from '../../services/Search';
import { Link } from 'react-router';
export function Show(){
    const { Movies: AllMovies, Error: err } = useFilter({ url:'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', });
    const [searchTerm, setSearchTerm] = useState("");
    let filteredMovies = AllMovies;
    filteredMovies = SearchFunct({
        search_term: searchTerm,
        movies: AllMovies,
    });
    const movieDetail = (id) => {
    }
    console.log("filteredMovies", filteredMovies);
    return (
        <>
            <ul>
                <div className="pt-10 sm:ml-10 ml-2 flex flex-col">
                    <h1 className="font-bold text-2xl text-white">All Movies</h1>
                    <div className='flex flex-col justify-center items-center p-5 text-amber-50 font-serif w-full min-w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
                        <div className='bg-[#161733] text-xs sm:text-sm md:text-sm lg:text-lg w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-10 p-2 flex flex-row gap-3'>
                            <img src={Search}/>
                            <input id='search_term' type='text' placeholder='Search through 300+ movies online' className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] border-none' onChange={(e) => setSearchTerm(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap text-white justify-center gap-3 sm:pt-5">
                        { filteredMovies && filteredMovies.length > 0 &&
                            filteredMovies.map((item,key) => (   
                                
                                <Link to={`/Details/${item.id}`}>
                                    <li key={key} className='cursor-pointer'>
                                        <div className="flex flex-col justify-center items-center rounded-xl w-[100%] bg-[#161733] gap-2 p-2 font-bold flex-wrap">
                                            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img here" className="w-40 rounded-sm"/>
                                            <h1 className='line-clamp-1 max-w-[170px]'>{item.original_title}</h1>
                                            <div className="flex flex-row justify-end items-start gap-3 text-gray-500">
                                                <div className="flex flex-row justify-evenly items-center text-white gap-2">
                                                    <img src={Star} className="w-3 h-3"/>
                                                    <p>{Math.trunc(item.vote_average * 10) / 10}</p>
                                                </div>
                                                <p> . </p>
                                                <p> En </p>
                                                <p> . </p>
                                                <p> {new Date(item.release_date).getFullYear()} </p>
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                                )
                            )
                        }
                    </div>
                    
                </div>
            </ul>
        </>
    );
}