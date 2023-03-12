import styled from 'styled-components'


//navigation
export const NavigationContainer = styled.div`
    width: 100%
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-evenly;
    background: #DC0A2D;
`


export const LogoContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    color: white;
    
`

export const Logo = styled.img`
    width: 50px;
    height: auto;
`

export const  NavTabs = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;

`


//home
export const MainContainer = styled.div`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-left: 1rem;
    padding-right: 1rem;

`

export const LeftContentContainer = styled.div`
    max-width: 60%;
    display: flex;
    flex-wrap: wrap;
    
`

export const SearchContainer = styled.div`
    max-width: 60%;
    height: 10rem;
`

export const PokemonCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 50rem;
    width: 100%;
`

export const LoadingStyle = styled.div`
    height: 50rem;
    width: 100%;
    text-align: center;
    
`
export const PokemonCardStyle = styled.div`
    width: 260px;
    height: 327px;
    background: #FFFFFF;
    box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 80px 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const RightContentContainer = styled.div`
    max-width: 30%;
    margin-left: 3rem;
`

export const PokemonProfileStyle = styled.div`
    width: 25rem;
    height: auto;
    background: #FFFFFF;
    box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    stroke: #000000;
    padding: 1rem
`

export const Avatar = styled.img`
    height: 200px;
    width: 200px;
    margin-top: -110px;
`

export const PokePicture = styled.div`
    border-style: solid;
    border-color: black;
    width: 25rem;
    height: 23rem;
    background: silver;
    display: flex;
    justify-content: center;
    align-items: center; 
`

export const PokeAvatar = styled.img`
    height: 20rem;
    width: 20rem;
`
