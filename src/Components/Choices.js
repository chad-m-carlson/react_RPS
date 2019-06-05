import React from 'react';
import {Image, Grid, } from 'semantic-ui-react';

  // class Choices extends React.Component{

  const Choices = ({images,  playerClicked}) => {
      return (
        <Grid>
          {images.map(image =>(
            <Grid.Column key={image.id} width={3}>
              <Image
                src={image.image}
                name={image.name}
                onClick={playerClicked}
                />
            </Grid.Column>
          ))}
        </Grid>
      )
  }


export default Choices;