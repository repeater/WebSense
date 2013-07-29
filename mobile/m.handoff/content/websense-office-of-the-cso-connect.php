<html>
<head>
<title>Web Security, Email Security, Data Security, Mobile Security- Websense.com</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile-1.3.0.min.css" />
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile.structure-1.3.0.min.css" />
<link rel="stylesheet" media="screen" type="text/css" href="/assets/css/mobile2013.css" />
</head>
<body>
<div data-role="page" class="wsShadow">
	<?php include 'header.php'; ?>
	<?php include 'panel.php'; ?>
	<div data-role="navbar" data-mini="true" style="width:100%;">
		<ul>
			<li><a href="websense-office-of-the-cso.php">Home</a></li>
			<li><a href="websense-office-of-the-cso-services.php">Services</a></li>
			<li><a href="websense-office-of-the-cso-events.php">Events</a></li>
			<li><a href="websense-office-of-the-cso-webcasts.php">Resources</a></li>
		</ul>
	</div>
	<div data-role="content" class="wsPage">
		<h1>Office of the CSO</h1>
        <h2>Connect With Us on LinkedIn</h2>
        <a href="what-were-reading.php"data-shadow="false" data-role="button" data-mini="true" class="wsBButton" data-transition="slide">View Recommended Books</a>
        <p>
        The best way to connect with us is by participating in the <a href="#linkedin-connect"  data-rel="popup" data-position-to="window" data-inline="true" data-transition="pop">Websense<sup>&reg;</sup> Office of the CSO LinkedIn Group</a>, an open forum for fostering thought leadership in the information security community. It’s the place where you can express opinions, share information, debate and establish new best practices for cybersecurity in the enterprise.
        </p>
        <p class="center">
        <a href="#linkedin-connect" data-rel="popup" data-position-to="window" data-inline="true" data-transition="pop"><img alt="" src="http://www.websense.com/assets/imgs/2013/linkedinlogo.png" /></a>
        </p>
        <div data-role="collapsible-set" data-theme="c" data-content-theme="d" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d">
			<div data-role="collapsible" class="wsAccordion">
				<h3>Latest CSO Blog Posts</h3>
				<ul class="standard tight" id="csoblog-content"></ul>
			</div>
			<div data-role="collapsible" class="wsAccordion">
				<h3>Byline Articles</h3>
				<ul class="standard tight">
					<li><a href="#spear-fishing" data-rel="popup" data-position-to="window"  data-inline="true" data-transition="pop">11 tips to stop spear-phishing</a></li>
					<li><a href="#cso-wishes" data-rel="popup" data-position-to="window"  data-inline="true" data-transition="pop">Top 8 things CSOs wish they had a<br /> solution for</a></li>
					<li><a href="#securing-your-board" data-rel="popup" data-position-to="window"  data-inline="true" data-transition="pop">Securing your Board of Directors' communication portal</a></li>
					<li><a href="#4-keys"  data-rel="popup" data-position-to="window"  data-inline="true" data-transition="pop">4 keys for IP protection</a></li>
				</ul>
			</div>
			<div data-role="popup" id="spear-fishing" data-overlay-theme="a" class="ui-corner-all wsModal">
				<div data-role="content" class="ui-corner-bottom ui-content">
					<h3 class="ui-title">Leaving the mobile site</h3>
					<p>This link you will take you to our desktop site, not optimized for mobile devices. Do you wish to continue?</p>
					<div class="modCenter">
						<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
						<a href="http://www.csoonline.com/article/723393/11-tips-to-stop-spear-phishing" data-role="button" data-inline="true" class="wsBButton" target="blank">Continue</a>
					</div>
				</div>
			</div>
			<div data-role="popup" id="cso-wishes" data-overlay-theme="a" class="ui-corner-all wsModal">
				<div data-role="content" class="ui-corner-bottom ui-content">
					<h3 class="ui-title">Leaving the mobile site</h3>
					<p>This link you will take you to our desktop site, not optimized for mobile devices. Do you wish to continue?</p>
					<div class="modCenter">
						<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
						<a href="http://www.csoonline.com/article/718462/top-8-things-csos-wish-they-had-a-solution-for" data-role="button" data-inline="true" class="wsBButton" target="blank">Continue</a>
					</div>
				</div>
			</div>
			<div data-role="popup" id="securing-your-board" data-overlay-theme="a" class="ui-corner-all wsModal">
				<div data-role="content" class="ui-corner-bottom ui-content">
					<h3 class="ui-title">Leaving the mobile site</h3>
					<p>This link you will take you to our desktop site, not optimized for mobile devices. Do you wish to continue?</p>
					<div class="modCenter">
						<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
						<a href="http://www.csoonline.com/article/702878/securing-your-board-of-directors-communication-portal-" data-role="button" data-inline="true" class="wsBButton" target="blank">Continue</a>
					</div>
				</div>
			</div>
			<div data-role="popup" id="4-keys" data-overlay-theme="a" class="ui-corner-all wsModal">
				<div data-role="content" class="ui-corner-bottom ui-content">
					<h3 class="ui-title">Leaving the mobile site</h3>
					<p>This link you will take you to our desktop site, not optimized for mobile devices. Do you wish to continue?</p>
					<div class="modCenter">
						<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
						<a href="http://www.csoonline.com/article/699297/4-keys-for-ip-protection" data-role="button" data-inline="true" class="wsBButton" target="blank">Continue</a>
					</div>
				</div>
			</div>
			<div data-role="collapsible" class="wsAccordion">
				<h3>Top Media Coverage</h3>
				<ul class="standard tight">
					<li><a href="#data-leaks" data-rel="popup" data-position-to="window"  data-inline="true" data-transition="pop">Websense Plugs Data Leaks, Plays Malware Guard On Mobiles For The Office</a></li>
					<li><a href="#device-control" data-rel="popup" data-position-to="window"  data-inline="true" data-transition="pop">CISOs fear lack of mobile device control, visibility, survey finds</a></li>
					<li><a href="#ciso-challenge" data-rel="popup" data-position-to="window"  data-inline="true" data-transition="pop">The CISO Challenge</a></li>
					<li><a href="#9-secrets" data-rel="popup" data-position-to="window"  data-inline="true" data-transition="pop">9 secrets of getting stuff done in a big company</a></li>
				</ul>
			</div>
			<div data-role="popup" id="data-leaks" data-overlay-theme="a" class="ui-corner-all wsModal">
				<div data-role="content" class="ui-corner-bottom ui-content">
					<h3 class="ui-title">Leaving the mobile site</h3>
					<p>This link you will take you to our desktop site, not optimized for mobile devices. Do you wish to continue?</p>
					<div class="modCenter">
						<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
						<a href="http://www.fastcompany.com/1820962/websense-plugs-data-leaks-plays-malware-guard-mobiles-office" data-role="button" data-inline="true" class="wsBButton" target="blank">Continue</a>
					</div>
				</div>
			</div>
			<div data-role="popup" id="device-control" data-overlay-theme="a" class="ui-corner-all wsModal">
				<div data-role="content" class="ui-corner-bottom ui-content">
					<h3 class="ui-title">Leaving the mobile site</h3>
					<p>This link you will take you to our desktop site, not optimized for mobile devices. Do you wish to continue?</p>
					<div class="modCenter">
						<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
						<a href="http://searchsecurity.techtarget.com/news/2240118659/CISOs-fear-lack-of-mobile-device-control-visibility-survey-finds" data-role="button" data-inline="true" class="wsBButton" target="blank">Continue</a>
					</div>
				</div>
			<div data-role="popup" id="ciso-challenge" data-overlay-theme="a" class="ui-corner-all wsModal">
				<div data-role="content" class="ui-corner-bottom ui-content">
					<h3 class="ui-title">Leaving the mobile site</h3>
					<p>This link you will take you to our desktop site, not optimized for mobile devices. Do you wish to continue?</p>
					<div class="modCenter">
						<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
						<a href="http://www.bankinfosecurity.com/interviews.php?interviewID=1393" data-role="button" data-inline="true" class="wsBButton" target="blank">Continue</a>
					</div>
				</div>
			</div>
			<div data-role="popup" id="9-secrets" data-overlay-theme="a" class="ui-corner-all wsModal">
				<div data-role="content" class="ui-corner-bottom ui-content">
					<h3 class="ui-title">Leaving the mobile site</h3>
					<p>This link you will take you to our desktop site, not optimized for mobile devices. Do you wish to continue?</p>
					<div class="modCenter">
						<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
						<a href="http://www.csoonline.com/article/693188/9-secrets-of-getting-stuff-done-in-a-big-company?page=2" data-role="button" data-inline="true" class="wsBButton" target="blank">Continue</a>
					</div>
				</div>
			</div>
		</div>
	</div>
		<div data-role="popup" id="linkedin-connect" data-overlay-theme="a" class="ui-corner-all wsModal">
			<div data-role="content" class="ui-corner-bottom ui-content">
				<h3 class="ui-title">Leaving the mobile site</h3>
				<p>This link you will take you to our desktop site, not optimized for mobile devices. Do you wish to continue?</p>
				<div class="modCenter">
					<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
					<a href="http://www.linkedin.com/groups/Websense-Office-CSO-3388452/about?trk=anet_ug_grppro" data-role="button" data-inline="true" class="wsBButton" target="_blank">Continue</a>
				</div>
			</div>
		</div>
	</div>
	<?php include 'footer.php'; ?>                                                          