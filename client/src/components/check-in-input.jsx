// jshint esversion:6
import React from 'react';

class CheckInInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({selected: true});
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-check-in-input-container'>
        <input className='al-input-bar' size="20" onChange={this.props.handleCheckInSelect} value={this.props.check_in} onClick={this.handleClick}/>
        <label className={`${this.state.selected ? 'al-shrink' : ''} al-form-input-label al-check-in-input`}>{this.state.selected ? 'Check In' : 'Check In'}</label>
      </div>
    );
  }
};

export default CheckInInput;