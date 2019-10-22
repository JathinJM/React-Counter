import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import PostForm from "./components/postformlist";
import { BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import Route from "react-router-dom/Route";
import "./App.css";

//https://jsonplaceholder.typicode.com/posts
const User = params => {
  return <h1>Welcome User {params.username}</h1>;
};

class App extends Component {
  state = {  
    loggedIn: false,
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("constructor - called");
  }

  componentDidMount() {
    console.log("did mount - called");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
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
  };

  logginHandle = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    console.log("app render - called");
    return (
      <Router>
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={{ color: "green" }}>
              Welcocme
            </NavLink>
          </li>
          <li>
            <NavLink to="/counter" exact activeStyle={{ color: "green" }}>
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={{ color: "green" }}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/peter" exact activeStyle={{ color: "green" }}>
              User Peter
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/Raksha" exact activeStyle={{ color: "green" }}>
              User John
            </NavLink>
          </li>
    
        </ul>
           <input type="button" value="Log In" onClick={this.logginHandle.bind(this)}/>

        <Route
          path="/"
          exact
          strict
          render={() => {
            return <h1>welcome home</h1>;
          }}
        ></Route>

        <Route
          path="/counter"
          exact
          strict
          render={() => {
            return (
              <React.Fragment>
                <NavBar
                  totalCounters={
                    this.state.counters.filter(c => c.value > 0).length
                  }
                />
                <main className="container">
                  <PostForm />
                  <Counters
                    counters={this.state.counters}
                    onDelete={this.deleteHandler}
                    onIncrement={this.handleIncrement}
                    onReset={this.handleReset}
                  />
                </main>
              </React.Fragment>
            );
          }}
        ></Route>
        <Route
          path="/about"
          exact
          strict
          render={() => {
            return <h1>About</h1>;
          }}
        ></Route>
        <Route
          path="/user/:username"
          exact
          strict
          render={({ match }) =>
           ((this.state.loggedIn === true) ? (
              <User username={match.params.username} />
            ) : (
              <Redirect to="/" />
            ))
          }
        ></Route>
      </Router>
    );
  }
}

export default App;
