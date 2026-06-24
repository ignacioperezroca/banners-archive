<?php
date_default_timezone_set('America/Argentina/Buenos_Aires');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
	<link rel="stylesheet" href="css/style.css">
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
		if( date("H") < "06" ){
		?>
			<div class="interactive-area ia-bg-justin-daddy-fonsi" href="spotify:user:digster.fm:playlist:6KKrDsAMabfsfO9K4rIv6G" onclick="javascript:ga('send', 'event', 'button', 'click', 'justin-daddy-fonsi');void(0);">
				<div class="content"></div>
			</div>
			<script>javascript:ga('send', 'event', 'banner', 'load', 'justin-daddy-fonsi');</script>

		<?php 
		}else if( date("H") < "12" ){
		?>
		
			<div class="interactive-area ia-bg-juanes" href="spotify:user:digster.fm:playlist:6KKrDsAMabfsfO9K4rIv6G" onclick="javascript:ga('send', 'event', 'button', 'click', 'juanes');void(0);">
				<div class="content"></div>
			</div>
			<script>javascript:ga('send', 'event', 'banner', 'load', 'juanes');</script>

		<?php 
		}else if( date("H") < "15" ){
		?>

			<div class="interactive-area ia-bg-morat" href="spotify:user:digster.fm:playlist:6KKrDsAMabfsfO9K4rIv6G" onclick="javascript:ga('send', 'event', 'button', 'click', 'morat');void(0);">
				<div class="content"></div>
			</div>
			<script>javascript:ga('send', 'event', 'banner', 'load', 'morat');</script>

		<?php 
		}else if( date("H") < "23" ){
			?>

			<div class="interactive-area ia-bg-justin-daddy-fonsi" href="spotify:user:digster.fm:playlist:6KKrDsAMabfsfO9K4rIv6G" onclick="javascript:ga('send', 'event', 'button', 'click', 'justin-daddy-fonsi');void(0);">
				<div class="content"></div>
			</div>
			<script>javascript:ga('send', 'event', 'banner', 'load', 'justin-daddy-fonsi');</script>
		
		
		<?php } ?>


	</div>
</body>
</html>


