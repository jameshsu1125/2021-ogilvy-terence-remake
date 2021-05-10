/* eslint-disable implicit-arrow-linebreak */
import { useEffect, useRef } from 'react';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import RichEditor from '../Components/RichEditor/main';
import { FunctionList as Data, DefaultNewsContent as DefaultContent } from './data';
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
		// eslint-disable-next-line no-console
		console.log(data);
	};
	useEffect(() => {});

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
			<RichEditor ref={richEditor} content={DefaultContent} />
			<div className='block'>
				<div className='col'>
					<button type='button' onClick={getResult}>
						新增心得
					</button>
				</div>
			</div>
		</Content>
	);
};
export default MemberEditor;
