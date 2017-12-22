import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';
import Home from './Home';
import Results from './Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: 'home',
      date: moment(),
      data: ''
    };
    this.routingSystem = this.routingSystem.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.apiCall = this.apiCall.bind(this);
  }

  handleDateChange(date) {
    this.setState(
      {
        date: date
      },
      () => console.log(this.state.date.unix())
    );
  }

  apiCall() {
    // to prevent conflict with this
    var self = this;
    axios
      .get(
        'https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=1514180658&extraParams=crypto_profits'
      )
      .then(function(response) {
        //console.log(response.data.BTC);
        self.setState(
          {
            data: response.data.BTC
          },
          () => console.log(self.state)
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  routingSystem() {
    switch (this.state.location) {
      case 'home':
        return (
          <Home
            handleDateChange={this.handleDateChange}
            globalState={this.state}
          />
        );
        break;
      case 'results':
        return <Results />;
        break;
      default:
        return <Home />;
    }
  }

  render() {
    return (
      <div className="home">
        <div className="container">
          <header>
            <div className="logo" onClick={this.apiCall}>
              Crypto Profits
            </div>
            <nav className="menu">
              <a href="#" className="main-btn">
                Register
              </a>
            </nav>
          </header>
          {this.routingSystem()}
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
