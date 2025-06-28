import './Header.css';
import Poster from '../../assets/img/poster.jpg';
import Search from '../../assets/img/search.svg';
export function Header(){
    return(
        <>
            <header>
                <div className='flex flex-col gap-4 justify-center items-center sm:p-28 p-10 text-amber-50 font-serif w-full min-w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
                    <img src={Poster} className='w-[100%] sm:w-[70%] md:w-[50%] lg:w-[40%]'/>
                    <p>
                        All the <span className="text-fuchsia-500">movies</span> you want, Right here!
                    </p>
                </div>
            </header>  
        </>
    );
}