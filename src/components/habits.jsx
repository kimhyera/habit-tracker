import React, { PureComponent, Component } from 'react';

import HabitAddForm from './habitAddForm';


class Habit extends PureComponent {
  // onIncrement = () => {
  //   this.props.onIncrement(this.props.habit);
  // };

  // onDecrement = () => {
  //   this.props.onDecrement(this.props.habit);
  // };

  // onDelete = () => {
  //   this.props.onDelete(this.props.habit);
  // };

  render() {
    const { name, count } = this.props.habit;
    console.log(`habit: ${name}`);
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>

        <div className="habit-control">
          <button
            className="habit-button habit-increase"
            onClick={() => this.props.onIncrement(this.props.habit)}
          >
            <i className="fas fa-plus-square"></i>
          </button>
          <button
            className="habit-button habit-decrease"
            onClick={() => this.props.onDecrement(this.props.habit)}
          >
            <i className="fas fa-minus-square"></i>
          </button>
          <button
            className="habit-button habit-delete"
            onClick={() => this.props.onDelete(this.props.habit)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </li>
    );
  }
}



class Habits extends Component {
  // onIncrement = habit => {
  //   this.props.onIncrement(habit);
  // };

  // onDecrement = habit => {
  //   this.props.onDecrement(habit);
  // };

  // onDelete = habit => {
  //   this.props.onDelete(habit);
  // };

  onAdd = name => {
    this.props.onAdd(name);
  };

  render() {
    console.log('habits');
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.onAdd} />
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
