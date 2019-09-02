import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  // const [tvImage, setTvImage] = useState([])
  // const [tvTitle, setTvTitle] = useState([])
  // const [tvRating, setTvRating] = useState([])
  const [tvShow, setTvShow] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=69d23e9b46d479e367d00ab334350749&language=en-US&page=1'
    )
    console.log(resp.data.results)
    setTvShow(resp.data.results)
    console.log(tvShow)
  }

  // const showNextPage = () => {
  //   setCurrentPage(currentPage + 1)
  // }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <main className="home-page-main">
        <section className="tv-item-section">
          <h1>Top-Rated TV Shows</h1>
          <img
            className="randomTVimage"
            src="https://i.ytimg.com/vi/l4bDVq-nP-0/maxresdefault.jpg"
          />
          <section className="tv-item-info">
            <h2 className="title">Title</h2>
            <h2 className="rating">Rating</h2>
          </section>
        </section>

        <section className="tv-item-section">
          <ul className="tv-show">
            {tvShow.map((show, i) => {
              return (
                // <Link to={`https://www.themoviedb.org/tv/${show.id}`}>

                <li className="item" key={i}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`}
                  />
                  <h3>{tvShow.name}</h3>
                  <h3>{tvShow.vote_average}</h3>
                </li>
                // </Link>
              )
            })}
          </ul>
          <img
            className="tv-item"
            src="https://crackberry.com/sites/crackberry.com/files/topic_images/2014/podcast_tv_show_1400.jpg"
          />
          <div className="tv-item-info">
            <h3 className="title">Title</h3>
            <h3 className="rating">Rating</h3>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
