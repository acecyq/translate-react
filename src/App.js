import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { injectIntl } from 'react-intl';
import messages from './translations/en.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            {this.props.intl.formatMessage(messages.title, {what: 'react-intl'})}
          </h1>
          <p>
            {this.props.intl.formatDate(new Date(), {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <p>
            {this.props.intl.formatTime(new Date(), {
              hour: 'numeric',
              minute: 'numeric'
            })}
          </p>
          <p>
            {this.props.intl.formatRelative(Date.now())}
          </p>
          <p>
            {this.props.intl.formatNumber(1000)}
          </p>
          <p>
            {this.props.intl.formatHTMLMessage(messages.intro)}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default injectIntl(App);
