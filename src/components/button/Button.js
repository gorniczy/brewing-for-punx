import React from 'react';
import '../../stylesheets/Button.css'

export const Button = (props) => {
  return (
    <button className="button-primary" onClick={props.handleClick}>{props.text}</button>
  );
}
