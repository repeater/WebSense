<html>
<head>
<title>Web Security, Email Security, Data Security, Mobile Security- Websense.com</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
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
</head>
<body class="wsHome">
<div data-role="page">
	<?php include 'header.php'; ?>
	<?php include 'panel.php'; ?>
	<div data-role="content" class="wsHome wsResp cf">
		<div id="slider" class="swipe">
			<div class="swipe-wrap cf">
				<figure>
					<div class="wsRespThree wrap">
						<div class="bCopy">
							<a href="/content/proveit.aspx" data-shadow="false" data-role="button" data-mini="true" class="wsBButton homeButton heroCTA" data-inline="true">Go</a>
						</div>
					</div>
				</figure>
				<figure>
					<div class="wsRespOne wrap">
						<div class="bCopy">
							<p>It’s been a banner year for hackers, who managed to breach many of the world’s most trusted websites and cyber defenses. Mobile, social,email – all under siege. Find out why your go-to sites, social networks and even security providers are experiencing a crisis of trust.</p>
							<a href="/content/proveit.aspx" data-shadow="false" data-role="button" data-mini="true" class="wsBButton homeButton heroCTA" data-inline="true">Go</a>
						</div>
					</div>
				</figure>
				<figure>
					<div class="wsRespTwo wrap">
						<div class="bCopy">
							<p>Our information security products defend against threats and data theft using the  advanced analytics and real-time protection of the Websense TRITON architecture.</p>
							<a href="/content/proveit.aspx" data-shadow="false" data-role="button" data-mini="true" class="wsBButton homeButton heroCTA" data-inline="true">Go</a>
						</div>
					</div>
				</figure>
			</div>
			<nav>
				<ul id="position">
					<li class=""></li>
					<li class=""></li>
					<li class=""></li>
				</ul>
			</nav>
		</div>
		<div class="wsCTA">
			<div class="hpElement">
				<a href="/content/websense-2013-threat-report.aspx" title="TRITON Solution Suites: Complete Security" class="hpElement">Websense 2013 Threat Report<br /><span>Your trust in traditional security might be misplaced</span></a>
			</div>
			<div class="hpElement">
				<a href="/content/websense-office-of-the-cso.aspx" title="Office of the CSO" class="hpElement">Office of the CSO<br /><span>Your Powerful Ally in the Fight Against Cybercrime</span></a>
			</div>
			<div class="hpElement">
				<a href="/content/miercom-report-2013.aspx" title="TRITON Solution Suites: Complete Security" class="hpElement">Miercom<br /><span>Here's the proof: TRITON stops more threats.</span></a>
			</div>
			<div class="hpElement">
				<a href="/content/gartner-magic-quadrant-secure-web-gateways-2013.aspx" alt="Our difference: Websense ACE" title="" class="hpElement">Gartner<br /><span>Magic Quadrant for Data Loss Prevention</span></a>
			</div>
			<div class="hpElement">
				<a href="/content/gartner-magic-quadrant-content-aware-data-loss-prevention-2013.aspx" alt="Our difference: Websense ACE" title="" class="hpElement">Gartner<br /><span>Magic Quadrant for Secure Web Gateways</span></a>
			</div>
		</div> 
	</div>	               
	<script src="/assets/js/swipe.js" type="text/javascript"></script>
	<script type="text/javascript">
		var slider =
		  Swipe(document.getElementById('slider'), {
			auto: 7500,
			continuous: true,
			callback: function(pos) {

			  var i = bullets.length;
			  while (i--) {
				bullets[i].className = ' ';
			  	}
			  	bullets[pos].className = 'on'
			}
		  });
		var bullets = document.getElementById('position').getElementsByTagName('li');
	</script>
	<?php include 'footer.php'; ?>