import styled from "styled-components";

//navigation
export const NavigationContainer = styled.div`
  width: 100%;
  height: 150px;
  margin: auto;
  padding: auto;
  display: flex;
  justify-content: space-evenly;
  background: #dc0a2d;
  align-items: center;
`;

export const LogoText = styled.h1`
  font-size: 36pt;
  font-weight: 500;
  margin: 20px;
`;

export const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 30px;
`;

export const NavLinkStyle = styled.h2`
  text-decoration: none;
  color: white;
  padding-left: 1rem;
  margin: 1rem;
  align-items: center;
`;

export const Logo = styled.img`
  width: 50px;
  height: 76px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const NavTabs = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

//home
export const MainContainer = styled.div`
  max-width: 1500px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const LeftContentContainer = styled.div`
  max-width: 60%;
  display: flex;
  flex-wrap: wrap;
`;
//pokemon-party
export const PokemonPartyContainer = styled.div`

`;
//search
export const SearchContainer = styled.div`
  max-width: 800px;
  height: 200px;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

export const SearchPokemonStyle = styled.input`
  height: 50px;
  width: 800px;
  border-style: solid;
  border-radius: 20px;
  padding-left: 1rem;
`;

export const LoadingStyle = styled.div`
  height: 50rem;
  width: 100%;
  text-align: center;
`;
//pokemon-card
export const PokemonCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 50rem;
  width: 100%;
`;

export const PokemonCardStyle = styled.div`
  width: 260px;
  height: 300px;
  background: #ffffff;
  box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 80px 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;

export const RightContentContainer = styled.div`
  width: 30%;
  margin-left: 3rem;
  display: flex;
  justify-content: center;
`;
//pokemon-profile-component
export const Avatar = styled.img`
  height: 200px;
  width: 200px;
  margin-top: -110px;
`;

export const PokemonProfileStyle = styled.div`
  width: 100%;
  height: 1000px;
  background: #ffffff;
  box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  stroke: #000000;
  padding-top: 3rem;
`;

export const PokePicture = styled.div`
  border-style: solid;
  border-color: black;
  border-radius: 10px;
  margin: auto;
  width: 22rem;
  height: 22rem;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokeAvatar = styled.img`
  height: 20rem;
  width: 20rem;
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
  height: 50px;
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
  height: 50px;
  width: 250px;
  border-radius: 40px;
  margin-top: 2rem;
  text-align: center;
  color: white;
  font-weight: 900;
  background-color: ${props => props.disabled ? "gray" : "red"};
`;

export const TypeClassStyle = styled.div`
  height: 40px;
  width: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
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

export const TopContainer = styled.div`
  height: 200px;
  width: 100%;
  padding: 2rem;
`;

export const ProfileStandby = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  margin: auto;
`;
