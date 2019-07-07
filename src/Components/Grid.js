import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${p => p.columns}, minmax(50px, 1fr));
  grid-gap: 2px;
  margin: 2px;
  @media screen and (max-width: 40em) {
    grid-template-columns: repeat(1, minmax(50px, 1fr));
    margin: 20px;
    ${p =>
      p.isMobile &&
      `grid-template-columns: repeat(3, minmax(50px, 1fr));
        h2 {
          font-size: 1rem;
          justify-content: center;
        }
      `};
  }

  > * {
    display: flex;
    align-items: center;
    box-shadow: 0 0 0 2px #383838;
    padding: 1.2rem 0.5rem;
    font-family: ${({ theme }) => theme.serif}, serif;
  }
  & > :not(h2) {
    font-family: ${({ theme }) => theme.sansSerif}, sans-serif;
    font-weight: 400;
    padding: 0.8rem 0.5rem;
  }
`;

export default Grid;
