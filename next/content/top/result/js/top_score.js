var postData = [null,
["name","description","snWh7W23LdI","1808871722730718_1811028209181736","images/full1.jpg",-1]];

initTop(1);

function initTop(pid) {
	var msyt = -1,msfbshare = -1,msfblike = -1,mscore = -1;
	var img = document.getElementById('topimg_'+pid);
	var syt = document.getElementById('topyt_'+pid);
	var sfb = document.getElementById('topfb_'+pid);
	var score = document.getElementById('topscore_'+pid);
	var title = document.getElementById('toptitle_'+pid);
	var detail = document.getElementById('topdetail_'+pid);
	var ytlink = document.getElementById('topytl_'+pid);
	var fblink = document.getElementById('topfbl_'+pid);
	var idyt = postData[pid][2];
	var idfb = postData[pid][3];
	
	//get post data
	ytlink.href = 'https://www.youtube.com/video/'+postData[pid][2];
	fblink.href = 'https://www.facebook.com/'+postData[pid][3];
	title.innerHTML = postData[pid][0];
	detail.innerHTML = postData[pid][1];
	img.src = postData[pid][4];
	
	//youtube
	$.getJSON('https://www.googleapis.com/youtube/v3/videos?part=id%2C++statistics&id='+idyt+'&key=AIzaSyCRM2l1WjOUNkzVKC4WPO7q6FsvQQN-6EY', function(data) {
        msyt = +(data.items[0].statistics.viewCount);
		mscore = msyt+msfblike*2+msfbshare*3;
		syt.innerHTML = msyt + ' likes';
		if ((msyt != -1) && (msfblike != -1) && (msfbshare != -1)) {
			score.innerHTML = mscore + ' điểm';
			postData[pid][5] = mscore;
		}
    });
	
	//facebook
	$.getJSON('http://graph.facebook.com/'+idfb+'?fields=likes.summary(true).limit(0),shares', function(data) {
        msfblike = +(data.likes.summary.total_count);
        msfbshare = +(data.shares.count);
		mscore = msyt+msfblike*2+msfbshare*3;
		sfb.innerHTML = msfblike + ' likes,' + msfbshare + ' shares';
		if ((msyt != -1) && (msfblike != -1) && (msfbshare != -1)) {
			score.innerHTML = mscore + ' điểm';
			postData[pid][5] = mscore;
		}
    });
}
function myCallback(json) {
    var d = new Date(json.dateString);
	utc = d.getTime();
	utcDate = new Date(utc + (3600000*7));	
	
    document.getElementById("timenow").innerHTML = utcDate.getUTCDate() + '/' + (utcDate.getUTCMonth()+1) + '/' + utcDate.getUTCFullYear() + " lúc " + utcDate.getUTCHours() + ":" + utcDate.getUTCMinutes();
}