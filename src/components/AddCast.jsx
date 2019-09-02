import axios from "axios"
import React from "react"

const AddCast = props => {
  return (
    <>
      <section className="cast-card">
        <section className="cast">
          <img className="cc-pic" src="" alt="" />
          <section className="character-name">{props.item.character}</section>
          <section className="actor-name">{props.item.name}</section>
        </section>
      </section>
    </>
  )
}

export default AddCast
