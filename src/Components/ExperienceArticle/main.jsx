import { useState } from 'react';
import { useShallowCompareEffect } from 'react-use';
import './main.less';

const setMemberMenu = (name) => {
	const doms = document.querySelectorAll('.membersContainer');
	doms.forEach((e) => {
		e.classList.remove('on');
		const { dataset } = e;
		if (dataset.cht === name.cht && dataset.eng === name.eng) {
			e.classList.add('on');
		}
	});
};

const ExperienceArticle = (props) => {
	const { target, Data } = props;

	const [HTML, setHTML] = useState('');
	const [title, setTitle] = useState();

	useShallowCompareEffect(() => {
		const combineData = Object.values(Data).reduce((a, b) => [...a, ...b]);
		const result = Object.values(combineData).filter((e) => {
			const { name } = e;
			const { cht, eng } = name;
			if (cht === target.cht && eng === target.eng) return true;
			return false;
		});

		const [keys] = Object.entries(Data).filter((e) => {
			const [, value] = e;
			const isSameTarget = value.filter((t) => {
				const { name } = t;
				if (name.cht === target.cht && name.eng === target.eng) return true;
				return false;
			});
			if (isSameTarget.length > 0) return true;
			return false;
		});
		setTitle(keys[0]);

		const [data] = result;
		const { name, html } = data;
		setHTML(html);

		setMemberMenu(name);
	}, [target]);

	return (
		<div className='ExperienceArticle'>
			<h3>
				{title} {target.cht} <span>{target.eng}</span>
			</h3>
			{HTML}
		</div>
	);
};
export default ExperienceArticle;
