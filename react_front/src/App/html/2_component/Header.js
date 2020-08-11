
import { connect } from 'react-redux';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser, faAlignLeft, faInfoCircle, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import { authErrors, isAuthenticated } from '../../../store/reducers';
import { logout } from '../../../store/actions';

import '../../style/2_component/Header.scss'

const Header = (props) => {
	// const [scrolling, setScrolling] = useState(false);
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const onScroll = e => {
		setScrollTop(e.target.documentElement.scrollTop);
		// setScrolling(e.target.documentElement.scrollTop > scrollTop);
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				document.getElementById("navbar").style.padding = "30px 10px";
				document.getElementById("logo").style.fontSize = "25px";
			} else {
				document.getElementById("navbar").style.padding = "60px 10px";
				document.getElementById("logo").style.fontSize = "35px";
			}
		};
		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollTop]);

	return (
		<>
			<nav id="navbar">
				<a href="#default" id="logo">CompanyLogo</a>
				<div id="navbar-right">
					<Link className="active" to="/">
					  	<FontAwesomeIcon icon={faHome} color="green"/>
					  	Home
					</Link> 
					<Link to="/note">
						<FontAwesomeIcon icon={faStickyNote} color="green" />
						Note
					</Link>
					<Link to="/about">
						<FontAwesomeIcon icon={faInfoCircle} color="green" />
						About
					</Link>
					<Link to="/contact">
						<FontAwesomeIcon icon={faEnvelope} color="green" />
						Contact
					</Link>
					<Link to="/article">
						<FontAwesomeIcon icon={faAlignLeft} color="green" />
						Article
					</Link>
					{!props.isAuthenticated &&  <Link to="/login">
						<FontAwesomeIcon icon={faUser} color="green" />
						Login
					</Link>}
					{props.isAuthenticated && <Link to="/login" onClick={props.logout}>
						<FontAwesomeIcon icon={faUser} color="green" />
						Logout
					</Link>}
				</div>
			  {/*<Link className="active" to="/">
			  	Home
			  	<FontAwesomeIcon icon={faHome} color="green"/>
			  </Link> 

			  <Link to="/about">
			  	About
			  	<FontAwesomeIcon icon={faSearch} color="green" />
			  </Link>
			  
			  <Link to="/users">
			  	Users
			  	<FontAwesomeIcon icon={faEnvelope} color="green" />
			  </Link>
			  <Link to="/">
			  	<FontAwesomeIcon icon={faTrash} color="green" />
			  </Link>*/}
			</nav>
		</>
	)
}

const mapStateToProps = (state) => ({
	errors: authErrors(state),
	isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
	logout: () => {
		dispatch(logout())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);