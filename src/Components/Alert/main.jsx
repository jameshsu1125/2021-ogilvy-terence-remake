/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-useless-escape */
import Parser from 'html-react-parser';
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

const Alert = (props) => {
	const { setAlert } = props;

	const close = () => setAlert(false);

	return (
		<div className='Alert'>
			<div className='alert-container'>
				<div className='title'>
					<h1>{News}</h1>
				</div>
				{Parser(splitCodeTag(NewsContent.split('↵').join('<br />')))}
				<div
					className='alert-close'
					onClick={close}
					onKeyPress={close}
					role='button'
					tabIndex='0'
				/>
			</div>
		</div>
	);
};
export default Alert;
