/* eslint-disable no-unused-vars */
// src/App.jsx
import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import HomePage from "./pages/Home"
import Page2 from "./pages/Page2"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/services/Services"
import ContactUs from "./pages/ContactUs"

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="home" element={<HomePage />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/services" element={<Services />} />
				<Route path="/contact-us" element={<ContactUs />} />
			</Route>
		</Routes>
	)
}

