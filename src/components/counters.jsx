import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {

  state = {
    items: [],
    isLoaded: false
  };

  /*  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value++;
    this.setState({counters})
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  deleteHandler = counterId => {
    const counters = this.state.counters.filter(data => data.id !== counterId);
    this.setState({ counters });
  }; */

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').
    then(res => res.json()).then(
      json =>{
        this.setState({isLoaded: true,
          items: json
        })
      }
    )
  }

  render() {
    console.log('counters render - called')
    const {onReset, counters, onDelete, onIncrement} = this.props;
    var {isLoaded, items } = this.state;
    if(!isLoaded) {
      return <div> Data is loading...</div>
    } else {
      return (
        <div>
          <div>
            <ul>
              {items.map(item => (
                <li key={item.id}> name: {item.name} | email: {item.email}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={onReset}
            className="btn btn-primary btn-sm m-2"
          >
            Reset
          </button>
          {counters.map(counter => (
            <Counter /* selected */
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              value={counter.value}
              counter={counter}
            >
              {/* <h4>Counter #{counter.key} </h4> */}
            </Counter>
          ))}{" "}
        </div>
      );
    }

  }


}

export default Counters;
