import React from 'react'
import Blue from '../assets/Blue Shape.svg'
import Logo from '../assets/Logo.svg'
import Checkmark from '../assets/Checkmark.svg'
import HelpAvatar from '../assets/360_F_1116617297_HdEph3xGOZRYxZsiJ28fpvZebBV9Rxi4.jpg'
import Hero from '../assets/Hero Image (Model).png'
import Pink from '../assets/Pink Shape.svg'
import Purple from '../assets/Purple Shape.svg'
import { RxHamburgerMenu } from "react-icons/rx";



const Home = () => {
    return (
        <div  className='bg-amber-50  '>
            <div className='min-h-screen px-6 py-6 flex flex-col gap-16 md:px-9 md:py-9 lg:px-18 lg:py-6 '>
                <header className='flex justify-between lg:justify-between'>
                    <div className='flex justify-between gap-6 '>
                        <img className={'w-25 lg:w-30'} src={Logo} alt="logo" />
                        <button className={'bg-gradient-to-r from-orange-400 to-red-400 text-white  px-2 py-2 rounded-2xl font-lato'}>Hosterr is hiring !</button>
                    </div>
                    <div>
                        <RxHamburgerMenu className=' w-6 h-10 text-black lg:hidden' />
                    </div>
                    <ul className='hidden lg:flex lg:px-2.5 lg:py-2 lg:gap-6 font-lato text-md'>
                        <a href='#'>Plans</a>
                        <a href='#'>Find Domain</a>
                        <a href='#'> Why Hosterr</a>

                    </ul>
                    <div className={'hidden lg:flex gap-6 '}>
                        <a className={'lg:px-2.5 lg:py-2 lg:gap-6 font-lato text-md'} href="">Sign in</a>
                        <button className={'bg-blue-500 rounded-md px-4  text-white  font-lato'}>Join Waitlist</button>
                    </div>

                </header>

                <main className='flex flex-col gap-12 lg:flex-row '>
                     <div className={'flex items-center justify-center lg:order-2 lg:flex-1    '}>
                        <img  className={'h-64 -rotate-45   md:h-72 lg:h-82'}  src={Blue} alt="Blue"/>
                        <img  className={'absolute h-64 -rotate-30 md:h-72 lg:h-82 '} src={Pink} alt="Pink"/>
                        <img  className={'absolute h-64 -rotate-15  md:h-72 lg:h-82'} src={Purple} alt="Purple"/>
                        <img  className={'absolute h-64  md:h-72 lg:h-82'}src={Hero} alt="Hero"/>
                     </div>
                    <div className={'flex flex-col gap-6 lg:flex-1 '}>
                        <h1 className={'text-5xl font-bold leading-tight font-playfair'}>
                            Host your website in less than 5 minutes.
                        </h1>
                        <p className={'font-lato text-gray-400'}>With Hosterr , get your website up and running in no less than 5 minitues with the most competitive pricing packages available online.</p>
                        <form action="" className={'flex flex-col gap-4 md:flex-row'}>
                            <input type="email" placeholder="Enter your email address" className=' bg bg-white rounded-md px-4 py-3 placeholder:text-gray-400 md:px-22 '/>
                            <button className={'bg-blue-500 rounded-md px-4 py-3 text-white font-medium font-lato'}>Join Waitlist</button>
                        </form>
                        <div className={'flex gap-2 font-medium font-lato text-gray-500'}>
                            <img src={Checkmark} alt="Checkmark"/>
                            <p>No spam ever . Subscribe anytime</p>
                        </div>
                    </div>
                </main>
                <footer className={'flex flex-col gap-12 md:flex-row md:justify-between lg:mt-16 '}>
                    <ul className={'flex items-center justify-start  gap-4 font-medium font-lato'}>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                    </ul>
            <div className={'flex items-center justify-start gap-4  font-medium font-lato'}   >

                <img className={'w-18 h-13 rounded-[50%]' } src={HelpAvatar} alt="HelpAvatar"/>
                <div>
                    <p>Do you Have any Questions ? </p>
                    <a href="#" className={'font-bold'}>Talk to a specialist!</a>

                </div>
                
            </div>

                </footer>
            </div>
        </div>
    );
};

export default Home
