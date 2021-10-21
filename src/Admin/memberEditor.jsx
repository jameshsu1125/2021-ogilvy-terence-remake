/* eslint-disable implicit-arrow-linebreak */
import { useEffect, useRef } from 'react';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import RichEditor from '../Components/RichEditor/main';
import { CATEGORY_SETTING as Data } from './data';
import './memberEditor.less';

const defaultValueOfMember = '王小明';

const appendOptions = () =>
	[...new Array(30).keys()].map((e) => <option key={e} value={e + 2009}>{`第${e + 1}屆`}</option>);

const calcFullYears = () => new Date().getFullYear();

const onFocus = (e) => {
	const { target } = e;
	const { value } = target;
	const { dataset } = target;
	if (value === dataset.name) {
		target.value = '';
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
	const nameRef = useRef();
	const yearRef = useRef();

	const getResult = () => {
		const { current: target } = richEditor;
		const html = target.getHTML?.();
		const { value: name } = nameRef.current;
		const { value: year } = yearRef.current;
		const data = { html, name, year };
		// eslint-disable-next-line no-console
		console.log(data);
	};
	useEffect(() => {});

	return (
		<Content id='MemberEditor'>
			<Headline text={Data[2].label} theme='red' />
			<div className='block'>
				<div className='col-2'>
					<label htmlFor='member'>
						名字：
						<input
							ref={nameRef}
							data-name={defaultValueOfMember}
							onBlur={onBlur}
							onFocus={onFocus}
							id='member'
							defaultValue={defaultValueOfMember}
						/>
					</label>
					<label htmlFor='member'>
						屆數：
						<select ref={yearRef} defaultValue={calcFullYears()}>
							{appendOptions()}
						</select>
					</label>
				</div>
			</div>
			<RichEditor ref={richEditor} />
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
