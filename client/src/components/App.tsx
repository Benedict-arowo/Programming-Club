import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import RegisterPage from "./RegisterPage";
import SuccessPage from "../app/success/page";
// import useGoogleAnalytics from "./useGoogleAnalytics";

function App() {
	// useGoogleAnalytics();

	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/success" element={<SuccessPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
		</Router>
	);
}

export default App;
