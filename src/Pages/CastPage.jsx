import React from "react"
import AddCastAndCrew from "../components/AddCastAndCrew"

const CastPage = () => {
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
          <AddCastAndCrew />
        </section>
      </section>
    </>
  )
}

export default CastPage
