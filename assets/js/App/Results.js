import React, { Component } from 'react';

export default class Results extends Component {
  constructor() {
    super();
    this.state = {};
    this.checkGains = this.checkGains.bind(this);
    this.newSpAnimate = this.newSpAnimate.bind(this);
  }

  checkGains() {
    const { percent } = this.props.globalState.totalStatus;
    if (this.props.globalState.status == 'profit') {
      return `You made a ${percent}% profit`;
    } else {
      return `You made a ${percent}% loss`;
    }
  }

  newSpAnimate(id, start, end, duration) {
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

  componentDidMount() {
    const newSellingPrice = this.props.globalState.totalStatus.newSellingPrice;
    this.newSpAnimate('newSP', 100, `${newSellingPrice}`, 800);
  }

  render() {
    // destructure object for easy access to props
    const {
      newCostPrice,
      newSellingPrice,
      percent
    } = this.props.globalState.totalStatus;
    return (
      <section id="results">
        <div className="container">
          <div className="col-md-12">
            <div className="ads" />
          </div>
          <div className="col-md-12">
            <h3>Your ${newCostPrice} AUD investment is now</h3>
            <h1>
              $<span id="newSP" /> AUD
            </h1>
            <h4>{this.checkGains()}</h4>
            <a href="#" className="main-btn active">
              Create account to keep track of all your records
            </a>
            <a href="#" className="main-btn" onClick={this.props.goBack}>
              Or Check Another Transaction
            </a>
          </div>
          <div className="col-md-12">
            <div className="ads" />
          </div>
        </div>
      </section>
    );
  }
}
