import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Style from '../Navbar/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={Style.navbar}>
      <Image src='/logo.png' width={100}height={100} alt="" />
      <ul className={Style.nav_menu}>
       <li>Home</li>
       <li>About Me</li>
       <li>Services</li>
       <li>Portfolio</li>
       <li>Contact</li>
       <Link href='/Certificate'>Certifications</Link>
      </ul>
      <div className={Style.nav_connect}>Connect With Me</div>
    </div>
  )
}

export default Navbar
