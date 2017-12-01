import React, { Component } from 'react';


class Header extends Component {


  render() {
    console.log(this.props)
    return (
        <header>
          <h1>Welcome to Dunder Mifflin Paper Company.</h1>
          <h2>Here are the kinds of paper we sell</h2>
        </header>
      );
    }
  }
export default Header;
