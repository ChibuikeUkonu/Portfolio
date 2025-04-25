import React from 'react'
import Link from 'next/link'
import style from './certificate.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={style.abouts}>
    <div className={style.about_title}>
    <h1 className={style.Education}>Professional Affiliate/Trainings <span className={style.name}>Certifications</span></h1>
      <Image src='/auction.png'width={30} height={30} alt="" />
    </div>
        <div className={style.certified_container}>
        <div className={style.university}>
        <Link href='#'><p>St. Anthony's Secondary School</p></Link>
        <h1>Senior Secondary Certificate Examination</h1>
        <h2>2008</h2>
        </div>
        <div className={style.university}>
    <Link href='#'><p>Akanu Ibiam Federal Polytechnic, Unwana,</p></Link>
     <h1>HND, Public Administration</h1>
     <h2>2016</h2>
     </div>
     <div className={style.university}>
    <Link href='#' ><p>Project Management Professional</p></Link>
    <h2>2022</h2>
    </div>
    <div className={style.university}>
    <Link href='#' ><p>Member Project Management Institute </p></Link>
    <h2>2021</h2>
    </div> 
    <div className={style.university}>
     <Link href='#' ><p>Member, Institute of Project Engineering & Management</p></Link>
     <h2>2021</h2>
     </div>
     <div className={style.university}>
     <Link href='#' className={style.contact}><p>35 Contact hours formal education in Project management</p></Link>
     <h2>2021</h2>
      </div>
      <div className={style.university}>
      <Link href='#'className={style.enviro} ><p>Environmental & Quality Management Systems (EMS) ISO 9001: 2015 + 14001:2015</p></Link>
      <h2>2018</h2>
      </div>
      <div className={style.university}>
    <Link href='#' ><p>Three Phases of Contract Tendering, Execution & Evaluation</p></Link>
    <h2>2018</h2>
    </div>
    <div className={style.university}>
     <Link href='#' ><p>Contracts Administration: from Awards to Completion</p></Link>
     <h2>2018</h2>
     </div>
     <div className={style.university}>
    <Link href='#' ><p>Oil/Gas Commercial Contracts & Negotiation skills </p></Link>
    <h2>2018</h2>
    </div>
    <div className={style.university}>
  <Link href='#' ><p>Training on Human Resource Management </p></Link>
  <h2>2017</h2>
  </div>
  <div className={style.university}>
<Link href='#'><p>Modern Contracting Bidding and Document Controlling Procedures</p></Link>
<h2>2017</h2>
    </div>
    </div>
    </div>
  )
}

export default page
