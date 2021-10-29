import React, { useState } from "react";

const PlatformListItem = ({ platform }) => {
  const [GamesList, setGamesList] = useState(null);

  const GQL_API = `http://localhost:3030/`;
  const GQL_QUERY = `
    query($id: ID!){
      platform(id: $id){
        name
        release_date
        specifications
      }
    }`;

  const handleLoadGames = () => {
    const variables = { id: platform.id };
    fetch(GQL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GQL_QUERY,
        variables,
      }),
    })
      .then((response) => response.json())
      .then((result) => setGamesList(result.data.Platform.games));
  };

  return (
    <div>
      <a href="#" onClick={handleLoadGames}>
        {platform.name}
      </a>
      {GamesList &&
        GamesList.map((Game) => {
          return <div key={Game.id}>{Game.name}</div>;
        })}
    </div>
  );
};

//export default PlatformListItem;
