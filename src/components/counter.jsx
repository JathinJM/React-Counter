import React, { Component } from "react";
class Counter extends Component {
  /*   state = {
    value: this.props.counter.value
  }; */

  /* ,
        imageUrl : 'https://picsum.photos/200' */
  /*  tags: ["tag1", "tag2", "tag3"] */

  styles = {
    fontStyle: 10,
    fontWeight: "bold"
  };

  /*  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */

  componentDidUpdate(prevProps, prevStates) {
    console.log("prevProps", prevProps);
    console.log("prevStates", prevStates);
    if(prevProps.value !== this.props.value){
      // ajax call to get new data ex:
    }
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    console.log("counter render - called");
    // console.log(this.props)
    return (
      /*  <React.Fragment> */
      <div>
        {/*   <h1>heading</h1> */}
        {/*    { <img src={this.state.imageUrl} alt=""></img> }
        <span
           style={{ fontStyle: 20 }}  className={this.getBadgeClasses()}
        >
        
          {this.formatCount()}
        </span> 
        {this.props.children} 
        */}

        {/*  <h4>Counter #{this.props.counter.id} </h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/*  {this.state.tags.length === 0 && "Please create a valid tag"}
        <ul>{this.isTagsAvailable()}</ul> */}
      </div>
      /*  </React.Fragment> */
    );
  }

  /*   handleIncrement = (product) => {
    //console.log(product);
    this.setState({value : this.state.value + 1});
  } */

  isTagsAvailable() {
    if (this.state.tags.length === 0) return "No tags exist";
    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
