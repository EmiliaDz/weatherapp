import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import { API_KEY } from "./constants";

class App extends React.Component {
  state = {
    city: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name || event.target.id]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    console.log(event.target);
    fetch(`${
      window.location.protocol
    }//api.openweathermap.org/data/2.5/weather?q=${this.state.city}
    &appid=${API_KEY}`)
      .then(res => res.json())
      .then(res => console.log("res", res))
      .catch(error => this.setState({ error }));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Form onSubmit={this.onSubmit}>
            <input
              onChange={this.onChange}
              placeholder="city"
              value={this.state.city}
              id="city"
            />
            <input type="submit" value="SUBMIT" />
          </Form>
        </header>
      </div>
    );
  }
}

export default App;
