import React from 'react'
import './Home.css'
import Navbar from '../Components/Navbar.jsx'
import banner_image from '../assets/ban1.jpg'
import hero_title from '../assets/brea-removebg-preview.png'
import play_icon from '../assets/play_icon.png'
import more_info_icon from '../assets/info_icon.png'
import TitleCards from '../Components/TitleCards.jsx'
import Footer from '../Components/Footer.jsx'
function Home() {
  return (
    <div>
      <Navbar/>
      <div className='hero'>
        <img src={banner_image} alt='hero' className='banner-img' />
        <div className='hero-caption'>
          <img src={hero_title} alt='' className='caption-img'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing  unde magni quas, hic a eius excepturi praesentium nesciunt, quod, cupiditate sapiente.</p>
          <div className='hero-btns'>
            <button className='btn' ><img src={play_icon} alt=''></img>play</button>
            <button className='btn dark-btn'><img src={more_info_icon} alt=''/>More Info</button>
          </div>
          
        </div>
        
      </div>
        
<TitleCards/>
<div className='morecards'>
<TitleCards title={"upcoming movies"} category={"popular"}/>
<TitleCards title={"BlockBusterMovies"} category={"top_rated"}/>
<TitleCards title={"Only on Netflix"} category={"upcoming"}/>     
</div>
      <Footer/>
    </div>
  )
}

export default Home
