import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      astros: [],
    };
  }

  componentDidMount() {
    const url = "http://api.open-notify.org/astros.json";
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          astros: json.people,
        });
      });
  }

  allAstros = () => {
    return this.state.astros.map((astro) => (
      <p>
        `{astro.name} of the {astro.craft}`
      </p>
    ));
  };

  render() {
    return (
      <div>
        <ul>
          <li>{this.allAstros()}</li>
        </ul>
      </div>
    );
  }
}
export default App;
