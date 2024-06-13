import styled from 'styled-components';
import HeaderNav from './HeaderNav';
import HeaderLogo from './Logo';

const StyledHeader = styled.header`
  background-color: #a9a9a9;
  color: white;
  display: flex;
  justify-content: space-between;
`

const Header = () => (
  <StyledHeader>
    <HeaderLogo />
    <HeaderNav />
  </StyledHeader>
);

export default Header;