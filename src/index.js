import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// App subclasses React.Component, which gives App access to all of React.Component methods
class App extends React.Component {

  // constructor function is automatically and instantly called before anything else when App is called
  // good convention - do not do data loading inside the constructor function
  // it's OPTIONAL
  // because react runs code through Babel, this line compiles to create constructor function
  state = { lat: null, errorMessage: '' };

  // run one time when the app is launched(initially called from ReactDOM.render)
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      // setState is an additive process, so we only need to update what we need
      // it wont overwrite previously set values
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
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <div>Loading...</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
