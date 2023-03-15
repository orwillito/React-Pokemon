import React, { useEffect } from "react";
import { getPokemonIds } from "../utils/fetch";

const PartyOfSix = ({ party, setParty }) => {
    return (!party ? (
        `display: none`
    ) : (
        <>
        <div>
            <div>
                <img src={pokeProfile.sprites.other.dream_world.front_default} />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </>
    )};

export default Party;