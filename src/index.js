import Gtag from 'lesca-gtag';
import { createRoot } from 'react-dom/client';
import App from './Index/main';
import './Setting/global.less';

const { pathname } = window.location;
if (pathname === 'terence') {
	window.location.replace('https://terence.ogilvy.com.tw/');
}

Gtag.install(process.env.GA_ID);
createRoot(document.getElementById('app')).render(<App />);
