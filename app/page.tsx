'use client'
//React
import { useState } from 'react';
import Image from 'next/image';

//Components
import HomePage from './components/home';

//Images
import icon from './favicon.ico';

//Animates
import 'animate.css';

export default function Home() {


  const [Page , setPage] = useState<any>(<HomePage />)
  const [barLinksMenuMarginLeft, setBarLinksMenuMarginLeft] = useState(0);
  const [barLinksMenuWidth, setBarLinksMenuWidth] = useState(`${window.innerWidth < 800 ? 100 : 30}%`)
  function handleMouseMove(event: any) {
      const navbarRect = event.currentTarget.getBoundingClientRect();
      const mouseX = event.clientX - navbarRect.left - 50;
      window.innerWidth < 800 ? null : setBarLinksMenuMarginLeft(mouseX);  
    }
    const TradePages = (e: any) => {
      const { target } = e;
      const namePage = target.children[0].innerHTML;
      namePage == 'Home' ?  setPage(<HomePage />) : null;
      namePage == 'Hamburgueres' ?  setPage('Hamburgueres') : null;
      namePage == 'Contact' ?  setPage('Contact') : null; 
    }
  return (
    <>
      <nav>
          <div className="flex justify-between items-center pr-20">
              <div className="flex-col justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="animate__animated animate__headShake cursor-pointer block md:hidden bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
                  <div className='flex items-center'>
                  <Image className="cursor-pointer w-16 mt-5 ml-5" src={icon} alt="icon" />
                  <h1 className="text-3xl p-10">Hambúrguer</h1>
                  </div>
              </div>
              
              <ul>
                  <div
                      className="hidden md:flex"
                      onMouseMove={handleMouseMove}
                  >
                      <li onMouseEnter={TradePages} className="cursor-pointer text-xl p-8"><a>Home</a></li>
                      <li onMouseEnter={TradePages} className="cursor-pointer text-xl p-8"><a>Hamburgueres</a></li>
                      <li onMouseEnter={TradePages} className="cursor-pointer text-xl p-8"><a>Contact</a></li>
                  </div>
                  <hr style={{ width:barLinksMenuWidth, marginLeft: barLinksMenuMarginLeft }} className="border border-orange-500" />
              </ul>
          </div>
      </nav>
     <div>
      {Page}
     </div>
      </>
  );
}
