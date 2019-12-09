// jshint esversion:6
import React from 'react';
import SVG from 'react-inlinesvg';
import CheckIcon from '../../dist/icons/tick.svg';
import MinusIcon from '../../dist/icons/negative.svg';
import InfoIcon from '../../dist/icons/Info_Simple.svg';

export class CalendarDisplay extends React.Component {
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
      month: 'December'
    };
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleCheckInClick = this.handleCheckInClick.bind(this);
    this.selectSecondMonth = this.selectSecondMonth.bind(this);
    this.handleCheckInClick2 = this.handleCheckInClick2.bind(this);
    this.clearDates = this.clearDates.bind(this);
  }

  handleCheckInClick(e) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let dates2 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    if (!this.state.check_in_number) {
      if (e.target.childNodes[0].childNodes.length) {
        this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => console.log('check_in', this.state.check_in)));
      } else {
        this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => console.log('check_in', this.state.check_in)));
      }
    } else if (this.state.check_in_number && !this.state.check_out_number) {
      if (e.target.childNodes[0].childNodes.length) {
        if (this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(e.target.childNodes[0].innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => console.log('check_in', this.state.check_in)));
        } else {
          this.setState({check_out_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_out: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => console.log('check_out', this.state.check_out)));
        }
      } else {
        if (this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(e.target.innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => console.log('check_in', this.state.check_in)));
        } else {
          this.setState({check_out_number: e.target.innerHTML}, () => this.setState({check_out: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => console.log('check_out', this.state.check_out)));
        }
      }
    } else {
      e.persist();
      this.setState({check_in: '', check_out: '', check_in_number: '', check_out_number: ''}, () => {
        if (e.target.childNodes[0].childNodes.length) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => console.log('check_in', this.state.check_in)));
        } else {
          this.setState({check_in_number: e.target.innerHTML}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => console.log('check_in', this.state.check_in)));
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
        this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => console.log('check_in', this.state.check_in)));
      } else {
        this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => console.log('check_in', this.state.check_in)));
      }
    } else if (this.state.check_in_number && !this.state.check_out_number) {
      if (e.target.childNodes[0].childNodes.length) {
        if (year2 + '-' + month2Number + '-' + dates2[Number(e.target.childNodes[0].innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => console.log('check_in', this.state.check_in)));
        } else {
          this.setState({check_out_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_out: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => console.log('check_out', this.state.check_out)));
        }
      } else {
        if (year2 + '-' + month2Number + '-' + dates2[Number(e.target.innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => console.log('check_in', this.state.check_in)));
        } else {
          this.setState({check_out_number: e.target.innerHTML}, () => this.setState({check_out: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => console.log('check_out', this.state.check_out)));
        }
      }
    } else {
      e.persist();
      this.setState({check_in: '', check_out: '', check_in_number: '', check_out_number: ''}, () => {
        if (e.target.childNodes[0].childNodes.length) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => console.log('check_in', this.state.check_in)));
        } else {
          this.setState({check_in_number: e.target.innerHTML}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => console.log('check_in', this.state.check_in)));
        }
      });
    }
  }

  clearDates(e) {
    this.setState({check_in_number: '', check_in: '', check_out_number: '', check_out: ''});
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

  componentDidMount() {

  }

  render() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
      <div className='al-calendar-display'>
        <div className='al-calendars-container'>
          <div className='al-calendar-container1'>
            <Calendar year={this.state.year} month={this.state.month} check_in={this.state.check_in} check_out={this.state.check_out} check_in_number={this.state.check_in_number} check_out_number={this.state.check_out_number} handleCheckInClick={this.handleCheckInClick}/>
          </div>
          <div className='al-calendar-container2'>
            <Calendar year={`${(this.state.month === 'December' && this.state.year === 2019) ? 2020 : this.state.year}`} month={this.selectSecondMonth(this.state.month, this.state.year)} check_in={this.state.check_in} check_out={this.state.check_out} check_in_number={this.state.check_in_number} check_out_number={this.state.check_out_number} handleCheckInClick={this.handleCheckInClick2}/>
          </div>
        </div>
        <div className='al-calendar-left-button-container'>
          <button className='al-calendar-button' onClick={this.handleLeftClick}>
            <span className='al-calendar-button-text'>{`<`}</span>
          </button>
        </div>
        <div className='al-calendar-right-button-container'>
          <button className='al-calendar-button' onClick={this.handleRightClick}>
            <span className='al-calendar-button-text'>{`>`}</span>
          </button>
        </div>
        <div className='al-calendar-clear-dates-container' onClick={this.clearDates}>
          <span className='al-calendar-clear-dates-text'>Clear dates
          </span>
        </div>
        <div className='al-calendar-close-container-top' onClick={this.props.closeCalendar}>
          <div className='al-calendar-close-text-container'>
            <span className='al-calendar-close-text'>Close</span>
          </div>
        </div>
      </div>
    );
  }
}

export class CalendarDisplayBooking extends React.Component {
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
    this.setState({check_in_number: '', check_in: '', check_out_number: '', check_out: ''});
  }
  handleCheckInClick(e) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let dates2 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    if (!this.state.check_in_number) {
      if (e.target.childNodes[0].childNodes.length) {
        this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => console.log('check_in', this.state.check_in)));
      } else {
        this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => console.log('check_in', this.state.check_in)));
      }
    } else if (this.state.check_in_number && !this.state.check_out_number) {
      if (e.target.childNodes[0].childNodes.length) {
        if (this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(e.target.childNodes[0].innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => this.setState({valid: false, error: true, message: true})));
        } else {
          this.setState({check_out_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_out: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => this.setState({valid: true, error: false, message: true})));
        }
      } else {
        if (this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(e.target.innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => this.setState({valid: false, error: true, message: true})));
        } else {
          this.setState({check_out_number: e.target.innerHTML}, () => this.setState({check_out: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => this.setState({valid: true, error: false, message: true})));
        }
      }
    } else {
      e.persist();
      this.setState({check_in: '', check_out: '', check_in_number: '', check_out_number: ''}, () => {
        if (e.target.childNodes[0].childNodes.length) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => this.setState({valid: false, error: false, message: true})));
        } else {
          this.setState({check_in_number: e.target.innerHTML}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => this.setState({valid: false, error: false, message: true})));
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
        this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => console.log('check_in', this.state.check_in)));
      } else {
        this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => console.log('check_in', this.state.check_in)));
      }
    } else if (this.state.check_in_number && !this.state.check_out_number) {
      if (e.target.childNodes[0].childNodes.length) {
        if (year2 + '-' + month2Number + '-' + dates2[Number(e.target.childNodes[0].innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => this.setState({valid: false, error: true, message: true})));
        } else {
          this.setState({check_out_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_out: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => this.setState({valid: true, error: false, message: true})));
        }
      } else {
        if (year2 + '-' + month2Number + '-' + dates2[Number(e.target.innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => this.setState({valid: false, error: true, message: true})));
        } else {
          this.setState({check_out_number: e.target.innerHTML}, () => this.setState({check_out: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => this.setState({valid: true, error: false, message: true})));
        }
      }
    } else {
      e.persist();
      this.setState({check_in: '', check_out: '', check_in_number: '', check_out_number: ''}, () => {
        if (e.target.childNodes[0].childNodes.length) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => this.setState({valid: false, error: false, message: true})));
        } else {
          this.setState({check_in_number: e.target.innerHTML}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => this.setState({valid: false, error: false, message: true})));
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
}

// export default CalendarDisplay;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  getRows(month, year) {

    if (!month || !year) {
      return null;
    }

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

    let startDate = startDates[year][months.indexOf(month)];
    let daysInMonth = datesInMonths[months.indexOf(month)];
    let monthsArr = [[],[],[],[],[],[]];
    let j = 0;
    while (j < startDate) {
      monthsArr[0].push(' ');
      j += 1;
    }
    let selectedIndex = 0;
    for (let i = 1; i <= daysInMonth; i++) {
      if (monthsArr[selectedIndex].length === 7) {
        selectedIndex += 1;
      }
      monthsArr[selectedIndex].push(i);
    }
    while (monthsArr[selectedIndex].length < 7) {
      monthsArr[selectedIndex].push(' ');
    }
    return monthsArr;
  }

  render() {
    let monthsArr = this.getRows(this.props.month, this.props.year);
    let monthNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthNum = monthNumbers[months.indexOf(this.props.month)];

    return (
      <div className='al-calendar'>
        <div className='al-calendar-title-container'>
          <span className='al-calendar-title'><strong>{`${this.props.month} ${this.props.year}`}</strong></span>
        </div>
        <div className='al-calendar-table-container'>
          <table className='al-calendar-table'>
            <thead>
                <tr className='al-calendar-table-header-row'>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>S</span></th>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>M</span></th>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>T</span></th>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>W</span></th>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>T</span></th>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>F</span></th>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>S</span></th>
                </tr>
              </thead>
            <tbody className='al-calendar-table-body'>
            {
              monthsArr ?
              (
                monthsArr.map((week, i) => {
                  let style;
                  let textStyle;
                  let dates2 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
                  return (
                    <tr className='al-calendar-table-week-row' key={i}>
                    {
                      week.map((day, j) => {
                        if (day === ' ') {
                          style = 'al-calendar-day-cell-normal';
                          textStyle = 'al-calendar-day-cell-text';
                        } else if (this.props.year + '-' + monthNum + '-' + dates2[Number(day) - 1] === this.props.check_out || this.props.year + '-' + monthNum + '-' + dates2[Number(day) - 1] === this.props.check_in) {
                          style = 'al-calendar-day-cell-selected';
                          textStyle = 'al-calendar-day-cell-text-selected';
                        } else if (this.props.check_out && this.props.check_in && this.props.check_in < this.props.year + '-' + monthNum + '-' + dates2[Number(day) - 1] && this.props.check_out > this.props.year + '-' + monthNum + '-' + dates2[Number(day) - 1]) {
                          style = 'al-calendar-day-cell-between';
                          textStyle = 'al-calendar-day-cell-text';
                        } else {
                          style = 'al-calendar-day-cell';
                          textStyle = 'al-calendar-day-cell-text';
                        }
                        return (
                          <td className={style} key={j} onClick={this.props.handleCheckInClick}>
                          <span className={textStyle}>{day}</span>
                          </td>
                        );
                      })
                    }
                    </tr>
                  );
                })
              )
              :
              (
                null
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}