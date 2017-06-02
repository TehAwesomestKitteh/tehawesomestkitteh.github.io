<!DOCTYPE html>
<html>
	<head>
		<!-- "The closer I am to reaching my goals, the more I realize just how far I'm leaving everything else behind" -TehAwesomestKitteh -->
		<script src="assets/jquery-1.12.4.min.js"></script>
		<script src="assets/secret.js"></script>
		<script src="assets/getCookie.js"></script>
		<script>
			var x = getCookie("greenlight");
			if (x == "") {
				// window.location = "cookehz.html";
			}
		</script>
		<?php if (!isset($css_name)) {echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/stylesheet.css\">";} else {echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/".$css_name.".css\">";} ?>
		<title><?php if (!isset($page_title)) {echo "TehAwesomestKitteh";} else {echo $page_title." | TehAwesomestKitteh";} ?></title>
	</head>
	<body>
		<div class="navbar">
			<ul>
    			<li style="width: 35%; margin-top: 10px;"><span class="title"><span id="secret"></span><span id="notsecret">TEHAWESOMESTKITTEH</span></span></li>
    			<a href="/"><li class="active navbarlink"><span class="nav">HOME</span></li></a>
    			<a href="about"><li class="navbarlink"><span class="nav">ABOUT</span></li></a>
    			<a href="notportfolio"><li class="navbarlink"><span class="nav">PROJECTS and CREATIONS</span></li></a>
    			<a href="contact"><li class="navbarlink"><span class="nav">CONTACT ME</span></li></a>
    		</ul>
		</div>
		<div id="contentbox">