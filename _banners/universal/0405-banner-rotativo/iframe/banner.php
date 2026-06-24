<?php
date_default_timezone_set('America/Argentina/Buenos_Aires');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
	<link rel="stylesheet" href="css/style.css?ver=3">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src='js/animations.js'></script>
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	  ga('create', 'UA-21046035-45', 'auto');
	  ga('send', 'pageview');
	</script>
</head>

<body>
	<div class="container">
		

		<?php 

		// echo date("YmdH");
		// HASTA LAS 12PM DEL JUEVES 30
		if( date("H") <= "12" ){
		?>
		
		<a class="link hits-mujeres" href="spotify:user:digster.fm:playlist:7JXJKP3xMvIMbEBBGApTPQ" onclick="javascript:ga('send', 'event', 'button', 'click', 'hits-mujeres');void(0);"></a>
		<script>javascript:ga('send', 'event', 'banner', 'load', 'hits-mujeres');</script>

		<?php 
		}else if( date("H") <= "15" ){
		?>
		
		<a class="link bambi" href="spotify:user:digsterargentina:playlist:2HZUMOaO4UxwJoqphlgiRP" onclick="javascript:ga('send', 'event', 'button', 'click', 'bambi');void(0);"></a>
		<script>javascript:ga('send', 'event', 'banner', 'load', 'bambi');</script>

		<?php 
		}else if( date("H") <= "17" ){
		?>
		
		<a class="link nacho" href="spotify:user:digsterargentina:playlist:6KKrDsAMabfsfO9K4rIv6G" onclick="javascript:ga('send', 'event', 'button', 'click', 'nacho');void(0);"></a>
		<script>javascript:ga('send', 'event', 'banner', 'load', 'nacho');</script>

		<?php 
		}else if( date("H") <= "18" ){
		?>
		
		<a class="link hits-hombres" href="spotify:user:digster.fm:playlist:7JXJKP3xMvIMbEBBGApTPQ" onclick="javascript:ga('send', 'event', 'button', 'click', 'hits-hombres');void(0);"></a>
		<script>javascript:ga('send', 'event', 'banner', 'load', 'hits-hombres');</script>

		<?php 
		}else{
		?>
		
		<a class="link weeknd" href="spotify:user:digster.fm:playlist:7JXJKP3xMvIMbEBBGApTPQ" onclick="javascript:ga('send', 'event', 'button', 'click', 'weeknd');void(0);"></a>
		<script>javascript:ga('send', 'event', 'banner', 'load', 'weeknd');</script>
		
		<?php } ?>


	</div>
</body>
</html>


