import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => (
  <StyledApp>
    <Header />
    <div></div>
    <Footer />
  </StyledApp>
);

export default App;
