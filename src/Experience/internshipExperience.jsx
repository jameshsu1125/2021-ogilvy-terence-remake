import { useEffect } from 'react';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import './internshipExperience.less';

const internshipExperience = () => {
	useEffect(() => {}, []);
	return (
		<Content id='internshipExperience'>
			<Headline text='實習心得' theme='red' />
			<div className='grid'>
				<div>A</div>
				<div>B</div>
			</div>
		</Content>
	);
};
export default internshipExperience;
