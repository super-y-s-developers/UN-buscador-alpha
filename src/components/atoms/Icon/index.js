import React from 'react';
import styled from 'styled-components'

function Icon(props) {
  return (
    <StyledIcon {...props}>{props.type}</StyledIcon>
  );
}

const StyledIcon = styled.i`
  font-family: 'Material Icons';
  display: inline-block;
  font-style: normal;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  margin-right: 10px;

  text-rendering: optimizeLegibility; /* Support for Safari and Chrome. */
  -moz-osx-font-smoothing: grayscale; /* Support for Firefox. */
  font-feature-settings: 'liga'; /* Support for IE. */

  ${props => `color: ${getColor(props)};`}
`

function getColor(props) {
  const { color, theme } = props
  if(color && theme.colors[color]) return theme.colors[color]
  else return ''
}

export default Icon;
