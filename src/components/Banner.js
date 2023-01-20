import React,{useState,useEffect} from 'react'
import instance from '../instance'
import requests from '../request'
import './banner.css'


function Banner() {

       const [movies,setmovies]= useState([])
       const base_url = "https://image.tmdb.org/t/p/original/";

       async function fetchmovies(){
        const request = await instance.get(requests.fetchNetflixOriginals)
        setmovies(request.data.results[
            Math.floor(Math.random()*request.data.results.length-1)
        ]);
       }
       console.log(movies.backdrop_path);
       useEffect(()=>{
       fetchmovies()
       },[])

  return (
    
    <>
    <div className='banner' />
    <img className='poster' src={`${base_url}${movies.backdrop_path}`} />

    {/* <div>
       <h1 className='first'> 
      {movies.name}
    </h1>
    <h1 className='second'>{movies.overview}</h1>
    </div> */}
   
    
    </>
    
    
    
                         
                        

    
  )
}

export default Banner