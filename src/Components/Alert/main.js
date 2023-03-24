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
						<h1>【第十五屆 奧美林宗緯紅領帶計劃】筆試公告</h1>
					</div>
					<p>
						線上筆試作答時間
						<br />
						台灣時間 3月29日 18:00 – 21:00
						<br />
						線上筆試連結將於上述時間寄送至報名時提供之電子信箱
						<br />
						請自行確認電子信箱運作正常
					</p>
					<hr />
					<p>
						入選筆試者將同步發送筆試通知信，3/28日前仍未收到通知信或有其他問題
						<br />
						請來信
						<a className='mx-1 hover:underline' href='mailto:amyty.chen@ogilvy.com'>
							amyty.chen@ogilvy.com
						</a>
						詢問
					</p>
				</div>
				<div className='alert-close' onClick={close} onKeyPress={close} role='none' />
			</div>
		</div>
	);
};
export default Alert;
