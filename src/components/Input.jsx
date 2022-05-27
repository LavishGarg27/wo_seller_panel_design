import React from 'react'
import "./Main_left.css";
const Input = (props) => {
  return (
    <>
        <div className="input_field">
            <label className="input_title">{props.title}</label>
            <input type="text" placeholder={props.placeholder} className="input_box"/>
            <p>{props.descp}</p>
        </div>
    </>
  )
}

export default Input;