import { Title } from '../Alert/main';
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
						{Title}
					</div>
					<div className='theme mt-2' />
				</div>
			</div>
		</header>
	);
};

export default Header;
