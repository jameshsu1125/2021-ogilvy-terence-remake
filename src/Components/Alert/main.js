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
					<button
						className=''
						onClick={() => {
							window.open('https://forms.gle/8qQJXZ7VXJgFLcSt7');
						}}
						type='button'
					>
						*即刻報名*
					</button>
				</div>
				<div className='alert-close' onClick={close} onKeyPress={close} role='none' />
			</div>
		</div>
	);
};
export default Alert;
