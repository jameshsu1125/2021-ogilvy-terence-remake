/* eslint-disable no-useless-escape */
import { useEffect, useRef } from 'react';
import './main.less';

const numberData = ['黃楷翔', '蔡尚倫'];
export const Title = '【第十五屆 奧美林宗緯紅領帶培訓計畫】 獎助學金名單';

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
						<h1>{Title}</h1>
					</div>
					<code className='text-base'>
						{numberData.map((e) => (
							<span key={e}>{e}</span>
						))}
					</code>
				</div>
				<div className='alert-close' onClick={close} onKeyPress={close} role='none' />
			</div>
		</div>
	);
};
export default Alert;
