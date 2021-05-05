import { useEffect } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Footer from '../Components/Footer/main';
import Header from '../Components/Header/main';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import { HashChange } from '../Setting/config';
import KnowTerence from './knowTerence';
import './main.less';
import SevenAttributes from './sevenAttributes';
import TerenceInMyEyes from './terenceInMyEyes';
import TerenceQuotations from './terenceQuotations';

const Index = () => {
	useEffect(() => {
		HashChange();
	});
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
		</div>
	);
};

export default Index;
