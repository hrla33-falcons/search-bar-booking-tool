// jshint esversion:6
import React from 'react';
import SearchBar from './search-bar.jsx';
import CheckInInput from './check-in-input.jsx';
import CheckOutInput from './check-out-input.jsx';
import SearchButton from './search-button.jsx';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
      check_in: '',
      check_out: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckInSelect = this.handleCheckInSelect.bind(this);
    this.handleCheckOutSelect = this.handleCheckOutSelect.bind(this);
  }

  componentDidMount() {

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
        <CheckInInput check_in={this.state.check_in} handleCheckInSelect={this.handleCheckInSelect} />
        <CheckOutInput check_out={this.state.check_out} handleCheckOutSelect={this.handleCheckOutSelect} />
        <SearchButton />
      </div>
    );
  }
};

export default SearchForm;