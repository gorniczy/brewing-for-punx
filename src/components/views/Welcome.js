import React from 'react';
import '../../stylesheets/Welcome.css';
import { CaptureAge } from '../form/CaptureAge';
import { Button } from '../button/Button';

export const Welcome = (props) => {
  return (
    <div className="welcome">
      <p className="text-title">BREWING FOR PUNKS - DIY</p>
      {props.adult === null && <CaptureAge passAge={props.passAge} handleClick={props.checkAge} />}
      {props.adult === true && <Button text="Browse beers" handleClick={() => {props.list(true)}}/>}
      {props.adult === false && (
        <p className="text-restriction">The catalogue is for adults only.<br/><br/>Get back to us when you’re 18.<br/><br/>In the meantime, tell your elders about us.<br/><br/>They’ll love it.</p>
        )}
    </div>
  )
}
