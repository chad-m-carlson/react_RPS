import React from 'react'
import {Image, } from 'semantic-ui-react';

const DisplayComputerPlays = (props) => (
      props.images.map(choice => {
      if (choice.name === props.computerSel){
        return <div key={choice.id}>
                <h1>Computer Played</h1>
                  <Image  src={choice.image}/>
              </div>
      };
    })
  )

export default DisplayComputerPlays