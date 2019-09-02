import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const HomePage = () => {
  const [tvShow, setTvShow] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [random, setRandom] = useState([0])

  const fetchData = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=69d23e9b46d479e367d00ab334350749&language=en-US&page=${currentPage}`
    )
    console.log(resp.data.results)
    setTvShow(resp.data.results)
    setCurrentPage(resp.data.page)
    setRandom(
      resp.data.results[Math.floor(Math.random) * resp.data.results.length - 1]
    )
  }

  const showNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <main className="home-page-main">
        <h1>Top-Rated TV Shows</h1>
        Page: {currentPage}
        <div>
          {/* {random.map((randomShow, i) => {
            return (
              <div key={i}>
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${randomShow.poster_path}`}
                />
                <h2>Title: {randomShow.name}</h2>
                <h3>Rating: {randomShow.vote_average}</h3>
              </div>
            )
          })} */}
        </div>
        <nav>
          <button onClick={showNextPage}>Next</button>
        </nav>
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
        </section>
      </main>
    </>
  )
}

export default HomePage
