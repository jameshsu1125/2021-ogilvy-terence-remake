import './main.less';

const Footer = () => (
	<footer id='footer'>
		<div
			onClick={() => {
				window.open('https://www.facebook.com/OgilvyTaiwan/');
			}}
			onKeyPress={() => {
				window.open('https://www.facebook.com/OgilvyTaiwan/');
			}}
			role='button'
			tabIndex='0'
		>
			<div className='logo' />
			<div className='label'>
				join us!
				<br />
				on facebook
			</div>
		</div>
	</footer>
);
export default Footer;
