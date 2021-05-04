import Hash from 'lesca-url-parameters';
import { useEffect } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Footer from '../Components/Footer/main';
import Header from '../Components/Header/main';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import { HtmlName, MenuList, ScrollTo } from '../Setting/config';
import KnowTerence from './knowTerence';
import './main.less';
import SevenAttributes from './sevenAttributes';
import TerenceInMyEyes from './terenceInMyEyes';
import TerenceQuotations from './terenceQuotations';

const Index = () => {
	useEffect(() => {
		window.addEventListener('hashchange', () => {
			const fileName = Hash.file().replace(/\.[^/.]+$/, '');
			const pageName = HtmlName.filter((e) => {
				if (e.fileName === fileName) return true;
				return false;
			});

			if (pageName.length === 0) return;
			const { name } = pageName[0];
			const listData = MenuList.filter((e) => {
				if (e.name === name) return true;
				return false;
			});

			if (listData.length === 0) return;
			const { hash } = window.location;
			const hashName = decodeURIComponent(hash).split('#').join('');
			const { list } = listData[0];
			const hashData = list.filter((e) => {
				if (e.name === hashName) return true;
				return false;
			});
			if (hashData.length === 0) return;
			const { id } = hashData[0];
			if (id) ScrollTo(document.getElementById(id));
		});
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
