import Gtag from 'lesca-gtag';
import { createRoot } from 'react-dom/client';
import App from './Introduction/main';
import './Setting/global.less';

Gtag.install(process.env.GA_ID);
createRoot(document.getElementById('app')).render(<App />);
