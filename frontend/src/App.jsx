/* eslint-disable no-unused-vars */
// src/App.jsx
import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import HomePage from "./pages/Home"
import Page2 from "./pages/Page2"

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="home" element={<HomePage />} />
				<Route path="page2" element={<Page2 />} />
			</Route>
		</Routes>
	)
}
