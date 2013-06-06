<html>
<head>
<title>Web Security, Email Security, Data Security, Mobile Security- Websense.com</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile-1.3.0.min.css" />
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile.structure-1.3.0.min.css" />
<link rel="stylesheet" media="screen" type="text/css" href="assets/css/gartner.css" />
<script type="text/javascript">
$(function() {
    var divs = $("div.wsHomePage").get().sort(function(){ 
        return Math.round(Math.random())-0.5;
    }).slice(0,1);
    $(divs).appendTo(divs[0].parentNode).show();
});
</script>
</head>
<body class="wsHome">
<div data-role="page">
	<?php include 'header.php'; ?>
	<div data-role="content" class="wsHome">
		<div class="wsHomePage wsHomeOne">
			<h1>GARTNER NAMED WEBSENSE A LEADER IN TWO MAGIC QUADRANTS THIS YEAR.</h1>
			<p></p>
			<div class="wsCTA">
				<h2>Find out how Websense was positioned:</h2>
				<a href="cta1.php" data-shadow="false" data-role="button" data-mini="true" class="wsBButton noDots">Magic Quadrant for Secure Web Gateways</a>
				<a href="cta2.php" data-shadow="false" data-role="button" data-mini="true" class="wsBButton noDots">Magic Quadrant for Content-Aware Data Loss Prevention</a>
			</div>
		</div>
	</div>
	<?php include 'footer.php'; ?>