import React, { useState, useEffect } from "react"
import axios from "axios"
import AddCast from "../components/AddCast"
import AddCrew from "../components/AddCrew"

const CastPage = () => {
  const [castData, setCastData] = useState([])
  const [crewData, setCrewData] = useState([])
  const fetchData = async () => {
    const resp = await axios.get(
      "https://api.themoviedb.org/3/tv/2/credits?api_key=02f778ceced92735175a972d795524b5&language=en-US"
    )
    setCastData(resp.data.cast)
    setCrewData(resp.data.crew.slice(0, 10))
  }

  console.log(castData)
  console.log(crewData)
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <section className="cast-page">
        <section className="show-information">
          <img src="" alt="" />
          <h1>Title of Show </h1>
          <h2>TV Show Rating</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            fuga illo alias corrupti repellat exercitationem numquam ipsam!
            Voluptatem quaerat fugiat voluptate incidunt deserunt eligendi,
            itaque veritatis illum inventore similique sint.
          </p>
        </section>
        <section className="cast-and-crew-info">
          <h2>Cast Information</h2>
          <section className="cast-information">
            {castData.map((item, i) => {
              return <AddCast key={i} item={item} />
            })}
          </section>
          <section className="cast-and-crew-info">
            <h2>Crew Information</h2>
            <section className="crew-information">
              {crewData.map((thing, j) => {
                return <AddCrew key={j} thing={thing} />
              })}
            </section>
          </section>
        </section>
      </section>
    </>
  )
}

export default CastPage
