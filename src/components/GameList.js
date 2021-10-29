import React, { Component } from "react";
import GameListItem from "./GameListItem";

export default class GameList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = { games: []}
  }

  componentDidMount() {
    fetch("https://boiling-mountain-01737.herokuapp.com//api/v1/games")
    .then((response) => response.json())
    .then((result) => this.setState({ games: result}))
  }

  renderGames() {
      return this.state.games.map((game) => (
          <GameListItem
            key={game.id}
            id={game.id}
            title={game.title}
            ></GameListItem>
      ));
  
  }
  
  render () {
      return(
      <>
        <h2>Games</h2>
        {this.renderGames()}

      </>
      );
  }
  

  }