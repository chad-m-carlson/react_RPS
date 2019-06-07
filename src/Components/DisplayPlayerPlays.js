import React from 'react'
import {Image, } from 'semantic-ui-react';

const DisplayPlayerPlays = (props) => (
      props.images.map(choice => {
      if (choice.name === props.playerSel){
        return <div>
                <h1> You Played</h1>
                <Image src={choice.image}/>
              </div>
      };
    })
)


export default DisplayPlayerPlays