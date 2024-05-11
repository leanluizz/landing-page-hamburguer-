//Components
import Footer from '../components/Footer/footer';

//Images
import ImageHome from '../images/hamburguinho.png';
import Hungry from '../images/emotes/hungry.png';
import Play from '../images/emotes/play.png';
import Security from '../images/emotes/security.png';
import Happy from '../images/emotes/happy.png';
import Image from 'next/image';
import Hamburguer from '../images/demonstração/hamburguer.jpg';
import AiqFome from '../images/apps/aiqfome.png';
import Ifood from '../images/apps/ifood.png';
import Delivery from '../images/delivery/pexels-norma-mortenson-4393665.jpg';
import Running from '../images/delivery/running.gif';
import PersonOne from '../images/feedbacks/personOne.png';
import PersonTwo from '../images/feedbacks/personTwo.png';
import PersonThree from '../images/feedbacks/personThree.png';

//Fonts
import { roboto } from '../fonts';

//Animates
import 'animate.css';
import { useEffect } from 'react';

export default function HomePage() {

        const animateRunning = () => {
            const running: any = document.querySelector('.running');
            const text: any = document.querySelector('.text-animation');
            const run: any = document.querySelector('#run');
            run?.play()
            text.style.display = 'none'
            let position = 0;
            const interval = setInterval(() => {
                position += 1;
                if (position <= 100) {
                    running.style.left = `${position}%`;
                } else {
                    clearInterval(interval);
                    // Reinicia a animação quando completada
                    setTimeout(animateRunning, 1000); // Espere 1 segundo antes de reiniciar
                }
            }, 60); // Ajuste a velocidade da animação conforme necessário
    
            return () => clearInterval(interval); // Limpar o intervalo quando o componente for desmontado
        };
  

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

    const RotateOne = (e: any) => {
        const cards = document.querySelectorAll('.card');
        const cardArray = Array.from(cards); // ou const cardArray = [...cards];
        const go = document.getElementById('go') as HTMLAudioElement;
        const back = document.getElementById('back') as HTMLAudioElement;
        go.play()
        setTimeout(() => {
            back.play()
        }, 700);
        cardArray.forEach((card: any) => {
            // Verifica se o texto 'Ricardo' está presente no segundo filho do card
            if (card.children[1] && card.children[1].textContent.includes('Ricardo')) {
                card.style.transition = 'transform 0.5s ease'; // Adiciona uma transição suave
                card.style.transform = 'rotateY(360deg)';
    
                // Define um atraso para voltar a rotação para 0 graus
                setTimeout(() => {
                    card.style.transform = 'rotateY(0deg)';
                }, 500); // Tempo igual à duração da transição
            }
        });
    };
    const RotateTwo = (e: any) => {
        const cards = document.querySelectorAll('.card');
        const cardArray = Array.from(cards); // ou const cardArray = [...cards];
        const go = document.getElementById('go') as HTMLAudioElement;
        const back = document.getElementById('back') as HTMLAudioElement;
        go.play()
        setTimeout(() => {
            back.play()
        }, 700);

        cardArray.forEach((card: any) => {
            // Verifica se o texto 'Ricardo' está presente no segundo filho do card
            if (card.children[1] && card.children[1].textContent.includes('Han-Shi')) {
                card.style.transition = 'transform 0.5s ease'; // Adiciona uma transição suave
                card.style.transform = 'rotateY(360deg)';
    
                // Define um atraso para voltar a rotação para 0 graus
                setTimeout(() => {
                    card.style.transform = 'rotateY(0deg)';
                }, 500); // Tempo igual à duração da transição
            }
        });
    };
    const RotateThree = (e: any) => {
        const cards = document.querySelectorAll('.card');
        const cardArray = Array.from(cards); // ou const cardArray = [...cards];
        const go = document.getElementById('go') as HTMLAudioElement;
        const back = document.getElementById('back') as HTMLAudioElement;
        go.play()
        setTimeout(() => {
            back.play()
        }, 700);

        cardArray.forEach((card: any) => {
            // Verifica se o texto 'Ricardo' está presente no segundo filho do card
            if (card.children[1] && card.children[1].textContent.includes('Ana')) {
                card.style.transition = 'transform 0.5s ease'; // Adiciona uma transição suave
                card.style.transform = 'rotateY(360deg)';
    
                // Define um atraso para voltar a rotação para 0 graus
                setTimeout(() => {
                    card.style.transform = 'rotateY(0deg)';
                }, 500); // Tempo igual à duração da transição
            }
        });
    };
    
    
    
    return (
        <div className='animate__animated animate__zoomIn'>
            <audio id='zoom'>
                <source src="/audios/zoom.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
            <audio id='run'>
                <source src="/audios/running.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
            <audio id='go'>
                <source src="/audios/go.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
            <audio id='back'>
                <source src="/audios/back.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
            <div className="md:m-12 md:flex justify-center rounded-lg p-1 drop-shadow-2xl bg-gradient-to-r from-slate-200 to-slate-100 hover:from-orange-500 hover:to-yellow-500">
                <Image className="animate__animated animate__rollIn hidden md:block w-fit m-6 p-12" src={ImageHome} alt="photo" />
                <div className='flex-col items-center'>
                    <h1 className="w-64 text-6xl m-1">
                        Saboreie momentos de pura indulgência em cada mordida!
                    </h1>
                    <div className='botaoZoom flex md:hover:scale-125 transition'>
                        <button className={`${roboto.className} botaoZoom animate__animated animate__bounceIn drop-shadow-2xl p-2 m-4 rounded text-1xl text-white bg-gradient-to-r from-orange-600 via-orange-600 to-orange-600 hover:from-amber-900 hover:to-amber-900`}>
                            Quero um!
                        </button>
                        <button className={`${roboto.className} botaoZoom animate__animated animate__bounceIn drop-shadow-2xl p-2 m-4 rounded text-1xl text-white bg-gradient-to-r from-orange-600 via-orange-600 to-orange-600 hover:from-amber-900 hover:to-amber-900`}>
                            Hambúrgueres
                        </button>
                    </div>
                </div>
            </div>
            <main
                style={{ display: 'flex', flexDirection: window.innerWidth < 700 ? 'column-reverse' : 'row' }}
                className='md:h-dvh items-center justify-evenly bg-orange-500'>
                <div className=''>
                    <p className='p-2 text-3xl w-80'>
                        Sinta o delicioso aroma, experimente a perfeição em cada mordida. Somos reconhecidos como uma das principais hamburguerias da cidade, onde a qualidade e a paixão se encontram em cada hambúrguer. Venha saborear o melhor e descubra por que somos uma escolha tão apreciada pelos amantes da boa comida. Seja bem-vindo à nossa casa do sabor!
                    </p>
                </div>
                <div>
                    <Image className='p-2 rounded-full w-80' src={Hamburguer} alt='photo' />
                </div>
            </main>

            <div className='rtl'>
                <div className=' relative flex m-5 md:m-10 '>
                    <div className='w-full p-12 text-center bg-gradient-to-r from-orange-500 via-orange-500 to-yellow-300'>
                        <Image className='animate-bounce absolute top-0 right-0  rotate-45 w-16 h-16 md:w-32 md:h-32' src={Hungry} alt='hungry' />
                        <h1 className='text-balance text-center text-xl'>Com fome? Temos diversas lanchonetes pertinho de você!</h1>
                    </div>
                </div>
                <div className=' relative flex m-5 md:m-10 '>
                    <div className='w-full p-12 text-center bg-gradient-to-r from-indigo-500 via-indigo-500 to-slate-300'>
                        <Image className='animate-bounce absolute top-0 right-0 rotate-12 w-16 h-16 md:w-32 md:h-32' src={Play} alt='hungry' />
                        <h1 className='text-balance text-center text-xl'>So aqui você encontra os melhores brinquedos e melhor ambiente pros seus filhos comerem e brincarem</h1>
                    </div>
                </div>
                <div className=' relative flex m-5 md:m-10 '>
                    <div className='w-full p-12 text-center bg-gradient-to-r from-red-700 via-red-600 to-red-400'>
                        <Image className='animate-bounce absolute top-0 right-0 rotate-0 w-16 h-16 md:w-32 md:h-32' src={Security} alt='hungry' />
                        <h1 className='text-balance text-center text-xl'>0% de perigo, sempre com alguém superviosionando as crianças durante a diversão!</h1>
                    </div>
                </div>
                <div className=' relative flex m-5 md:m-10 '>
                    <div className='w-full p-12 text-center bg-gradient-to-r from-green-600 via-green-500 to-slate-300'>
                        <Image className='animate-bounce absolute top-0 right-0  rotate-45 w-16 h-16 md:w-32 md:h-32' src={Happy} alt='hungry' />
                        <h1 className='text-balance text-center text-xl'>100% de segurança e diversão pra sua familia!</h1>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden mt-12 bg-orange-500 flex justify-between items-center'>
                <div className='md:w-3/6'>
                    <Image className='hidden md:block opacity-60 h-screen' src={Delivery} alt='deliveryman'/>
                </div>
                <div className='md:w-3/6'>
                    <div className='flex items-center'>
                    <Image onClick={animateRunning} className='relative running w-48' src={Running} alt='running'/>
                    <p className='animate__animated animate__flash animate__infinite	infinite animate__slower	3s text-animation'>Clique no hamburguerzito</p>
                    </div>
                    <h1 className='text-center text-3xl p-2'>Ta com fome e não consegue vir?</h1>
                    <h2 className='text-center text-3xl p-2'>Estamos prontos pra entregar na sua casa</h2>
                <div className='flex justify-center'>
                <Image className='md:hover:scale-125 transition cursor-pointer botaoZoom w-24 md:w-40 p-2 rounded-full' src={AiqFome} alt='aiqfome'/>
                <Image className='md:hover:scale-125 transition cursor-pointer botaoZoom w-24 md:w-40 p-2 rounded-full' src={Ifood} alt='ifood'/>
                </div>
                </div>
            </div>
            <div className='md:mt-12 md:h-dvh'>
                <h1 className='p-6 m-6 text-6xl'>Feedback</h1>
                <p className='p-4 m-6 text-4xl'>Considerados a melhor hamburgueria da cidade, veja abaixo o que alguns de nossos clientes comentaram sobre...</p>
                <button className='m-12 text-2xl p-1 text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded botaoZoom'>Avaliar</button>
                <div className='pl-12 flex items-center'>
                {Array.from({ length: 5 }, (_, index) => (
                <svg key={index} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
            ))}
            </div>
            <div className='md:flex'>
                <div onClick={RotateOne} className='flex-col p-12 card rounded-t-lg'>
                    <div>
                        <Image priority className='rounded-t-lg' src={PersonOne} alt='person'/>
                    </div>
                    <div className='p-3 text-2xl rounded-b-lg bg-slate-200'>
                    <p className='p-2 text-3xl'>Ricardo</p>
                        "Estes hambúrgueres são incríveis! Eu simplesmente amei o sabor e a textura. Definitivamente vou voltar para mais!"
                    </div>
                </div>
                <div onClick={RotateTwo} className='flex-col p-12 card rounded-t-lg'>
                    <div>
                        <Image className='rounded-t-lg' src={PersonTwo} alt='person'/>
                    </div>
                    <div className='p-3 text-2xl rounded-b-lg bg-slate-200'>
                    <p className='p-2 text-3xl'>Han-Shi</p>
                    "Que delícia esses hambúrgueres! Estou encantada com o sabor e a qualidade. Com certeza!"
                    </div>
                </div>
                <div onClick={RotateThree} className='flex-col p-12 card rounded-t-lg'>
                    <div>
                        <Image className='rounded-t-lg' src={PersonThree} alt='person'/>
                    </div>
                    <div className='p-3 text-2xl rounded-b-lg bg-slate-200'>
                    <p className='p-2 text-3xl'>Ana</p>
                    "Estou apaixonada por esses hambúrgueres! Sabor incrível e qualidade excepcional. Com certeza, voltarei em breve!"
                    </div>
                </div>
            </div>
            </div>
            <div className='md:mt-96 md:mb-52'>
            <h1 className='bg-orange-500  text-center text-6xl'>Patrocinadores</h1>
            <div className='flex items-center justify-evenly p-12'>
                {Array.from({ length: 3 }, (_, index) => (
                    <>
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="orange" className="bi bi-award-fill" viewBox="0 0 16 16">
                    <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                  </svg>
                  <h1 className='text-xl'>Patrocinador</h1>
                  </>
                ))}
            </div>
            </div>
            <Footer />
        </div>
    )
}