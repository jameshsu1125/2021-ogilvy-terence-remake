import './main.less';

const ExperienceMembersMenu = (props) => {
	const { data, index, menuIndex, setMenuIndex, setTarget } = props;

	return (
		<div className={`experienceMembersMenu${menuIndex === index ? ' active' : ''}`}>
			<div
				className='title'
				onClick={() => {
					setMenuIndex(index);
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
