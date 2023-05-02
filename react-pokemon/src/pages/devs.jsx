import React from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import KirkPic from "../assets/kirk.jpg";
import OrwillePic from "../assets/Orwille.png";
import { mediaQueries } from "../utils/mediaQueries";

const DevContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  margin-left: 15rem;
  margin-right: 15rem;
  padding: 2rem;
  justify-content: center;
  ${mediaQueries("laptop")`
    margin-left: 2rem;
    margin-right: 2rem;
 `}

  ${mediaQueries("mobile")`
    margin-left: 0;
    margin-right: 0;
 `}
`;

const DevOne = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  ${mediaQueries("laptop")`
    
 `}

  ${mediaQueries("mobile")`
   flex-direction: column;
   align-content: center;

 `}
`;

const DevTwo = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  ${mediaQueries("laptop")`
    
 `}

  ${mediaQueries("mobile")`
   flex-direction: column-reverse;
   align-content: center;

 `}
`;

const TextContent = styled.p`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 35rem;
  height: 18rem;
  font-size: 1.5rem;
  font-weight: 400;
  ${mediaQueries("laptop")`
    font-size: 1rem;
    font-weight: 400;
    width: 25rem;
    height: 12rem;

 `}

  ${mediaQueries("mobile")`
    font-size: 1rem;
    font-weight 300;
    width: 20rem;
    text-align: center;
    height: auto;
 `}
`;

const ImageContent = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 8px;

  ${mediaQueries("laptop")`
    width: 12rem;
    height: 12rem;
 `}

  ${mediaQueries("mobile")`
    width: 15rem;
    height: 15rem;
    align-self: center;
 `}
`;

const Devs = () => {
  return (
    <>
      <DevContainer>
        <Header>Developers</Header>
        <ContentContainer>
          <DevOne>
            <ImageContent src={OrwillePic} />
            <TextContent>
              <h3>Orwille Mercado</h3>
              Design, code and market. Revolving around the intersection of
              these disciplines. Hoping to learn more about react js and all.
            </TextContent>
          </DevOne>
          <DevTwo>
            <TextContent>
              <h3>Kirk Jann Garcia</h3>I pursued web development as a means of
              establishing a rewarding profession in technology. Looking for new
              challenges and eager to learn and expand my development skills.
            </TextContent>
            <ImageContent src={KirkPic} />
          </DevTwo>
        </ContentContainer>
      </DevContainer>
      <Footer />
    </>
  );
};

export default Devs;
