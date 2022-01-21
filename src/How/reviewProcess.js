import Parser from 'html-react-parser';
import { useEffect, useState } from 'react';
import { useShallowCompareEffect } from 'react-use';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import ReviewStep from '../Components/ReviewStep/main';
import { ReviewProcessData as Data } from './data';
import './reviewProcess.less';

// ! => 如何申請 / 審核流程
const ReviewProcess = () => {
	const [contents, setContents] = useState({});
	const [html, setHtml] = useState(false);
	const [url, setURL] = useState(false);
	const [date, setDate] = useState(Data);

	const openGoogleForm = () => {
		if (url) window.open(url);
	};

	useEffect(() => {
		fetch('./data/schedule.json')
			.then((e) => e.json())
			.then((result) => {
				setContents(result);
			});
		return () => {};
	}, []);

	useShallowCompareEffect(() => {
		if (Object.keys(contents).length > 0) {
			setHtml(contents.html);
			setURL(contents.url);
			const preset = [...date];
			const list = preset[0].list[1];
			preset[0].list[1] = list.split('{date}').join(contents.date);
			setDate(preset);
		}
	}, [contents]);

	return (
		<Content id='reviewProcess'>
			<Headline text='審核流程' theme='white' />
			<h4>2021 第十三屆紅領帶 繳交審核文件：</h4>
			{Data.map((e) => (
				<ReviewStep key={e.index} index={e.index} description={e.description} list={e.list} />
			))}
			<div className='block'>
				<button type='button' onClick={openGoogleForm}>
					前往申請
				</button>
			</div>
			{html && Parser(html.split('↵').join('<br />'))}
		</Content>
	);
};
export default ReviewProcess;
