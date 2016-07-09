var mycode = "";
var myNum = 0;
function verifyMe() {
	mycode = document.getElementById('enterCode').value;
    if ((mycode != "") && (mycode.length == 4)) {
		var found = false;
		for(myNum = 0; myNum < 42 ; myNum++) {
			//console.log(myData[myNum][0]);
			if(myData[myNum][0] == mycode.toLowerCase()) {
				//alert("num"+myNum);
				found = true;
				break;
			}
		}
		if(found) {
			document.getElementById('resultText').style.display = "inline";
			document.getElementById('errMess').innerHTML = "";
			showInfo();
		} else {
			document.getElementById('errMess').color = "red";
			document.getElementById('errMess').innerHTML = "Cannot find this code</br>";
			document.getElementById('resultText').style.display = "none";
		}
    } else {
		document.getElementById('errMess').color = "red";
		document.getElementById('errMess').innerHTML = "Please fill in the verification code correctly</br>";
    }
}

function showInfo() {
	document.getElementById('cert_name').innerHTML = myData[myNum][1];
	document.getElementById('cert_dob').innerHTML = myData[myNum][4];
	document.getElementById('cert_sex').innerHTML = myData[myNum][2];
	document.getElementById('cert_email').innerHTML= myData[myNum][3];
	document.getElementById('cert_pos').innerHTML = myData[myNum][5];
	document.getElementById('cert_code').innerHTML = myData[myNum][0];
	if ((myNum+1) < 10)
		document.getElementById('onlineCopyLink').href = "online_copy/cert_okay-0" + (myNum+1) + ".png";
	else document.getElementById('onlineCopyLink').href = "online_copy/cert_okay-" + (myNum+1) + ".png";
}

var myData=[["9zw8","L&#234; Vi&#7879;t Phong","Male","vietphong279@gmail.com","27 Sep 1999","the leader of the Logistics Team"],
["ekzp","Ho&#224;ng Hi&#7873;n Mai ","Female","dontstaycalm@gmail.com","23 Jan 2000","a member of the Logistics Team"],
["1mb6","Nguy&#7877;n Minh Di&#7879;p ","Female","daylaemailcuadiep@gmail.com","28 Jul 2000","a member of the Logistics Team"],
["en1v","Ho&#224;ng H&#7843;i Linh ","Female","linhgeorginacnh@gmail.com","16 Mar 1999","a member of the Logistics Team"],
["c9k7","Nguy&#7877;n Ph&#432;&#417;ng Anh ","Female","mitxd2000@gmail.com","26 May 2000","a member of the Logistics Team"],
["9wpq","V&#361; Thu H&#224; ","Female","lovesogogi3415@gmail.com","25 Sep 1999","a member of the Logistics Team"],
["cknn","Nguy&#7877;n Ph&#432;&#417;ng Linh ","Female","iameinstein1311@gmail.com","13 Nov 1999","a member of the Logistics Team"],
["8cd6","Nguy&#7877;n Vi&#7879;t B&#7843;o H&#226;n ","Female","nvbaohan@gmail.com","17 Jan 2000","a member of the Logistics Team"],
["mtwq","Nguy&#7877;n Kh&#225;nh Nguy&#234;n ","Female","therainkhanhnguyen@gmail.com","8 Jan 1999","a member of the Logistics Team"],
["1477","&#272;&#224;o Quang Nh&#7853;t ","Male","dqnhat99@gmail.com","16 Oct 1999","a member of the Logistics Team"],
["08du","Nguy&#7877;n B&#225; Tu&#7845;n Anh ","Male","batuananh99@gmail.com","12 Feb 1999","a member of the Logistics Team"],
["eda9","Ti&#234;u Th&#249;y Linh ","Female","tieutieulinhlinh15@gmail.com","15 Jan 2000","a member of the Logistics Team"],
["x6cx","&#272;&#7895; Minh Nguy&#7879;t ","Female","nguyetmoon1907@gmail.com","19 Jul 2000","a member of the Logistics Team"],
["xax7","Nguy&#7877;n Th&#7883; Lan Ph&#432;&#417;ng ","Female","phuong11012000@gmail.com","11 Jan 2000","a member of the Logistics Team"],
["gmku","Phan Ng&#7885;c B&#7843;o Trang ","Female","dontstaycalm@gmail.com","29 Jul 2000","a member of the Logistics Team"],
["qec4","Tr&#7847;n Ng&#7885;c Trinh ","Female","nhoxbunnys2nam@gmail.com","1 Nov 2000","a member of the Logistics Team"],
["88kg","Nguy&#7877;n H&#224; Thanh ","Female","cunlon1411@gmail.com","14 Nov 2000","a member of the Logistics Team"],
["7bwg","Nguy&#7877;n Th&#249;y Trang ","Female","kissbabyskydbsk@gmail.com","13 Feb 2000","a member of the Logistics Team"],
["g9kg","Ng&#244; Th&#7883; Th&#7909;c Y&#7871;n","Female","yenngo.3409@gmail.com","8 Oct 1999","the leader of the Media Team"],
["tnt3","Nguy&#7877;n Xu&#226;n S&#417;n","Male","thichthat@gmail.com","17 Apr 1998","the technical advisor of the Iridescent Prom"],
["vhte","Ho&#224;ng Th&#249;y Dung ","Female","biyeubau@gmail.com","31 May 2000","a member of the Media Team"],
["sydg","&#272;&#224;o Xu&#226;n V&#361; ","Male","xuanvu0906@gmail.com","9 Jun 2000","a member of the Media Team"],
["c145","Nguy&#7877;n Ph&#432;&#417;ng V&#226;n Nhi ","Female","nnhii19@gmail.com","31 Dec 1999","a member of the Media Team"],
["2yze","Tr&#7847;n &#272;&#224;o Quang Huy ","Male","titongteo99@gmail.com ","17 May 1999","a member of the Media Team"],
["hgk3","V&#361; Qu&#7889;c Vi&#7879;t","Male","zzzkaitoukid9zzz@gmail.com","9 Mar 1999","the leader of the PR Team"],
["qst9","Nguy&#7877;n Mai Ph&#432;&#417;ng ","Female","mphuong22102k@gmail.com","22 Oct 2000","a member of the PR Team"],
["gemy","Ph&#7841;m Ph&#432;&#417;ng Linh ","Female","phamphuonglinh0609@gmail.com","6 Sep 2000","a member of the PR Team"],
["h3sc","V&#361; To&#224;n Kh&#225;nh ","Male","vutoankhanh99@gmail.com","6 Sep 1999","a member of the PR Team"],
["tkkw","B&#249;i Quang H&#432;ng ","Male","Duhocnga2017@gmail.com","13 May 1999","a member of the PR Team"],
["54dw","&#272;&#224;o Minh Giang ","Male","deleamile@gmail.com","24 Nov 1999","a member of the PR Team"],
["pnxs","B&#7841;ch Kh&#225;nh V&#226;n ","Female","minakhanhvan@gmail.com","24 Jan 2000","a member of the PR Team"],
["9sem","&#272;&#7863;ng H&#432;&#417;ng Giang","Female","tiectientieuthu.98@gmail.com ","20 May 1998","the production manager of the Iridescent Prom"],
["eex6","&#272;&#7895; H&#7843;i Minh","Female","minhkazin@gmail.com ","16 Jun 1998","the director of the Iridescent Prom"],
["5324","Nguy&#7877;n Thu H&#7857;ng ","Female","alice.lucyvic@gmail.com","11 Feb 1999","the assistant director of the Iridescent Prom"],
["sszg","Nguy&#7877;n &#193;nh Ng&#7885;c ","Female","ngocnguyen2803o.0@gmail.com","28 Mar 1999","the assistant director of the Iridescent Prom"],
["83eh","&#272;&#7863;ng Thanh H&#432;&#417;ng ","Female","dangthanhhuong2212@gmail.com","13 Oct 1999","the production coordinator of the Iridescent Prom"],
["yk3u","Ph&#7841;m Th&#7843;o Ng&#226;n ","Female","thaongan1104@gmail.com","11 Apr 2000","the production assistant of the Iridescent Prom"],
["0k5e","Nguy&#7877;n L&#432;&#417;ng &#272;&#7913;c ","Male","l.duc199x@gmail.com","7 Mar 1999","the editor of the Iridescent Prom"],
["bdt5","V&#361; H&#432;&#417;ng Giang","Female","vanessavu2807@gmail.com","28 Jul 1999","the head of organizing committee of the Iridescent Prom"],
["qhh3","H&#224; B&#7843;o Ng&#7885;c ","Female","habaongoc.131100@yahoo.com.vn","13 Nov 2000","a member of the Finance Team"],
["0nap","L&#234; Th&#7883; Huy&#7873;n ","Female","lehuyen303507@gmail.com","30 Mar 2000","a member of the Finance Team"],
["ge2c","&#272;o&#224;n Tr&#7847;n Y&#7871;n Chi ","Female","christinedoan1312000@gmail.com","13 Jan 2000","a member of the Finance Team"]];
