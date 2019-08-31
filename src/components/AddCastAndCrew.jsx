import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const AddCastAndCrew = () => {
  const [castData, setCastData] = useState([])
  const [crewData, setCrewData] = useState([])
  const fetchData = async () => {
    const resp = await axios.get(
      "https://api.themoviedb.org/3/tv/100/credits?api_key=02f778ceced92735175a972d795524b5&language=en-US"
    )
    setCastData(resp.data.cast)
    setCrewData(resp.data.crew)
  }

  console.log(castData)
  console.log(crewData)
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <section className="cast-information">
        <h2>Cast Information</h2>
        <section className="cast-and-crew-card">
          {castData.map((item, i) => {
            return (
              <section className="cast" key={i}>
                <img
                  className="cc-pic"
                  src={`https://image.tmdb.org/t/p/w200${item["profile_path"]}`}
                  alt={item.name}
                />
                <section>{item.character}</section>
                <section>{item.name}</section>
              </section>
            )
          })}
        </section>
      </section>
      <section className="crew-information">
        <h2>Crew Information</h2>
        <section className="cast-and-crew-card">
          {crewData.map((thing, j) => {
            return (
              <section className="crew" key={j}>
                <img
                  className="cc-pic"
                  src={`https://image.tmdb.org/t/p/w200${
                    thing["profile_path"]
                  }`}
                  alt={thing.name}
                />
                <section>{thing.name}</section>
                <section>{thing.job}</section>
              </section>
            )
          })}
        </section>
      </section>
    </>
  )
}

export default AddCastAndCrew
