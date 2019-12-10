// jshint esversion:6
import React from 'react';
import SearchBar from './search-bar.jsx';
import CheckInInput from './check-in-input.jsx';
import CheckOutInput from './check-out-input.jsx';
import SearchButton from './search-button.jsx';
import CalendarDisplay from './calendar-display.jsx';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
      check_in: '',
      check_out: '',
      calendar: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckInSelect = this.handleCheckInSelect.bind(this);
    this.handleCheckOutSelect = this.handleCheckOutSelect.bind(this);
    this.openCalendar = this.openCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
  }

  componentDidMount() {

  }

  openCalendar(e) {
    this.setState({calendar: true});
  }

  closeCalendar(e) {
    this.setState({calendar: false});
  }

  handleChange(e) {
    this.setState({term: e.target.value});
  }

  handleCheckInSelect(e) {
    this.setState({check_in: e.target.value});
  }

  handleCheckOutSelect(e) {
    this.setState({check_out: e.target.value});
  }

  render() {
    return (
      <div className='al-search-form-container'>
        <SearchBar handleChange={this.handleChange} term={this.state.term}/>
        <CheckInInput check_in={this.state.check_in} handleCheckInSelect={this.handleCheckInSelect} openCalendar={this.openCalendar}/>
        <CheckOutInput check_out={this.state.check_out} handleCheckOutSelect={this.handleCheckOutSelect} openCalendar={this.openCalendar}/>
        <SearchButton />
        <div className='al-search-form-calendar-container'>
          {
            this.state.calendar ?
            (
              <CalendarDisplay closeCalendar={this.closeCalendar}/>
            )
            :
            (
              null
            )
          }
        </div>
      </div>
    );
  }
};

export default SearchForm;