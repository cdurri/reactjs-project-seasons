import React from 'react';
import ReactDOM from 'react-dom';

// App subclasses React.Component, which gives App access to all of React.Component methods
class App extends React.Component {
  // constructor fucntion specific to JS, not specific to React
  // constructor function is automatically and instantly called before anything else when App is called
  constructor(props) {
    // super is a reference to the parents(React.Component) constructor function
    // have to do it every time we define the constructor function inside the component
    super(props);

    // THIS IS THE ONLY TIME we do direct assigment to this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // to update our state object we called setState!!!
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        // setState is an additive process, so we only need to update what we need
        // it wont overwrite previously set values
        // it will leave lat: untouched
        this.setState({ errorMessage: err.message});
      }
    );
  }

  // React says we have to define render() {}
  render() {
    // conditional rendering
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading...</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
