import { useEffect } from 'react';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import './internshipPhotos.less';

const internshipPhotos = () => {
	useEffect(() => {}, []);
	return (
		<Content id='internshipPhotos'>
			<Headline text='實習相片' theme='red' />
		</Content>
	);
};
export default internshipPhotos;
