import { useEffect } from 'react';
import Footer from '../Components/Footer/main';
import Header from '../Components/Header/main';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import { HashChange } from '../Setting/config';
import './main.less';
import QuotaGrantees from './quotaGrantees';
import ReviewProcess from './reviewProcess';
import SuggestionDirecting from './suggestionDirecting';

const Introduction = () => {
	useEffect(() => {
		HashChange();
	});
	return (
		<div id='how'>
			<Nav />
			<Header />
			<Menu />
			<QuotaGrantees />
			<ReviewProcess />
			<SuggestionDirecting />
			<Footer />
		</div>
	);
};
export default Introduction;
