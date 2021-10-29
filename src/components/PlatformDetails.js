import React from "react"

const PlatformDetails = ({ name, release_date, specifications}) => {
    const { manufacturer, storage_capacity, GPU, CPU} = specifications;

    return (
        <>
            <h5>Release Date: {release_date}</h5>
            <h5>Specifications: <br></br>
                <blockquote> 
                Manufacturer: {manufacturer} <br></br>
                Storage Capacity: {storage_capacity} <br></br>
                GPU: {GPU}<br></br>
                CPU: {CPU}  </blockquote>
            </h5>
        </>
    )
}

export default PlatformDetails