import Parser from 'html-react-parser';
import { useEffect } from 'react';
import { News, NewsContent } from '../../Setting/config';
import './main.less';

const Alert = ({ title = News, content = NewsContent }) => {
	useEffect(() => {}, []);
	return (
		<div className='Alert'>
			<div className='alert-container'>
				<div className='title'>
					<h1>{title}</h1>
				</div>
				{Parser(content.split('↵').join('<br />'))}
				<div className='alert-close' />
			</div>
		</div>
	);
};
export default Alert;
