import React, { useState } from 'react';

export default function Menu({color}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative z-10">
            <div className='flex justify-between py-5 px-10 items-center'>
                <h1 className={`text-4xl font-bold ${color} uppercase`}>TWICE</h1>
                <button onClick={toggleMenu} className={`${color}`} aria-label='Boton que abre el menu'>
                    <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="fixed bg-white inset-0 overflow-hidden">
                    <div className='flex justify-between py-5 px-10 items-center'>
                        <h1 className={`text-4xl font-bold ${color} uppercase`}>TWICE</h1>
                        <button onClick={toggleMenu} aria-label='Boton que cierra el menu' className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
                        <svg width="64px" height="64px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="16" height="16" id="icon-bound" fill="none"></rect> <polygon points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414 13.293,14.707 14.707,13.293 9.414,8 "></polygon> </g></svg>
                        </button>
                    </div>
                    <div className='flex justify-center mt-36 md:mt-0 h-[80vh] mx-auto md:items-center'>
                        <div className='flex flex-col space-y-2'>
                            <a href="/" className='text-5xl font-bold tracking-tight animate-fade-down'>Inicio</a>
                            <a href="/miembros/" className='text-5xl font-bold tracking-tight animate-fade-down'>Miembros</a>
                            <a href="/discografia/" className='text-5xl font-bold tracking-tight animate-fade-down'>Discografia</a>
                        </div>

                    </div>
                    <div className='flex absolute flex-col align-bottom gap-y-3 justify-end items-center mx-10 mb-8 bottom-1'>
                           <a target="_blank" href="https://www.youtube.com/c/twice"><i className="fa-brands fa-youtube text-2xl animate-fade-up animate-once"></i></a>
                           <a target="_blank" href="https://www.instagram.com/twicetagram"><i className="fa-brands fa-instagram text-2xl animate-fade-up animate-once"></i></a>
                           <a target="_blank" href="https://x.com/JYPETWICE"><i className="fa-brands fa-x-twitter text-2xl animate-fade-up animate-once"></i></a>
                           <a target="_blank" href="https://github.com/jeantpdev"><i className="fa-brands fa-github text-2xl animate-fade-up animate-once"></i></a>
                    </div>
                </div>
            )}

        </div>
    );
}
