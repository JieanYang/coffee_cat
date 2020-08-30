
import { connect } from 'react-redux'
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faAlignLeft, faInfoCircle, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

import { authErrors, isAuthenticated } from '../../../store/reducers'
import { logout, setMenu } from '../../../store/actions'

import '../../style/2_component/Header.scss'

const Header = (props) => {
	// const [scrolling, setScrolling] = useState(false)
	const [itemSelected, setItemSelected] = useState(props.menu)
	const [scrollTop, setScrollTop] = useState(0)

	useEffect(() => {
		const onScroll = e => {
			setScrollTop(e.target.documentElement.scrollTop)
			let itemMeus = document.getElementsByClassName('itemMenu')
			// setScrolling(e.target.documentElement.scrollTop > scrollTop)
			if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
				document.getElementById("logo").style.color = "#363636"
				document.getElementById("navbar").style.backgroundColor = "white"
				document.getElementById("navbar").style.boxShadow = "0px 0px 12px 0px #d5d5d5"
				for (let i=0, max=itemMeus.length; i<max; i++) {
					itemMeus[i].style.color = "#363636"
					itemMeus[i].getElementsByTagName('svg')[0].style.color="#363636"
				}
			} else {
				document.getElementById("logo").style.color = "white"
				document.getElementById("navbar").style.backgroundColor = "transparent"
				document.getElementById("navbar").style.boxShadow = "none"
				
				for (let i=0, max=itemMeus.length; i<max; i++) {
					itemMeus[i].style.color = "white"
					itemMeus[i].getElementsByTagName('svg')[0].style.color="white"
				}
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
			<nav id="navbar" className="flex_row">
				<div id="navbar-logo" className="flex_item_auto flex_layout_between">
					<a href="#default" id="logo">Logo</a>
				</div>
				<div id="navbar-right" className="flex_item_auto flex_row flex_layout_flex_end">
					<Link to="/" className={'itemMenu '+handleClassActive('Home')} onClick={handleClickMenuItem('Home')}>
					  	<FontAwesomeIcon icon={faHome}/>
					  	Home
					</Link> 
					<Link to="/note" className={'itemMenu '+handleClassActive('Note')} onClick={handleClickMenuItem('Note')}>
						<FontAwesomeIcon icon={faStickyNote} />
						Note
					</Link>
					<Link to="/about" className={'itemMenu '+handleClassActive('About')} onClick={handleClickMenuItem('About')}>
						<FontAwesomeIcon icon={faInfoCircle} />
						About
					</Link>
					<Link to="/contact" className={'itemMenu '+handleClassActive('Contact')} onClick={handleClickMenuItem('Contact')}>
						<FontAwesomeIcon icon={faEnvelope} />
						Contact
					</Link>
					<Link to="/article" className={'itemMenu '+handleClassActive('Article')} onClick={handleClickMenuItem('Article')}>
						<FontAwesomeIcon icon={faAlignLeft} />
						Article
					</Link>
					{!props.isAuthenticated &&  <Link to="/login" className={'itemMenu '+handleClassActive('Login')} onClick={() => !props.isAuthenticated && setItemSelected('Login')}>
						<FontAwesomeIcon icon={faUser} />
						Login
					</Link>}
					{props.isAuthenticated && <Link to="/login" className={'itemMenu '+handleClassActive('Logout')} onClick={() => {
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
	isAuthenticated: isAuthenticated(state),
	menu: state.persist_data.menu
})

const mapDispatchToProps = (dispatch) => ({
	logout: () => {dispatch(logout())},
	set_menu: (item) => {dispatch(setMenu(item))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)