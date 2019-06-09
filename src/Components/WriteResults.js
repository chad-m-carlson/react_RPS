import React from 'react'


const WriteResults = (props) => {
  if (props.playerWins)
    return <h1 style={green}>You Win!!</h1>
  else if (props.computerWins)
    return <h1 style={red}>You Lose :\</h1>
  else return <h1 style={yellow}>Draw</h1>
}
const green = {
  color: 'green'
}
const yellow = {
  color: 'orange'
}
const red = {
  color: 'red'
}
export default WriteResults
