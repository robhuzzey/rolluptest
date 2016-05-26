import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>{this.props.text} <button onClick={this.props.onClick}>Remove</button></div>
    );
  }
});