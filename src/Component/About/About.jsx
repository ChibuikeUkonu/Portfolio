import React from 'react'
import Image from 'next/image'
import style from './About.module.css'

const About = () => {
  return (
    <div id='about' className={style.about}>
      <div className={style.about_title}>
        <h1>About me</h1>
        <Image src='/auction.png'width={30} height={30} alt="" />
      </div>
      <div className={style.about_section}>
        <div className={style.about_left}>
            <Image src='/Mr ike.png'width={900} height={800} alt="" />
        </div>
        <div className={style.about_right}>
         <div className={style.about_para}>
          <p>I'm a Bid/Tender Personnel with over 8 years practical, I provide relevant and 
progressive expertise in Tendering Preparation, Bidding Negotiations, Document Control, Business 
Development and Project Management services.</p>
           <p>I am competent in using various software related to tender preparation and 
           contracts administration, and I give my best when delivering winning tenders and pitching capabilities for 
           strategic positioning for new business.</p>
         </div>
         <div className={style.about_skills}>
            <div className={style.about_skill}><p>Tendering/Bidding</p><hr style={{width:"70%"}}/></div>
            <div className={style.about_skill}><p>Contract Administration</p><hr style={{width:"50%"}}/></div>
            <div className={style.about_skill}><p>Customers services</p><hr style={{width:"50%"}}/></div>
            <div className={style.about_skill}><p>Public speaking / Proposalwriting</p><hr style={{width:"60%"}}/></div>
         </div>
        </div>
      </div>
      <div className={style.about_achievements}>
        <div className={style.about_achievement}>
         <h1>8+</h1>
         <p> YEARS OF EXPERIENCE </p>
        </div>
        <hr />
        <div className={style.about_achievement}>
            <h1>19+</h1>
            <p>PROJECT COMPLETED </p>
          </div>
          <hr />
          <div className={style.about_achievement}>
            <h1>7+</h1>
            <p>HAPPY CLIENTS </p>
            </div>
            </div>
          </div>
          )
        }

export default About
