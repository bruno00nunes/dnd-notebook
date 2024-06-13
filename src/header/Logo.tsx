import styled from 'styled-components';
import logo from '../assets/dnd/5e D&D Logo.svg'; 

const StyledLogo = styled.img`
  height: 60px;
  width: 60px;
`

const StyledLogoContainer = styled.a`
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderLogo = () => (
  <StyledLogoContainer href="/">
    <StyledLogo src={logo} alt="Dungeons and Dragons ampersand logo" />
  </StyledLogoContainer>
);

export default HeaderLogo;