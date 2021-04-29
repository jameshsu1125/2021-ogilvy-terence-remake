import React from 'react';
import Parser from 'html-react-parser';
import './carousel.less';

const Carousel = ({ data }) => (
	<div className='carousel-content'>
		<div className='photo' style={{ backgroundImage: `url(${data.photo})` }} />
		<div className='head'>
			<div className='row'>
				<span className='name'>{data.name.cht}</span>
				<span className='position'>{data.position.cht}</span>
			</div>
			<div className='row'>
				<span className='name'>{data.name.eng}</span>
				<span className='position'>{data.position.eng}</span>
			</div>
		</div>
		<div className='body'>
			{data.parserBody.map((e) => (
				<div key={e}>{Parser(e)}</div>
			))}
		</div>
	</div>
);
export default Carousel;
