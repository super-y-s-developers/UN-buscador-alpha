import React from 'react';
import './styles.css';

function Checkbox(props) {
  return (
    <React.Fragment>
      <input id={props.id} name={props.name} checked={props.checked} type='checkbox' />
      <label htmlFor={props.id}>
        {props.children}
      </label>
    </React.Fragment>
  );
}

export default Checkbox;
