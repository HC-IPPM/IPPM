import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "@cdssnc/gcds-components-react/gcds.css"
import { BrowserRouter } from "react-router-dom"
import "./i18n"
import { I18nextProvider } from "react-i18next"
import "./index.css"

ReactDOM.createRoot(document.getElementById("react-root")).render(
	<React.StrictMode>
		<I18nextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</I18nextProvider>
	</React.StrictMode>
)
