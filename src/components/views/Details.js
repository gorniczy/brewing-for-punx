import React from 'react';
import '../../stylesheets/Details.css';
import exitButton from '../../img/exit.svg';


export const Details = (props) => {
  return (
    <div className="details">
      <div className="content">
        <div className="text">
          <p className="name">{props.beers[props.index].name}</p>
          <p className="tagline">{props.beers[props.index].tagline}</p>
          <hr/><p className="description">{props.beers[props.index].description}</p><hr/>
          <p className="food">Food pairing:<br/><br/>{props.beers[props.index].food_pairing.join(' • ')}</p>
        </div>
        <img src={props.beers[props.index].image_url} alt="beer" className="beer-image-large" />
        <img src={exitButton} alt="exit" className="button-exit" onClick={() => {props.details(false)}} />
      </div>
    </div>
  )
}
