import Pic from '../../assets/movies/One_Piece.jpg';
import '../../utils/Stroke.css';
export function Trending(){
    return (
        <>
        <h1 className="font-bold text-2xl text-white ml-10">Trending Movies</h1>
        <div className='flex flex-row gap-0 p-5'>
            <div className='flex flex-row w-[20%] justify-center items-center'>
                <p className='text-white font-bold font-[system-ui] text-[200px] text-stroke -mr-8'>1</p>
                <img src={Pic} className='w-45'/>
            </div>
            <div className='flex flex-row w-[20%] justify-center items-center'>
                <p className='text-white font-bold font-[system-ui] text-[200px] text-stroke -mr-8'>2</p>
                <img src={Pic} className='w-45'/>
            </div>
            <div className='flex flex-row w-[20%] justify-center items-center'>
                <p className='text-white font-bold font-[system-ui] text-[200px] text-stroke -mr-8'>3</p>
                <img src={Pic} className='w-45'/>
            </div>
            <div className='flex flex-row w-[20%] justify-center items-center'>
                <p className='text-white font-bold font-[system-ui] text-[200px] text-stroke -mr-8'>4</p>
                <img src={Pic} className='w-45'/>
            </div>
            <div className='flex flex-row w-[20%] justify-center items-center'>
                <p className='text-white font-bold font-[system-ui] text-[200px] text-stroke -mr-8'>5</p>
                <img src={Pic} className='w-45'/>
            </div>
        </div>
        </>
    );
}   