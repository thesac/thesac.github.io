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
	//document.getElementById('codeinput').style.display = "none";
	$("#codeinput").animate({
        opacity: '0',
        height: '0px'
    });
	document.getElementById('cert_name').innerHTML = myData[myNum][1];
	document.getElementById('cert_dob').innerHTML = myData[myNum][4];
	document.getElementById('cert_email').innerHTML= myData[myNum][3];
	document.getElementById('cert_pos').innerHTML = myData[myNum][2];
	document.getElementById('cert_code').innerHTML = myData[myNum][0];
	if ((myNum+1) < 10)
		document.getElementById('onlineCopyLink').href = "online_copy/cert_okay-0" + (myNum+1) + ".png";
	else document.getElementById('onlineCopyLink').href = "online_copy/cert_okay-" + (myNum+1) + ".png";
}

var myData=[
["k72p","Bùi Thùy Dung","a volunteer of the Logistics Team","buithuydung2000@gmail.com","29 Jun 2000"],
["1hg5","Chu Quang Huy","a volunteer of the Finance Team","huy2608xxxx@gmail.com","26 Aug 1998"],
["sb0s","Đặng Hoàng Long","a member of the Content Team","danghoanglong99@gmail.com","18 Nov 2000"],
["088b","Đặng Thanh Hương","a member of the Content Team","","13 Oct 1999"],
["dqa3","Đào Quang Nhật","a volunteer of the Logistics Team","","16 Oct 1999"],
["pnza","Đào Xuân Vũ","a member of the Media Team","Xuanvu0906@gmail.com","9 Jun 2000"],
["sydg","Đinh Quang Thái","a volunteer of the Logistics Team","Beodinhquang@gmail.com","22 Nov 2000"],
["c145","Đinh Thị Ngọc Linh","a volunteer of the Communication Team","linhdinhgi@gmail.com","17 Dec 2000"],
["2yze","Đỗ Tuấn Linh","a volunteer of the Logistics Team","tuanlinhdo2012000@gmail.com","20 Jan 2000"],
["hgk3","Đỗ Viết Trí","a member of the Media Team","","15 Oct 1999"],
["qst9","Dương Thanh Vân","a volunteer of the Media Team","thanhvanduong28@gmail.com","21 Jan 2001"],
["gemy","Hoàng Hải Tú","a volunteer of the Communication Team","lizstlonely@gmail.com","20 Jun 1998"],
["h3sc","Hoàng Quỳnh Anh","a volunteer of the Communication Team","75759904quynhanh@gmail.com","19 Jul 1999"],
["54dw","Lê Hà Chi","a volunteer of the Logistics Team","Chilewonderful@gmail.com","5 Oct 2001"],
["pnxs","Lê Thị Hoa","a volunteer of the Communication Team","lehoa1542000@gmail.com","15 Apr 2000"],
["9sem","Lê Việt Phong","a member of the Logistics Team","vietphong279@gmail.com","27 Sep 1999"],
["eex6","Mai Đặng Hà Anh","a volunteer of the Logistics Team","haanh161017@gmail.com","16 Oct 2000"],
["5324","Ngô Thi Hồng Nhung","a volunteer of the Communication Team","nhungkute281@gmail.com","28 Jan 1999"],
["gah7","Nguyễn Ánh Ngọc","the head organizer of the  Team","ngocnguyen2803o.0@gmail.com","28 Mar 1999"],
["sszg","Nguyễn Diệu My","a volunteer of the Logistics Team","","4 Jul 1999"],
["83eh","Nguyễn Đình Long","a volunteer of the Logistics Team","snsn.ln2k@gmail.com","1 Jul 2000"],
["yk3u","Nguyễn Hà Thanh","a volunteer of the Logistics Team","cunlon1411@gmail.com","14 Nov 2000"],
["bdt5","Nguyễn Hoài Linh","a volunteer of the Logistics Team","hoailynn@gmail.com","16 Nov 2000"],
["qhh3","Nguyễn Lương Đức","the leader of the Logistics Team","l.duc199x@gmail.com","7 Mar 1999"],
["0nap","Nguyễn Mai Phương","the leader of the Communication Team","mphuong22102k@gmail.com","22 Oct 2000"],
["ge2c","Nguyễn Minh Anh","a volunteer of the Logistics Team","meap9400@gmail.com","9 Apr 2000"],
["w0vb","Nguyễn Nhật Minh Châu","a volunteer of the Logistics Team","chau.nghe20002000@gmail.com","25 Sep 2000"],
["666y","Nguyễn Phương Vân Nhi","a member of the Media Team","nnhii19@gmail.com","31 Dec 2000"],
["z0bb","Nguyễn Quỳnh Trang","a volunteer of the Logistics Team","Tranghanna0710@gmail.com","7 Oct 2001"],
["wqxc","Nguyễn Thị Kiều Trang","the leader of the Finance Team","chippykenlly@gmail.com","4 Dec 1998"],
["dyb4","Nguyễn Thị Lan Phương","a volunteer of the Communication Team","phuong11012000@gmail.com","11 Jan 2000"],
["t2wh","Nguyễn Thị Ngọc","a volunteer of the Logistics Team","ngocngungo7499@gmail.com","70 Apr 1999"],
["203a","Nguyễn Thị Trà My","a volunteer of the Logistics Team","tututhat@gmail.com","4 Jul 2001"],
["sa7v","Nguyễn Thu Hằng","a member of the Content Team","alice.lucyvic@gmail.com","11 Feb 1999"],
["tkh8","Nguyễn Thu Trang","a volunteer of the Communication Team","muabongmay2211@gmail.com","22 Nov 2016"],
["upxc","Nguyễn Thùy Dương","a volunteer of the Logistics Team","sanhy132@gmail.com","13 Feb 2000"],
["7yn1","Nguyễn Thùy Dương","a volunteer of the Communication Team","tit.tn96@gmail.com","10 Jan 2000"],
["1vx2","Nguyễn Thùy Trang","a volunteer of the Logistics Team","","13 Feb 2000"],
["kcn8","Nguyễn Việt Bảo Hân","a volunteer of the Logistics Team","","17 Jan 2000"],
["a5qv","Nguyễn Xuân Sơn","the leader of the Media Team","thichthat@gmail.com","17 Apr 1998"],
["9cwq","Phạm Phương Linh","a member of the Communication Team","phamphuonglinh0609@gmail.com","6 Sep 2000"],
["9upb","Phạm Phương Thảo","a volunteer of the Logistics Team","Phamphuongthao2305@gmail.com","23 May 1999"],
["guse","Phạm Quỳnh Phương","a volunteer of the Logistics Team","quynhphuongmomo@gmail.com","1 Jul 2000"],
["06yk","Tiêu Thùy Linh","a volunteer of the Logistics Team","","15 Jan 2000"],
["ksxb","Trần Đào Quang Huy","a volunteer of the Logistics Team","","17 May 1999"],
["ytdb","Trần Ngọc Ánh","a volunteer of the Communication Team","ngocanh27299@gmail.com","27 Feb 1999"],
["stup","Trần Phương Nga","a volunteer of the Logistics Team","tranphuongnga2001@gmail.com","8 Nov 2001"],
["ntw9","Trần Quỳnh Trang","a member of the Communication Team","bubi.girl9x@gmail.com","25 Dec 1999"],
["nbbk","Trịnh Quỳnh Nga","a volunteer of the Logistics Team","quynhngatrinh0301@gmail.com","3 Jan 2000"],
["8nhp","Vũ Bảo Châu","a volunteer of the Logistics Team","vubaochau2805@gmail.com","28 May 1999"],
["hun8","Vũ Đức Anh","a volunteer of the Logistics Team","vuducanh987@gmail.com","15 Aug 2001"],
["bd3w","Vũ Hoàng Anh","a volunteer of the Communication Team","vuhoanganh2211@gmail.com","22 Nov 2000"],
["4snc","Vũ Thùy Linh","a volunteer of the Finance Team","littlelilyvl@gmail.com","12 Jul 1999"]
];
