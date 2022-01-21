import { ScrollTop } from 'lesca-number';
import { useEffect, useRef } from 'react';
import { MenuList } from '../../Setting/config';
import List from './list';
import './main.less';

const Menu = () => {
	const menu = useRef(null);

	useEffect(() => {
		const { current } = menu;
		let top;
		let currentTop;
		window.addEventListener('scroll', () => {
			const scrollTop = ScrollTop();
			if (scrollTop > currentTop) current.classList.add('menu-event');
			else current.classList.remove('menu-event');
		});

		const resize = () => {
			top = window.innerWidth > 750 ? 688 : 1074;
			currentTop = top - (window.innerWidth > 750 ? 65 : 130);
		};

		resize();
		window.addEventListener('resize', () => resize());
	});

	return (
		<menu>
			<div className='menu-col' ref={menu}>
				{MenuList.map((e, i) => (
					<List key={e.name} title={e.name} list={e.list} pageIndex={i} />
				))}
			</div>
		</menu>
	);
};
export default Menu;
