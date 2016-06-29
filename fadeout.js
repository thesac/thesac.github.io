myUrl = '';

	function goToPage(url) {
		fadeout(document.getElementById('mainBody'),800);
		myUrl = url;
		setTimeout(tonext, 1200);
	}
	
	function tonext() {
		window.location.href = myUrl;
	}
	
	function fadeout ( element, duration){
   element.style.opacity = element.style.opacity || 1;
   var inter = setInterval(function(inter){
       if( element.style.opacity <= 0 ){
           clearInterval(inter);
           block.style.display = "none";
       } else {
           element.style.opacity -= (1/(duration/13));
       }
    },13); 
}