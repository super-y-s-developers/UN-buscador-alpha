import React from 'react';
import './styles.css';

function Badge(props) {
  const { outlined, color } = props;

  return (
    <span className={`badge ${color} ${outlined && 'outlined'}`}>
      {props.children}
    </span>
  );
}

export default Badge;
