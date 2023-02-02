import { memo, useMemo } from 'react';

const MasterExclusiveCarousel = memo(({ data, index }) => {
	const imageStyle = useMemo(() => {
		const style = ['h-52 w-52 rounded-full bg-black'];
		style.push(`master${index}`);
		return style.join(' ');
	}, [index]);

	return (
		<div className='relative flex h-full w-full select-none flex-col items-center justify-center space-y-5'>
			<div className={imageStyle} />
			<span className='bg-[#a6a6a6] py-1 px-4 text-white'>{data.className}</span>
			<div className='text-center text-lg font-black'>
				{data.name}
				<br />
				{data.position}
			</div>
			<div className='w-56 border-t-2 border-[#cecece] pt-5'>
				{data.speech.map((e) => (
					<div className='text-center text-sm' key={e}>
						{e}
					</div>
				))}
			</div>
		</div>
	);
});
export default MasterExclusiveCarousel;
