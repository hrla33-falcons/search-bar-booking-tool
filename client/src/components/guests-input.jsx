// jshint esversion:6
import React from 'react';
import GuestsForm from './guests-form.jsx';

class GuestsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: 1
    };
    this.getGuests = this.getGuests.bind(this);
  }

  getGuests(n) {
    this.setState({guests: n});
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-guests-input'>
        <div className='al-guests-input-label-container'>
          <span className='al-guests-input-label-text'>Guests</span>
        </div>
        <div className='al-guests-input-number-container' onClick={this.props.handleGuestsForm}>
          <span className='al-guests-input-number-text'>{this.state.guests}</span>
        </div>
        <div className='al-guests-form-container'>
          <GuestsForm getGuests={this.getGuests}/>
        </div>
      </div>
    );
  }
};

export default GuestsInput;