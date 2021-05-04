/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import Carousel from './carousel';
import { Carousel as Data } from './data';
import './terenceInMyEyes.less';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
};

const TerenceInMyEyes = () => (
	<Content id='terenceInMyEyes'>
		<Headline text='我眼中的林宗緯' theme='white' />
		<div className='carousel'>
			<Slider {...settings}>
				{Data.map((e) => (
					<Carousel key={e.name.eng} data={e} />
				))}
			</Slider>
		</div>
	</Content>
);
export default TerenceInMyEyes;
