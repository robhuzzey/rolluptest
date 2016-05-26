import React from 'react';
import Todos from './reactComponents/Todos.jsx';
import Entry from './reactComponents/Entry.jsx';

var App = React.createClass({
  remove(i) {
    this.setState(function(previousState, currentProps) {
      var todos = previousState.todos;
      delete todos[i];
      return { todos };
    });
  },
  add(text) {
    this.setState(function(previousState, currentProps) {
      var todos = previousState.todos;
      todos.push({text});
      return { todos };
    });
  },
  getInitialState() {
    return {
      todos: []
    }
  },
  render() {
    var self = this;
    return (
      <div>
        <h2>Some todos.</h2>
        <Entry buttonText="Add todo" addEntry={this.add} />
        <Todos todos={this.state.todos} remove={this.remove} />
      </div>
    );
  }
});

export { App };