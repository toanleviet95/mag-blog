import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
				<div className="footer-inner">
					<div className="footer-content">
						<span className="bigger-120">
							<span className="blue bolder">MagBlog</span>
							&nbsp;Admin &copy; 2018
						</span>
					</div>
				</div>
			</div>
        );
    }
}

module.exports = Footer;