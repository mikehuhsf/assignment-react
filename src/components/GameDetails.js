import React from "react"

const GameDetails = ({ title, release_date, platforms}) => {
    const { PS5, XBOX_Series_X, Windows, macOS, Linux, Nintendo_Switch} = platforms;

    return (
        <>
            <h5>Release Date: {release_date}</h5>
            <h5>Platforms: <br></br>
                <blockquote> PS5: {PS5} <br></br>
                XBOX Series X: {XBOX_Series_X} <br></br>
                Nintendo Switch: {Nintendo_Switch} <br></br>
                PC (Windows): {Windows}<br></br>
                PC (macOS): {macOS} <br></br>
                PC (Linux): {Linux} </blockquote>
            </h5>
        </>
    )
}

export default GameDetails