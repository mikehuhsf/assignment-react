import React, { useState } from 'react';
import PropTypes from "prop-types";
import DoctorDetails from "./GameDetails"
import GameDetails from './GameDetails';

function GameListItem({id, title}) {
    const [details, setDetails] =useState(null); 

    function handleLoadDetails() {
        //fetch(`http://localhost:5000/v1/doctor/${id}`)
        fetch(`https://stormy-eyrie-59187.herokuapp.com/v1/doctor/${id}`)
          .then((response) => response.json())
          .then((response) => setDetails(response));
      }

    return (
    <div>
        <a href="#" onClick={handleLoadDetails}>
            {title}
        </a>
        {
            details && (
                <GameDetails
                release_date = {details.release_date}
                platforms = {details.platforms}
                />
            )
        }
    </div>
    );
}

GameListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default GameListItem