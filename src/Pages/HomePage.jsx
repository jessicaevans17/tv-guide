import React from 'react'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <>
      <main className="home-page-main">
        <section>
          <h1>Top-Rated TV Shows</h1>
          <img
            className="randomTVimage"
            src="https://i.ytimg.com/vi/l4bDVq-nP-0/maxresdefault.jpg"
          />
          <h2>Title</h2>
          <h2>Rating</h2>
        </section>
        <section>
          <img src className="tv-item" />
          <div className="tv-item-info">
            <h3>Title</h3>
            <h3>Rating</h3>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
