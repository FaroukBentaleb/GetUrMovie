import { useFilter } from '../../hooks/useEffect';
import Star from '../../assets/img/star.png';
export function Popular(){
    const { Movies: PopularMovies, Error: err } = useFilter({ url:'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', });
    return (
        <>
            <ul>
                <div className="pt-10 sm:ml-10 ml-2 flex flex-col">
                    <h1 className="font-bold text-2xl text-white">Popular Movies</h1>
                    <div className="flex flex-row flex-wrap text-white justify-center gap-3 pt-5">
                        {PopularMovies && PopularMovies.length > 0 &&
                            PopularMovies.map((item,key) => (   
                                
                                <li key={key}>
                                    <div className="flex flex-col justify-center items-center rounded-xl w-[100%] bg-[#161733] gap-2 p-2 sm:m-5 font-bold flex-wrap">
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
                                )
                            )
                        }
                    </div>
                </div>
            </ul>  
        </>
    );
}