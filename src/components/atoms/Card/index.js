import React from 'react';
import styled from 'styled-components'

function Card(props) {
  return (
    <StyledCard {...props}>
      <div className='card-body'>
        {props.children}
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  border-radius: .45rem;
  background-color: rgba(255, 255, 255, 5%);
  cursor: pointer;
  transition: transform .1s ease-out;
  border: 1px solid rgba(255, 255, 255, 5%);
  border-left: 2px solid ${props => getColor(props)};

  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.08);

  ${props => props.selected && `
    border: 2px solid ${getColor(props)};
    margin-top: -4px;
  `}

  &:hover {
    transform: translate(0, -2px);
  }

  .card-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em 1.5em;

    .card-header {
      display: flex;
      justify-content: space-between;
      p {
        margin-top: 0;
      }
    }

    .card-footer  {
      display: flex;
      justify-content: space-between;
      bottom: 0;

      *:not(:last-child) {
        margin-right: 1em;
      }
    }
  }
`

function getColor(props) {
  const { color, theme } = props
  if(color && theme.colors[color]) return theme.colors[color]
  else return ''
}

export default Card;
