// jshint esversion:6
import React from 'react';
import SVG from 'react-inlinesvg';
import PeopleIcon from '../../dist/icons/people.svg';
import { connect } from 'react-redux';
import { selectSleepCapacity } from '../redux/booking/booking.selectors.js';

class GuestsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 1,
      children: 0
    };
    this.incrementAdults = this.incrementAdults.bind(this);
    this.incrementChildren = this.incrementChildren.bind(this);
    this.decrementAdults = this.decrementAdults.bind(this);
    this.decrementChildren = this.decrementChildren.bind(this);
    this.handleApply = this.handleApply.bind(this);
  }

  incrementAdults() {
    if (this.state.children + this.state.adults < this.props.selectSleepCapacity) {
      this.setState({adults: this.state.adults + 1});
    }
  }

  incrementChildren() {
    if (this.state.children + this.state.adults < this.props.selectSleepCapacity) {
      this.setState({children: this.state.children + 1});
    }
  }

  decrementAdults() {
    if (this.state.adults > 1) {
      this.setState({adults: this.state.adults - 1});
    }
  }

  decrementChildren() {
    if (this.state.children > 0) {
      this.setState({children: this.state.children - 1});
    }
  }

  handleApply() {
    this.props.getGuests(this.state.adults + this.state.children);
    this.props.handleCloseGuestsForm();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-guests-form'>
        <div className='al-guests-form-title-container'>
          <div className='al-guests-form-icon-container'>
            <SVG className='al-guests-form-icon' src={PeopleIcon}/>
          </div>
          <div className='al-guests-form-text-container'>
            <span className='al-guests-form-text'>{`Maximum number of guests is ${this.props.selectSleepCapacity}`}</span>
          </div>
        </div>
        <div className='al-guests-form-adults-row-container'>
          <div className='al-guests-form-adults-amount-container'>
            <span className='al-guests-form-row-text'>{`${this.state.adults} ${this.state.adults === 1 ? 'adult' : 'adults'}`}</span>
          </div>
          <div className='al-guests-form-change-amount-form-container'>
            <div className='al-guests-form-subtract-button-container'>
              <button className={`${this.state.adults === 1 ? 'al-guests-form-button-invalid' : 'al-guests-form-button-valid'} 'al-guests-form-subtract-button'`} onClick={this.decrementAdults}>
                <span className='al-guests-form-subtract-text'>-</span>
              </button>
            </div>
            <div className='al-guests-form-add-button-container'>
              <button className={`${this.state.adults + this.state.children === this.props.selectSleepCapacity ? 'al-guests-form-button-invalid' : 'al-guests-form-button-valid'} 'al-guests-form-add-button'`} onClick={this.incrementAdults}>
                <span className='al-guests-form-add-text'>+</span>
              </button>
            </div>
          </div>
        </div>
        <div className='al-guests-form-childrens-row-container'>
          <div className='al-guests-form-childrens-amount-container'>
            <span className='al-guests-form-row-text'>{`${this.state.children} ${this.state.children === 1 ? 'child' : 'children'}`}</span>
          </div>
          <div className='al-guests-form-change-amount-form-container'>
            <div className='al-guests-form-subtract-button-container'>
              <button className={`${this.state.children === 0 ? 'al-guests-form-button-invalid' : 'al-guests-form-button-valid'} 'al-guests-form-subtract-button'`} onClick={this.decrementChildren}>
                <span className='al-guests-form-subtract-text'>-</span>
              </button>
            </div>
            <div className='al-guests-form-add-button-container'>
              <button className={`${this.state.adults + this.state.children === this.props.selectSleepCapacity ? 'al-guests-form-button-invalid' : 'al-guests-form-button-valid'} 'al-guests-form-add-button'`} onClick={this.incrementChildren}>
                <span className='al-guests-form-add-text'>+</span>
              </button>
            </div>
          </div>
        </div>
        <div className='al-guests-form-submit-button-container'>
          <button className='al-guests-form-submit-button' onClick={this.handleApply}>
            <span className='al-guests-form-submit-button-text'>Apply</span>
          </button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
      selectSleepCapacity: selectSleepCapacity(state)
  });
};

export default connect(mapStateToProps, null)(GuestsForm);
