import React from 'react'
import bgVideo from "./assets/earth.mp4";
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import Banner from './components/Banner/Banner.jsx';
import Banner2 from './components/Banner/Banner2.jsx';
import Footer from './components/Footer/Footer.jsx';
import "aos/dist/aos.css"
import AOS from "aos";
const App = () => {

  React.useEffect(()=> {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  })
  return (
    <div>
      <div className='h-[900px] relative'>
        <video autoPlay loop muted className="fixed right-0 top-0 h-[700px] w-full object-cover z[-1]">
          <source src={bgVideo} type='video/mp4' />
        </video>
    <Navbar/>
    <Hero/>
      </div>

      {/*services card section*/}
      <Services/>
      <Banner/>
      <Banner2/>
      <Footer/>
      
    </div>
  )
}

export default App