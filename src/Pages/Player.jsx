import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import './Player.css'
import Back_arrow from '../assets/arrow.jpg'
import { Link } from 'react-router-dom'
function Player() {

  const{id} = useParams();
  const[apiData,setapiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""

  })
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTMzNTI4YjBhOGRiZTFjNjRiMWJhMzRkYTgwNjljNiIsIm5iZiI6MTc3MDMxMDI4NS4yNzUsInN1YiI6IjY5ODRjYThkOWNlZjc4ODRmMjM2Mzc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DZkjkWSh7HiCoWkqd_QWQl6F-lcsAY4B-CT0DFDwM4Q'
  }
};
useEffect(() =>{fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results[0]))
  .catch(err => console.error(err));},[])

  return (
    <div className='player'>
      <Link to="/"><button><img src={Back_arrow} alt='back arrow' className='back-arrow'/></button></Link>
      <iframe width='90%' height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info'>
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
