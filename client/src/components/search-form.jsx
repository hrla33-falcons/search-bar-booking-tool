// jshint esversion:6
import React from 'react';
import SearchBar from './search-bar.jsx';
import CheckInInput from './check-in-input.jsx';
import CheckOutInput from './check-out-input.jsx';
import SearchButton from './search-button.jsx';
import CalendarDisplay from './calendar-display.jsx';
import { connect } from 'react-redux';
import {setSearchTerm} from '../redux/booking/booking.action.js';
import axios from 'axios';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
      check_in: '',
      check_out: '',
      calendar: false,
      searchlistings: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckInSelect = this.handleCheckInSelect.bind(this);
    this.handleCheckOutSelect = this.handleCheckOutSelect.bind(this);
    this.openCalendar = this.openCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.searchListings = this.searchListings.bind(this);
  }

  componentDidMount() {

  }

  openCalendar(e) {
    this.setState({calendar: true});
  }

  closeCalendar(e) {
    this.setState({calendar: false});
  }

  searchListings() {
    if (this.state.term) {
      axios.get(`/listings/search`, {
        params: {query: this.state.term}
      }).then(results => results.data)
      .then(data => this.setState({searchlistings: data}))
      .catch(err => console.log(err));
    }
  }

  handleChange(e) {
    this.setState({term: e.target.value}, () => this.searchListings());
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
        <div className='al-search-dropdown-container'></div>
      </div>
    );
  }
};

// export default SearchForm;

const mapDispatchToProps = (dispatch) => {
  return ({
    setSearchTerm: (term) => dispatch(setSearchTerm(term))
   });
}

const mapStateToProps = (state) => {
  return ({

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);