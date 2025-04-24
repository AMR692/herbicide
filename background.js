function redirectToWayback(requestDetails) {
	const url = new URL(requestDetails.url);
	const host = url.host;
	if (host.includes("deadspin.com") && !host.includes("archive.org")) {
		const waybackUrl = "https://web.archive.org/web/20051013055453/" + url.href;
		return {
			redirectUrl: waybackUrl
		};
	}
}

browser.webRequest.onBeforeRequest.addListener(
	redirectToWayback, {
		urls: ["*://*.deadspin.com/*"],
		types: ["main_frame"]
	}, ["blocking"]
);
