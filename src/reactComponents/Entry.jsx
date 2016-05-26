import React from 'react'

export default React.createClass({
  addEntry() {
    var input = this.refs.myInput;
    this.props.addEntry(input.value);
    input.value = '';
  },
  render() {
    return (
      <span><input type="text" ref="myInput" placeholder={this.props.placeholder} /><button onClick={this.addEntry}>{this.props.buttonText}</button></span>
    );
  }
});