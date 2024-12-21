import { BrowserRouter } from "react-router-dom";
import Page from "./components/App";

const App = () => {
	return (
		<BrowserRouter>
			<Page />
		</BrowserRouter>
	);
};

export default App;
