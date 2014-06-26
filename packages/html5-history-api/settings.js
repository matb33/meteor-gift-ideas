// Make sure that polyfilled links are redirected to correct links in
// supporting browsers. Enables sharing links between IE and non-IE
// e.g. http://example.com/#/some-path -> http://example.com/some-path

// FIX: Don't use history.redirect, use pushState instead
//history.redirect();

if (window.location.hash) {
	window.history.pushState({}, "entry page", window.location.hash.substring(1));
}