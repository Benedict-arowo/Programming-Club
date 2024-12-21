import { BrowserRouter } from "react-router-dom";
import Page from "./components/App";

export const server_url = "https://programming-club.onrender.com";

const App = () => {
	return (
		<BrowserRouter>
			<Page />
		</BrowserRouter>
	);
};

export default App;
