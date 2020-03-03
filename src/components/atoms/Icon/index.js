import React from 'react';
import './styles.css';

function Icon(props) {
  const { type, color } = props;

  return (
    <i className={`icon ${color}`}>
      {type}
    </i>
  );
}

export default Icon;
