import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${p => p.columns}, minmax(50px, 1fr));
  grid-gap: 2px;
  margin: 2px;
  @media screen and (max-width: 40em) {
    grid-template-columns: repeat(1, minmax(50px, 1fr));
    margin: 20px;
  }

  > * {
    display: flex;
    align-items: center;
    box-shadow: 0 0 0 2px #383838;
    padding: 1.2rem 0.5rem;
  }
  & > :not(h2) {
    font-family: sans-serif;
    padding: 0.8rem 0.5rem;
  }
`;

export default Grid;
