import React,{useEffect,useState} from 'react'
import instance from '../instance'
import './Row.css';


function Row({title,fatchUrl,isLargeRow}) {

    const [movies,setmovies]= useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";


  async function fetchmovies(){
  const request = await instance.get(fatchUrl)
  setmovies(request.data.results);
  }

  // console.log(movies);
  useEffect(()=>{
    fetchmovies()
  },[])

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className={`movies_row ${isLargeRow} && "movies_row_large"`}>
            {
                movies.map((movie)=>(
                    <img className={`movie_poster ${isLargeRow && "movies_poster_large"}`}
                     src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                    alt={movie.name}/>
                ))
            }
        </div>

    </div>
  )
}

export default Row