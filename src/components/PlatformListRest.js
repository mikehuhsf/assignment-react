import React, { Component } from "react";
import PlatformListItem from "./PlatformListItemRest";

export default class PlatformList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = { platforms: []}
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/v1/platforms")
    .then((response) => response.json())
    .then((result) => this.setState({ platforms: result}))
  }

  renderPlatforms() {
      return this.state.platforms.map((platform) => (
          <PlatformListItem
            key={platform.id}
            id={platform.id}
            name={platform.name}
            ></PlatformListItem>
      ));
  
  }
  
  render () {
      return(
      <>
        <h2>Platforms</h2>
        {this.renderPlatforms()}

      </>
      );
  }
  

  }