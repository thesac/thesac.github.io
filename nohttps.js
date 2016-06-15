var thisPageUrl = window.location.href;
if (pageUrl.toLowerCase().indexOf("https") >= 0) 
	window.location.href = pageUrl.replace("https", "http");