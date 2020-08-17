import styled from 'styled-components';

const Badge = styled.span`
  display: inline-block;
  box-sizing: border-box;
  font-size: 0.85rem;
  padding: 0 0.8em;
  border-radius: 10rem;
  margin: 0;


  ${props => props.outlined ? `
    // TODO: Use the theme text color
    box-shadow: inset 0px 0px 0px 1px ${getColor(props)};
    color: ${getColor(props)};
  `:`
    background-color: ${getColor(props)};
    font-weight: bold;
    opacity: 0.8;
    color: white;
  `}
`

function getColor(props) {
  const { color, theme, outlined } = props
  if(color && theme.colors[color]) return theme.colors[color]
  // TODO: Use the theme text color
  else return outlined ? 'rgba(255, 255, 255, 50%)' : 'rgba(255, 255, 255, 10%)'
}

export default Badge;
