// src/module/2_component/Header

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faEnvelope, faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";



export default function Header() {
	return (
		<>
			<nav className="icon-bar">
			  <Link className="active" to="/">
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
			  <Link to="/article">
			  	Article
			  	<FontAwesomeIcon icon={faGlobe} color="green" />
			  </Link>
			  {/*<Link to="/">
			  	<FontAwesomeIcon icon={faTrash} color="green" />
			  </Link>*/}
			</nav>
		</>
	)
}