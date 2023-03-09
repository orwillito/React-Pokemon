import styled from 'styled-components'


export const MainContainer = styled.div`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;

`

export const LeftContentContainer = styled.div`
    max-width: 60%;
    display: flex;
    flex-wrap: wrap;
    
`
export const PokemonCardStyle = styled.div`
    width: 285px;
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
`

export const SearchContainer = styled.div`
    max-width: 60%;
`

export const Avatar = styled.img`
    height: 200px;
    width: 200px;
    margin-top: -110px;
`

export const PokemonProfileStyle = styled.div`
    width: 300px;
    height: 600px;
    background: #FFFFFF;
    box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    stroke: #000000;
`