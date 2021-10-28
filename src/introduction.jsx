import Gtag from 'lesca-gtag';
import { render } from 'react-dom';
import App from './Introduction/main';
import './Setting/global.less';

Gtag.install(process.env.GA_ID);

render(<App />, document.getElementById('app'));
