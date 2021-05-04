import Hash from 'lesca-url-parameters';
import { useEffect } from 'react';
import Footer from '../Components/Footer/main';
import Header from '../Components/Header/main';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import { HtmlName, MenuList, ScrollTo } from '../Setting/config';
import './main.less';
import ProjectPurpose from './projectPurpose';
import GrantProgram from './grantProgram';

const Introduction = () => {
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
		<div id='introduction'>
			<Nav />
			<Header />
			<Menu />
			<ProjectPurpose />
			<GrantProgram />
			<Footer />
		</div>
	);
};
export default Introduction;
