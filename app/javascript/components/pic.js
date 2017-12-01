import React, { Component } from 'react';


class Pic extends Component {
  render() {
    return(
  <div>
  <img src={require('./paper.jpeg')} />
  </div>
    );
  }
}
export default Pic
