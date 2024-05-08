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
  const [barLinksMenuWidth, setBarLinksMenuWidth] = useState(`${30}%`)
  function handleMouseMove(event: any) {
      const navbarRect = event.currentTarget.getBoundingClientRect();
      const mouseX = event.clientX - navbarRect.left - 50;
      setBarLinksMenuMarginLeft(mouseX)
    }
    const TradePages = (e: any) => {
      const { target } = e;
      const namePage = target?.children[0]?.innerHTML;
      namePage == 'Home' ?  setPage(<HomePage />) : null;
      namePage == 'Hamburgueres' ?  setPage('Hamburgueres') : null;
      namePage == 'Contact' ?  setPage('Contact') : null; 
    }
    const TradePagesClick = (e: any) => {
      const { target } = e;
      const namePage = target?.innerHTML;
      namePage == 'Home' ?  setPage(<HomePage />) : null;
      namePage == 'Hamburgueres' ?  setPage('Hamburgueres') : null;
      namePage == 'Contact' ?  setPage('Contact') : null

    }
  return (
    <>
      <nav>

          <div className="md:flex md:justify-between items-center pr-20">
              <div className="flex-col justify-between">
                  <div className='flex items-center'>
                  <Image className="cursor-pointer w-16 mt-5 ml-5" src={icon} alt="icon" />
                  <h1 className="text-3xl p-10">Hambúrguer</h1>
                  </div>
              </div>
              
              <ul>
                  <div
                      className="flex"
                      onMouseMove={handleMouseMove}
                  >
                      <li onClick={TradePagesClick} onMouseEnter={TradePages} className="cursor-pointer text-xl p-8"><a>Home</a></li>
                      <li onClick={TradePagesClick} onMouseEnter={TradePages} className="cursor-pointer text-xl p-8"><a>Hamburgueres</a></li>
                      <li onClick={TradePagesClick} onMouseEnter={TradePages} className="cursor-pointer text-xl p-8"><a>Contact</a></li>
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
