import React from 'react';
import './main.less';

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hamContent: false,
			labels: [
				{ name: '回首頁', url: './' },
				{ name: '奧美大中國', url: 'https://www.ogilvy.com.tw/zh/index.aspx' },
				{
					name: '台灣奧美粉絲團',
					url: 'https://www.facebook.com/OgilvyTaiwan/',
				},
			],
		};
	}

	showHamContent() {
		this.setState({ hamContent: true });
	}

	appendMenu() {
		const { labels } = this.state;
		const linkTo = (e) => window.open(e.url);
		return labels.map((e) => (
			<div
				key={e.name}
				onClick={() => linkTo(e)}
				onKeyPress={() => linkTo(e)}
				role='button'
				tabIndex={0}
			>
				{e.name}
			</div>
		));
	}

	appendHamContent() {
		const { hamContent } = this.state;
		const close = () => this.setState({ hamContent: false });
		if (hamContent) {
			return (
				<div className='ham-content'>
					{this.appendMenu()}
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
	}

	render() {
		return (
			<nav>
				<div className='logo' />
				<div className='menu'>{this.appendMenu()}</div>
				<div
					className='ham'
					role='button'
					onClick={this.showHamContent.bind(this)}
					onKeyPress={this.showHamContent.bind(this)}
					tabIndex={0}
				>
					<div />
					<div />
					<div />
				</div>
				{this.appendHamContent()}
			</nav>
		);
	}
}
