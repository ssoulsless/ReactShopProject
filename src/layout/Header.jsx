import React from 'react';

function Header() {
	return (
		<nav className='deep-purple accent-4'>
			<div className='nav-wrapper'>
				<a href='/' className='brand-logo'>
					React Shop
				</a>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<a
							href='https://github.com/ssoulsless/ReactShopProject'
							target='blank'>
							Repo
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export { Header };
