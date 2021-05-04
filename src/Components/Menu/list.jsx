import { HtmlName } from '../../Setting/config';

const List = ({ title, list, pageIndex }) => {
	const addHash = (e) => {
		const pageName = HtmlName[pageIndex];
		const { fileName } = pageName;
		window.location.href = `${fileName === 'index' ? '/' : fileName}${fileName === 'index' ? '' : '.html'}#${e}`;
	};
	return (
		<div className='menu-container'>
			<div className='menu-main'>
				<div className='ico' />
				<div className='title'>{title || ''}</div>
			</div>
			<div className='list'>
				{list?.map((e, i) => (
					<div
						key={e.name}
						onClick={() => addHash(e.name)}
						onKeyPress={() => addHash(e.name)}
						role='button'
						tabIndex={i}
					>
						{e.name}
					</div>
				))}
			</div>
		</div>
	);
};
export default List;
