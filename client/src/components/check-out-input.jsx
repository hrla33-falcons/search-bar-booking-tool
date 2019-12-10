// jshint esversion:6
import React from 'react';
import { connect } from 'react-redux';
import { selectCheckInDate, selectCheckOutDate } from '../redux/booking/booking.selectors.js';

class CheckOutInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({selected: true}, () => {
      this.props.openCalendar();
    });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-check-out-input-container'>
        <input className='al-input-bar' size="20" onChange={this.props.handleCheckOutSelect} value={this.props.selectCheckOutDate} onClick={this.handleClick}/>
        <label className={`${this.props.selectCheckOutDate ? 'al-shrink' : ''} al-form-input-label al-check-out-input`}>{this.state.selected ? 'Check Out' : 'Check Out'}</label>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
      selectCheckInDate: selectCheckInDate(state),
      selectCheckOutDate: selectCheckOutDate(state)
  });
};

export default connect(mapStateToProps, null)(CheckOutInput);