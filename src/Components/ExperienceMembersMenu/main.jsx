/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect } from 'react';
import './main.less';

const ExperienceMembersMenu = (props) => {
	const { data, index, setTarget } = props;

	useEffect(() => {}, []);

	return (
		<div className={`experienceMembersMenu${index === 0 ? ' active' : ''}`}>
			<div
				className='title'
				onClick={(e) => {
					const { parentNode: target } = e.target;
					const { className } = target;
					const hasActiveClass = className.indexOf('active') >= 0;
					if (hasActiveClass) target.classList.remove('active');
					else target.classList.add('active');
				}}
				role='none'
			>
				{data[0]}
			</div>
			{data[1].map((e) => (
				<div
					className='membersContainer'
					key={e.name.cht}
					data-cht={e.name.cht}
					data-eng={e.name.eng}
					onClick={(event) => {
						const { dataset } = event.target;
						setTarget({ ...dataset });
					}}
					role='none'
				>
					{e.name.cht} {e.name.eng}
				</div>
			))}
		</div>
	);
};
export default ExperienceMembersMenu;
