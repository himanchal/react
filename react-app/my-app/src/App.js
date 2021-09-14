import React, { Component } from 'react';
import  NavBar  from "./components/navbar";
import './App.css';
import Counters from './components/counters';

class App extends Component{
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

    render(){
        return (
            <div>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters 
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement = {this.handleIncrement}
                    onDelete={this.handleDelete}/>
                </main>
            </div>
        );
    }
}

export default App;
