// jshint esversion:6
import React from 'react';

class DatesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: false,
      selected2: false
    };

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick1() {
    this.setState({selected1: true});
  }

  handleClick2() {
    this.setState({selected2: true});
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-dates-input'>
        <div className='al-dates-input-check-in-container'>
          <input className='al-booking-input-bar' size="20" onChange={this.props.handleCheckInSelect} value={this.props.check_in} onClick={this.handleClick1}/>
          <label className={`${this.state.selected1 ? 'al-booking-shrink' : ''} al-booking-form-input-label al-booking-input`}>{this.state.selected1 ? 'Check In' : 'Check In'}</label>
        </div>
        <div className='al-dates-input-check-out-container'>
          <input className='al-booking-input-bar' size="20" onChange={this.props.handleCheckOutSelect} value={this.props.check_out} onClick={this.handleClick2}/>
          <label className={`${this.state.selected2 ? 'al-booking-shrink' : ''} al-booking-form-input-label al-booking-input`}>{this.state.selected2 ? 'Check Out' : 'Check Out'}</label>
        </div>
      </div>
    );
  }
};

export default DatesInput;