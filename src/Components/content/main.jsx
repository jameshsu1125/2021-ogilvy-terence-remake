import React from 'react';

const Content = ({ children, id = '' }) => (
	<div id={id} className='container'>
		<div className='content'>{children}</div>
	</div>
);
export default Content;
