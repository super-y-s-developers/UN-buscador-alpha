import React from 'react';
import './styles.css';

function InputTitle(props) {
  return (
    <p className='input-title'>
      {props.children}
    </p>
  );
}

export default InputTitle;
