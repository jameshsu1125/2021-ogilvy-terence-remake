import { useEffect } from 'react';
import Footer from '../Components/Footer/main';
import Nav from '../Components/Nav/main';
import { HashChange } from '../Setting/config';

import Editor from './editor';

import './main.less';

const Admin = () => {
	useEffect(() => {
		HashChange();
	});
	return (
		<div id='admin'>
			<Nav />
			<Editor />
			<Footer />
		</div>
	);
};
export default Admin;
