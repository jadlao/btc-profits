import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section id="home">
        <div className="container">
          <div className="col-md-6">
            <img src="/img/bitcoin-logo.png" className="bitcoin-logo" />
          </div>
          <div className="col-md-6">
            <h2>Enter Transaction</h2>
            <label htmlFor="price">Crypto Amount</label>
            <input
              type="text"
              name="amount"
              onChange={this.props.onInputChange}
              value={this.props.globalState.cryptoAmount}
            />
            <label htmlFor="date">Date</label>
            <DatePicker
              selected={this.props.globalState.date}
              onChange={this.props.handleDateChange}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              locale="en-au"
            />;
            <button type="submit" onClick={this.props.checkProfits}>
              Check Profits
            </button>
          </div>
        </div>
      </section>
    );
  }
}
