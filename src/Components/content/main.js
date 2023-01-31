const Content = ({ children, id = '' }) => (
	<div id={id} className='containers'>
		<div className='content'>{children}</div>
	</div>
);
export default Content;
