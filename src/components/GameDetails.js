import React from "react"

const GameDetails = ({ title, release_date, platforms}) => {
    const { PS5, XBOX_Series_X, Windows, macOS, Linux, Nintendo_Switch} = platforms;

    return (
        <>
            <h5>Title: {title}</h5>
            <h5>Release Date: {release_date}</h5>
            <h5>Platforms: 
                PS5: {PS5}
                XBOX Series X: {XBOX_Series_X}
                Nintendo Switch: {Nintendo_Switch}
                PC (Windows): {Windows}
                PC (macOS): {macOS}
                PC (Linux): {Linux} 
            </h5>
        </>
    )
}

export default GameDetails