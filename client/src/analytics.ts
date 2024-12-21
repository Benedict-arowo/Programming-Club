declare global {
	interface Window {
		gtag?: (...args: (string | number | boolean | object)[]) => void;
	}
}

export const trackPageView = (url: string) => {
	if (window.gtag) {
		window.gtag("config", "G-E39D7S448K", {
			page_path: url,
		});
	}
};
