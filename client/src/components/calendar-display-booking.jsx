// jshint esversion:6
import React from 'react';
import Calendar from './calendar.jsx';
import SVG from 'react-inlinesvg';
import CheckIcon from '../../dist/icons/tick.svg';
import MinusIcon from '../../dist/icons/negative.svg';
import InfoIcon from '../../dist/icons/Info_Simple.svg';
import { connect } from 'react-redux';
import {setCheckInDate, setCheckOutDate, startLoading, stopLoading, makeValid, makeInvalid} from '../redux/booking/booking.action.js';
import { selectCheckInDate, selectCheckOutDate} from '../redux/booking/booking.selectors.js';

class CalendarDisplayBooking extends React.Component {
  constructor() {
    super();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let datesInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let daysInWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    let startDates = {
      '2019': [2, 5, 5, 1, 3, 6, 1, 4, 0, 2, 5, 0],
      '2020': [3, 6, 0, 3, 5, 1, 3, 6, 2, 4, 0, 2]
    };
    let years = [2019, 2020];
    let dates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    this.state = {
      check_in: '',
      check_out: '',
      check_in_number: '',
      check_out_number: '',
      year: 2019,
      month: 'December',
      message: true,
      valid: false,
      error: false
    };
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleCheckInClick = this.handleCheckInClick.bind(this);
    this.handleCheckInClick2 = this.handleCheckInClick2.bind(this);
    this.selectSecondMonth = this.selectSecondMonth.bind(this);
    this.clearDates = this.clearDates.bind(this);
  }

  clearDates(e) {
    this.setState({check_in_number: '', check_in: '', check_out_number: '', check_out: ''}, () => {
      this.props.setCheckInDate(this.state.check_in);
      this.props.setCheckOutDate(this.state.check_out);
      this.props.makeInvalid();
    });
  }

  handleCheckInClick(e) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let dates2 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    if (!this.state.check_in_number) {
      if (e.target.childNodes[0].childNodes.length) {
        this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => {
          this.props.setCheckInDate(this.state.check_in);
          this.props.setCheckOutDate(this.state.check_out);
          this.props.makeInvalid();
        }));
      } else {
        this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => {
          this.props.setCheckInDate(this.state.check_in);
          this.props.setCheckOutDate(this.state.check_out);
          this.props.makeInvalid();
        }));
      }
    } else if (this.state.check_in_number && !this.state.check_out_number) {
      if (e.target.childNodes[0].childNodes.length) {
        if (this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(e.target.childNodes[0].innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => this.setState({valid: false, error: true, message: true}, () => {
            this.props.setCheckInDate(this.state.check_in);
            this.props.setCheckOutDate(this.state.check_out);
            this.props.makeInvalid();
          })));
        } else {
          this.setState({check_out_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_out: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => this.setState({valid: true, error: false, message: true}, () => {
            this.props.setCheckOutDate(this.state.check_out);
            this.props.makeValid();
          })));
        }
      } else {
        if (this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(e.target.innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => this.setState({valid: false, error: true, message: true}, () => {
            this.props.setCheckInDate(this.state.check_in);
            this.props.setCheckOutDate(this.state.check_out);
            this.props.makeInvalid();
          })));
        } else {
          this.setState({check_out_number: e.target.innerHTML}, () => this.setState({check_out: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => this.setState({valid: true, error: false, message: true}, () => {
            this.props.setCheckOutDate(this.state.check_out);
            this.props.makeValid();
          })));
        }
      }
    } else {
      e.persist();
      this.setState({check_in: '', check_out: '', check_in_number: '', check_out_number: ''}, () => {
        if (e.target.childNodes[0].childNodes.length) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => this.setState({valid: false, error: false, message: true}, () => {
            this.props.setCheckInDate(this.state.check_in);
            this.props.setCheckOutDate(this.state.check_out);
            this.props.makeInvalid();
          })));
        } else {
          this.setState({check_in_number: e.target.innerHTML}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => this.setState({valid: false, error: false, message: true}, () => {
            this.props.setCheckInDate(this.state.check_in);
            this.props.setCheckOutDate(this.state.check_out);
            this.props.makeInvalid();
          })));
        }
      });
    }
  }

  selectSecondMonth(month, year) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (month === 'December' && year === 2019) {
      return 'January';
    } else if (month === 'December' && year === 2020) {
      return null;
    } else {
      return months[months.indexOf(month) + 1];
    }
  }

  handleCheckInClick2(e) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let dates2 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    let year2 = (this.state.month === 'December' && this.state.year === 2019) ? 2020 : this.state.year;
    let month2 = this.selectSecondMonth(this.state.month, this.state.year);
    let month2Number = monthNumbers[months.indexOf(month2)];
    if (!this.state.check_in_number) {
      if (e.target.childNodes[0].childNodes.length) {
        this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => {
          this.props.setCheckInDate(this.state.check_in);
          this.props.setCheckOutDate(this.state.check_out);
          this.props.makeInvalid();
        }));
      } else {
        this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => {
          this.props.setCheckInDate(this.state.check_in);
          this.props.setCheckOutDate(this.state.check_out);
          this.props.makeInvalid();
        }));
      }
    } else if (this.state.check_in_number && !this.state.check_out_number) {
      if (e.target.childNodes[0].childNodes.length) {
        if (year2 + '-' + month2Number + '-' + dates2[Number(e.target.childNodes[0].innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => this.setState({valid: false, error: true, message: true}, () => {
            this.props.setCheckInDate(this.state.check_in);
            this.props.setCheckOutDate(this.state.check_out);
            this.props.makeInvalid();
          })));
        } else {
          this.setState({check_out_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_out: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => this.setState({valid: true, error: false, message: true}, () => {
            this.props.setCheckOutDate(this.state.check_out);
            this.props.makeValid();
          })));
        }
      } else {
        if (year2 + '-' + month2Number + '-' + dates2[Number(e.target.innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => this.setState({valid: false, error: true, message: true}, () => {
            this.props.setCheckInDate(this.state.check_in);
            this.props.setCheckOutDate(this.state.check_out);
            this.props.makeInvalid();
          })));
        } else {
          this.setState({check_out_number: e.target.innerHTML}, () => this.setState({check_out: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => this.setState({valid: true, error: false, message: true}, () => {
            this.props.setCheckOutDate(this.state.check_out);
            this.props.makeValid();
          })));
        }
      }
    } else {
      e.persist();
      this.setState({check_in: '', check_out: '', check_in_number: '', check_out_number: ''}, () => {
        if (e.target.childNodes[0].childNodes.length) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => this.setState({valid: false, error: false, message: true}, () => {
            this.props.setCheckInDate(this.state.check_in);
            this.props.setCheckOutDate(this.state.check_out);
            this.props.makeInvalid();
          })));
        } else {
          this.setState({check_in_number: e.target.innerHTML}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => this.setState({valid: false, error: false, message: true}, () => {
            this.props.setCheckInDate(this.state.check_in);
            this.props.setCheckOutDate(this.state.check_out);
            this.props.makeInvalid();
          })));
        }
      });
    }
  }

  openMessage(e) {
    this.setState({message: true});
  }

  closeMessage(e) {
    this.setState({message: false});
  }

  componentDidMount() {

  }

  handleLeftClick(e) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (this.state.month === 'January' && this.state.year === 2019) {

    } else if (this.state.month === 'January' && this.state.year === 2020) {
      this.setState({month: 'December', year: 2019});
    } else {
      this.setState({month: months[months.indexOf(this.state.month) - 1]});
    }
  }

  handleRightClick() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (this.state.month === 'December' && this.state.year === 2019) {
      this.setState({month: 'January', year: 2020});
    } else if (this.state.month === 'November' && this.state.year === 2020) {
    } else {
      this.setState({month: months[months.indexOf(this.state.month) + 1]});
    }
  }

  render() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let icon;
    let text;
    let containerClass;
    if (this.state.valid) {
      icon = CheckIcon;
      text = 'Your dates are available';
      containerClass = 'al-green-container';
    } else if (this.state.error) {
      icon = MinusIcon;
      text = 'Check out date must be after check in date';
      containerClass = 'al-red-container';
    } else {
      icon = InfoIcon;
      text = '1 night minimum stay';
      containerClass = 'al-blue-container';
    }
    return (
      <div className={`${this.state.message ? 'al-calendar-display-large' : 'al-calendar-display'}`}>
        <div className='al-calendars-container'>
          <div className='al-calendar-container1'>
            <Calendar year={this.state.year} month={this.state.month} check_in={this.state.check_in} check_out={this.state.check_out} check_in_number={this.state.check_in_number} check_out_number={this.state.check_out_number} handleCheckInClick={this.handleCheckInClick}/>
          </div>
          <div className='al-calendar-container2'>
            <Calendar year={`${(this.state.month === 'December' && this.state.year === 2019) ? 2020 : this.state.year}`} month={this.selectSecondMonth(this.state.month, this.state.year)} check_in={this.state.check_in} check_out={this.state.check_out} check_in_number={this.state.check_in_number} check_out_number={this.state.check_out_number} handleCheckInClick={this.handleCheckInClick2}/>
          </div>
        </div>
        <div className={`${containerClass} 'al-calendar-message-area'`}>
        {
          this.state.message ?
          (
            <div>
              <div className='al-calendar-message-close-button-container'>
                <button className='al-calendar-message-close-button' onClick={this.closeMessage}>
                  <span className='al-calendar-message-close-button-text'>X</span>
                </button>
              </div>
              <div className={`${this.state.error ? 'al-calendar-message-text-adjust' : null} al-calendar-message-container`}>
                <div className='al-calendar-message-icon-container'>
                  <SVG className='al-calendar-message-icon' src={icon}/>
                </div>
                <div className='al-calendar-message-text-container'>
                  <span className='al-calendar-message-text'>{text}</span>
                </div>
              </div>
            </div>
          )
          :
          (
            null
          )
        }
        </div>
        <div className={`${this.state.message ? 'al-calendar-left-button-container-booking' : 'al-calendar-left-button-container-booking-flat'}`}>
          <button className='al-calendar-button' onClick={this.handleLeftClick}>
            <span className='al-calendar-button-text'>{`<`}</span>
          </button>
        </div>
        <div className={`${this.state.message ? 'al-calendar-right-button-container-booking' : 'al-calendar-right-button-container-booking-flat'}`}>
          <button className='al-calendar-button' onClick={this.handleRightClick}>
            <span className='al-calendar-button-text'>{`>`}</span>
          </button>
        </div>
        <div className={`${this.state.message ? 'al-calendar-clear-dates-container-booking' : 'al-calendar-clear-dates-container-booking-flat'}`} onClick={this.clearDates}>
          <span className='al-calendar-clear-dates-text'>Clear dates
          </span>
        </div>
        <div className={`${this.state.message ? 'al-calendar-close-container-large' : 'al-calendar-close-container-flat'}`} onClick={this.props.closeCalendar}>
          <div className='al-calendar-close-text-container-booking'>
            <span className='al-calendar-close-text'>Close</span>
          </div>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return ({
      setCheckInDate: (date) => dispatch(setCheckInDate(date)),
      setCheckOutDate: (date) => dispatch(setCheckOutDate(date)),
      makeValid: () => dispatch(makeValid()),
      makeInvalid: () => dispatch(makeInvalid()),
      startLoading: () => dispatch(startLoading()),
      stopLoading: () => dispatch(stopLoading())
   });
}

const mapStateToProps = (state) => {
  return ({
      selectCheckInDate: selectCheckInDate(state),
      selectCheckOutDate: selectCheckOutDate(state)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDisplayBooking);