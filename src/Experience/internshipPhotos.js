import { useEffect } from 'react';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import './internshipPhotos.less';

const InternshipPhotos = () => {
	useEffect(() => {}, []);
	return (
		<Content id='internshipPhotos'>
			<Headline text='培訓相片' theme='red' />
		</Content>
	);
};
export default InternshipPhotos;
