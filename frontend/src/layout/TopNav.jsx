import { useState, useEffect, useRef } from "react"
import "./TopNav.css"
import { Link, NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function TopNav() {
	const [menuOpen, setMenuOpen] = useState(false) // State for toggling the main menu
	const menuRef = useRef(null) // Ref for the main menu container
	const { t } = useTranslation()

	// Effect to handle body class when menu is open
	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add("no-scroll", "menu-open")
		} else {
			document.body.classList.remove("no-scroll", "menu-open")
		}
		return () => {
			document.body.classList.remove("no-scroll", "menu-open")
		}
	}, [menuOpen])

	// Effect to handle Escape key to close the main menu
	useEffect(() => {
		const handleKeyDown = event => {
			if (event.key === "Escape") {
				setMenuOpen(false)
			}
		}

		document.addEventListener("keydown", handleKeyDown)

		return () => {
			document.removeEventListener("keydown", handleKeyDown)
		}
	}, [])

	// Function to toggle the main menu open/close
	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen)
	}

	// Function to handle focus out event on the main menu
	const handleFocusOut = event => {
		if (!menuRef.current.contains(event.relatedTarget)) {
			setMenuOpen(false)
		}
	}

	// Function to close the menu when a NavLink is clicked
	const handleCloseMenu = () => {
		setMenuOpen(false)
	}

	// Function to handle external link clicks
	const handleExternalLinkClick = (event, url) => {
		event.preventDefault()
		if (window.confirm("You are about to leave this site. Do you want to continue?")) {
			window.location.href = url
		}
	}

	return (
		<nav>
			<div className="body">
				{/* Main Logo/Title */}
				<Link to="/" className="title">
					{t("menu.titleLink")}
				</Link>

				{/* Menu Toggle Button */}
				<div
					className="menu"
					onClick={handleMenuToggle}
					onKeyPress={event => {
						if (event.key === "Enter" || event.key === " ") {
							handleMenuToggle()
						}
					}}
					role="button"
					tabIndex="0"
					aria-expanded={menuOpen}
					aria-label="Toggle menu"
				>
					<span></span>
					<span></span>
					<span></span>
				</div>

				{/* Main Menu Items */}
				<ul className={menuOpen ? "open" : ""} ref={menuRef} onBlur={handleFocusOut} tabIndex="-1">
					<li>
						<NavLink to="/about-us" tabIndex="0" className="active-exclude" onClick={handleCloseMenu}>
							About Us
						</NavLink>
					</li>
					<li>
						<NavLink to="/services" onClick={handleCloseMenu}>
							Our Services
						</NavLink>
					</li>
					<li>
						<a href="https://022gc.sharepoint.com/sites/HC-DTB-DPDDMD-DPMIPPM" target="_blank" rel="noopener noreferrer" onClick={(e) => handleExternalLinkClick(e, "https://022gc.sharepoint.com/sites/HC-DTB-DPDDMD-DPMIPPM")}>
							Resources
						</a>
					</li>
					<li>
						<NavLink to="/contact-us" onClick={handleCloseMenu}>
							Contact Us
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}
