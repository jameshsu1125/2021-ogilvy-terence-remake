import { useEffect, useState } from 'react';
import './main.less';
import Parser from 'html-react-parser';

const ReviewStep = ({ index, description, list }) => {
	const [icon, seticon] = useState(false);

	useEffect(() => {
		import(`./img/${index}.svg`).then((e) => {
			seticon(e.default);
		});
	});

	const appendIcon = () => {
		if (icon) {
			const backgroundImage = `url(${icon})`;
			return { backgroundImage };
		}
		return {};
	};

	return (
		<div className='ReviewStep'>
			<div>
				<div>{index}</div>
				<div>{description}</div>
			</div>
			<div>
				<div style={appendIcon()} />
			</div>
			<div>
				<ul>
					{list.map((e) => (
						<li key={e}>{Parser(e)}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default ReviewStep;
