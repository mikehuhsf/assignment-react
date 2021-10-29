import React, { useState } from 'react';
import PropTypes from "prop-types";
import PlatformDetails from './PlatformDetails';

function PlatformListItem({id, name}) {
    const [details, setDetails] =useState(null);



    function handleLoadDetails() {
        fetch(`https://boiling-mountain-01737.herokuapp.com//api/v1/platforms/${id}`)
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
                specifications = {details.specifications}
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