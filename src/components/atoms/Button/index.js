import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.8em 1.4em;
  border-radius: 0.3rem;
  color: white;
  margin: 0;
  border: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }

  ${props => props.outlined ? `
    // TODO: Use the theme text color
    box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255, 50%);
    background-color: transparent;
  `:`
    background-color: ${getColor(props)};
  `}
`

function getColor(props) {
  const { color, theme } = props
  if(color && theme.colors[color]) return theme.colors[color]
  // TODO: Use the theme primary color
  else return theme.colors.cyan
}

export default Button;
