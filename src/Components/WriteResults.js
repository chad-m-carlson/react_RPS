import React from 'react'

// class GamePlay extends React.Component {
  // state = {
  //     draw: false,
  //     computer: false,
  //     player: false,
  //     winStatement: '',
  // }
  
  // GamePlay = () => {
  //   const {player, computer} = this.props
  //   if (player === null || computer === null) return null
  //   if (player === true || computer === true) 
  //   if (player === computer) {
  //     this.setState({ draw: true})
  //   } else if (player === 'rock' && Selection === 'paper' || player === 'scissors' && Selection === 'rock' || player === 'paper' && Selection === 'scissors'){
  //     this.setState({ computer: true})
  //   } else 
  //     this.setState({ player: true})  
  //   this.writeResult()
  //   }
  
  const WriteResults = (props) => {
    const {player, computer} = props
    if (computer) {
      return <h1>Computer Wins</h1>
    }else if (player){
      return <h1>Player Wins</h1>
    }else 
      return <h1>Draw</h1>
  }
  

  // render() {
  //   return(
  //     <div>

  //     {/* {this.GamePlay()} */}
  //     <h1>{this.state.winStatement}</h1>
  //     </div>
  //     )
  // }

  


    // if state.draw return "its a draw"
// }
export default WriteResults