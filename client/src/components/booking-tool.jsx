// jshint esversion:6
import React from 'react';
import BookingHeader from './booking-header.jsx';
import BookingReviews from './booking-reviews.jsx';
import BookingRating from './booking-rating.jsx';
import ValidDatesDisplay from './valid-dates-display.jsx';
import DatesInput from './dates-input.jsx';
import GuestsInput from './guests-input.jsx';
import BookingSubmitForm from './booking-submit-form.jsx';
import OwnerInfo from './owner-info.jsx';
import CalendarDisplay from './calendar.jsx';

class BookingTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: '',
      check_out: '',
      guests: false
    };
    this.handleCheckInSelect = this.handleCheckInSelect.bind(this);
    this.handleCheckOutSelect = this.handleCheckOutSelect.bind(this);
    this.handleGuestsForm = this.handleGuestsForm.bind(this);
    this.handleCloseGuestsForm = this.handleCloseGuestsForm.bind(this);
  }

  handleCheckInSelect(e) {
    this.setState({check_in: e.target.value});
  }

  handleCheckOutSelect(e) {
    this.setState({check_out: e.target.value});
  }

  componentDidMount() {

  }

  handleGuestsForm(e) {
    this.setState({guests: true});
  }

  handleCloseGuestsForm(e) {
    this.setState({guests: false});
  }

  render() {
    return (
      <div className='al-booking-tool'>
        <div className='al-booking-header-container'>
          <BookingHeader />
        </div>
        <div className='al-booking-reviews-container'>
          <BookingReviews />
        </div>
        <div className='al-booking-rating-container'>
          <BookingRating/>
        </div>
        <div className='al-valid-dates-display-container'>
          <ValidDatesDisplay />
        </div>
        <div className='al-dates-input-container'>
          <DatesInput handleCheckInSelect={this.handleCheckInSelect} handleCheckOutSelect={this.handleCheckOutSelect} check_in={this.state.check_in} check_out={this.state.check_out}/>
        </div>
        <div className='al-guests-input-container'>
          <GuestsInput guests={this.state.guests} handleGuestsForm={this.handleGuestsForm} handleCloseGuestsForm={this.handleCloseGuestsForm}/>
        </div>
        <div className='al-booking-submit-form-container'>
          <BookingSubmitForm />
        </div>
        <div className='al-owner-info-container'>
          <OwnerInfo />
        </div>
        <div className='al-booking-calendar-container'>
          <CalendarDisplay/>
        </div>
      </div>
    );
  }
}

export default BookingTool;