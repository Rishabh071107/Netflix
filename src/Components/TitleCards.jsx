import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'

const TitleCards = ({ title,category }) => {

  const [ApiData, setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTMzNTI4YjBhOGRiZTFjNjRiMWJhMzRkYTgwNjljNiIsIm5iZiI6MTc3MDMxMDI4NS4yNzUsInN1YiI6IjY5ODRjYThkOWNlZjc4ODRmMjM2Mzc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DZkjkWSh7HiCoWkqd_QWQl6F-lcsAY4B-CT0DFDwM4Q'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
  }, [category])

  return (
    <div>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className='cardlist'>
        {ApiData.map((movie, index) => (
          <Link to={`/player/${movie.id}`} className='cards' key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className='card-img'
            />
            <p className='card-title'>{movie.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
