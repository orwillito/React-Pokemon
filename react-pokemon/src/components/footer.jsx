import PokeLogo from "../assets/pokeball.svg";
import styled from "styled-components";
import { mediaQueries } from "../utils/mediaQueries";

const Logo = styled.img`
  width: 3.125rem;
  height: auto;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
`;

const FooterContainer = styled.div`
  margin-top: 1rem;
  height: 1.7rem;
  width: 100vw;
  overflow: hidden;
  background: #dc0a2d;
  z-index: 10;
  left: 0;
  bottom: 0;
  align-items: center;
  padding: 1rem;
  ${mediaQueries("laptop")`
    font-size: 1.5rem;
    font-weight: 400;
 `}

  ${mediaQueries("mobile")`
    font-size: 1rem;
   font-weight 300;
 `}
`;

const FooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100vw;
  margin: auto;
  padding: auto;
  justify-content: space-evenly;
  background: #dc0a2d;
  align-items: center;
  gap: 40rem;
  ${mediaQueries("laptop")`
    font-size: 1.5rem;
    font-weight: 400;
    gap: 0;
    padding: 3px;
    margin: 0;
 `}

  ${mediaQueries("mobile")`
    font-size: 1rem;
   font-weight 300;
 `}
`;

const DeveloperNames = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const FooterDevNames = styled.h3`
  font-size: 2rem;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLogoContainer>
          <Logo src={PokeLogo} />

          <DeveloperNames>
            <FooterDevNames>Kirk &</FooterDevNames>
            <FooterDevNames>Will</FooterDevNames>
          </DeveloperNames>
        </FooterLogoContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
