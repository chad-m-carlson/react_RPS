import React from 'react'
import {Image, } from 'semantic-ui-react';

const DisplayPlayerPlays = (props) => {
  const {images, playerSel} = props
  const [...x] = images
  if (playerSel === 'rock') 
    return <Image src={x[0].image } />
  if (playerSel === 'paper')
    return <Image src={x[1].image} />
  if (playerSel === 'scissors')
    return <Image src={x[2].image} />
}

export default DisplayPlayerPlays