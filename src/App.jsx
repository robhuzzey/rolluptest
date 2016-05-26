import React from 'react';
import Todos from './reactComponents/Todos.jsx';

var App = React.createClass({
  remove(i) {
    this.setState(function(previousState, currentProps) {
      var todos = previousState.todos;
      delete todos[i];
      return { todos };
    });
  },
  getInitialState() {
    return {
      todos: [
        {text: "first todo"},
        {text: "second todo"}
      ]
    }
  },
  render() {
    var self = this;
    return (
      <div>
        <h2>Some todos!</h2>
        <Todos todos={this.state.todos} remove={this.remove} />
      </div>
    );
  }
});

export { App };