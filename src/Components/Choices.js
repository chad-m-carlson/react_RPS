// import React from 'react';
// import WriteResults from './WriteResults';
// import {Image, Grid, } from 'semantic-ui-react';

// class Choices extends React.Component{
//   state = {
//     // activeGame: false,
//     // event: '',
    
//   }

//   handleClick = (e) => {
//     const playerSelection = e.target.name;
//     const computerSelection = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
//       debugger
//   }


render() {
      return (
        <Grid>
          {this.props.images.map(image =>(
            <Grid.Column key={image.id} width={3}>
              <Image
                src={image.image}
                name={image.name}
                onClick={this.handleClick
                }
                />
              {this.state.activeGame ? <WriteResults active={this.state.activeGame} event={this.state.event}/> : null}
            </Grid.Column>
          ))}
//         </Grid>
//       )
//   }
// }

// export default Choices;