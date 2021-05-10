import { useEffect, useState } from 'react';
import Footer from '../Components/Footer/main';
import Nav from '../Components/Nav/main';
import { HashChange } from '../Setting/config';
import { FunctionList as Data } from './data';
import './main.less';
import MemberEditor from './memberEditor';
import NewsEditor from './newsEditor';
import PageSelect from './pageSelect';

const Admin = () => {
	const [editorPage, setEditorPage] = useState('news');

	const onChange = (e) => {
		setEditorPage(e.target.value);
	};

	const appendPage = () => {
		const [news, schedule, members] = Data;
		switch (editorPage) {
			case news.id:
				return <NewsEditor />;

			case schedule.id:
				return false;

			case members.id:
				return <MemberEditor />;
			default:
				return false;
		}
	};

	useEffect(() => {
		HashChange();
	});

	return (
		<div id='admin'>
			<Nav />
			<PageSelect onChange={onChange} />
			{appendPage()}
			<Footer />
		</div>
	);
};
export default Admin;
