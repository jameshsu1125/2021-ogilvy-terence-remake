/* eslint-disable no-useless-escape */
import Parser from 'html-react-parser';
import { useEffect } from 'react';
import { News, NewsContent } from '../../Setting/config';
import './main.less';

const splitCodeTag = (html) => {
	const regex = /(?<=\<code\>)(\s*.*\s*)(?=\<\/code\>)/g;
	let code = html.replace(regex, '<|>');
	const content = html.match(regex);

	content.forEach((e) => {
		let item = '';
		e.split(' ')
			.join('')
			.split(',')
			.forEach((name) => {
				item += `<span>${name}</span>`;
			});
		code = code.replace('<|>', item);
	});
	return code;
};

const Alert = ({ title = News, content = NewsContent }) => {
	useEffect(() => {}, []);
	return (
		<div className='Alert'>
			<div className='alert-container'>
				<div className='title'>
					<h1>{title}</h1>
				</div>
				{Parser(splitCodeTag(content.split('↵').join('<br />')))}
				<div className='alert-close' />
			</div>
		</div>
	);
};
export default Alert;
