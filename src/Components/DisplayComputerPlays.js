import React from 'react'
import {Image, } from 'semantic-ui-react';

const DisplayComputerPlays = (props) => {
  const {images, computerSel} = props
  const [...x] = images
  if (computerSel === 'rock') 
    return <Image src={x[0].image} />
  if (computerSel === 'paper')
    return <Image src={x[1].image} />
  if (computerSel === 'scissors')
    return <Image src={x[2].image} />
}

export default DisplayComputerPlays