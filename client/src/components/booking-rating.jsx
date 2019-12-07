// jshint esversion:6
import React from 'react';

class BookingRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-booking-rating'>
        <div className='al-booking-random-review-container'>
          <span className='al-booking-random-review-text'>Wonderful!</span>
        </div>
        <div className='al-booking-average-rating-container'>
          <span className='al-booking-average-rating-text'>4.6/5</span>
        </div>
      </div>
    );
  }
};

export default BookingRating;