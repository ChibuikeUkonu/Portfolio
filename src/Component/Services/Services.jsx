import React from 'react'
import Image from 'next/image'
import style from './Services.module.css'
import { FaAffiliatetheme } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Service_Data from '../../../assets/service_data'

const Services = () => {
  return (
    <div className={style.services}>
      <div className={style.services_title}>
        <h1>My Services</h1>
        <Image src='/auction.png'width={30} height={30} alt="" />
      </div>
      <div className={style.Service_container}>
        {Service_Data.map((service,index)=>{
         return <div key={index} className={style.Service_format}>
          <h3>{service.s_no}</h3>
          <h2>{service.s_name}</h2>
          <p>{service.s_desc}</p>
          <div className={style.services_readmore}>
            <p>Read More</p>
            <FaArrowRight />
          </div>
         </div>
       })}
      </div>
      <div>

      </div>
    </div>
  )
}

export default Services
