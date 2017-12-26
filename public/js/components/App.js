webpackJsonp([0],{

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDatepicker = __webpack_require__(59);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-md-5' },
            _react2.default.createElement('img', { src: '/img/bitcoin-logo.png', className: 'bitcoin-logo' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'transactions col-xs-12 col-md-7' },
            _react2.default.createElement(
              'h2',
              null,
              'Enter Transaction'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'price' },
              'Crypto Amount'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              name: 'amount',
              onChange: this.props.onInputChange,
              value: this.props.globalState.cryptoAmount
            }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'date' },
              'Date'
            ),
            _react2.default.createElement(_reactDatepicker2.default, {
              selected: this.props.globalState.date,
              onChange: this.props.handleDateChange,
              showMonthDropdown: true,
              showYearDropdown: true,
              dropdownMode: 'select',
              locale: 'en-au'
            }),
            _react2.default.createElement(
              'button',
              { type: 'submit', onClick: this.props.checkProfits },
              'Check Profits'
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results() {
    _classCallCheck(this, Results);

    var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

    _this.state = {};
    _this.checkGains = _this.checkGains.bind(_this);
    _this.newSpAnimate = _this.newSpAnimate.bind(_this);
    return _this;
  }

  _createClass(Results, [{
    key: 'checkGains',
    value: function checkGains() {
      var percent = this.props.globalState.totalStatus.percent;

      if (this.props.globalState.status == 'profit') {
        return 'You made a ' + percent + '% profit';
      } else {
        return 'You made a ' + percent + '% loss';
      }
    }
  }, {
    key: 'newSpAnimate',
    value: function newSpAnimate(id, start, end, duration) {
      //console.log('component mounted');
      var obj = document.getElementById(id);
      var range = end - start;
      var minTimer = 50;
      var stepTime = Math.abs(Math.floor(duration / range));

      stepTime = Math.max(stepTime, minTimer);
      var startTime = new Date().getTime();
      var endTime = startTime + duration;
      var timer;

      function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - remaining * range);
        obj.innerHTML = value;
        if (value == end) {
          clearInterval(timer);
        }
      }

      timer = setInterval(run, stepTime);
      run();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var newSellingPrice = this.props.globalState.totalStatus.newSellingPrice;
      this.newSpAnimate('newSP', 100, '' + newSellingPrice, 800);
    }
  }, {
    key: 'render',
    value: function render() {
      // destructure object for easy access to props
      var _props$globalState$to = this.props.globalState.totalStatus,
          newCostPrice = _props$globalState$to.newCostPrice,
          newSellingPrice = _props$globalState$to.newSellingPrice,
          percent = _props$globalState$to.percent;

      return _react2.default.createElement(
        'section',
        { id: 'results' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement('div', { className: 'ads' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              'h3',
              null,
              'Your $',
              newCostPrice,
              ' AUD investment is now'
            ),
            _react2.default.createElement(
              'h1',
              null,
              '$',
              _react2.default.createElement('span', { id: 'newSP' }),
              ' AUD'
            ),
            _react2.default.createElement(
              'h4',
              null,
              this.checkGains()
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'main-btn active' },
              'Create account to keep track of all your records'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'main-btn', onClick: this.props.goBack },
              'Or Check Another Transaction'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement('div', { className: 'ads' })
          )
        )
      );
    }
  }]);

  return Results;
}(_react.Component);

exports.default = Results;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDatepicker = __webpack_require__(59);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _axios = __webpack_require__(226);

var _axios2 = _interopRequireDefault(_axios);

var _Home = __webpack_require__(227);

var _Home2 = _interopRequireDefault(_Home);

var _Results = __webpack_require__(228);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      location: 'home',
      date: (0, _moment2.default)(),
      data: '',
      btcToday: '',
      cryptoAmount: 1,
      status: '',
      totalStatus: ''
    };
    _this.routingSystem = _this.routingSystem.bind(_this);
    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.checkProfits = _this.checkProfits.bind(_this);
    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.goBack = _this.goBack.bind(_this);
    return _this;
  }

  // call API as soon as component renders


  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,AUD&ts=' + (0, _moment2.default)().unix() + '&extraParams=crypto_profits').then(function (response) {
        //console.log(response.data.BTC);
        self.setState({
          btcToday: response.data.BTC
        }, function () {
          return console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'handleDateChange',
    value: function handleDateChange(date) {
      var _this2 = this;

      this.setState({
        date: date
      }, function () {
        return console.log(_this2.state.date.unix());
      });
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(event) {
      this.setState({
        cryptoAmount: event.target.value
      });
    }
  }, {
    key: 'checkProfits',
    value: function checkProfits() {
      // to prevent conflict with this
      var self = this;
      _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,AUD&ts=' + this.state.date.unix() + '&extraParams=crypto_profits').then(function (response) {
        //console.log(response.data.BTC);
        self.setState({
          data: response.data.BTC
        }, function () {
          var costPrice = self.state.data.AUD;
          var newCostPrice = self.state.cryptoAmount * 100;
          newCostPrice = newCostPrice * costPrice / 100;
          var sellingPrice = self.state.btcToday.AUD;
          var newSellingPrice = self.state.cryptoAmount * 100;
          newSellingPrice = newSellingPrice * sellingPrice / 100;

          if (newCostPrice < newSellingPrice) {
            // Profit
            var profit = newSellingPrice - newCostPrice;
            var profitPercent = profit / newCostPrice * 100;
            profitPercent = profitPercent.toFixed(2);
            console.log(self.state.cryptoAmount + ' bitcoin, newSP: ' + newSellingPrice + ', SP: ' + sellingPrice + ', newCP: ' + newCostPrice + ', CP: ' + costPrice);
            console.log('profit % is ' + profitPercent);
            // set state with totals and change location
            self.setState({
              location: 'results',
              status: 'profit',
              totalStatus: {
                newCostPrice: newCostPrice.toFixed(2),
                costPrice: costPrice,
                newSellingPrice: newSellingPrice.toFixed(2),
                sellingPrice: sellingPrice,
                percent: profitPercent
              }
            }, function () {
              return console.log(self.state);
            });
          } else {
            // Loss
            var loss = newCostPrice - newSellingPrice;
            var lossPercent = loss / newCostPrice * 100;
            lossPercent = lossPercent.toFixed(2);
            console.log('loss % is ' + lossPercent);
            // set state and change location
            self.setState({
              location: 'results',
              status: 'loss',
              totalStatus: {
                newCostPrice: newCostPrice.toFixed(2),
                costPrice: costPrice,
                newSellingPrice: newSellingPrice.toFixed(2),
                sellingPrice: sellingPrice,
                percent: lossPercent
              }
            }, function () {
              return console.log(self.state);
            });
          }
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'goBack',
    value: function goBack() {
      var _this3 = this;

      this.setState({
        location: 'home',
        date: (0, _moment2.default)(),
        data: '',
        cryptoAmount: 1,
        status: '',
        totalStatus: ''
      }, function () {
        return console.log('back', _this3.state);
      });
    }
  }, {
    key: 'routingSystem',
    value: function routingSystem() {
      switch (this.state.location) {
        case 'home':
          return _react2.default.createElement(_Home2.default, {
            handleDateChange: this.handleDateChange,
            globalState: this.state,
            onInputChange: this.onInputChange,
            checkProfits: this.checkProfits
          });
          break;
        case 'results':
          return _react2.default.createElement(_Results2.default, { globalState: this.state, goBack: this.goBack });
          break;
        default:
          return _react2.default.createElement(_Home2.default, null);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
              'div',
              { className: 'logo' },
              'Bitcoin Profits'
            ),
            _react2.default.createElement(
              'nav',
              { className: 'menu' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'main-btn' },
                'Register'
              )
            )
          ),
          this.routingSystem()
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[247]);