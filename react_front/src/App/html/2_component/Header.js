
import { connect } from 'react-redux'
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faAlignLeft, faInfoCircle, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

import { authErrors } from '../../../store/reducers'
import { logout, setMenu } from '../../../store/actions'

import '../../style/2_component/Header.scss'

const Header = (props) => {
	// const [scrolling, setScrolling] = useState(false)
	const [itemSelected, setItemSelected] = useState(props.menu)
	const [scrollTop, setScrollTop] = useState(0)

	useEffect(() => {
		const onScroll = e => {
		setScrollTop(e.target.documentElement.scrollTop)
		// setScrolling(e.target.documentElement.scrollTop > scrollTop)
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				document.getElementById("navbar").style.padding = "30px 10px"
				document.getElementById("logo").style.fontSize = "25px"
			} else {
				document.getElementById("navbar").style.padding = "60px 10px"
				document.getElementById("logo").style.fontSize = "35px"
			}
		}
		window.addEventListener("scroll", onScroll)

		return () => window.removeEventListener("scroll", onScroll)
	}, [scrollTop])

	const handleClickMenuItem = (item) => () => {
		props.isAuthenticated && props.set_menu(item)
		props.isAuthenticated && setItemSelected(item)
	}

	const handleClassActive = (menu) => itemSelected == menu ? 'active' : ''

	return (
		<>
			<nav id="navbar">
				<a href="#default" id="logo">CompanyLogo</a>
				<div id="navbar-right">
					<Link to="/" className={handleClassActive('Home')} onClick={handleClickMenuItem('Home')}>
					  	<FontAwesomeIcon icon={faHome}/>
					  	Home
					</Link> 
					<Link to="/note" className={handleClassActive('Note')} onClick={handleClickMenuItem('Note')}>
						<FontAwesomeIcon icon={faStickyNote} />
						Note
					</Link>
					<Link to="/about" className={handleClassActive('About')} onClick={handleClickMenuItem('About')}>
						<FontAwesomeIcon icon={faInfoCircle} />
						About
					</Link>
					<Link to="/contact" className={handleClassActive('Contact')} onClick={handleClickMenuItem('Contact')}>
						<FontAwesomeIcon icon={faEnvelope} />
						Contact
					</Link>
					<Link to="/article" className={handleClassActive('Article')} onClick={handleClickMenuItem('Article')}>
						<FontAwesomeIcon icon={faAlignLeft} />
						Article
					</Link>
					{!props.isAuthenticated &&  <Link to="/login" className={handleClassActive('Login')} onClick={() => !props.isAuthenticated && setItemSelected('Login')}>
						<FontAwesomeIcon icon={faUser} />
						Login
					</Link>}
					{props.isAuthenticated && <Link to="/login" className={handleClassActive('Logout')} onClick={() => {
						props.logout()
						setItemSelected('Login')
					}}>
						<FontAwesomeIcon icon={faUser} />
						Logout
					</Link>}
				</div>
			  {/*<Link className="active" to="/">
			  	Home
			  	<FontAwesomeIcon icon={faHome}/>
			  </Link> 

			  <Link to="/about">
			  	About
			  	<FontAwesomeIcon icon={faSearch} />
			  </Link>
			  
			  <Link to="/users">
			  	Users
			  	<FontAwesomeIcon icon={faEnvelope} />
			  </Link>
			  <Link to="/">
			  	<FontAwesomeIcon icon={faTrash} />
			  </Link>*/}
			</nav>
		</>
	)
}

const mapStateToProps = (state) => ({
	errors: authErrors(state),
	isAuthenticated: true,
	menu: state.persist_data.menu
})

const mapDispatchToProps = (dispatch) => ({
	logout: () => {dispatch(logout())},
	set_menu: (item) => {dispatch(setMenu(item))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)