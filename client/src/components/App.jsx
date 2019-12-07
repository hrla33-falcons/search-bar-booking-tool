// jshint esversion:6
import React from 'react';
import Header from './header.jsx';
import Sidebar from './sidebar.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      check_in_date: '',
      check_out_date: '',
      adults: null,
      children: null,
      reviews: null,
      cleaning_fee: null,
      owner: '',
      rating: null,
      total: null
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-test-container'>
        <div className='al-header-container'>
          <Header />
        </div>
        <div className='al-sidebar-container'>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;