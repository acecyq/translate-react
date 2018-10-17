import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from 'react-intl';
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import locale_zh from 'react-intl/locale-data/zh';
import locale_ja from 'react-intl/locale-data/ja';
import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";
import messages_zh from "./translations/zh.json";
import messages_ja from "./translations/ja.json";

addLocaleData([...locale_en, ...locale_de, ...locale_zh, ...locale_ja]);
const messages = {
    'de': messages_de,
    'en': messages_en,
    'zh': messages_zh,
    'ja': messages_ja
};
// const language = navigator.language.split(/[-_]/)[0];  // language without region code
const language = 'de';

const app = (
	<IntlProvider locale={language} messages={messages[language]} >
		<App />
	</IntlProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
