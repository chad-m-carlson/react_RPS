import React from 'react';
import Choices from './Components/Choices';
import GamePlay from './Components/GamePlay';
import {Container, Header, } from 'semantic-ui-react';

class App extends React.Component{
  state = {
    playerSelection: null,
    computerSelection: null,
    choices: [
      {id: 1, name: 'rock', image: 'https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png'},
      {id: 2, name: 'paper', image: 'https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/paper.png'},
      {id: 3, name: 'scissors', image: 'https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/scissors.png'}
    ]
  }



  playerClicked = (e) => {
    this.setState({ playerSelection: e.target.name}) 
    this.computerSelection()
  }

  computerSelection  = () => {
    this.setState({ computerSelection: ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)] });
  }


  render() {
    return(
      <Container style={{ marginTop: "25px"}}>
        <Header as='h1'>React Rock-Paper-Scissors</Header>
        <Choices 
          playerClicked={this.playerClicked} 
          images={this.state.choices}
          />
        <GamePlay 
          player={this.state.playerSelection} 
          computer={this.state.ComputerSelection}
          />

      </Container>
    )
  }
}

export default App;
