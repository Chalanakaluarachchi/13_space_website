import React from 'react'
import { FaReact } from "react-icons/fa";
import wave from "../../assets/wave.gif"
import Moonpng from "../../assets/moonsurface.jpeg"

const ServicesData = [
    {
        title: "HST",
        content:"300-1500km",
        description:"Used for astronomical observations,capturing stunning images of the universe.",
        icon: <FaReact className="text-7xl" />,
        aosDelay: "300",
    },

    {
        title: "GAS",
        content:"300-1500km",
        description:"Used for astronomical observations,capturing stunning images of the universe.",
        icon: <FaReact className="text-7xl" />,
        aosDelay: "300",
    },

    {
        title: "NASA",
        content:"300-1500km",
        description:"Used for astronomical observations,capturing stunning images of the universe.",
        icon: <FaReact className="text-7xl" />,
        aosDelay: "300",
    }
]
const Services = () => {
  return (
    <div className='bg-black text-white relative z-50'>
        <div className='container'>
            <div className='min-h-[400px]'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10'>
                    {
                       ServicesData.map(
                            (data, index) => (
                                <div data-aos="fade-up" data-aos-delay={data.aosDelay} className='min-h-[180px] flex flex-col gap-2 justify-center items-center bg-sky-900 rounded-xl backdrop-blur-sm text-center text-2xl py-6 px-3'> 
                                        {data.icon}
                                    <h1>{data.title}</h1>
                                    <p>{data.content}</p>
                                    <p className='text-sm'>{data.description}</p>
                                </div>
                            )
                        )
                    }
                </div>
                <img src={wave} alt=""
                className='h-[200px] w-full object-cover mix-blend-screen-translate-y-24 relative z-[0]'/>
            </div>
        </div>
        {/*surgace section*/}
       
        
        </div>

        
  )
}

export default Services