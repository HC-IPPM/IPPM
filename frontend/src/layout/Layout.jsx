// src/layout/Layout.jsx
import { Outlet } from "react-router-dom"
import { GcdsHeader, GcdsContainer, GcdsFooter } from "@cdssnc/gcds-components-react"
import "@cdssnc/gcds-components-react/gcds.css"
import "./Layout.css"
import Breadcrumb from "../components/Breadcrumbs"
import TopNav from "./TopNav"
import { useTranslation } from "react-i18next"

export default function Layout() {
	const { i18n } = useTranslation()

	const changeLanguage = lng => {
		i18n.changeLanguage(lng)
	}

	return (
		<>
			<GcdsHeader skipToHref="#main-content" padding="150px" height="auto">
				<div slot="toggle">
					{i18n.language === "en" ? <button className="astext" onClick={() => changeLanguage("fr")}>French</button> : <button className="astext" onClick={() => changeLanguage("en")}>English</button>}
				</div>
				<div slot="skip-to-nav">
					<a className="skip-to-content-link" href="#main-content">
						Skip to main content
					</a>
				</div>
				<nav slot="menu" style={{ backgroundColor: "#f1f2f3" }}>
					<GcdsContainer size="xl" centered color="black">
						<TopNav />
					</GcdsContainer>
				</nav>
			</GcdsHeader>
			<GcdsContainer size="xl" centered color="black" style={{ flexGrow: "1" }} padding="400" id="main-content">
				<Breadcrumb />
				<Outlet />
			</GcdsContainer>
			<GcdsFooter />
		</>
	)
}
