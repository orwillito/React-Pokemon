import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

//navigation
export const NavigationContainer = styled.div`
  max-width: 100vw;
  height: 6rem;
  margin: auto;
  padding: auto;
  display: flex;
  justify-content: space-evenly;
  background: #dc0a2d;
  align-items: center;

  ${mediaQueries("laptop")`
  background-color: blue;
  `}

  ${mediaQueries("mobile")`
  background-color: grey;
  `}
`;

export const LogoText = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin: 1.25rem;

  ${mediaQueries("laptop")`
   font-size: 1.5rem;
   font-weight: 400;
  `}

  ${mediaQueries("mobile")`
  font-size: 1rem;
    font-weight 300;
  `}
`;

export const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 2rem;
`;

export const NavLinkStyle = styled.h2`
  text-decoration: none;
  color: white;
  padding-left: 1rem;
  margin: 1rem;
  align-items: center;
`;

export const Logo = styled.img`
  width: 3.125rem;
  height: auto;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
`;

export const NavTabs = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
`;


//home
export const MainContainer = styled.div`
  min-height: 85rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;

  ${mediaQueries("laptop")`

  `}

  ${mediaQueries("mobile")`
  background-color: grey;
  `}
`;

//pokemon-party
export const PokemonPartyContainer = styled.div`
  display: flex;
  margin-left: 5rem;
  width: auto;
  justify-content: center;

  ${mediaQueries("laptop")`
   background-color: red;
   max-width: 100%;
   justify-content: center;
   
  `}

  ${mediaQueries("mobile")`
  font-size: 1rem;
    font-weight 300;
  `}
`;

//

export const TopContainer = styled.div`
  height: 250px;
  width: 60%;
  display: flex;
  margin: 1rem 3rem 1rem 1rem;
  justify-content: center;
  overflow: hidden;
`;

//
export const LeftContentContainer = styled.div`
  max-width: 60%;
  margin: 2rem;

  ${mediaQueries("laptop")`
  justify-content: center;
  `}
`;

//search
export const SearchContainerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ${mediaQueries("laptop")`
   font-size: 1.5rem;
   font-weight: 400;
  `}

  ${mediaQueries("mobile")`
  font-size: 1rem;
    font-weight 300;
  `}
`;

export const SearchPokemonStyle = styled.input`
  height: 3.125rem;
  width: 50rem;
  border-style: solid;
  margin: 1rem auto 1rem;
  border-radius: 1.5rem;
  padding-left: 2rem;
`;

export const LoadingStyle = styled.div`
  margin-top: 10rem;
  height: 50rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;
//pokemon-card

export const LeftSubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PokemonCardContainer = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  height: 900px;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;

  ${mediaQueries("laptop")`
  `}

  ${mediaQueries("mobile")`
  height: 6rem;
  width: 6rem;
  `}
`;

export const Avatar = styled.img`
  height: 13rem;
  width: 13rem;
  margin-top: -6.875rem;
  z-index: 2;

  ${mediaQueries("laptop")`
  height: 10rem;
  width: 10rem;
  `}

  ${mediaQueries("mobile")`
  height: 6rem;
  width: 6rem;
  `}
`;

export const PokemonCardStyle = styled.div`
  width: 16rem;
  height: 16rem;
  background: #ffffff;
  box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  margin: 5rem 1.25rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  justify-content: center;
  transition: background-color 0.4s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: lightgrey;
    transform: scale(1.125);
  }

  ${mediaQueries("laptop")`
  height: 12rem;
  width: 10rem;
  `}
`;

export const PokemonCardNumber = styled.h3`
  font-size: 1.2rem;

  ${mediaQueries("laptop")`
  font-size: 1rem;
  `}
`;

export const PokemonCardName = styled.h2`
  font-size: 1.3rem;
`;

export const PokemonCardType = styled.h4`
  font-size: 1rem;
`;

//pokemon-profile-component

export const RightContentContainerStyle = styled.div`
  width: 30%;
  margin-left: 0;
  display: flex;
  justify-content: center;
  z-index: 1;
  margin-top: -18rem;
`;

export const PokemonProfileStyle = styled.div`
  width: 50vw;
  min-height: 50vh;
  height: 810px;
  box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  stroke: #000000;
  padding-top: 3rem;
  position: sticky;
  top: 0;
  background: #ffffff;
  padding: 2rem;
  margin-top: 1rem;

  ${mediaQueries("laptop")`
    margin: 4rem;
  `}

  ${mediaQueries("mobile")`
  background-color: grey;
  `}
`;

export const ProfileStandby = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 100px;
  margin: auto;
  background-color: red;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: 900;
  font-size: 10pt;
  line-height: 2;
`;

export const PokeProfileStyle = styled.div`
  border-radius: 100px;
  height: auto;
`;

export const PokePicture = styled.div`
  border-style: solid;
  border-color: black;
  border-radius: 10px;
  margin: auto;
  width: 17rem;
  height: 17rem;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokeAvatar = styled.img`
  height: 15rem;
  width: 15rem;
`;

export const NameDiv = styled.div`
  width: 100%
  height: auto;
  justify-content: center;
  text-align: center;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;

export const LeftColumn = styled.div`
  height: auto;
  width: 50%;
`;

export const RightColumn = styled.div`
  height: auto;
  width: 50%;
`;

export const PokemonStatsContainer = styled.div`
  height: 40px;
  width: auto;
  margin: auto;
  flex-direction: column;
`;

export const PokeProfileTerm = styled.h4`
  font-weight: 900;
`;

export const PokeProfileValue = styled.h5`
  font-weight: 300;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ChooseYouButton = styled.button`
  height: 3rem;
  width: 16rem;
  border-radius: 40px;
  margin-top: 2rem;
  text-align: center;
  color: white;
  font-weight: 900;
  background-color: ${(props) => (props.disabled ? "gray" : "red")};
`;

export const TypeClassStyle = styled.div`
  height: 2.2rem;
  width: 6rem;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  display: flex;
  margin: auto;
  ${(props) => {
    if (props.type === "water") {
      return `background-color: #B7B9D0`;
    } else if (props.type === "bug") {
      return `background-color: #A7B723`;
    } else if (props.type === "Dark") {
      return `background-color: #75574C`;
    } else if (props.type === "dragon") {
      return `background-color: #7037FF`;
    } else if (props.type === "electric") {
      return `background-color: #F9CF30`;
    } else if (props.type === "fairy") {
      return `background-color: #E69EAC`;
    } else if (props.type === "fighting") {
      return `background-color: #C12239`;
    } else if (props.type === "fire") {
      return `background-color: #F57D31`;
    } else if (props.type === "flying") {
      return `background-color: #A891EC`;
    } else if (props.type === "ghost") {
      return `background-color: #70559B`;
    } else if (props.type === "normal") {
      return `background-color: #AAA67F`;
    } else if (props.type === "grass") {
      return `background-color: #74CB48`;
    } else if (props.type === "ground") {
      return `background-color: #DEC16B`;
    } else if (props.type === "ice") {
      return `background-color: #9AD6DF`;
    } else if (props.type === "poison") {
      return `background-color: #A43E9E`;
    } else if (props.type === "psychic") {
      return `background-color: #FB5584`;
    } else if (props.type === "rock") {
      return `background-color: #B69E31`;
    } else if (props.type === "steel") {
      return `background-color: #B7B9D0`;
    }
  }};
`;

export const FooterContainer = styled.div`
  margin-top: 1rem;
  height: 1.7rem;
  width: 100%;
  overflow: hidden;
  background: #dc0a2d;
  z-index: 10;
  left: 0;
  bottom: 0;
  align-items: center;
  padding: 1rem;
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: auto;
  padding: auto;
  justify-content: space-evenly;
  background: #dc0a2d;
  align-items: center;
  gap: 40rem;
`;

export const DeveloperNames = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const FooterDevNames = styled.h3`
  font-size: 2rem;
`;
