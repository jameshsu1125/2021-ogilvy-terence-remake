import React from 'react';

const addHash = (e) => {
	window.location.hash = e;
};

const List = ({ title, list }) => (
	<div className='menu-container'>
		<div className='ico' />
		<div className='title'>{title || ''}</div>
		<div className='list'>
			{list?.map((e) => (
				<div
					key={e}
					onClick={() => addHash(e)}
					onKeyPress={() => addHash(e)}
					role='button'
					tabIndex={0}
				>
					{e}
				</div>
			))}
		</div>
	</div>
);
export default List;
