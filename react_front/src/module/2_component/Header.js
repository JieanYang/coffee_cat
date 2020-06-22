// src/module/2_component/Header

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUserAlt, faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import '../../style/2_component/Header.scss'

export default function Header() {
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
					<Link to="/about">
						<FontAwesomeIcon icon={faUserAlt} color="green" />
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