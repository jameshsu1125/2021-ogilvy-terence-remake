import { memo, useContext } from 'react';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import { Context, POSITIONS_STATE } from './config';
import './position.less';
import PositionDetail from './positionDetail';

const Position = memo(() => {
	const [context, setContext] = useContext(Context);

	return (
		<Content id='position'>
			<Headline text='招募職位' theme='red' />
			<div className='tab my-5 grid w-full cursor-pointer grid-cols-5 bg-white'>
				{Object.entries(POSITIONS_STATE).map((e, index) => {
					const [key, value] = e;
					const innerHTML = value.length > 3 ? [value, '紅領帶'] : [`${value}紅領帶`];

					let sn = 0;
					Object.entries(POSITIONS_STATE).forEach((item, i) => {
						if (context.position === item[1]) sn = i;
					});

					return (
						<div
							className='flex w-full select-none flex-col items-center justify-center text-center text-gray-600 hover:bg-[#a12116] hover:text-white'
							key={JSON.stringify(e)}
							onClick={() => {
								setContext((S) => ({ ...S, position: POSITIONS_STATE[key] }));
							}}
							style={sn === index ? { backgroundColor: '#a12116', color: '#fff' } : {}}
							role='none'
						>
							<div
								className='w-full border-r py-2 text-lg font-black'
								style={sn === index ? { border: 'none' } : {}}
							>
								{innerHTML.map((text) => (
									<div key={text}>{text}</div>
								))}
							</div>
						</div>
					);
				})}
			</div>
			<PositionDetail />
		</Content>
	);
});
export default Position;
