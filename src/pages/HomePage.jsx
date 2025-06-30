
import { Header } from '../components/Header/Header';
import { Trend } from '../components/Trending/Trend.jsx';
import { Popular } from '../components/Popular/Popular.jsx';
import { Show } from '../components/ShowAll/Show.jsx';
import { Footer } from '../components/Footer/Footer.jsx';
import { useEffect, useState } from 'react';
export function HomePage() {
  const [ loading, setLoading ] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    clearTimeout();
  },[])
  return (
    <>
      {!loading &&
        <>
          <Header/>
          <Trend/>
          <Popular/>
          <Show/>
          <Footer/>
        </>
      }
      {loading && 
          <div className="flex justify-center items-center mx-auto h-screen bg-[#06072B]">
              <div class="w-10 h-10 border-4 border-[#161733] border-t-gray-300 rounded-full animate-spin"></div>
          </div>
      }
    </>
  );
}