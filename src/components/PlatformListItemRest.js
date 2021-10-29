import React, { useState } from 'react';
import PropTypes from "prop-types";
import PlatformDetails from './PlatformDetails';

function PlatformListItem({id, name}) {
    const [details, setDetails] =useState(null);



    function handleLoadDetails() {
        fetch(`http://localhost:5000/api/v1/platforms/${id}`)
        //fetch(`https://stormy-eyrie-59187.herokuapp.com/v1/doctor/${id}`)
          .then((response) => response.json())
          .then((response) => setDetails(response));
      }

    return (
    <div>
        <a  href="#" onClick={handleLoadDetails}>
            {name}
        </a>
        {
            details && (
                <PlatformDetails
                release_date = {details.release_date}
                platforms = {details.platforms}
                />
            )
            
        }
    </div>
    );
}

PlatformListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default PlatformListItem