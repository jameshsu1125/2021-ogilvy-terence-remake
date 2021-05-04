import './main.less';
import Roman from 'roman-numeral';

const phase = ({ index, text }) => (
	<div className='phase'>
		<div>{Roman.convert(index)}</div>
		<div>{text}</div>
	</div>
);
export default phase;
