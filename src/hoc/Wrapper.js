import React, { Component } from 'react';
import App from '../App';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import locale_zh from 'react-intl/locale-data/zh';
import locale_ja from 'react-intl/locale-data/ja';
import messages_de from "../translations/de.json";
import messages_en from "../translations/en.json";
import messages_zh from "../translations/zh.json";
import messages_ja from "../translations/ja.json";

addLocaleData([...locale_en, ...locale_de, ...locale_zh, ...locale_ja]);
const messages = {
    'de': messages_de,
    'en': messages_en,
    'zh': messages_zh,
    'ja': messages_ja
};
// const language = navigator.language.split(/[-_]/)[0];  // language without region code

export default class extends Component {
	state = {
		language: "en"
	}

	clickHandler = (event) => {
		this.setState({ language: event.target.id });
	}

	render() {
		return(
				<IntlProvider locale={this.state.language} messages={messages[this.state.language]} >
					<div>
						<button id='en' onClick={this.clickHandler}>en</button>
						<button id='de' onClick={this.clickHandler}>de</button>
						<button id='zh' onClick={this.clickHandler}>zh</button>
						<button id='ja' onClick={this.clickHandler}>ja</button>
						<App />
					</div>
				</IntlProvider>
		);
	}
}