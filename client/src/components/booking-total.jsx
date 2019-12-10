// jshint esversion:6
import React from 'react';
import {MainLoadingDots} from './loading-dots.jsx';
import {selectLoading} from '../redux/booking/booking.selectors.js';
import { connect } from 'react-redux';

class BookingTotal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
      loading: true
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-booking-total'>
      {
        this.props.selectLoading ?
        (
          <div className='al-main-loading-dots-container'>
            <MainLoadingDots />
          </div>
        )
        :
        (
          <div>
            <div className='al-booking-total-top-container'>
              <div className='al-booking-total-total-container'>
                <span className='al-booking-total-total-text'>Total</span>
              </div>
              <div className='al-booking-total-amount-container'>
                <span className='al-booking-total-total-text'>$550.21</span>
              </div>
            </div>
            <div className='al-booking-bottom-top-container'>
              <div className='al-booking-details-container'>
                <span className='al-booking-details-text'>Includes taxes and fees</span>
              </div>
              <div className='al-booking-detailed-view-container'>
                <span className='al-booking-detailed-view-container'>View details</span>
              </div>
            </div>
          </div>
        )
      }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
      selectLoading: selectLoading(state)
  });
};

export default connect(mapStateToProps, null)(BookingTotal);
