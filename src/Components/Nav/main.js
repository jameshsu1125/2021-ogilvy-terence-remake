import { useState } from 'react';
import { HtmlName } from '../../Setting/config';

import './main.less';

const Nav = () => {
	const [hamContent, setHamContent] = useState(false);
	const [labels] = useState([
		{ name: '回首頁', url: './' },
		{ name: '奧美大中國', url: 'https://www.ogilvy.com.tw/zh/index.aspx' },
		{ name: '台灣奧美粉絲團', url: 'https://www.facebook.com/OgilvyTaiwan/' },
		{ name: HtmlName[0].name, url: './' },
		{ name: HtmlName[1].name, url: `./${HtmlName[1].fileName}.html` },
		{ name: HtmlName[2].name, url: `./${HtmlName[2].fileName}.html` },
		{ name: HtmlName[3].name, url: `./${HtmlName[3].fileName}.html` },
	]);

	const showHamContent = () => setHamContent(true);

	const appendMenu = (isHamContent = false) => {
		const linkTo = (e) => {
			const target = e.url.indexOf('http') ? 'self' : 'blank';
			if (target === 'self') window.location.href = e.url;
			else window.open(e.url);
		};
		const getContents = (e, i) => (
			<div
				key={e.name}
				onClick={() => linkTo(e)}
				onKeyPress={() => linkTo(e)}
				role='button'
				tabIndex={i}
			>
				{e.name}
			</div>
		);

		return labels.map((e, i) => {
			if (!isHamContent) {
				if (i <= 2) {
					return getContents(e, i);
				}
				return false;
			}
			return getContents(e, i);
		});
	};

	const appendHamContent = () => {
		const close = () => setHamContent(false);
		if (hamContent) {
			return (
				<div className='ham-content'>
					{appendMenu(true)}
					<div
						className='close'
						onClick={() => close()}
						onKeyPress={() => close()}
						role='button'
						tabIndex='0'
					>
						<div />
						<div />
					</div>
				</div>
			);
		}
		return false;
	};

	const toRoot = () => {
		window.location.href = './';
	};

	return (
		<nav>
			<div className='logo' onClick={toRoot} role='none' />
			<div className='menu'>{appendMenu()}</div>
			<div
				className='ham'
				role='button'
				onClick={showHamContent.bind(this)}
				onKeyPress={showHamContent.bind(this)}
				tabIndex={0}
			>
				<div />
				<div />
				<div />
			</div>
			{appendHamContent()}
		</nav>
	);
};
export default Nav;
