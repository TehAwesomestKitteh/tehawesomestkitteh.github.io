var input = "";
var unlocked = false;
var timer;

$(document).keyup(function(e) {
	input += e.which;
	if (input == "84") {
		$("#notsecret").html("EHAWESOMESTKITTEH");
		$("#secret").html("T");
	} else if (input == "8469") {
		$("#notsecret").html("HAWESOMESTKITTEH");
		$("#secret").html("TE");
	} else if (input == "846972") {
		$("#notsecret").html("AWESOMESTKITTEH");
		$("#secret").html("TEH");
	} else if (input == "84697265") {
		$("#notsecret").html("WESOMESTKITTEH");
		$("#secret").html("TEHA");
	} else if (input == "8469726587") {
		$("#notsecret").html("ESOMESTKITTEH");
		$("#secret").html("TEHAW");
	} else if (input == "846972658769") {
		$("#notsecret").html("SOMESTKITTEH");
		$("#secret").html("TEHAWE");
	} else if (input == "84697265876983") {
		$("#notsecret").html("OMESTKITTEH");
		$("#secret").html("TEHAWES");
	} else if (input == "8469726587698379") {
		$("#notsecret").html("MESTKITTEH");
		$("#secret").html("TEHAWESO");
	} else if (input == "846972658769837977") {
		$("#notsecret").html("ESTKITTEH");
		$("#secret").html("TEHAWESOM");
	} else if (input == "84697265876983797769") {
		$("#notsecret").html("STKITTEH");
		$("#secret").html("TEHAWESOME");
	} else if (input == "8469726587698379776983") {
		$("#notsecret").html("TKITTEH");
		$("#secret").html("TEHAWESOMES");
	} else if (input == "846972658769837977698384") {
		$("#notsecret").html("KITTEH");
		$("#secret").html("TEHAWESOMEST");
	} else if (input == "84697265876983797769838475") {
		$("#notsecret").html("ITTEH");
		$("#secret").html("TEHAWESOMESTK");
	} else if (input == "8469726587698379776983847573") {
		$("#notsecret").html("TTEH");
		$("#secret").html("TEHAWESOMESTKI");
	} else if (input == "846972658769837977698384757384") {
		$("#notsecret").html("TEH");
		$("#secret").html("TEHAWESOMESTKIT");
	} else if (input == "84697265876983797769838475738484") {
		$("#notsecret").html("EH");
		$("#secret").html("TEHAWESOMESTKITT");
	} else if (input == "8469726587698379776983847573848469") {
		$("#notsecret").html("H");
		$("#secret").html("TEHAWESOMESTKITTE");
	} else if (input == "846972658769837977698384757384846972") {
		$("#notsecret").html("");
		$("#secret").html("TEHAWESOMESTKITTEH");
		unlocked = true;
		room_unlock();
	} else {
		reset_secret();
	}
	clearTimeout(timer);
	timer = setTimeout(function() { input = ""; reset_secret(); }, 1500);	
});

function reset_secret() {
	if (unlocked == false) {
		input = "";
		$("#notsecret").html("TEHAWESOMESTKITTEH");
		$("#secret").html("");
	}
};

function room_unlock() {
	document.cookie = "secret1=unlocked";
}