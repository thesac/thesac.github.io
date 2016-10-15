var mycode = "";
var myNum = 0;

function verifyMe() {
	mycode = document.getElementById('enterCode').value;
    if ((mycode != "") && (mycode.length == 4)) {
		var found = false;
		for(myNum = 0; myNum < myData.length ; myNum++) {
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
	$("#codeinput").animate({
        opacity: '0',
        height: '0px'
    });
	if (myData[myNum][5] == "") {
		document.getElementById('teamCert').style.display = "none";
		document.getElementById('cert_name').innerHTML = myData[myNum][1];
		document.getElementById('cert_dob').innerHTML = myData[myNum][4];
		if (myData[myNum][3] == "")
			document.getElementById('cert_email').innerHTML = "(none)";
		else
			document.getElementById('cert_email').innerHTML = myData[myNum][3];
		document.getElementById('cert_pos').innerHTML = myData[myNum][2];
		document.getElementById('cert_code').innerHTML = myData[myNum][0];
		document.getElementById('onlineCopyLink').href = "online_copy/cert_" + (myNum+1) + ".jpg";
	} else {
		document.getElementById('personCert').style.display = "none";
		var awarded;
		if (myData[myNum][3] == "")
			awarded = "NO";
		else
			awarded = myData[myNum][3];
		if(myData[myNum][7] == "") {
			document.getElementById('teamCertContent').innerHTML =
				myData[myNum][1]+"</br>"+
				myData[myNum][2]+"</br>"+
				"<b>Awarded: </b>"+awarded+"</br>";
		} else {
			document.getElementById('teamCertContent').innerHTML =
				"<b>Name: </b>"+myData[myNum][1]+"</br>"+
				"From "+myData[myNum][7]+"</br>"+
				"<b>Awarded: </b>"+awarded+"</br>";
		}
		document.getElementById('teamFilmLink').href = "https://www.youtube.com/video/"+myData[myNum][5];
		document.getElementById('teamInfoLink').href = "team_info/"+myData[myNum][4]+".html";
		document.getElementById('onlineCopyLink').href = "online_copy/team/" + myData[myNum][6] + ".jpg";
	}
}

function resetInput() {
	window.location = "index.html#verify";
	location.reload();
}

var myData=[
["k72p","BÙI THÙY DUNG","a volunteer of the Logistics Team","buithuydung2000@gmail.com","29 Jun 2000","","",""],
["1hg5","CHU QUANG HUY","a volunteer of the Finance Team","huy2608xxxx@gmail.com","26 Aug 1998","","",""],
["sb0s","ĐẶNG HOÀNG LONG","a member of the Content Team","danghoanglong99@gmail.com","18 Nov 2000","","",""],
["088b","ĐẶNG THANH HƯƠNG","a member of the Content Team","","13 Oct 1999","","",""],
["dqa3","ĐÀO QUANG NHẬT","a volunteer of the Logistics Team","","16 Oct 1999","","",""],
["pnza","ĐÀO XUÂN VŨ","a member of the Media Team","Xuanvu0906@gmail.com","9 Jun 2000","","",""],
["sydg","ĐINH QUANG THÁI","a volunteer of the Logistics Team","Beodinhquang@gmail.com","22 Nov 2000","","",""],
["c145","ĐINH THỊ NGỌC LINH","a volunteer of the Communication Team","linhdinhgi@gmail.com","17 Dec 2000","","",""],
["2yze","ĐỖ TUẤN LINH","a volunteer of the Logistics Team","tuanlinhdo2012000@gmail.com","20 Jan 2000","","",""],
["hgk3","ĐỖ VIẾT TRÍ","a member of the Media Team","","15 Oct 1999","","",""],
["qst9","DƯƠNG THANH VÂN","a volunteer of the Media Team","thanhvanduong28@gmail.com","21 Jan 2001","","",""],
["gemy","HOÀNG HẢI TÚ","a volunteer of the Communication Team","lizstlonely@gmail.com","20 Jun 1998","","",""],
["h3sc","HOÀNG QUỲNH ANH","a volunteer of the Communication Team","75759904quynhanh@gmail.com","19 Jul 1999","","",""],
["54dw","LÊ HÀ CHI","a volunteer of the Logistics Team","Chilewonderful@gmail.com","5 Oct 2001","","",""],
["pnxs","LÊ THỊ HOA","a volunteer of the Communication Team","lehoa1542000@gmail.com","15 Apr 2000","","",""],
["9sem","LÊ VIỆT PHONG","a member of the Logistics Team","vietphong279@gmail.com","27 Sep 1999","","",""],
["eex6","MAI ĐẶNG HÀ ANH","a volunteer of the Logistics Team","haanh161017@gmail.com","16 Oct 2000","","",""],
["5324","NGÔ THỊ HỒNG NHUNG","a volunteer of the Communication Team","nhungkute281@gmail.com","28 Jan 1999","","",""],
["gah7","NGUYỄN ÁNH NGỌC","the head organizer","ngocnguyen2803o.0@gmail.com","28 Mar 1999","","",""],
["sszg","NGUYỄN DIỆU MY","a volunteer of the Logistics Team","","4 Jul 1999","","",""],
["83eh","NGUYỄN ĐÌNH LONG","a volunteer of the Logistics Team","snsn.ln2k@gmail.com","1 Jul 2000","","",""],
["yk3u","NGUYỄN HÀ THANH","a volunteer of the Logistics Team","cunlon1411@gmail.com","14 Nov 2000","","",""],
["bdt5","NGUYỄN HOÀI LINH","a volunteer of the Logistics Team","hoailynn@gmail.com","16 Nov 2000","","",""],
["qhh3","NGUYỄN LƯƠNG ĐỨC","the leader of the Logistics Team","l.duc199x@gmail.com","7 Mar 1999","","",""],
["0nap","NGUYỄN MAI PHƯƠNG","the leader of the Communication Team","mphuong22102k@gmail.com","22 Oct 2000","","",""],
["ge2c","NGUYỄN MINH ANH","a volunteer of the Logistics Team","meap9400@gmail.com","9 Apr 2000","","",""],
["w0vb","NGUYỄN NHẬT MINH CHÂU","a volunteer of the Logistics Team","chau.nghe20002000@gmail.com","25 Sep 2000","","",""],
["666y","NGUYỄN PHƯƠNG VÂN NHI","a member of the Media Team","nnhii19@gmail.com","31 Dec 2000","","",""],
["z0bb","NGUYỄN QUỲNH TRANG","a volunteer of the Logistics Team","Tranghanna0710@gmail.com","7 Oct 2001","","",""],
["wqxc","NGUYỄN THỊ KIỀU TRANG","the leader of the Finance Team","chippykenlly@gmail.com","4 Dec 1998","","",""],
["dyb4","NGUYỄN THỊ LAN PHƯƠNG","a volunteer of the Communication Team","phuong11012000@gmail.com","11 Jan 2000","","",""],
["t2wh","NGUYỄN THỊ NGỌC","a volunteer of the Logistics Team","ngocngungo7499@gmail.com","70 Apr 1999","","",""],
["203a","NGUYỄN THỊ TRÀ MY","a volunteer of the Logistics Team","tututhat@gmail.com","4 Jul 2001","","",""],
["sa7v","NGUYỄN THU HẰNG","a member of the Content Team","alice.lucyvic@gmail.com","11 Feb 1999","","",""],
["tkh8","NGUYỄN THU TRANG","a volunteer of the Communication Team","muabongmay2211@gmail.com","22 Nov 2016","","",""],
["upxc","NGUYỄN THÙY DƯƠNG","a volunteer of the Logistics Team","sanhy132@gmail.com","13 Feb 2000","","",""],
["7yn1","NGUYỄN THÙY DƯƠNG","a volunteer of the Communication Team","tit.tn96@gmail.com","10 Jan 2000","","",""],
["1vx2","NGUYỄN THÙY TRANG","a volunteer of the Logistics Team","","13 Feb 2000","","",""],
["kcn8","NGUYỄN VIỆT BẢO HÂN","a volunteer of the Logistics Team","","17 Jan 2000","","",""],
["a5qv","NGUYỄN XUÂN SƠN","the leader of the Media Team","thichthat@gmail.com","17 Apr 1998","","",""],
["9cwq","PHẠM PHƯƠNG LINH","a member of the Communication Team","phamphuonglinh0609@gmail.com","6 Sep 2000","","",""],
["9upb","PHẠM PHƯƠNG THẢO","a volunteer of the Logistics Team","Phamphuongthao2305@gmail.com","23 May 1999","","",""],
["guse","PHẠM QUỲNH PHƯƠNG","a volunteer of the Logistics Team","quynhphuongmomo@gmail.com","1 Jul 2000","","",""],
["06yk","TIÊU THÙY LINH","a volunteer of the Finance Team","","15 Jan 2000","","",""],
["ksxb","TRẦN ĐÀO QUANG HUY","a volunteer of the Logistics Team","","17 May 1999","","",""],
["ytdb","TRẦN NGỌC ÁNH","a volunteer of the Communication Team","ngocanh27299@gmail.com","27 Feb 1999","","",""],
["stup","TRẦN PHƯƠNG NGA","a volunteer of the Logistics Team","tranphuongnga2001@gmail.com","8 Nov 2001","","",""],
["ntw9","TRẦN QUỲNH TRANG","a member of the Communication Team","bubi.girl9x@gmail.com","25 Dec 1999","","",""],
["nbbk","TRỊNH QUỲNH NGA","a volunteer of the Logistics Team","quynhngatrinh0301@gmail.com","3 Jan 2000","","",""],
["8nhp","VŨ BẢO CHÂU","a volunteer of the Logistics Team","vubaochau2805@gmail.com","28 May 1999","","",""],
["hun8","VŨ ĐỨC ANH","a volunteer of the Logistics Team","vuducanh987@gmail.com","15 Aug 2001","","",""],
["bd3w","VŨ HOÀNG ANH","a volunteer of the Communication Team","vuhoanganh2211@gmail.com","22 Nov 2000","","",""],
["4snc","VŨ THÙY LINH","a volunteer of the Finance Team","littlelilyvl@gmail.com","12 Jul 1999","","",""],
["ckn2","<b>== TEAM 1: T.B.Đ Team ==</b>","<b>Short film: </b> The Letter","","1","x","a1",""],
["ekzp","<b>== TEAM 2: The Illumination ==</b>","<b>Short film: </b> Điều có thể","SECOND PRIZE","2","i2eEmw9UsQ8","a2",""],
["h1d9","<b>== TEAM 3: A PDP Production Film ==</b>","<b>Short film: </b> Nắng","","3","rNS0m1JRvJc","a3",""],
["k1gf","<b>== TEAM 4: Ngắn gọn thôi ==</b>","<b>Short film: </b> Hà Nội cô đơn","","4","ldMU7zfcp8g","a4",""],
["4scc","<b>== TEAM 5: SHALLT MTAND ==</b>","<b>Short film: </b> Người tốt","","5","QQyd2lIBRxQ","a5",""],
["1mb6","<b>== TEAM 6: K.Y.S ==</b>","<b>Short film: </b> Nhẹ tựa nỗi đau","THIRD PRIZE","6","9IBQHdUGFnU","a6",""],
["9wpq","<b>== TEAM 7: SIPTEAM ==</b>","<b>Short film: </b> Nắng phía chân cầu","MOST FAVOURITE FILM","7","SrWImBW3VCs","a7",""],
["tyb6","<b>== TEAM 8: A1 k41 KL ==</b>","<b>Short film: </b> Sống là cho đi","","8","ie6ly9v0DLE","a8",""],
["756c","<b>== TEAM 9: THE RET TEAM ==</b>","<b>Short film: </b> A better me","","9","QBbZFw1G9hA","a9",""],
["9zw8","<b>== TEAM 10: Súc Sích Production ==</b>","<b>Short film: </b> To Cyra","FIRST PRIZE","10","QD9cpZ8YCdw","a10",""],
["en1v","<b>== Trần Huyền Trân - From TEAM 10 ==</b>","<b>Short film: </b> To Cyra","BEST ACTRESS","10","QD9cpZ8YCdw","a10_2",""],
["32h1","<b>== TEAM 11: K&C Team ==</b>","<b>Short film: </b> Friends","","11","vgu1UdgVzLA","a11",""],
["ags8","<b>== TEAM 12: SONDER GROUP ==</b>","<b>Short film: </b> Giấy","","12","nCdk2Bi7HvM","a12",""],
["c9k7","<b>== TEAM 13: Maverick ==</b>","<b>Short film: </b> Hành trình kiêu hãnh","CREATIVE CONTENT","13","4YDUWDBj0Hg","a13",""],
["5h76","ĐÀO XUÂN VŨ","<b>Short film: </b> To Cyra","FIRST PRIZE","10","QD9cpZ8YCdw","b1","team 10: Súc Sích Production"],
["bn3z","NGUYỄN PHƯƠNG VÂN NHI","<b>Short film: </b> To Cyra","FIRST PRIZE","10","QD9cpZ8YCdw","b2","team 10: Súc Sích Production"],
["3914","HOÀNG THU TRÀ","<b>Short film: </b> To Cyra","FIRST PRIZE","10","QD9cpZ8YCdw","b3","team 10: Súc Sích Production"],
["y667","TRẦN HUYỀN TRÂN","<b>Short film: </b> To Cyra","FIRST PRIZE","10","QD9cpZ8YCdw","b4","team 10: Súc Sích Production"],
["b41d","TRẦN THẾ ANH","<b>Short film: </b> To Cyra","FIRST PRIZE","10","QD9cpZ8YCdw","b5","team 10: Súc Sích Production"],
["1b5y","NGUYỄN NHẬT MINH CHÂU","<b>Short film: </b> To Cyra","FIRST PRIZE","10","QD9cpZ8YCdw","b6","team 10: Súc Sích Production"],
["kh83","LƯU TIẾN HUY","<b>Short film: </b> Điều có thể","SECOND PRIZE","2","i2eEmw9UsQ8","b7","team 2: The Illumination"],
["ya1v","NGUYỄN TRÀ GIANG","<b>Short film: </b> Điều có thể","SECOND PRIZE","2","i2eEmw9UsQ9","b8","team 2: The Illumination"],
["6fgz","CHU QUANG HUY","<b>Short film: </b> Điều có thể","SECOND PRIZE","2","i2eEmw9UsQ10","b9","team 2: The Illumination"],
["vh82","ĐOÀN HỒNG NGỌC","<b>Short film: </b> Điều có thể","SECOND PRIZE","2","i2eEmw9UsQ11","b10","team 2: The Illumination"],
["bn4g","NGUYỄN MỸ LINH","<b>Short film: </b> Điều có thể","SECOND PRIZE","2","i2eEmw9UsQ12","b11","team 2: The Illumination"],
["ssb6","TRẦN THỊ THANH","<b>Short film: </b> Điều có thể","SECOND PRIZE","2","i2eEmw9UsQ13","b12","team 2: The Illumination"],
["s9zh","PHẠM MINH KIÊN","<b>Short film: </b> Điều có thể","SECOND PRIZE","2","i2eEmw9UsQ14","b13","team 2: The Illumination"],
["524g","VŨ GIA LUẬT","<b>Short film: </b> Điều có thể","SECOND PRIZE","2","i2eEmw9UsQ15","b14","team 2: The Illumination"],
["s3c8","ĐỖ HỒNG NHUNG","<b>Short film: </b> Nhẹ tựa nỗi đau","THIRD PRIZE","6","9IBQHdUGFnU","b15","team 6: K.Y.S"],
["5vgd","TẠ HÀ PHƯƠNG","<b>Short film: </b> Nhẹ tựa nỗi đau","THIRD PRIZE","6","9IBQHdUGFnU","b16","team 6: K.Y.S"],
["s5b5","TẠ HÀ MINH","<b>Short film: </b> Nhẹ tựa nỗi đau","THIRD PRIZE","6","9IBQHdUGFnU","b17","team 6: K.Y.S"],
["hgag","ĐẶNG TRỌNG ANH","<b>Short film: </b> Nhẹ tựa nỗi đau","THIRD PRIZE","6","9IBQHdUGFnU","b18","team 6: K.Y.S"],
["3zck","VŨ HỒNG ANH","<b>Short film: </b> Hành trình kiêu hãnh","MOST CREATIVE SCRIPT","13","4YDUWDBj0Hg","b19","team 13: Maverick"],
["znke","TẠ DUY HÒA","<b>Short film: </b> Hành trình kiêu hãnh","MOST CREATIVE SCRIPT","13","4YDUWDBj0Hg","b20","team 13: Maverick"],
["f79n","NGÔ NGÂN HÀ","<b>Short film: </b> Hành trình kiêu hãnh","MOST CREATIVE SCRIPT","13","4YDUWDBj0Hg","b21","team 13: Maverick"],
["k12b","TẠ TÚ QUYÊN","<b>Short film: </b> Hành trình kiêu hãnh","MOST CREATIVE SCRIPT","13","4YDUWDBj0Hg","b22","team 13: Maverick"],
["z5fa","TẠ KIỀU TRANG","<b>Short film: </b> Hành trình kiêu hãnh","MOST CREATIVE SCRIPT","13","4YDUWDBj0Hg","b23","team 13: Maverick"],
["7c97","TRẦN MINH TRANG","<b>Short film: </b> Nắng phía chân cầu","MOST FAVORITE FILM","7","SrWImBW3VCs","b24","team 7: SIPTEAM"],
["ebzf","PHAN DUY LÂN","<b>Short film: </b> Nắng phía chân cầu","MOST FAVORITE FILM","7","SrWImBW3VCs","b25","team 7: SIPTEAM"],
["e1n4","LÊ THÀNH ĐẠT","<b>Short film: </b> Nắng phía chân cầu","MOST FAVORITE FILM","7","SrWImBW3VCs","b26","team 7: SIPTEAM"],
["47n2","ĐÀO DUY TÙNG","<b>Short film: </b> Nắng phía chân cầu","MOST FAVORITE FILM","7","SrWImBW3VCs","b27","team 7: SIPTEAM"],
["cgc5","NGUYỄN MINH PHƯƠNG","<b>Short film: </b> Nắng phía chân cầu","MOST FAVORITE FILM","7","SrWImBW3VCs","b28","team 7: SIPTEAM"],
["gs3h","NGUYỄN THỊ HOÀNG TRANG","<b>Short film: </b> Nắng phía chân cầu","MOST FAVORITE FILM","7","SrWImBW3VCs","b29","team 7: SIPTEAM"],
];
