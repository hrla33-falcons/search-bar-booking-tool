// jshint esversion:6
import React from 'react';
import SVG from 'react-inlinesvg';
import PeopleIcon from '../../dist/icons/people.svg';

class GuestsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 1,
      children: 0
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-guests-form'>
        <div className='al-guests-form-title-container'>
          <div className='al-guests-form-icon-container'>
            <SVG className='al-guests-form-icon' src={PeopleIcon}/>
          </div>
          <div className='al-guests-form-text-container'>
            <span className='al-guests-form-text'>Maximum number of guests is 8</span>
          </div>
        </div>
        <div className='al-guests-form-adults-row-container'>
          <div className='al-guests-form-adults-amount'></div>
        </div>
        <div className='al-guests-form-childrens-row-container'>
          <div className='al-guests-form-childrens-amount'></div>
        </div>
      </div>
    );
  }
};

export default GuestsForm;