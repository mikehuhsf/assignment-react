import React, { useState, useEffect } from "react";
import PlatformListItem from "./PlatformListItem";

const PlatformsList = () => {
  const [Platforms, setPlatforms] = useState(null);

  const fetchPlatforms = () => {
    fetch(`http://localhost:5000/api/v1/platforms/1`)
      .then((response) => response.json())
      .then((result) => setPlatforms(result));
  };

  useEffect(() => {
    fetchPlatforms();
  }, []);

  return (
    <>
      <h2>Platforms List</h2>
      {Platforms &&
        Platforms.map((Platform) => (
          <PlatformListItem key={Platform.id} Platform={Platform} />
        ))}
    </>
  );
};

export default PlatformsList;
