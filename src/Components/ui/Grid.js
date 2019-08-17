import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
  border: 2px solid #383838;
  > * {
  }
`;

export default Grid;
