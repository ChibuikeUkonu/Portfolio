   "use client"
import { useState} from 'react'
import { useRef } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import Style from '../Navbar/Navbar.module.css'
import { CgMathMinus } from "react-icons/cg";


const Navbar = () => {
  const[menu,setMenu] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (menuRef.current) {
      menuRef.current.style.right = isMenuOpen ? '-350px' : '0';
    }
  };
 
 return (
    <div className={Style.navbar}>
      <Image className={Style.nav_mob_open} src='/hamburger.png'onClick={toggleMenu}width={30}height={30} alt="" />
      <ul 
        ref={menuRef}
        className={`${Style.nav_menu} ${isMenuOpen ? Style.active : ''}`}
      >
      <Image className={Style.nav_mob_close} src='/menu.png'onClick={toggleMenu}width={30}height={30} alt="" />

  <li><a className={Style.anchor_link}href="home"onClick={(e) => {
      e.preventDefault();  // Prevent default anchor behavior
      setMenu("home");
      const section = document.getElementById('home');
      if (section) {
        const offset = 30;  // Your desired offset
        const top = section.offsetTop - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }}><p onClick={()=>setMenu("home")}>Home</p></a>{menu==="home"?<Image src='/auction.png'width={10} height={10} alt=''/>:<></>}</li>

       <li><a className={Style.anchor_link} href="about"onClick={(e) => {
      e.preventDefault();  // Prevent default anchor behavior
      setMenu("about");
      const section = document.getElementById('about');
      if (section) {
        const offset = 100;  // Your desired offset
        const top = section.offsetTop - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }}><p onClick={()=>setMenu("about")}>About Me</p></a>{menu==="about"?<Image src='/auction.png'width={10} height={10} alt=''/>:<></>}</li>

       <li><a className={Style.anchor_link} href="services" onClick={(e) => {
      e.preventDefault();
      setMenu("services");
      
      // Robust scroll implementation
      requestAnimationFrame(() => {
        const section = document.getElementById('services');
        if (section) {
          const header = document.querySelector('header'); // Get actual header
          const offset = header ? header.offsetHeight : 130;
          const elementTop = section.getBoundingClientRect().top + window.pageYOffset;
          
          window.scroll({
            top: elementTop - offset,
            bottom: 0,
            behavior: 'smooth'
          });
        }
      });
    }}><p onClick={()=>setMenu("services")}>Services</p></a>{menu==="services"?<Image src='/auction.png'width={10} height={10} alt='' />:<></>}</li>

       <li><a className={Style.anchor_link} href="work"onClick={(e) => {
      e.preventDefault(); // Prevent default jump
      setMenu("work"); // Update state if needed
      
      // Smooth scroll logic
      const section = document.getElementById('work');
      if (section) {
        const offset = 100; // Adjust this to match your header height
        const top = section.offsetTop - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }}><p onClick={()=>setMenu("work")}>Portfolio</p></a>{menu==="work"?<Image src='/auction.png'width={10} height={10} alt='' />:<></>}</li>

       <li><a className={Style.anchor_link} offset={50} href="contact"onClick={(e) => {
      e.preventDefault(); // Prevent default jump
      setMenu("contact"); // Update state if needed
      
      // Smooth scroll logic
      const section = document.getElementById('contact');
      if (section) {
        const offset = 100; // Adjust this to match your header height
        const top = section.offsetTop - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }}><p onClick={()=>setMenu("contact")}>contact</p></a>{menu==="contact"?<Image src='/auction.png'width={10} height={10} alt='' />:<></>}</li>

       <Link className={Style.certificate} href='/Certificate'>Certifications</Link>
      </ul>
      <div className={Style.nav_connect}><a href='connect'onClick={(e) => {
      e.preventDefault();  // Prevent default anchor behavior
      setMenu("contact");
      const section = document.getElementById('contact');
      if (section) {
        const offset = 30;  // Your desired offset
        const top = section.offsetTop - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }}>Connect With Me</a></div>
    </div>
  )
}

export default Navbar
