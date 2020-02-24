import React from 'react';
import './styles.css';

function Searchbox(props) {
  return (
    <span className='searchbox'>
      <input
        type='text'
        id={props.id}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
      />
      <i className='icon'>search</i>
    </span>
  );
}

export default Searchbox;
