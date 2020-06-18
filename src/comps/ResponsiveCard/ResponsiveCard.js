import React from 'react';
import { Card, CardMedia } from '@material-ui/core';

/**
 * Taken from https://stackoverflow.com/questions/39712609/responsive-width-for-card
 * 
 * Render the card with the given width as a percent.
 * @param {String} widthAsPercent
 * @returns {XML}
 */
let renderCardWithWidth = (widthAsPercent) => {
  return <Card style={{width:widthAsPercent}}>
    <CardMedia>
      <img src='http://images.memes.com/character/meme/evil-toddler'/>
    </CardMedia>
  </Card>;
};

export default class ResponsiveCard extends React.Component {
  render() {
    let width = window.screen.availWidth;
    if (width > 720) {
      return renderCardWithWidth('60%');
    } else {
      return renderCardWithWidth('90%');
    }
  }
}