import React, {Component} from 'react'
import Card from 'components/Card.js'
import Header from 'components/header.js'
import Pic from 'components/pic.js'

export default class Paper extends Component {

    render() {
      return (
          <div>
            <Header />
            <Card id='regular' title="Regular Paper" description="Normal, white paper" />
            <Card id = 'bank' title="Bank Paper" description="Paper meant for banks" />
            <Card id = 'banana' title="Banana Paper" description="Paper made for bananas" />
            <Pic />
          </div>
      )
    }
  }
