import { ScrollTop } from 'lesca-number';
import React from 'react';
import { MenuList } from '../../Setting/config';
import List from './list';
import './main.less';

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.menuRef = React.createRef();
	}

	componentDidMount() {
		const { current } = this.menuRef;
		let top;
		let currentTop;
		window.addEventListener('scroll', () => {
			const scrollTop = ScrollTop();
			if (scrollTop > currentTop) current.classList.add('menu-event');
			else current.classList.remove('menu-event');
		});

		this.resize = () => {
			top = window.innerWidth > 750 ? 688 : 1074;
			currentTop = top - (window.innerWidth > 750 ? 65 : 130);
		};

		this.resize();
		window.addEventListener('resize', () => this.resize());
	}

	render() {
		return (
			<menu>
				<div className='menu-col' ref={this.menuRef}>
					{MenuList.map((e) => (
						<List key={e.name} title={e.name} list={e.list} />
					))}
				</div>
			</menu>
		);
	}
}
