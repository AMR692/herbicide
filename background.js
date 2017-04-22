function remove_searchparams(requestDetails) {
    const url = new URL(requestDetails.url);
    const host = url.host;
    if (host.includes("wikipedia.org") && !host.endsWith("m.wikipedia.org")) {
        const new_host = host.replace("wikipedia.org", "m.wikipedia.org");
        const mobile_url = url.protocol + "//" + new_host + url.pathname + url.search;
        return {
            redirectUrl: mobile_url
        };
    }
}
browser.webRequest.onBeforeRequest.addListener(
    remove_searchparams, {
        urls: ["*://*.wikipedia.org/*"],
        types: ["main_frame"]
    }, ["blocking"]
);
