import React from "react"

const AddCrew = props => {
  return (
    <>
      <section className="crew">
        <section>{props.thing.name}</section>
        <section>{props.thing.job}</section>
      </section>
    </>
  )
}

export default AddCrew
