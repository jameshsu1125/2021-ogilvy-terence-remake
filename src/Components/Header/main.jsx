/* eslint-disable no-irregular-whitespace */
import { useEffect, useState } from 'react';
import { useShallowCompareEffect } from 'react-use';
import './main.less';

const Header = (props) => {
	const { setAlert } = props;

	const [contents, setContents] = useState({});
	const [title, setTitle] = useState('');

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
			setTitle(contents.title);
		}
	}, [contents]);

	const openAlert = () => {
		setAlert(true);
	};

	return (
		<header>
			<div className='logo'>
				<div />
				<div />
			</div>
			<div className='rows'>
				<div className='col'>
					<div className='news' onClick={openAlert} onKeyPress={openAlert} role='none'>
						<span>最新消息</span>
						{title}
					</div>
					<div className='theme'>
						<div className='lipsum'>
							<h1>命中註定的完美廣告人</h1>
							<p>
								遊歷豐富的他曾經說過
								<br />
								跨越世界的盡頭　有一個關於廣告的天空之城
								<br />
								在那裡　所有的理想和專業因為堅持而得以伸張
								<br />
								以夥伴相稱的人們肩並著肩
								<br />
								辛勤卻愉快地工作　認真地生活
								<br />
								尊重自己　也獲得別人的尊重
								<br />
								那是充滿熱情、誠實和勇氣的地方...
								<br />
								此刻你眼前的奧美林宗緯紅領帶計畫
								<br />
								是一個入口
								<br />
								你將踏上前往天空之城的路
							</p>
						</div>
						<div className='tie' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
