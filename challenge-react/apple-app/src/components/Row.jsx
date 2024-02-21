import { useCallback, useEffect, useState } from 'react'
import './Row.css'
import axios from '../api/axios'

// eslint-disable-next-line react/prop-types
const Row = ({ title, id, fetchUrl }) => {
  const [moives, setMoives] = useState([])

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl)
    setMoives(response.data.results)
  }, [fetchUrl])

  useEffect(() => {
    fetchMovieData()
  }, [fetchMovieData])

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow">{'<'}</span>
        </div>
        <div id={id} className="row__posters">
          {moives?.map((movie) => (
            <img
              key={moives.id}
              className="row__poster"
              src={`https:image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={moives.name}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow">{'>'}</span>
        </div>
      </div>
    </div>
  )
}

export default Row
