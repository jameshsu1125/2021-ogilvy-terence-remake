import { useEffect } from 'react';
import Footer from '../Components/Footer/main';
import Header from '../Components/Header/main';
import Menu from '../Components/Menu/main';
import Nav from '../Components/Nav/main';
import { HashChange } from '../Setting/config';
import './main.less';
import ProjectPurpose from './projectPurpose';
import GrantProgram from './grantProgram';

const Introduction = () => {
	useEffect(() => {
		HashChange();
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
