/* eslint-disable implicit-arrow-linebreak */
import Copy from 'copy-text-to-clipboard';
import { useEffect, useRef, useState } from 'react';
import { useShallowCompareEffect } from 'react-use';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import RichEditor from '../Components/RichEditor/main';
import { FunctionList as Data } from './data';
import './newsEditor.less';

const defaultValueOfTitle = '第{n}屆奧美林宗緯紅領帶實習計畫{開始報名}';

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

const MemberEditor = () => {
	const richEditor = useRef(null);
	const titleRef = useRef();

	const getResult = () => {
		const { current: target } = richEditor;
		const html = target.getHTML?.();
		const { value: title } = titleRef.current;
		const data = { html, title };
		const output = JSON.stringify(data);
		Copy(output);
		const { confirm } = window;
		if (confirm('已經複製成功')) {
			console.log('ok');
		}
	};

	const [contents, setContents] = useState({});
	const [html, setHtml] = useState('');

	useEffect(() => {
		fetch('./data/news.json')
			.then((e) => e.json())
			.then((result) => {
				setContents(result);
			});
		return () => {};
	}, []);

	useShallowCompareEffect(() => {
		if (Object.keys(contents).length > 0) {
			setHtml(contents.html);
		}
	}, [contents]);

	return (
		<Content id='NewsEditor'>
			<Headline text={Data[0].label} theme='red' />
			<div className='block'>
				<div className='col'>
					<label htmlFor='member'>
						新聞標題：
						<input
							ref={titleRef}
							data-name={defaultValueOfTitle}
							onBlur={onBlur}
							onFocus={onFocus}
							id='member'
							defaultValue={defaultValueOfTitle}
						/>
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
export default MemberEditor;
