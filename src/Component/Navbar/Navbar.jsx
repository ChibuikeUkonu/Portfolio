   "use client"
import { useState} from 'react'
import { useRef } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import Style from '../Navbar/Navbar.module.css'
import { CgMathMinus } from "react-icons/cg";
import ThemeToggle from '../ThemeToggle'

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

       <Link className={Style.certificate} href='/Certificate'onClick={() => startLoading()}>Certifications</Link>
      </ul>
      {/* <div className='nav_back'>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 30 30" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.33,0.25,2.6,0.75,3.81s1.18,2.26,2.03,3.15s1.87,1.61,3.05,2.17s2.43,0.87,3.74,0.94c-1.24-1.19-2.11-2.63-2.61-4.31
	s-0.75-3.6-0.75-5.76c0-1.93,0.31-3.78,0.92-5.54s1.47-3.26,2.56-4.5c-1.77,0.07-3.39,0.56-4.88,1.47S7.09,8,6.23,9.51
	S4.94,12.68,4.94,14.44z"></path>
    </svg>
    </div> */}
    <ThemeToggle />
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
