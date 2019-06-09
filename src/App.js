import React from 'react';
import LogResults from './Components/LogResults';
import WriteResults from './Components/WriteResults';
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
    drawGame: false,
    gameActive: false,
    totalPlayerWins: 0,
    totalComputerWins: 0,
    totalDraws: 0,
  };

  handleClick = (e) => {
    const {totalDraws, totalComputerWins, totalPlayerWins} = this.state
    if (!this.state.gameActive){
      const playerSelection = e.target.name;
      const computerSelection = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
      if (playerSelection === computerSelection) {
        this.setState({ drawGame: true ,
                        totalDraws: totalDraws+ 1,});
        } else if (playerSelection === 'rock' && computerSelection === 'paper' ||   playerSelection === 'scissors' && computerSelection === 'rock' ||         playerSelection === 'paper' && computerSelection === 'scissors'){
          this.setState({ computerWins: true,
                          totalComputerWins: totalComputerWins + 1,})
          } else 
          this.setState({ playerWins: true,
                          totalPlayerWins:  totalPlayerWins + 1, });
      this.setState({playerSelection, computerSelection, gameActive: true,});
      setTimeout(() => {
        this.resetGame()
      }, 5000);
    };
  };

  resetGame = () => {
    this.setState({
      gameActive: false,
      computerSelection: '',
      playerSelection: '',
      playerWins: false,
      computerWins: false,
      drawGame: false,
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
                onClick={this.handleClick}
                />
            </Grid.Column>
          ))}
          <LogResults
            totalPlayerWins={this.state.totalPlayerWins}
            totalComputerWins={this.state.totalComputerWins}
            totalDraws={this.state.totalDraws}
          />
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
