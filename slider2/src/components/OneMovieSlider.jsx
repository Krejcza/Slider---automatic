import './OneMovieSlider.css'
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6"
import { useState, useEffect } from 'react'
import data from '../data'

const OneMovieSlider = () =>{

   const [index, setIndex] = useState(0)

   useEffect(()=>{
      if(index<0){
         setIndex(data.length-1)
      } else if(index>data.length-1){
         setIndex(0)
      } 
   },[index])

   useEffect(()=>{
      let setIntervalId =setInterval(()=>{
         setIndex(index+1)
      }, 2000)
      return () => clearInterval(setIntervalId)
   }, [index])

   return <section className='all-movies'>
      <div className="all-movies-content">
         {data.map((oneMovie, oneMovieIndex)=>{
            const {id, image, title, age, tags, description} = oneMovie

            let mainClass = 'next-slide'

            if(oneMovieIndex === index){
               mainClass = 'active-slide'
            }

            if(oneMovieIndex === index -1 || (index === 0 && oneMovieIndex === data.length-1)){
               mainClass = 'last-slide'
            }

            return <article key={id} className={mainClass}>
               <img src={image} alt="" />
               <h2>{title}</h2>
               <p>{description}</p>
               <p>{tags}</p>
               <p>{age}</p>
            </article>
         })}
      </div>
      <button onClick={()=> setIndex(index-1)}><FaCircleArrowLeft/></button>
      <button onClick={()=> setIndex(index+1)}><FaCircleArrowRight/></button>
      
   </section>
}

export default OneMovieSlider