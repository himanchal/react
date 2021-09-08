import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        imageUrl: "https://picsum.photos/300",
        tags: ['tag1', 'tag2', 'tag3']
    }; // it's a special property that includes any data that this component needs.

    styles = {
        fontSize: 12,
        fontWeight: 'bold'
    }
    handleIncrement = () => { //arrow function to bind event handlers
        console.log('Increment clicked', this);
        this.setState({ count: this.state.count + 1 });
    }
    render() { 
        return (
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt="" /> */}

                <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <div>{this.renderTagsConditionally()}</div>

            </React.Fragment>
        );
         //jsx expression, it's not a string 
        //which gets compiled into React.createElement()
    }
    renderTagsConditionally(){
        if (this.state.tags.length === 0) return <p>there are not tags!</p>
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count; //we can also return a jsx expression <h1>Zero</h1>
    }
}
 
export default Counter;