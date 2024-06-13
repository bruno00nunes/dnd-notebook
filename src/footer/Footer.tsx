import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #a9a9a9;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Footer = () => (
  <StyledFooter>
    <div className="footer-column">
      <span>Dungeons and Dragons</span>
    </div>
    <div className="footer-column">
      <img src="placeholder1.jpg" alt="Placeholder 1" />
      <img src="placeholder2.jpg" alt="Placeholder 2" />
      <img src="placeholder3.jpg" alt="Placeholder 3" />
      <img src="placeholder4.jpg" alt="Placeholder 4" />
    </div>
  </StyledFooter>
);

export default Footer;