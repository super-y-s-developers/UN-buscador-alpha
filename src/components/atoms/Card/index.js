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
  border: none;
  margin-bottom: 24px;
  border-radius: .45rem;
  background-color: rgba(255, 255, 255, 5%);
  cursor: pointer;
  transition: transform .1s ease-out;

  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translate(0, -2px);
  }

  .card-body {
    min-height: 1px;
    padding: 1.13em 1.63em;

    p {
      margin-top: 0;
    }

    .card-header  {
      display: flex;
      justify-content: space-between;
    }

    .card-footer  {
      display: flex;
      justify-content: space-between;

      *:not(:last-child) {
        margin-right: 1em;
      }
    }
  }
`

export default Card;
