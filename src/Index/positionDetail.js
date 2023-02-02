import { memo, useContext, useMemo } from 'react';
import {
	Context,
	POSITIONS_STATE,
	POSITION_ABILITY,
	POSITION_DESCRIPTION,
	POSITION_TRAIT,
	POSITION_TRANING,
} from './config';
import './positionDetail.less';

const List = memo(({ children }) => (
	<div className='py-5 px-10 text-left text-sm'>
		<ol className='list-disc'>{children}</ol>
	</div>
));

const PositionDetail = memo(() => {
	const [context] = useContext(Context);

	const iconName = useMemo(() => {
		const styles = ['h-full', 'w-full', 'rounded-full', 'bg-white'];
		const { position } = context;
		let result = 0;
		Object.entries(POSITIONS_STATE).forEach((e, i) => {
			if (position === e[1]) result = i;
		});
		styles.push(`icon${result}`);
		return styles.join(' ');
	}, [context]);

	return (
		<div className='PositionDetail mt-6 w-full'>
			<div className='flex w-full flex-row items-center py-4'>
				<div className='h-36 w-36 p-2'>
					<div className={iconName} />
				</div>
				<div className='flex-1 p-2 text-justify leading-7'>
					{POSITION_DESCRIPTION[context.position]?.map((e) => (
						<p key={e}>{e}</p>
					))}
				</div>
			</div>
			<div className='flex w-full flex-row border-t border-[#ef7477] py-3 text-center'>
				<div className='flex-1 border-r-2 border-[#ef7477]'>
					<span className='bg-[#f06668] px-4'>培訓面向</span>
					<List>
						{POSITION_TRANING[context.position]?.map((e) => (
							<li key={e}>{e}</li>
						))}
					</List>
				</div>
				<div className='flex-1 border-r-2 border-[#ef7477]'>
					<span className='bg-[#f06668] px-4'>貢獻能力</span>

					<List>
						{POSITION_ABILITY[context.position]?.map((e) => (
							<li key={e}>{e}</li>
						))}
					</List>
				</div>
				<div className='flex-1'>
					<span className='bg-[#f06668] px-4'>期待特質</span>
					<List>
						{POSITION_TRAIT[context.position]?.map((e) => (
							<li key={e}>{e}</li>
						))}
					</List>
				</div>
			</div>
		</div>
	);
});
export default PositionDetail;
