// jshint esversion:6
import React from 'react';
import GuestsForm from './guests-form.jsx';

class GuestsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: 1,
      selected: false
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
          <span className='al-guests-input-label-text-bottom'>Guests</span>
        </div>
        <div className='al-guests-input-number-container' onClick={this.props.handleGuestsForm}>
          <span className='al-guests-input-number-text'>{`${this.state.guests} ${this.state.guests === 1 ? 'guest' : 'guests'}`}</span>
        </div>
        <div className='al-guests-form-container'>
        {
          this.props.guests ?
          (
            <GuestsForm handleCloseGuestsForm={this.props.handleCloseGuestsForm} getGuests={this.getGuests}/>
          )
          :
          (
            null
          )
        }
        </div>
      </div>
    );
  }
};

export default GuestsInput;