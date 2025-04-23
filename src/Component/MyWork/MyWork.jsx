import React from 'react'
import Image from 'next/image'
import style from './MyWork.module.css'
import mywork_data from '../../../assets/mywork_data'
import { FaArrowRight } from "react-icons/fa";

const MyWork = () => {
  return (
    <div className={style.Mywork}>
      <div className={style.mywork_title}>
      <h1>My latest Work</h1>
      <Image src='/auction.png'width={30} height={30} alt="" />
      </div>
      <div className={style.mywork_container}>
      {mywork_data.map((work,index)=>{
        return <Image key={index} src={work.w_img} alt="" />
        })}  
      </div>
      <div className={style.mywok_showmore}>
       <p>showmore</p>
     <FaArrowRight />
       </div>
    </div>
  )
}

export default MyWork
