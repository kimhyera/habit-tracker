import React, { Component } from 'react';
import Navbar from './components/navbar';
import './app.css'
import Habits from './components/habits';

class App extends Component {

  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 }
    ]
  }

  onIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  onDecrement = (habit) => {

    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {

        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count }
      }

      return item;
    })

    this.setState({ habits })

  }

  onDelete = (habit) => {

    const habits = this.state.habits.filter(item =>
      item.id !== habit.id)


    this.setState({ habits })

  }

  onAdd = (name) => {
    const nextId = this.state.habits.length;
    const habits = [...this.state.habits, { id: nextId + 1, name: name, count: 0 }]
    this.setState({ habits })

  }

  onReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 }
      }
      return habit
    })
    this.setState({ habits })
  }


  render() {
    return (
      <div>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits habits={this.state.habits}//
          onIncrement={this.onIncrement}//
          onDecrement={this.onDecrement}//
          onDelete={this.onDelete}//
          onAdd={this.onAdd}//
          onReset={this.onReset}
        />
      </div>
    );
  }
}

export default App;