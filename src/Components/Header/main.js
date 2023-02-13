import './main.less';

const Header = (props) => {
	const { setAlert } = props;
	const openAlert = () => setAlert(true);

	return (
		<header>
			<div className='logo'>
				<div />
				<div />
			</div>
			<div className='rows'>
				<div className='col'>
					<div className='news' onClick={openAlert} onKeyPress={openAlert} role='none'>
						<span>最新消息</span>
						【第十五屆 奧美林宗緯紅領帶計劃】 報名開始
					</div>
					<div className='theme mt-2' />
				</div>
			</div>
		</header>
	);
};

export default Header;
