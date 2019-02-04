import React from 'react';
import { Button } from '../button/Button';
import '../../stylesheets/CaptureAge.css';

export const CaptureAge = (props) => {
  return (
    <div className="form-capture-age">
      <p className="request-age">Give us your age to continue:</p>
      <input className="input-age" type="text" onChange={(e) => {props.passAge(e.target.value)}}/><br/>
      <Button text="Submit" handleClick={props.handleClick}/>
    </div>
  );
}
