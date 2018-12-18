import React from 'react';
import ReactDOM from 'react-dom';

// App subclasses React.Component, which gives App access to all of React.Component methods
class App extends React.Component {

  // constructor fucntion specific to JS, not specific to React
  // constructor function is automatically and instantly called before anything else when App is called
  // good convention - do not do data loading inside the constructor function
  // OPTIONAL
  // because react runs code through Babel, this line compiles to create constructor function
  // shorthand for the costructor function
  state = { lat: null, errorMessage: '' };

  // run one time when the app is launched(initially called from ReactDOM.render)
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // to update our state object we called setState!!!
      position => this.setState({ lat: position.coords.latitude }),
      // setState is an additive process, so we only need to update what we need
      // it wont overwrite previously set values
      // it will leave lat: untouched
      err => this.setState({ errorMessage: err.message})
    );
  }

  // React says we have to define render() {}
  // this just returns JSX
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
