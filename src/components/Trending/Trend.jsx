import { useFilter } from '../../hooks/useEffect';
import Star from '../../assets/img/star.png';
import Pic from '../../assets/movies/One_Piece.jpg';
import '../../utils/Stroke.css';
export function Trend(){
    const { Movies: TrendMovies, Error: err } = useFilter({ url:'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', });
    return (
        <>
            <h1 className="font-bold text-2xl text-white ml-10">Top Rated Movies</h1>
        <ul>  
    <div className='flex flex-col sm:flex-row flex-wrap gap-5 p-5 w-full justify-center'>
        { TrendMovies.length &&
            TrendMovies.slice(0, 5).map((item,key) => (
                <li key={key}>
                    <div className='flex flex-row w-full sm:w-[15%] min-w-fit justify-center items-center flex-shrink-0'>
                        <p className='text-white font-bold font-[system-ui] text-[150px] sm:text-[200px] text-stroke -mr-4 sm:-mr-8'>{key+1}</p>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className='w-40 sm:w-48'/>
                    </div>
                </li>
                )
            )
        }
    </div>
</ul>
        </>
    );
}