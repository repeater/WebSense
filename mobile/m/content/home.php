<html>
<head>
<title>Web Security, Email Security, Data Security, Mobile Security- Websense.com</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile-1.3.0.min.css" />
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile.structure-1.3.0.min.css" />
<link rel="stylesheet" media="screen" type="text/css" href="/assets/css/mobile2013.css" />
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
	<?php include 'panel.php'; ?>
	<div data-role="content" class="wsHome wsResp">
		<!--<div class="wsHomePage wsRespOne">
			<p>It’s been a banner year for hackers, who managed to breach many of the world’s most trusted websites and cyber defenses. Mobile, social,email – all under siege. Find out why your go-to sites, social networks and even security providers are experiencing a crisis of trust.</p>
			<?php include 'cta.php'; ?>
		</div>-->
		<!--<div class="wsHomePage wsRespTwo">
			<div class="bCopy">
				<p>Our information security products defend against threats and data theft using the  advanced analytics and real-time protection of the Websense TRITON architecture.</p>
			</div>
			<?php include 'cta.php'; ?>
		</div>-->
		<div class="wsHomePage wsRespThree">
			<div class="bCopy">
				<p><a href="/content/proveit.php" data-shadow="false" data-role="button" data-mini="true" class="wsBButton homeButton" data-inline="true">Go</a>&nbsp;</p>
			</div>
			<?php include 'cta.php'; ?>
		</div>
	</div>
	<?php include 'footer.php'; ?>