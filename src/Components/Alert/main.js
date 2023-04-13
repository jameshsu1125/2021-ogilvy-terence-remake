/* eslint-disable no-useless-escape */
import { useEffect, useRef } from 'react';
import './main.less';

const numberData = [
	'于馥甄',
	'王歆妤',
	'邱慧琪',
	'李宸竹',
	'呂佳真',
	'李　昀',
	'卓正英',
	'卓宜蓁',
	'周宗在',
	'陳昱霈',
	'陳宥心',
	'陳俞佑',
	'陳盈淳',
	'許守成',
	'麥海柔',
	'黃楷翔',
	'葉光筠',
	'蔡昀臻',
	'蔡尚倫',
	'劉元泰',
	'簡嘉瑩',
	'羅紫芸',
	'龐舒勻',
];
export const Title = '【第十五屆 奧美林宗緯紅領帶計劃】口試名單';

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
						<span className='text-sm text-[#666]'>(依筆畫順序排列)</span>
					</div>
					<code className='text-base'>
						{numberData.map((e) => (
							<span key={e}>{e}</span>
						))}
					</code>
					<h2>口試時間</h2>
					<p className='text-base'>
						4月22日
						<br />
						上午場10:00 舉行，09:20-09:40報到
						<br />
						下午場14:00 舉行，13:20-13:40報到
					</p>
					<h2>口試地點</h2>
					<p className='text-base'>台灣奧美／台北市信義區松仁路89號3樓</p>
					<span className='text-sm text-ogilvy_red'>
						（口試相關之詳細資訊將會另行Email通知所有口試者 ）
					</span>
				</div>
				<div className='alert-close' onClick={close} onKeyPress={close} role='none' />
			</div>
		</div>
	);
};
export default Alert;
