/* eslint-disable no-unused-vars */
// src/App.jsx
import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import HomePage from "./pages/Home"
import Page2 from "./pages/Page2"
import AboutUs from "./pages/AboutUs"

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="home" element={<HomePage />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/our-work" element={<Page2 />} />
				<Route path="/services" element={<Page2 />} />
				<Route path="/resources" element={<Page2 />} />
				<Route path="/contact-us" element={<Page2 />} />
			</Route>
		</Routes>
	)
}

