import React from 'react';
import Todo from './Todo.jsx';

export default React.createClass({
  render() {
    var self = this;
    return (
      <div>
        {this.props.todos.map(function(todo, i) {
          return <Todo text={todo.text} onClick={self.props.remove.bind(null, i)} />
        })}
      </div>
    );
  }
});