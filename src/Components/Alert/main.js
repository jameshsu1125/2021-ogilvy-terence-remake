/* eslint-disable no-useless-escape */
import { useEffect, useRef } from 'react';
import './main.less';

const Alert = (props) => {
	const { setAlert } = props;
	const containerRef = useRef();
	const close = () => setAlert(false);

	useEffect(() => {
		const keyClose = (e) => {
			const { keyCode } = e;
			if (keyCode === 27) close();
		};

		window.addEventListener('keydown', keyClose);

		return () => {
			window.removeEventListener('keydown', keyClose);
		};
	}, []);

	return (
		<div className='Alert'>
			<div className='backgroundColor' onClick={close} onKeyPress={close} role='none' />
			<div ref={containerRef} className='alert-container'>
				<div className='my-5 space-y-4'>
					<div className='title'>
						<h1>【第十五屆 奧美林宗緯紅領帶計劃】報名開始</h1>
					</div>
					<p>
						詳細申請流程請參考
						<a className='mx-1 hover:underline' href='./how.html' target='_self'>
							[如何申請]
						</a>
					</p>
				</div>
				<hr />
				<div className='my-5 space-y-4'>
					<div className='title'>
						<h1>【奧美林宗緯紅領帶計劃說明會】</h1>
					</div>
					<p>
						僅訂於<b>2022/3/4 (六) 13:00-18:00</b> 舉辦紅領帶說明會。
						<br />
						說明會除有紅領帶校友說明紅領帶計畫內容外， 更將邀請奧美現職講師，
						<br />
						介紹業務、創意、策略、數位、公關，五大領域之工作內容，
						<br />
						讓你一探奧美、紅領帶究竟在做什麼？
					</p>
					<p className='text-sm'>
						*說明會報名訊息請留意
						<a
							className='mx-1 hover:underline'
							target='_blank'
							rel='noreferrer'
							href='https://www.facebook.com/OgilvyTaiwan/'
						>
							台灣奧美臉書粉絲頁
						</a>
						*
					</p>
				</div>
				<div className='alert-close' onClick={close} onKeyPress={close} role='none' />
			</div>
		</div>
	);
};
export default Alert;
