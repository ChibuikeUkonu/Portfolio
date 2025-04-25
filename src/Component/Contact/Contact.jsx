"use client"
import React from 'react'
import style from './Contact.module.css'
import Image from 'next/image'
import { IoMdMail } from "react-icons/io"
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
    async function handleSubmit(event) {
        event.preventDefault();
        // alert("Email sent successfully!");
        
        const formData = new FormData(event.target);

        formData.append("access_key", "4609d839-30c1-44f3-a7b5-dc2ff617182d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await res.json();
        if (result.success) {
          alert("Succussfully completed")
        }
    }
  return (
    <div id='contact' className={style.Contact}>
      <div className={style.contact_title}>
     <h1>Get in touch</h1>
     <Image src="/auction.png" width={20} height={20} alt="" />
      </div>
      <div className={style.contact_section}>
       <div className={style.contact_left}>
         <h1>Let's talk</h1>
         <div className={style.contact_details}>
          <div className={style.contact_detail}>
          <IoMdMail /><p>ikekaluike0@gmail.com</p>
          </div>
        <div className={style.contact_detail}>
          <IoMdCall /><p>+2348069285041 , +2348083621898</p>
          </div>

          <div className={style.contact_detail}>
          </div>

          <div className={style.contact_detail}>
          <FaWhatsapp /><p></p>
          </div>
         </div>
       </div>
       <form onSubmit={handleSubmit} className={style.contact_right}>
        <label htmlFor="">Your Name</label>
        <input type="text"placeholder='Enter your name' name='name' />
        <label htmlFor="">Your Email</label>
        <input type="email"placeholder='Enter your email'name='Email' />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="8"placeholder='Enter your message'></textarea>
        <button type='submit' className={style.contact_sumit}>Submit now</button>
       </form>
      </div>
    </div>
  )
}

export default Contact
