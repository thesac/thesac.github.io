<?php
// Set the content-type
function nui($num) {
	$myfile1 = fopen(__DIR__.'/'.$num."/index.html", "r");
	$txt = fread($myfile1,filesize(__DIR__.'/'.$num."/index.html"));
	
	$pattern = '/\?id\=1/i';
	$replacement = '?id='.$num;
	$txt = preg_replace($pattern, $replacement, $txt);
	
	$myfile = fopen(__DIR__.'/'.$num."/index.html", "w");
	fwrite($myfile, $txt);
	fclose($myfile1);
	fclose($myfile);
}
for ($i=3 ; $i<=35 ; $i++) nui($i);
?> 