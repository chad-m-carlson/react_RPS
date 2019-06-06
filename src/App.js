import React from 'react';
import Choices from './Components/Choices';
import WriteResults from './Components/WriteResults'
import DisplayPlayerPlays from './Components/DisplayPlayerPlays';
import DisplayComputerPlays from './Components/DisplayComputerPlays';
import {Container, Header, Grid,} from 'semantic-ui-react';

class App extends React.Component{
  state = {
    playerSelection: '',
    computerSelection: '',
    playerWinsGame: false,
    computerWinsGame: false,
    drawGame: false,
    gameOver: true,
    choices: [
      {id: 1, name: 'rock', image: 'https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png'},
      {id: 2, name: 'paper', image: 'https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/paper.png'},
      {id: 3, name: 'scissors', image: 'https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/scissors.png'}
    ]
  }

  playerClicked = (e) => {
    this.setState({ playerSelection: e.target.name}, this.computerSelection(), console.log(this.state.playerSelection))
  }

  computerSelection  = () => {
    this.setState( state => {
      return { computerSelection: ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]}
    })
    this.playGame();
  }



  playGame = () => {
    const {playerSelection, computerSelection} = this.state
    console.log(`Player:${playerSelection}`)
    if (playerSelection === computerSelection) {
      this.setState({ drawGame: true})
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'scissors'){
      this.setState({ computerWinsGame: true})
    } else 
    this.setState({ playerWinsGames: true})  
    this.setState({ gameOver: false})
    setTimeout(() => {
      this.setState({ computerWinsGame: false})
      this.setState({ playerWinsGame: false})
      this.setState({ drawGame: false})
      this.setState({ gameOver: true})
    }, 3000);
    }

  render() {
    return(
      <Container style={{ marginTop: "25px"}}>
        <Header as='h1'>React Rock-Paper-Scissors</Header>
        <Choices 
          playerClicked={this.playerClicked} 
          images={this.state.choices}
          playGame={this.playGame}
          />
        {!this.state.gameOver &&
          <WriteResults 
          computer={this.state.computerWinsGame}
          player={this.state.playerWinsGame}
          draw={this.state.drawGame}
          />}
        {!this.state.gameOver &&
        <Grid>
          <Grid.Column width={2}>

          <DisplayPlayerPlays 
            playerSel={this.state.playerSelection}
            images={this.state.choices}
            />
            </Grid.Column>
            <Grid.Column width={2}>

          <DisplayComputerPlays
            computerSel={this.state.computerSelection}
            images={this.state.choices}
            />
            </Grid.Column>
        </Grid>}
        </Container>
    )
  }

}

export default App;
