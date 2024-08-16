import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Us</h2>
            <h2 className='about-title fs-26 ls-1'>Welcome to Liber – Your Gateway to the World of Ebooks</h2>
            <p className='fs-17'>At Liber, we believe in the transformative power of reading. Our mission is to make literature accessible to everyone, anywhere, anytime. We understand that books are more than just words on a page; they are windows to new worlds, catalysts for imagination, and keys to knowledge and wisdom. Liber is here to bring that magic to your fingertips.</p>
            <h2 className='about-title fs-26 ls-1'>Our story</h2>
            <p className='fs-17'>The idea of Liber was born out of a shared passion for reading among a group of friends. We noticed that while the world was moving towards digitalization, the love for physical books remained undiminished. However, the convenience of having a vast library in your pocket was too compelling to ignore. Thus, Liber was conceived as a bridge between the nostalgia of physical books and the convenience of digital media.</p>
            <br></br>
            <p className='fs-17'>We started as a small team, working out of coffee shops and living rooms, driven by the dream of creating a platform that would redefine the reading experience. After countless hours of brainstorming, coding, designing, and testing, Liber was launched. Today, we are proud to have grown into a thriving community of readers, authors, and book lovers.

</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
