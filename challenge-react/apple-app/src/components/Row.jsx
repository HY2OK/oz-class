import { useCallback, useEffect, useState } from 'react'
import './Row.css'
import axios from '../api/axios'
import MovieModal from './MovieModal/MovieModal'

// eslint-disable-next-line react/prop-types
const Row = ({ title, id, fetchUrl }) => {
  const [moives, setMoives] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState({})

  const handleClick = (movie) => {
    console.log(movie)
    setModalOpen(true)
    setMovieSelected(movie)
  }

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
        <div
          className="slider__arrow-left"
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80
          }}
        >
          <span className="arrow">{'<'}</span>
        </div>
        <div id={id} className="row__posters">
          {moives?.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https:image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div
          className="slider__arrow-right"
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80
          }}
        >
          <span className="arrow">{'>'}</span>
        </div>
      </div>
      {modalOpen ? <MovieModal {...movieSelected} setModalOpen={setModalOpen} /> : null}
    </div>
  )
}

export default Row
