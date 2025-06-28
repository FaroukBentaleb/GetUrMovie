import LinkedinPic from '../../assets/img/linkedin.png';
import FacebookPic from '../../assets/img/facebook.png';
import InstagramPic from '../../assets/img/instagram.png';
export function Footer(){
    const redirectLinkedin = () => {
        window.open("https://www.linkedin.com/in/farouk-bentaleb/", "_blank");
    }
    const redirectInstagram = () => {
        window.open("https://www.instagram.com/bentalebfarouk/", "_blank");
    }
    const redirectFacebook = () => {
        window.open("https://www.facebook.com/farouk.bentaleb.90", "_blank")
    }
    return(
        <>
            <div className="flex flex-col h-44 justify-center items-center text-white font-bold sm:text-xl text-lg border-t mt-5 gap-2">
                <p>Farouk Bentaleb</p>
                <p>© {new Date().getFullYear()} | All Rights Reserved! </p>
                    <div className='flex gap-2'>
                        <img className="w-8 border rounded-2xl bg-white hover:border-[#161733] active:bg-[#161733] cursor-pointer" src={LinkedinPic} alt="linkedin" onClick={redirectLinkedin}/>
                        <img className="w-8 border rounded-2xl bg-white hover:border-[#161733] active:bg-[#161733] cursor-pointer" src={FacebookPic} alt="Facebook" onClick={redirectFacebook}/>
                        <img className="w-8 border rounded-2xl bg-white hover:border-[#161733] active:bg-[#161733] cursor-pointer" src={InstagramPic} alt="Instagram" onClick={redirectInstagram}/>
                    </div>
            </div>
        </>
    );
}