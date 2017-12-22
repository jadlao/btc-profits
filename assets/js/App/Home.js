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
            <input type="text" name="amount" />
            <label htmlFor="date">Date</label>
            <DatePicker
              selected={this.props.globalState.date}
              onChange={this.props.handleDateChange}
            />;
            <button type="submit">Check Profits</button>
          </div>
        </div>
      </section>
    );
  }
}
