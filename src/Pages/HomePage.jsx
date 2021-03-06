import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [tvShow, setTvShow] = useState([[]])
  const [currentPage, setCurrentPage] = useState(1)
  const [random, setRandom] = useState(0)
  const show = { show }
  const fetchData = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=69d23e9b46d479e367d00ab334350749&language=en-US&page=${currentPage}`
    )
    console.log(resp.data.results)
    setTvShow(resp.data.results)
    setCurrentPage(resp.data.page)
    setRandom(Math.floor(Math.random() * resp.data.results.length))
  }

  const showNextPage = () => {
    setCurrentPage(currentPage + 1)
    // if (currentPage > 31) {
    //   return {
    //     currentPage = 1
    //   }
    // }
  }

  useEffect(() => {
    fetchData()
  }, [currentPage])

  return (
    <>
      <main className="home-page-main">
        <h1 className="top-title">Top-Rated TV Shows</h1>
        <div className="tv-item-info randomTVimage center">
          <div className="center">
            <Link to={{ pathname: `/${tvShow[random].id}`, state: { show } }}>
              <img
                src={`https://image.tmdb.org/t/p/w200${tvShow[random].poster_path}`}
              />
            </Link>
          </div>
          <div className="center">
            <h2>{tvShow[random].name}</h2>
            <h3>Rating: {tvShow[random].vote_average}</h3>
            <p>{tvShow[random].overview}</p>
          </div>
        </div>
        <section className="tv-item-section">
          <ul className="tv-show">
            {tvShow.map((show, i) => {
              return (
                <li className="item" key={i} show={show}>
                  <Link
                    to={{
                      pathname: `/${show.id}`,
                      state: { show }
                    }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
                    />
                    <h3>{show.name}</h3>
                  </Link>
                  <h3>Rating: {show.vote_average}</h3>
                </li>
              )
            })}
          </ul>
          <p className="page">Page: {currentPage}</p>

          <nav>
            <button onClick={showNextPage}>Next</button>
          </nav>
        </section>
      </main>
    </>
  )
}

export default HomePage
