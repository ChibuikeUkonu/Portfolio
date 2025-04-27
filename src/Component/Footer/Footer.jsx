import React from 'react'
import style from './Footer.module.css'
import Image from 'next/image'
import { FaUser } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={style.footer}>
    <div className={style.footer_top}>
      <div className={style.footer_top_left}>
        {/* <Image src="/Tendering.png" width={30} height={30} alt="" /> */}
        <p>I am an oriented professional with over 7 years practical, relevant and
progressive expertise in Tendering Preparation, Bidding Negotiations, Document Control, Business
Development and Project Management services, procurement and supply chain management in the
Nigerian oil and gas sector</p>
      </div>
      <div className={style.footer_top_right}>
      
      </div>
    </div>
    <hr />
    <div className={style.footer_bottom}>
        <p className={style.footer_left}>Ike Kalu. All right reserved</p>
        <div className={style.footer_bottom_right}>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with Me</p>
        </div>
    </div>
    </div>
  )
}

export default Footer
