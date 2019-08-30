import React from 'react'
import Header from '../components/Header'

const HomePage = () => {
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
