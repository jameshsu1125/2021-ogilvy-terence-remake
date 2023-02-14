import Gtag from 'lesca-gtag';
import QueryString from 'lesca-url-parameters';
import { createRoot } from 'react-dom/client';
import App from './Know/main';
import './Setting/global.less';

const { pathname } = window.location;
if (pathname === 'terence') {
	window.location.replace(`https://terence.ogilvy.com.tw/${QueryString.file()}`);
}

Gtag.install(process.env.GA_ID);
createRoot(document.getElementById('app')).render(<App />);
