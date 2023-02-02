/* eslint-disable react/no-unstable-nested-components */
import { memo, useEffect } from 'react';
import Slider from 'react-slick';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import MasterExclusiveCarousel from './carousel';
import { MASTER } from './config';
import './masterExclusive.less';

const Arrow = ({ dir, onClick }) => (
	<div
		className='arrow'
		data-dir={dir || 'l'}
		onClick={onClick}
		role='none'
		style={dir === 'r' ? { right: '-30px', transform: 'scale(-1, 1)' } : { left: '-30px' }}
	/>
);

const MasterExclusive = memo(() => {
	useEffect(() => {}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		appendDots: (dots) => <div>{dots}</div>,
		customPaging: () => <div className='mx-5 h-3 w-3 cursor-pointer rounded-full bg-black' />,
		nextArrow: <Arrow dir='r' />,
		prevArrow: <Arrow />,
	};

	return (
		<Content id='masterExclusive'>
			<Headline text='大師獨家課' theme='white' />
			<div className='relative w-full py-5'>
				<Slider {...settings}>
					{MASTER.map((e, index) => (
						<MasterExclusiveCarousel key={e} data={e} index={index} />
					))}
				</Slider>
			</div>
		</Content>
	);
});
export default MasterExclusive;
