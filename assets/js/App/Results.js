import React, { Component } from 'react';

export default class Results extends Component {
  constructor() {
    super();
    this.state = {};
    this.checkGains = this.checkGains.bind(this);
  }

  checkGains() {
    const { percent } = this.props.globalState.totalStatus;
    if (this.props.globalState.status == 'profit') {
      return `You made a ${percent}% profit`;
    } else {
      return `You made a ${percent}% loss`;
    }
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
            <h1>${newSellingPrice} AUD</h1>
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
