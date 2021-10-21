import Content from '../Components/content/main';
import './pageSelect.less';

import { CATEGORY_SETTING as Data } from './data';

const PageSelect = ({ onChange }) => {
	const append = () =>
		// eslint-disable-next-line implicit-arrow-linebreak
		Data.map((e) => (
			<option key={e.id} value={e.id}>
				{e.label}
			</option>
		));

	return (
		<Content id='Editor'>
			<div className='PageSelect'>
				<label htmlFor='fun'>
					選擇功能：
					<select id='fun' onChange={onChange}>
						{append()}
					</select>
				</label>
			</div>
		</Content>
	);
};
export default PageSelect;
