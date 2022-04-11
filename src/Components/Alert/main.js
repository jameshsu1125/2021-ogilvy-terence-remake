/* eslint-disable no-useless-escape */
import Parser from 'html-react-parser';
import { useEffect, useRef, useState } from 'react';
import { useShallowCompareEffect } from 'react-use';
import './main.less';

const splitCodeTag = (container, html) => {
	const regex = /(?:\<code\>)(\s*.*\s*)(?:\<\/code\>)/g;

	let code = html.replace(regex, '<|>');
	const content = html.match(regex);

	content?.forEach((e) => {
		let item = '';
		const splitItem = e
			.split('<code>')
			.join('')
			.split('</code>')
			.join('')
			.split(' ')
			.join('')
			.split(',');

		splitItem.forEach((name) => {
			item += `<span>${name}</span>`;
		});

		code = code.replace('<|>', `<code>${item}</code>`);

		if (splitItem.length < 5) {
			container.current.classList.add('less5Items');
		}
	});
	return code;
};

const Alert = (props) => {
	const { setAlert } = props;

	const containerRef = useRef();

	const [contents, setContents] = useState({});
	const [title, setTitle] = useState('');
	const [html, setHtml] = useState('');

	const close = () => setAlert(false);

	useEffect(() => {
		fetch('./data/news.json')
			.then((e) => e.json())
			.then((result) => {
				setContents(result);
			});

		const keyClose = (e) => {
			const { keyCode } = e;
			if (keyCode === 27) close();
		};

		window.addEventListener('keydown', keyClose);

		return () => {
			window.removeEventListener('keydown', keyClose);
		};
	}, []);

	useShallowCompareEffect(() => {
		if (Object.keys(contents).length > 0) {
			setTitle(contents.title);
			setHtml(contents.html);
		}
	}, [contents]);

	return (
		<div className='Alert'>
			<div className='backgroundColor' onClick={close} onKeyPress={close} role='none' />
			<div ref={containerRef} className='alert-container'>
				<div className='title'>
					<h1>{title}</h1>
				</div>
				{html && Parser(splitCodeTag(containerRef, html.split('↵').join('<br />')))}
				<div className='alert-close' onClick={close} onKeyPress={close} role='none' />
			</div>
		</div>
	);
};
export default Alert;
