import React from 'react';
import './main.less';

const Footer = () => (
	<footer id='footer'>
		<div
			onClick={() => {
				window.open('https://www.facebook.com/OgilvyTaiwan/');
			}}
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
