import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     //id: this.props.id,
    //     imageUrl: "https://picsum.photos/300",
    //     tags: ['tag1', 'tag2', 'tag3']
    // }; // it's a special property that includes any data that this component needs.

    styles = {
        fontSize: 12,
        fontWeight: 'bold'
    }
    // handleIncrement = () => { //arrow function to bind event handlers
    //     console.log('Increment clicked', this);
    //     this.setState({ value: this.state.value + 1 });
    // }
    render() { 
        return (
            <div>
                {this.props.children}
                {/* <img src={this.state.imageUrl} alt="" /> */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
                <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">Delete</button>
                {/* <div>{this.renderTagsConditionally()}</div> */}
            </div>
        );
         //jsx expression, it's not a string 
        //which gets compiled into React.createElement()
    }
    // renderTagsConditionally(){
    //     if (this.state.tags.length === 0) return <p>there are not tags!</p>
    //     return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter;
        return count === 0 ? 'Zero' : count; //we can also return a jsx expression like <h1>Zero</h1>
    }
}
 
export default Counter;