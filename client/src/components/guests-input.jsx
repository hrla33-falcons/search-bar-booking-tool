// jshint esversion:6
import React from 'react';
import GuestsForm from './guests-form.jsx';
import { connect } from 'react-redux';
import { selectGuests } from '../redux/booking/booking.selectors.js';

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
          <span className='al-guests-input-number-text'>{`${this.props.selectGuests} ${this.props.selectGuests === 1 ? 'guest' : 'guests'}`}</span>
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

const mapStateToProps = (state) => {
  return ({
      selectGuests: selectGuests(state)
  });
};

export default connect(mapStateToProps, null)(GuestsInput);