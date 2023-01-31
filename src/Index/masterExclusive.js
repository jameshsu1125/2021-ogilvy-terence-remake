import { memo, useEffect } from 'react';
import Content from '../Components/content/main';
import Headline from '../Components/Headline/main';
import './masterExclusive.less';

const MasterExclusive = memo(() => {
	useEffect(() => {}, []);
	return (
		<Content id='masterExclusive'>
			<Headline text='大師獨家課' theme='white' />
			<div className='w-6 h-6 bg-red-500'>asd</div>
		</Content>
	);
});
export default MasterExclusive;
