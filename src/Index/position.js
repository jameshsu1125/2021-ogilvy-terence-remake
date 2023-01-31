import { memo, useEffect } from 'react';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import './position.less';

const Position = memo(() => {
	useEffect(() => {}, []);
	return (
		<Content id='position'>
			<Headline text='招募職位' theme='red' />
		</Content>
	);
});
export default Position;
