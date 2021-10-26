import Storage from 'lesca-local-storage';
import { useEffect, useState } from 'react';
import { useShallowCompareEffect } from 'react-use';
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
	const [menuIndex, setMenuIndex] = useState(0);

	useEffect(() => {
		const targetIndex = { index: 0 };
		Object.values(Data)
			.reverse()
			.forEach((e, i) => {
				const isTarget = e.filter((t) => {
					const { name } = t;
					if (name.cht === target.cht && name.eng === target.eng) return true;
					return false;
				});
				if (isTarget.length > 0) targetIndex.index = i;
			});
		setMenuIndex(targetIndex.index);
	}, []);

	useShallowCompareEffect(() => {
		Storage.set('experienceArticle', target);
		setTimeout(() => {
			const scrollTopOffset = document.getElementsByClassName('menu-event').length === 0 ? -5 : 165;
			ScrollTo(document.getElementById('article'), window.innerWidth > 750 ? 40 : scrollTopOffset);
		}, 350);
	}, [target]);

	return (
		<Content id='internshipExperience'>
			<Headline text='實習心得' theme='red' />
			<div className='grid'>
				<div>
					{Object.entries(Data)
						.reverse()
						.map((e, index) => (
							<Menu
								data={e}
								key={e[0]}
								index={index}
								setTarget={setTarget}
								menuIndex={menuIndex}
								setMenuIndex={setMenuIndex}
							/>
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
