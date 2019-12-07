// jshint esversion:6
import React from 'react';
import StarRatings from 'react-star-ratings';

class BookingReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    let rating = 4.6;
    return (
      <div className='al-booking-reviews'>
        <div className='al-star-rating-container'>
          <StarRatings rating={rating} starRatedColor='black' numberOfStars={5} name='rating' starDimension='15px' starSpacing='1.5px'/>
        </div>
        <div className='al-reviews-number-container'>
          <span className='al-reviews-number-text'>109 reviews</span>
        </div>
      </div>
    );
  }
};

export default BookingReviews;