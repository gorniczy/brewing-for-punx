import React from 'react';
import '../../stylesheets/BeerList.css';

export const BeerList = (props) => {
  return (
    <div className="flex-container">
      {props.beers.map((item, num) => {
        return <div key={num} className="beer" onClick={() => {props.details(true); props.index(num);}}>
            <p className="beer-name">{item.name}</p>
            <img src={item.image_url} alt="beer" className="beer-image"/>
          </div>
      })}
    </div>
  )
}
