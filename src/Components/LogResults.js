import React, { useState } from 'react';
const LogResults = (props) => {
  const {totalPlayerWins, totalComputerWins, totalDraws} = props
  return (
    <div>
      <h1>Log Results</h1>
      <h2>Player: {totalPlayerWins}</h2>
      <h2>Computer: {totalComputerWins}</h2>
      <h2>Draws: {totalDraws}</h2>
    </div>
    )
};

export default LogResults