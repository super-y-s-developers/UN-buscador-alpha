import React from 'react';
import './styles.css';

function Card(props) {
  return (
    <div className={'card ' + props.className} onClick={props.onClick}>
      <div className='card-body'>
        {props.children}
      </div>
    </div>
  );
}

export default Card;
