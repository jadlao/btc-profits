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
      data: '',
      btcToday: '',
      cryptoAmount: 1,
      status: '',
      totalStatus: ''
    };
    this.routingSystem = this.routingSystem.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.checkProfits = this.checkProfits.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  // call API before component renders - today's BTC price
  componentWillMount() {
    var self = this;
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,AUD&ts=${moment().unix()}&extraParams=crypto_profits`
      )
      .then(function(response) {
        //console.log(response.data.BTC);
        self.setState(
          {
            btcToday: response.data.BTC
          },
          () => console.log(self.state)
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleDateChange(date) {
    this.setState(
      {
        date: date
      },
      () => console.log(this.state.date.unix())
    );
  }

  onInputChange(event) {
    this.setState({
      cryptoAmount: event.target.value
    });
  }

  checkProfits() {
    // to prevent conflict with this
    var self = this;
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,AUD&ts=${this.state.date.unix()}&extraParams=crypto_profits`
      )
      .then(function(response) {
        //console.log(response.data.BTC);
        self.setState(
          {
            data: response.data.BTC
          },
          () => {
            const costPrice = self.state.data.AUD;
            var newCostPrice = self.state.cryptoAmount * 100;
            newCostPrice = newCostPrice * costPrice / 100;
            const sellingPrice = self.state.btcToday.AUD;
            var newSellingPrice = self.state.cryptoAmount * 100;
            newSellingPrice = newSellingPrice * sellingPrice / 100;

            if (newCostPrice < newSellingPrice) {
              // Profit
              var profit = newSellingPrice - newCostPrice;
              var profitPercent = profit / newCostPrice * 100;
              profitPercent = profitPercent.toFixed(2);
              console.log(
                `${
                  self.state.cryptoAmount
                } bitcoin, newSP: ${newSellingPrice}, SP: ${sellingPrice}, newCP: ${newCostPrice}, CP: ${costPrice}`
              );
              console.log(`profit % is ${profitPercent}`);
              // set state with totals and change location
              self.setState(
                {
                  location: 'results',
                  status: 'profit',
                  totalStatus: {
                    newCostPrice: newCostPrice.toFixed(2),
                    costPrice: costPrice,
                    newSellingPrice: newSellingPrice.toFixed(2),
                    sellingPrice: sellingPrice,
                    percent: profitPercent
                  }
                },
                () => console.log(self.state)
              );
            } else {
              // Loss
              var loss = newCostPrice - newSellingPrice;
              var lossPercent = loss / newCostPrice * 100;
              lossPercent = lossPercent.toFixed(2);
              console.log(`loss % is ${lossPercent}`);
              // set state and change location
              self.setState(
                {
                  location: 'results',
                  status: 'loss',
                  totalStatus: {
                    newCostPrice: newCostPrice.toFixed(2),
                    costPrice: costPrice,
                    newSellingPrice: newSellingPrice.toFixed(2),
                    sellingPrice: sellingPrice,
                    percent: lossPercent
                  }
                },
                () => console.log(self.state)
              );
            }
            console.log(self.state);
          }
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  goBack() {
    this.setState({
      location: 'home',
      date: moment(),
      data: '',
      cryptoAmount: 1,
      status: '',
      totalStatus: ''
    }, () => console.log('back', this.state));
  }

  routingSystem() {
    switch (this.state.location) {
      case 'home':
        return (
          <Home
            handleDateChange={this.handleDateChange}
            globalState={this.state}
            onInputChange={this.onInputChange}
            checkProfits={this.checkProfits}
          />
        );
        break;
      case 'results':
        return <Results globalState={this.state} goBack={this.goBack} />;
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
            <div className="logo">Bitcoin Profits</div>
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
