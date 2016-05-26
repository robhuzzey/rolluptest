(function (React$1,ReactDOM) {
  'use strict';

  React$1 = 'default' in React$1 ? React$1['default'] : React$1;
  ReactDOM = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;

  var Todo = React$1.createClass({
    displayName: 'Todo',
    render: function render() {
      return React$1.createElement(
        'div',
        null,
        this.props.text,
        ' ',
        React$1.createElement(
          'button',
          { onClick: this.props.onClick },
          'Remove'
        )
      );
    }
  });

  var Todos = React$1.createClass({
    displayName: 'Todos',
    render: function render() {
      var self = this;
      return React$1.createElement(
        'div',
        null,
        this.props.todos.map(function (todo, i) {
          return React$1.createElement(Todo, { text: todo.text, onClick: self.props.remove.bind(null, i) });
        })
      );
    }
  });

  var Entry = React$1.createClass({
    displayName: 'Entry',
    addEntry: function addEntry() {
      var input = this.refs.myInput;
      this.props.addEntry(input.value);
      input.value = '';
    },
    render: function render() {
      return React$1.createElement(
        'span',
        null,
        React$1.createElement('input', { type: 'text', ref: 'myInput', placeholder: this.props.placeholder }),
        React$1.createElement(
          'button',
          { onClick: this.addEntry },
          this.props.buttonText
        )
      );
    }
  });

  var App = React$1.createClass({
    displayName: 'App',
    remove: function remove(i) {
      this.setState(function (previousState, currentProps) {
        var todos = previousState.todos;
        delete todos[i];
        return { todos: todos };
      });
    },
    add: function add(text) {
      this.setState(function (previousState, currentProps) {
        var todos = previousState.todos;
        todos.push({ text: text });
        return { todos: todos };
      });
    },
    getInitialState: function getInitialState() {
      return {
        todos: []
      };
    },
    render: function render() {
      var self = this;
      return React$1.createElement(
        'div',
        null,
        React$1.createElement(
          'h2',
          null,
          'Some todos.'
        ),
        React$1.createElement(Entry, { buttonText: 'Add todo', addEntry: this.add }),
        React$1.createElement(Todos, { todos: this.state.todos, remove: this.remove })
      );
    }
  });

  ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

}(React,ReactDOM));
//# sourceMappingURL=bundle.js.map