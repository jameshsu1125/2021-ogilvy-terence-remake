import React from 'react';
import Nav from '../Components/Nav/main';
import Header from '../Components/Header/main';
import Menu from '../Components/Menu/main';
import Footer from '../Components/Footer/main';

import KnowTerence from './knowTerence';
import TerenceInMyEyes from './terenceInMyEyes';
import SevenAttributes from './sevenAttributes';
import TerenceQuotations from './terenceQuotations';

import './main.less';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Index = () => (
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

export default Index;
