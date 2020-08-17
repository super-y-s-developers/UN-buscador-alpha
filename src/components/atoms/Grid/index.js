import styled from 'styled-components';

const Grid = styled.div`${(props) => {
  const { columns, noMargins } = props;
  const columnWidth = noMargins ?
    `calc(100% / ${columns})`
    : `calc(100% / ${columns} - ${(columns - 1)/columns}em)` ;
    
  return `
    display: flex;
    flex-wrap: wrap;

    & > * {
      width: ${columnWidth};
      ${!noMargins && `
        margin-bottom: 1em;
        &:not(:nth-child(${columns}n)) {
          margin-right: 1em;
        }
      `}
    }
  `
}}`;

export default Grid;
