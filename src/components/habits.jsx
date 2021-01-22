import React, { PureComponent, Component } from 'react';

import HabitAddForm from './habitAddForm';

class Habit extends PureComponent {

    componentDidMount() {

        console.log('componentDidMount');
    }


    componentWillUnmount() {
        console.log('componentWillUnmount');

    }


    render() {

        //  console.log(`habit: ${ name } `); 0



        const { name, count } = this.props.habit //비구조 할당을 통해 추출 





        return (
            <li className="habit">
                <span className="habit-name">
                    {name}
                </span>
                <span className="habit-count">
                    {count}
                </span>
                <button className="habit-button habit-increase" //
                    onClick={() => this.props.onIncrement(this.props.habit)}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease"//
                    onClick={() => this.props.onDecrement(this.props.habit)}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete"//
                    onClick={() => this.props.onDelete(this.props.habit)}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        )
    }
}


class Habits extends Component {
    render() {
        return (
            <div className="habits">
                <HabitAddForm onAdd={this.props.onAdd} />

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

                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>

            </div>
        );
    }
}

export default Habits;