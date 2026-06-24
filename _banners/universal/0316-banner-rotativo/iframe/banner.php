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
		if( date("YmdH") <= "2017033011" ){
		?>
		
		<div class="interactive-area ia-fonsi">
			<div class="content">
					<a class="btn btn-fonsi grow" href="spotify:user:digsterargentina:playlist:1iRGtHSH2hXGobV1IgUU68" onclick="javascript:ga('send', 'event', 'button', 'click', 'fonsi');void(0);"></a>
			</div>
		</div>
		<script>javascript:ga('send', 'event', 'banner', 'load', 'fonsi');</script>

		<?php 
		}else if( date("YmdH") <= "2017033017" ){
		?>
		
		<div class="interactive-area ia-fernandez">
			<div class="content">
					<a class="btn btn-fernandez grow" href="spotify:user:digsterargentina:playlist:6KKrDsAMabfsfO9K4rIv6G" onclick="javascript:ga('send', 'event', 'button', 'click', 'fernandez');void(0);"></a>
			</div>
		</div>
		<script>javascript:ga('send', 'event', 'banner', 'load', 'fernandez');</script>

		<?php 
		}else if( date("YmdH") <= "2017033023" ){
		?>
		
		<div class="interactive-area ia-yankee">
			<div class="content">
					<a class="btn btn-yankee grow" href="spotify:user:digsterargentina:playlist:2YEI1nY4VdJaFuFyOS0O13" onclick="javascript:ga('send', 'event', 'button', 'click', 'yankee');void(0);"></a>
			</div>
		</div>
		<script>javascript:ga('send', 'event', 'banner', 'load', 'yankee');</script>
		
		<?php } ?>


	</div>
</body>
</html>


