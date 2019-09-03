import React from "react"

const AddCrew = props => {
  return (
    <>
      <section className="crew">
        <section>
          <span>
            <strong>{props.thing.job}: </strong>
          </span>
          {props.thing.name}
        </section>
      </section>
    </>
  )
}

export default AddCrew
