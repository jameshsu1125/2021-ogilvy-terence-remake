/* eslint-disable implicit-arrow-linebreak */
import Copy from 'copy-text-to-clipboard';
import { useEffect, useRef, useState } from 'react';
import { useShallowCompareEffect } from 'react-use';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import RichEditor from '../Components/RichEditor/main';
import { FunctionList as Data } from './data';
import './scheduleEditor.less';

const defaultValueOfMonth = '2021.7-8';
const defaultGoogleFormURL = 'https://forms.gle/rK4ZagryVcb77BjbA';

const onFocus = (e) => {
	const { target } = e;
	const { value } = target;
	const { dataset } = target;
	if (value === dataset.name) {
		// target.value = '';
	}
};

const onBlur = (e) => {
	const { target } = e;
	const { value } = target;
	const { dataset } = target;
	if (value === '') {
		target.value = dataset.name;
	}
};

const ScheduleEditor = () => {
	const dateRef = useRef();
	const googleFormURLRef = useRef();
	const richEditor = useRef();

	const getResult = () => {
		const { current: target } = richEditor;
		const html = target.getHTML?.();
		const { value: date } = dateRef.current;
		const { value: url } = googleFormURLRef.current;
		const data = { html, date, url };
		const output = JSON.stringify(data);
		Copy(output);
		const { confirm } = window;
		if (confirm('已經複製成功')) {
			// console.log('ok');
		}
	};

	const [contents, setContents] = useState({});
	const [html, setHtml] = useState(false);
	const [date, setDate] = useState(false);
	const [url, setURL] = useState(false);

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
			setDate(contents.date);
			setURL(contents.url);
		}
	}, [contents]);

	return (
		<Content id='ScheduleEditor'>
			<Headline text={Data[0].label} theme='red' />
			<div className='block'>
				<div className='col'>
					<label htmlFor='date'>
						年級填寫：
						{date && (
							<input
								ref={dateRef}
								data-name={defaultValueOfMonth}
								onBlur={onBlur}
								onFocus={onFocus}
								id='date'
								defaultValue={defaultValueOfMonth}
							/>
						)}
					</label>
				</div>
				<div className='col'>
					<label htmlFor='googleFormURL'>
						報名連結：
						{url && (
							<input
								ref={googleFormURLRef}
								data-name={defaultGoogleFormURL}
								onBlur={onBlur}
								onFocus={onFocus}
								id='googleFormURL'
								defaultValue={defaultGoogleFormURL}
							/>
						)}
					</label>
				</div>
			</div>
			{html && <RichEditor ref={richEditor} content={html} />}
			<div className='block'>
				<div className='col'>
					<button type='button' onClick={getResult}>
						複製並更新
					</button>
				</div>
			</div>
		</Content>
	);
};
export default ScheduleEditor;
