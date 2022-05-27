import React from 'react'
import "./Main_left.css";
const Input2 = (props) => {
  return (
    <>
        <div className="input_field input_field2">
            <label className="input_title">{props.title}</label>
            <p>{props.descp}</p>
            <textarea rows="6" cols="50" className="input_box"></textarea>
        </div>
    </>
  )
}

export default Input2