import React from 'react';
import './styles.css';

function DayRadio(props) {
  return (
    <React.Fragment>
      <input
        type='checkbox'
        id={props.id}
        name={props.name}
        checked={props.checked}
        className='day-radio'
      />
      <label htmlFor={props.id} checked={props.checked}>
        {props.children}
      </label>
    </React.Fragment>
  );
}

export default DayRadio;
