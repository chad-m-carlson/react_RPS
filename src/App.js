import React from 'react';
// import Choices from './Components/Choices';
import WriteResults from './Components/WriteResults'
import DisplayPlayerPlays from './Components/DisplayPlayerPlays';
import DisplayComputerPlays from './Components/DisplayComputerPlays';
// import PlayGame from './Components/PlayGame';
import {Container, Header, Grid, Image, Card} from 'semantic-ui-react';

class App extends React.Component{
  state = {
    // gameOver: true,
    choices: [
      {id: 1, name: 'rock', image: 'https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png'},
      {id: 2, name: 'paper', image: 'https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/paper.png'},
      {id: 3, name: 'scissors', image: 'https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/scissors.png'}
    ],
    computerSelection: '',
    playerSelection: '',
    playerWins: false,
    computerWins: false,
    gameActive: false,
  }

  handleClick = (e) => {
    const playerSelection = e.target.name;
    const computerSelection = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
      this.setState({ drawGame: true})
      } else if (playerSelection === 'rock' && computerSelection === 'paper' ||   playerSelection === 'scissors' && computerSelection === 'rock' ||         playerSelection === 'paper' && computerSelection === 'scissors'){
      this.setState({ computerWins: true})
      } else 
      this.setState({ playerWins: true})
    this.setState({playerSelection, computerSelection, gameActive: true,});
    setTimeout(() => {
      this.resetGame()
    }, 5000);
  }

  resetGame = () => {
    this.setState({
      gameActive: false,
      computerSelection: '',
      playerSelection: '',
      plaherWins: false,
      computerWins: false,
    })
  }

  render() {
    return(
      <Container style={{ marginTop: "25px"}}>
        <Header as='h1'>React Rock-Paper-Scissors</Header>
        <Grid>
          {this.state.choices.map(image =>(
            <Grid.Column key={image.id} width={3}>
              <Image
                src={image.image}
                name={image.name}
                onClick={this.handleClick
                }
                />
            </Grid.Column>
          ))}
        </Grid>
        {this.state.gameActive && 
        <WriteResults 
          reset={this.resetGame}
          {...this.state}
        />}
        <Grid>
          <Grid.Column width={4}>
            <Card>
              {this.state.gameActive && 
                <DisplayPlayerPlays 
                playerSel={this.state.playerSelection}
                images={this.state.choices}
                />
              }
            </Card>
            </Grid.Column>   
            <Grid.Column width={4}>
              <Card>
                {this.state.gameActive && 
                <DisplayComputerPlays
                  computerSel={this.state.computerSelection}
                  images={this.state.choices}
                  />
                }
              </Card>
            </Grid.Column>
        </Grid>
        </Container>
    )
  }

}

export default App;
