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

export const PokemonCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 50rem;
  width: 100%;
`;

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
export const PokemonCardStyle = styled.div`
  width: 260px;
  height: 327px;
  background: #ffffff;
  box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 80px 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const RightContentContainer = styled.div`
  max-width: 30%;
  margin-left: 3rem;
`;

export const PokemonProfileStyle = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  stroke: #000000;
  padding: 2rem;
`;

export const Avatar = styled.img`
  height: 200px;
  width: 200px;
  margin-top: -110px;
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
