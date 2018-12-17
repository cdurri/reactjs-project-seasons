import React from 'react';
import ReactDOM from 'react-dom';

// App subclasses React.Component, which gives App access to all of React.Component methods
class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
