"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import style from './Hero.module.css'

const Hero = () => {
    const[menu,setMenu] = useState("home")
  
  return (
    <div id='home' className={style.Hero}>
      <Image className={style.image} src='/hustle.png'width={210} height={210}  alt="" />
      <h1><span className={style.name}>I'm Ike Kalu,</span> a Tender and Bidding Manager based in Nigeria</h1>
      <p>Ike, is result driven and performance oriented professional with over 8 years practical, relevant and 
progressive expertise in Tendering Preparation, Bidding Negotiations, Document Control, Business 
Development and Project Management services, procurement and supply chain management in the 
Nigerian oil and gas sector. He is at his best when delivering winning tenders and pitching capabilities for 
strategic positioning for new business.
I am competent in using various software related to tender preparation and 
contracts administration</p>
<div className={style.hero_action}>
<div className={style.hero_connect}><a href='connect'onClick={(e) => {
      e.preventDefault();  // Prevent default anchor behavior
      setMenu("contact");
      const section = document.getElementById('contact');
      if (section) {
        const offset = 30;  // Your desired offset
        const top = section.offsetTop - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }}>Connect With Me</a></div>

<div className={style.hero_resume}>My resume</div>
</div>
    </div>
  )
}

export default Hero
