import Storage from 'lesca-local-storage';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Alert from '../Components/Alert/main';
import Footer from '../Components/Footer/main';
import Header from '../Components/Header/main';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import { AlertDisableTimestamp as time, HashChange } from '../Setting/config';
import KnowTerence from './knowTerence';
import './main.less';
import SevenAttributes from './sevenAttributes';
import TerenceInMyEyes from './terenceInMyEyes';
import TerenceQuotations from './terenceQuotations';

const Index = () => {
	const [alert, setAlert] = useState(false);

	useEffect(() => {
		HashChange();

		const { data, timestamp } = Storage.get('alert');

		if (!data || timestamp >= time) {
			setAlert(true);
			Storage.set('alert', true);
		}
	}, []);

	const appendAlert = () => {
		if (alert) return <Alert />;
		return false;
	};

	return (
		<div id='index'>
			<Nav />
			<Header />
			<Menu />
			<KnowTerence />
			<TerenceInMyEyes />
			<SevenAttributes />
			<TerenceQuotations />
			<Footer />
			{appendAlert()}
		</div>
	);
};

export default Index;
