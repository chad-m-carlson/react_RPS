import React from 'react'
import {Grid, Image, } from 'semantic-ui-react';


const WriteResults = (props) => {
  if (props.playerWins)
    return <h1>You Win!!</h1>
  else if (props.computerWins)
    return <h1>You Lose :\</h1>
  else return <h1>Draw</h1>
}
export default WriteResults
