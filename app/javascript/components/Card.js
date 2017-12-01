import React, { Component } from 'react';


class Card extends Component {


  render() {
    console.log(this.props)
    return (
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  {this.props.title}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.props.description}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
export default Card;
