import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterDetails = ({ characterId }) => {
    const publicKey = '10e6807befd8aeb6f15c4e5356806e98';
    const hashKey = '74068a949a4478d79f2be1e5c96470be';

    // const [selectedCharacterID, setSelectedCharacterID] = useState(null)
    const [characterData, setCharacterData] = useState({})

    useEffect(() => {
        if (characterId) {
            async function fetchCharacterById() {
                try {                
                    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${publicKey}&hash=${hashKey}`)
                    setCharacterData(await response.data.data.results[0]);
                    console.log(characterData)
                } catch (error) {
                    console.error("Error fetching character data:", error);
                }
            }
            fetchCharacterById()
        }
    }, [characterId])

    return (
        <div>
            <h1>Name: {characterData.name}</h1>
            <h3>Description:</h3>
            <p>{characterData.description}</p>
            <h3>Comics:</h3>
            <a href={characterData.comics.collectionURI}>{characterData.comics.collectionURI}</a>
        </div>
    )
}

export default CharacterDetails