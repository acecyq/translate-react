import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { injectIntl } from 'react-intl';

const messages = {
  title: {
    id: 'app.title',
    defaultMessage: 'Welcome to {what}'
  },
  intro: {
    id: 'app.intro',
    defaultMessage: 'To get started, edit <i>src/App.js</i> and save to reload.'
  },
  messages: {
    id: 'app.messages',
    defaultMessage: '{messageCount, plural, =0 {Message} one {Message} other {Messages}}'
  }
};

class App extends Component {
  render() {
    const number = 0;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {number} {this.props.intl.formatMessage(messages.messages, { messageCount: number })}
          </p>
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
            {this.props.intl.formatDate(new Date(), {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
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
