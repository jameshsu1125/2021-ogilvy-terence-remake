import Storage from 'lesca-local-storage';
import { useEffect, useState } from 'react';
import Alert from '../Components/Alert/main';
import Footer from '../Components/Footer/main';
import Header from '../Components/Header/main';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import { AlertDisableTimestamp as time, HashChange } from '../Setting/config';
import './main.less';
import QuotaGrantees from './quotaGrantees';
import ReviewProcess from './reviewProcess';
import SuggestionDirecting from './suggestionDirecting';

const Introduction = () => {
	const [alert, setAlert] = useState(false);

	useEffect(() => {
		HashChange();
		const { data, timestamp } = Storage.get('alert');
		if (!data || timestamp >= time) {
			setAlert(true);
			Storage.set('alert', true);
		}
	}, []);

	return (
		<div id='how'>
			<Nav />
			<Header setAlert={setAlert} />
			<Menu />
			<QuotaGrantees />
			<ReviewProcess />
			<SuggestionDirecting />
			<Footer />
			{alert && <Alert setAlert={setAlert} />}
		</div>
	);
};
export default Introduction;
