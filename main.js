function warning(url) {
    txt = "you wanna go to " + url + "?";
    return confirm(txt);
}

function link(url) {
    if(warning(url)) {
	window.open(url);
    }
}

