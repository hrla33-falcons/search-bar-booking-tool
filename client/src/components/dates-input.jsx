// jshint esversion:6
import React from 'react';

class DatesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: false,
      check_in: '',
      check_out: ''
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.showCalendar = this.showCalendar.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  handleClick1(e) {
    this.setState({selected1: true});
  }

  clearInputs(e) {
    this.setState({selected1: false});
  }

  componentDidMount() {

  }

  showCalendar(e) {
    this.handleClick1(e);
  }

  render() {
    return (
      <div className='al-dates-input'>
        <div className='al-dates-input-check-in-container' onClick={this.showCalendar}>
          <div className='al-dates-input-label-container'>
            <span className={`${this.state.selected1 ? 'al-guests-input-label-text-top' : 'al-guests-input-label-text'}`}>Check In</span>
          </div>
          <div className='al-dates-input-check-in-date-container'>
            <span className='al-dates-input-check-in-date'>{this.state.check_in}</span>
          </div>
        </div>
        <div className='al-dates-input-check-out-container' onClick={this.showCalendar}>
          <div className='al-dates-input-label-container'>
            <span className={`${this.state.selected1 ? 'al-guests-input-label-text-top' : 'al-guests-input-label-text'}`}>Check Out</span>
          </div>
          <div className='al-dates-input-check-in-date-container'>
            <span className='al-dates-input-check-in-date'>{this.state.check_out}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default DatesInput;
