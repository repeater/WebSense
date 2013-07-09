<html>
<head>
<title>Web Security, Email Security, Data Security, Mobile Security- Websense.com</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile-1.3.0.min.css" />
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile.structure-1.3.0.min.css" />
<link rel="stylesheet" media="screen" type="text/css" href="/assets/css/mobile2013.css" />
<style>
	.wsAccordion.active {color:#f00;}
</style>
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
			<!--<li><a href="websense-office-of-the-cso-connect.php">Connect</a></li>-->
		</ul>
	</div>
	<div data-role="content" class="wsPage">
		<h1>Office of the CSO</h1>
        <h2>Connect With Us on LinkedIn</h2>
        <a href="what-were-reading.php" data-shadow="false" data-role="button" data-mini="true" class="wsBButton">View Recommended Books</a>
        <p>
        The best way to connect with us is by participating in the <a href="http://www.linkedin.com/groups/Websense-Office-CSO-3388452/about?trk=anet_ug_grppro">Websense&reg; Office of the CSO LinkedIn Group</a>, an open forum for fostering thought leadership in the information security community. It’s the place where you can express opinions, share information, debate and establish new best practices for cybersecurity in the enterprise.
        </p>
        <p class="center">
        <a href="http://www.linkedin.com/groups/Websense-Office-CSO-3388452/about?trk=anet_ug_grppro"><img alt="" src="http://websense.com/assets/imgs/2013/linkedinlogo.png" /></a>
        </p>
        <div data-role="collapsible-set" data-theme="c" data-content-theme="d" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d">
			<div data-role="collapsible" class="wsAccordion">
				<h3>Latest CSO Blog Posts</h3>
				<ul class="standard tight" id="csoblog-content"></ul>
			</div>
			<div data-role="collapsible" class="wsAccordion">
				<h3>Byline Articles</h3>
				<ul class="standard tight">
					<li><a href="http://www.csoonline.com/article/723393/11-tips-to-stop-spear-phishing" target="_blank">11 tips to stop spear-phishing</a></li>
					<li><a href="http://www.csoonline.com/article/718462/top-8-things-csos-wish-they-had-a-solution-for" target="_blank">Top 8 things CSOs wish they had a<br /> solution for</a></li>
					<li><a href="http://www.csoonline.com/article/702878/securing-your-board-of-directors-communication-portal-" target="_blank">Securing your Board of Directors' communication portal</a></li>
					<li><a href="http://www.csoonline.com/article/699297/4-keys-for-ip-protection" target="_blank">4 keys for IP protection</a></li>
				</ul>
			</div>
			<div data-role="collapsible" class="wsAccordion">
				<h3>Top Media Coverage</h3>
				<ul class="standard tight">
					<li><a href="http://www.fastcompany.com/1820962/websense-plugs-data-leaks-plays-malware-guard-mobiles-office" target="_blank">Websense Plugs Data Leaks, Plays Malware Guard On Mobiles For The Office</a></li>
					<li><a href="http://searchsecurity.techtarget.com/news/2240118659/CISOs-fear-lack-of-mobile-device-control-visibility-survey-finds" target="_blank">CISOs fear lack of mobile device control, visibility, survey finds</a></li>
					<li><a href="http://www.bankinfosecurity.com/interviews.php?interviewID=1393" target="_blank">The CISO Challenge</a></li>
					<li><a href="http://www.csoonline.com/article/693188/9-secrets-of-getting-stuff-done-in-a-big-company?page=2" target="_blank">9 secrets of getting stuff done in a big company</a></li>
				</ul>
			</div>
		</div>
    </div>
	<?php include 'footer.php'; ?>