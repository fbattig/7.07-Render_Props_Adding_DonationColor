import React, { Component } from "react";
import "./styles.css";
import Animal from "./Animal";
class App extends Component {
  render() {
    const details = [
      {
        name: "Tiger",
        number: 3890,
        endangered: true,
        photo: "https://source.unsplash.com/Si6Obte6Bu0/400x300",
        donation: 100
      },
      {
        name: "Brown Bear",
        number: 200000,
        endangered: false,
        photo: "https://source.unsplash.com/c8XlAc1akIU/400x300",
        donation: 10
      },
      {
        name: "Red Panda",
        number: 10000,
        endangered: true,
        photo: "https://source.unsplash.com/2zYHKx8jtvU/400x300",
        donation: 50
      }
    ];
    return (
      <Animal details={details}>
        <h1>Endangered Animals</h1>
      </Animal>
    );
  }
}

export default App;
