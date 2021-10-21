import Storage from 'lesca-local-storage';
import { useEffect, useState } from 'react';
import Content from '../Components/content/main';
import Article from '../Components/ExperienceArticle/main';
import Menu from '../Components/ExperienceMembersMenu/main';
import Headline from '../Components/Headline/main';
import { ScrollTo } from '../Setting/config';
import { DefaultInternshipExperience as Data } from './data';
import './internshipExperience.less';

const { data: targetStorage } = Storage.get('experienceArticle');
const internshipExperience = () => {
	const [defaultTarget] = Object.values(Data).reverse()[0];
	const [target, setTarget] = useState(targetStorage || defaultTarget.name);

	useEffect(() => {
		Storage.set('experienceArticle', target);
		ScrollTo(document.getElementById('article'), -5);
	}, [target]);

	return (
		<Content id='internshipExperience'>
			<Headline text='實習心得' theme='red' />
			<div className='grid'>
				<div>
					{Object.entries(Data)
						.reverse()
						.map((e, index) => (
							<Menu data={e} key={e[0]} index={index} setTarget={setTarget} />
						))}
				</div>
				<div id='article'>
					<Article target={target} Data={Data} />
				</div>
			</div>
		</Content>
	);
};
export default internshipExperience;
