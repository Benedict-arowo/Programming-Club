import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../analytics";

const useGoogleAnalytics = () => {
	const location = useLocation();

	useEffect(() => {
		trackPageView(location.pathname);
	}, [location]);
};

export default useGoogleAnalytics;
