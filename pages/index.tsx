import styled from 'styled-components';

const Home = () => {
  return (
    <StyledMain>
      <Title>NextJS &amp; Styled-Components</Title>
    </StyledMain>
  );
};

export default Home;

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.main};
`;

const Title = styled.b`
  font-size: 3rem;
  color: ${({ theme }) => theme.color.title};
`;
