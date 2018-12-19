import React from 'react';

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

// default message prop if none is provided when Spinner component is called
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
