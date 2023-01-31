import Storage from 'lesca-local-storage';
import { memo, useEffect, useState } from 'react';
import Alert from '../Components/Alert/main';
import Footer from '../Components/Footer/main';
import Header from '../Components/Header/main';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import { AlertDisableTimestamp, HashChange } from '../Setting/config';
import './index.less';
import MasterExclusive from './masterExclusive';
import Position from './position';

const Index = memo(() => {
	const [alert, setAlert] = useState(false);

	useEffect(() => {
		HashChange();

		const { data, timestamp } = Storage.get('alert');
		if (!data || timestamp >= AlertDisableTimestamp) {
			setAlert(true);
			Storage.set('alert', true);
		}
	}, []);

	return (
		<div id='Index'>
			<Nav />
			<Header setAlert={setAlert} />
			<Menu />
			<Position />
			<MasterExclusive />
			<Footer />
			{alert && <Alert setAlert={setAlert} />}
		</div>
	);
});
export default Index;
