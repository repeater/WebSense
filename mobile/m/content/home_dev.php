<html>
<head>
<title>Web Security, Email Security, Data Security, Mobile Security- Websense.com</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile-1.3.0.min.css" />
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile.structure-1.3.0.min.css" />
<link rel="stylesheet" media="screen" type="text/css" href="/assets/css/mobile2013.css" />
<!--<script type="text/javascript">
$(function() {
    var divs = $("div.wsHomePage").get().sort(function(){ 
        return Math.round(Math.random())-0.5;
    }).slice(0,1);
    $(divs).appendTo(divs[0].parentNode).show();
});
</script>-->
<script src="../assets/js/swipe.js" type="text/javascript"></script>
</head>
<body class="wsHome">
<div data-role="page">
	<?php include 'header.php'; ?>
	<?php include 'panel.php'; ?>
	<div data-role="content" id="slider" class="wsHome wsResp swipe">
		<div class="swipe-wrap">
			<figure>
				<div class="wsHomePage wsRespOne wrap">
					<p>It’s been a banner year for hackers, who managed to breach many of the world’s most trusted websites and cyber defenses. Mobile, social,email – all under siege. Find out why your go-to sites, social networks and even security providers are experiencing a crisis of trust.</p>
					<?php include 'cta.php'; ?>
				</div>
			</figure>
			<figure>
				<div class="wsHomePage wsRespTwo wrap">
					<div class="bCopy">
						<p>Our information security products defend against threats and data theft using the  advanced analytics and real-time protection of the Websense TRITON architecture.</p>
					</div>
					<?php include 'cta.php'; ?>
				</div>
			</figure>
			<figure>
				<div class="wsHomePage wsRespThree wrap">
					<div class="bCopy">
						<p><a href="proveit.php" data-shadow="false" data-role="button" data-mini="true" class="wsBButton homeButton" data-inline="true" target=_new">Go</a>&nbsp;</p>
					</div>
					<?php include 'cta.php'; ?>
				</div>
			</figure>
		</div>
	</div>
	<?php include 'footer.php'; ?>