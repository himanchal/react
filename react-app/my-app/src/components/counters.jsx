import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters : [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }

    handleDelete = counterId => { //handling the event
        console.log('event handler called', counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters}); //overwriting the state
    }

    handleIncrement = counter => {
        console.log(counter);
        const counters = [...this.state.counters]; //cloning the array with spread operator
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleReset = () => {
        const counters = [...this.state.counters]; //cloning the array with spread operator
        counters.map(c => c.value = 0);
        this.setState({counters});
        console.log(counters);
    }

    render() { 
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => (
                <Counter key ={counter.id} 
                onDelete={this.handleDelete} 
                onIncrement={this.handleIncrement}
                counter = {counter}>
                <h4>Counter # {counter.id}</h4>
                </Counter>)
                )} 
            </div>
        );
    }
}
 
export default Counters;