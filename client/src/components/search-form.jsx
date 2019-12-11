// jshint esversion:6
import React from 'react';
import SearchBar from './search-bar.jsx';
import CheckInInput from './check-in-input.jsx';
import CheckOutInput from './check-out-input.jsx';
import SearchButton from './search-button.jsx';
import CalendarDisplay from './calendar-display.jsx';
import { connect } from 'react-redux';
import {setSearchTerm, setRate, setTitle, setCleaningFee, setSleepCapacity, setReviewNumber, setReviewOverview, setRating, setOwner, setUSState, setCity, setPic, setCheckInDate, setCheckOutDate, makeInvalid } from '../redux/booking/booking.action.js';
import axios from 'axios';
import SearchDropdown from './search-dropdown.jsx';

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
    this.selectSearchResult = this.selectSearchResult.bind(this);
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

  selectSearchResult(id) {
    this.setState({term: '', searchlistings: []}, () => {
      axios.get(`/listings/${id}`)
      .then(results => results.data[0])
      .then(data => {
        this.props.setTitle(data.title);
        this.props.setCleaningFee(data.cleaning_fee);
        this.props.setSleepCapacity(data.sleep_capacity);
        this.props.setReviewNumber(data.review_number);
        this.props.setReviewOverview(data.review_overview);
        this.props.setOwner(data.owner);
        this.props.setRating(data.rating);
        this.props.setUSState(data.state);
        this.props.setCity(data.city);
        this.props.setPic(data.pic);
      }).then(() => axios.get(`/dates/${id}`)).then(datesData => {
        this.props.setCheckInDate('');
        this.props.setCheckOutDate('');
        this.props.makeInvalid();
        this.props.setRate(datesData.data[0].rate);

      }).catch(err => console.log(err));
    });
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
        <div className='al-search-dropdown-container'>
          <SearchDropdown selectSearchResult={this.selectSearchResult} searchlistings={this.state.searchlistings}/>
        </div>
      </div>
    );
  }
};

// export default SearchForm;

const mapDispatchToProps = (dispatch) => {
  return ({
    setSearchTerm: (term) => dispatch(setSearchTerm(term)),
    setRate: (rate) => dispatch(setRate(rate)),
    setTitle: (title) => dispatch(setTitle(title)),
    setCleaningFee: (cleaningFee) => dispatch(setCleaningFee(cleaningFee)),
    setSleepCapacity: (sleepCapacity) => dispatch(setSleepCapacity(sleepCapacity)),
    setReviewNumber: (reviewNumber) => dispatch(setReviewNumber(reviewNumber)),
    setReviewOverview: (reviewOverview) => dispatch(setReviewOverview(reviewOverview)),
    setRating: (rating) => dispatch(setRating(rating)),
    setOwner: (owner) => dispatch(setOwner(owner)),
    setUSState: (USState) => dispatch(setUSState(USState)),
    setCity: (city) => dispatch(setCity(city)),
    setPic: (pic) => dispatch(setPic(pic)),
    setCheckInDate: (date) => dispatch(setCheckInDate(date)),
    setCheckOutDate: (date) => dispatch(setCheckOutDate(date)),
    makeInvalid: () => dispatch(makeInvalid())
   });
}

const mapStateToProps = (state) => {
  return ({

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);