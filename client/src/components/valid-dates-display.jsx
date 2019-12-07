// jshint esversion:6
import React from 'react';

class ValidDatesDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-valid-dates-display'>
        <div className='al-valid-dates-display-rectangle'>
          <div className='al-valid-dates-display-message-container'>
            <span className='al-valid-dates-display-text'>Enter dates for accurate pricing</span>
          </div>
        </div>
        <div className='al-valid-dates-display-triangle-container'>
          <div className='al-valid-dates-display-triangle'></div>
        </div>
      </div>
    );
  }
};

export default ValidDatesDisplay;