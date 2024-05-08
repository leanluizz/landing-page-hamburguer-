//Images
import ImageHome from '../images/hamburguinho.png';
import Hungry from '../images/emotes/hungry.png';
import Play from '../images/emotes/play.png';
import Security from '../images/emotes/security.png';
import Happy from '../images/emotes/happy.png';
import Image from 'next/image';

//Fonts
import { roboto } from '../fonts';

//Animates
import 'animate.css';

export default function HomePage () {
    return(
        <div className='animate__animated animate__zoomIn'>
        <div className="md:flex justify-center rounded-lg p-1 drop-shadow-2xl bg-gradient-to-r from-slate-200 to-slate-100 hover:from-orange-500 hover:to-yellow-500"> 
        <Image className="animate__animated animate__rollIn hidden md:block w-fit m-6 p-12" src={ImageHome} alt="photo" />
        <div className='flex-col items-center'>
        <h1 className="w-64 text-6xl m-1">
        Saboreie momentos de pura indulgência em cada mordida!
        </h1>
        <div className='flex md:hover:scale-125 transition'>
        <button className={`${roboto.className} animate__animated animate__bounceIn drop-shadow-2xl p-2 m-4 rounded text-1xl text-white bg-gradient-to-r from-orange-600 via-orange-600 to-orange-600 hover:from-amber-900 hover:to-amber-900`}>
            Quero um!
        </button>
        <button className={`${roboto.className} animate__animated animate__bounceIn drop-shadow-2xl p-2 m-4 rounded text-1xl text-white bg-gradient-to-r from-orange-600 via-orange-600 to-orange-600 hover:from-amber-900 hover:to-amber-900`}>
            Hambúrgueres
        </button>
        </div>
        </div>
        </div>
        <div className='rtl'>
            <div className=' relative flex m-5 md:m-10 '>
                <div className='w-full p-12 text-center bg-gradient-to-r from-orange-500 via-orange-500 to-yellow-300'>
                <Image className='absolute top-0 right-0  rotate-45 w-16 h-16 md:w-32 md:h-32' src={Hungry} alt='hungry'/>
                <h1 className='text-balance text-center text-xl'>Com fome? Temos diversas lanchonetes pertinho de você!</h1>
                </div>
            </div>
            <div className=' relative flex m-5 md:m-10 '>
                <div className='w-full p-12 text-center bg-gradient-to-r from-indigo-500 via-indigo-500 to-slate-300'>
                <Image className='absolute top-0 right-0 rotate-12 w-16 h-16 md:w-32 md:h-32' src={Play} alt='hungry'/>
                <h1 className='text-balance text-center text-xl'>So aqui você encontra os melhores brinquedos e melhor ambiente pros seus filhos comerem e brincarem</h1>
                </div>
            </div>
            <div className=' relative flex m-5 md:m-10 '>
                <div className='w-full p-12 text-center bg-gradient-to-r from-red-700 via-red-600 to-red-400'>
                <Image className='absolute top-0 right-0 rotate-0 w-16 h-16 md:w-32 md:h-32' src={Security} alt='hungry'/>
                <h1 className='text-balance text-center text-xl'>0% de perigo, sempre com alguém superviosionando as crianças durante a diversão!</h1>
                </div>
            </div>
            <div className=' relative flex m-5 md:m-10 '>
                <div className='w-full p-12 text-center bg-gradient-to-r from-green-600 via-green-500 to-slate-300'>
                <Image className='absolute top-0 right-0  rotate-45 w-16 h-16 md:w-32 md:h-32' src={Happy} alt='hungry'/>
                <h1 className='text-balance text-center text-xl'>100% de segurança e diversão pra sua familia!</h1>
                </div>
            </div>
        </div>
        </div>
    )
}