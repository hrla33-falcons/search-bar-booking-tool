// jshint esversion:6
import React from 'react';

class CheckOutInput extends React.Component {
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
      <div className='al-check-out-input-container'>
        <input className='al-input-bar' size="20" onChange={this.props.handleCheckOutSelect} value={this.props.check_out} onClick={this.handleClick}/>
        <label className={`${this.state.selected ? 'al-shrink' : ''} al-form-input-label al-check-out-input`}>{this.state.selected ? 'Check Out' : 'Check Out'}</label>
      </div>
    );
  }
};

export default CheckOutInput;