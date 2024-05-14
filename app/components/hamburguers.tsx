//React
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';

//Components 
import Footer from '@/app/components/Footer/footer';
import Modal from './Features/modal';

//Images
import Hamburguer from '@/app/images/delivery/hamburguer.jpg';
import icon from '@/app/favicon.ico';

export default function Hamburguers(){

    const [Item, setItem] = useState<any | ReactNode>(0)
    const [modalOpen, setModalOpen] = useState<any | Boolean>(false);
    const [modalConfirmOpen, setModalConfirmOpen] = useState<any | Boolean>(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);

    };
    useEffect(() => {
        const eat = document.getElementById('eating') as HTMLAudioElement;
        const Eat = () => eat.play();

        const Eating = document.querySelectorAll('.eating');
        Eating?.forEach((e: any) => {
            e.addEventListener('click', Eat);
        })

        return () => {
            Eating?.forEach((e: any) => {
                e.removeEventListener('click', Eat);
            })
        };
    }, []);
    useEffect(() => {
        const zoom = document.getElementById('zoom') as HTMLAudioElement;
        const Zoom = () => zoom.play();

        const botaoZoom = document.querySelectorAll('.botaoZoom');
        botaoZoom?.forEach((e: any) => {
            e.addEventListener('mouseenter', Zoom);
        })

        return () => {
            botaoZoom?.forEach((e: any) => {
                e.removeEventListener('mouseenter', Zoom);
            })
        };
    }, []);
    function Buy (){
        const marketCar = document.querySelector('.bi-cart-fill');
        setItem( (a: any)=> {
            return a + 1
        })
        return marketCar?.classList.add('animate-bounce')
    }
    useEffect(() => {
        document.body.addEventListener('click', () => {
            const marketCar = document.querySelector('.bi-cart-fill');
            return marketCar?.classList.remove('animate-bounce')
        })
    }, [])
    useEffect(() => {
        document.body.addEventListener('click', () => {
            setModalConfirmOpen(false)
        })
    }, [])
    return(
        <>
        <Modal isOpen={modalOpen} display={'true'} onClose={closeModal} onBuy={() => {setItem(0) ,setModalOpen(false), Item != 0 ? setModalConfirmOpen(true): null}}>
        <h2 className='text-4xl'>Carrinho</h2>
        <p className='text-xl'>Quantos hamburguers você vai querer?</p>
        <div className='flex items-center'>
        <Image className="cursor-pointer w-16 mt-5 ml-5" src={icon} alt="icon" />
        <div className='flex'>
        <input className='mt-5 ml-3 bg-orange-400 w-16 rounded text-center text-2xl' type="number" name="items" value={Item} id="item" />
            <div className='flex-col items-center mt-5 ml-2'>
            <svg onClick={() => setItem((a: any) => a + 1)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
            </svg>
            <svg onClick={() => setItem((a: any) => a > 0 ?  a - 1 : null)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            </div>
        </div>
        </div>
        <div className='m-5 flex flex-col'>
            <input required className='border border-orange-600 rounded pl-2 m-1' type="text" placeholder='Bairro' />
            <input required className='border border-orange-600 rounded pl-2 m-1' type="text" placeholder='Rua' />
            <input required className='border border-orange-600 rounded text-center m-1 w-8' type="number" placeholder='Nº' />
        </div>
        </Modal> 
        <Modal isOpen={modalConfirmOpen} display={'false'} onClose={!closeModal}>
            <div className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="green" className="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
            </svg>
            <div>
            <h1 className='text-center text-3xl'>Hamburguers comprados!</h1>
            <h2 className='text-center text-2xl'>Clique na tela pra fechar!</h2>
            </div>
            </div>
        </Modal>
                <audio id='eating'>
                    <source src="/audios/eating.mp3" type="audio/mpeg" />
                    Seu navegador não suporta o elemento de áudio.
                </audio>
            <audio id='zoom'>
                <source src="/audios/zoom.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
        <div className="">
            <div className='flex justify-between'>
            <h1 className="p-5 animate__animated animate__slideInLeft text-5xl text-center md:text-start md:p-12">Hamburguers</h1>
            <div className='m-6'>
                <div className={`${Item <= 0 ? 'hidden' : 'block'} ml-12 rounded-full bg-red-600 w-5 h-5`}>
                    <p className='text-white text-center'>{Item}</p>
                </div>
            <svg onClick={() => openModal()} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="orange" className="hover:scale-125 hover:animate-bounce cursor-pointer bi bi-cart-fill" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
            </div>
            </div>
            <div className='animate__animated animate__jackInTheBox md:flex items-center justify-center'>
            {Array.from({length:3}, (_, index) => (
                     <div key={index} className='botaoZoom hover:scale-105 transition flex-col p-12 card rounded-t-lg'>
                     <div>
                         <Image className='rounded-t-lg' src={Hamburguer} alt='person'/>
                     </div>
                     <div className='p-3 text-2xl rounded-b-lg bg-slate-200'>
                     <p className='p-2 text-3xl'>X-burguer</p>
                     <p className='p-2'>R$ 8,00</p>
                     <div className='text-end p-4'>
                     <button onClick={Buy} className='eating bg-gradient-to-b from-red-600 hover:from-red-500 hover:to-red-600 to-red-400 rounded p-2'>Comprar</button>
                     </div>
                     </div>
                 </div>
            ))}
            </div>
        <Footer />
        </div>
        </>
    )
}