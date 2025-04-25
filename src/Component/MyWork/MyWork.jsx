import React from 'react'
import Image from 'next/image'
import style from './MyWork.module.css'
import mywork_data from '../../../assets/mywork_data'
import { FaArrowRight } from "react-icons/fa";

const MyWork = () => {
  return (
    <div id='work' className={style.Mywork}>
      <div className={style.mywork_title}>  
      <h1>My Work Experiences</h1>
      <Image src='/auction.png'width={30} height={30} alt="" />
      </div>
      <div className={style.mywork_container}>
      {mywork_data.map((work,index)=>{
        return <div key={index} className={style.Service_format}>
        <h2>{work.w_name}</h2>
        <h1>{work.w_title}</h1>
        <p>{work.w_desc}</p>
        </div>
        })}  
      </div>
      <div className={style.mywok_showmore}>
       <p>showmore</p>
     <FaArrowRight 
     style={{
      marginTop:'9px',
     }}
     />
       </div>
    </div>
  )
}

export default MyWork
