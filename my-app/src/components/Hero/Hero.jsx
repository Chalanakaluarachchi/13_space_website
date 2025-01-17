import React from 'react'
import Moonpng from "../../assets/mons_mouton.png" 
const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
        <div className='h-full flex justify-center items-center p-4'>
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='space-y-4 lg:pr-36'>
                <h1 data-aos="fade-up" className='text-5xl font-bold uppercase'>Orbite The Earth</h1>
                <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum magnam assumenda molestiae quis, eligendi sunt. Officiis nihil delectus cum, adipisci veritatis veniam voluptates laudantium corporis facere, alias accusamus, aperiam commodi!</p>
                <button data-aos="fade-up" data-aos-delay="500" className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-3 rounded-md duration-200'>Learn More</button>
                </div>
                <div></div>
            </div>
        </div>
        <img src={Moonpng} alt="" className='absolute right-0 bottom-0 w-full brightness-50 z-10 h-96'/>
       <div className='absolute bottom-0 w-full z-30 bg-gradint-to-b from- transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]'></div>
    </div>
  )
}

export default Hero