import styled from "styled-components";

const StyledHeaderNav = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const StyledHeaderAnchor = styled.a`
  color: white;
  background-color: #141414;
  border-radius: 10px;
  text-decoration: none;
  padding: 10px 15px;

  &:hover {
    background-color: #ff010a;
  }

  &:first-child {
    margin-right: 20px;
  }

  &:last-child {
    margin-left: 20px;
  }
`;

const HeaderNav = () => (
  <StyledHeaderNav>
    <StyledHeaderAnchor href="/#">Default</StyledHeaderAnchor>
    <StyledHeaderAnchor href="/#">Default</StyledHeaderAnchor>
    <StyledHeaderAnchor href="/#">Default</StyledHeaderAnchor>
  </StyledHeaderNav>
);

export default HeaderNav;