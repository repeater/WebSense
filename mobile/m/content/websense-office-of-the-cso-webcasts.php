<html>
<head>
<title>Web Security, Email Security, Data Security, Mobile Security- Websense.com</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
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
<body class="wsPage">
<div data-role="page">
	<?php include 'header.php'; ?>
	<?php include 'panel.php'; ?>
	<div data-role="navbar" data-mini="true" style="width:100%;">
		<ul>
			<li><a href="websense-office-of-the-cso.php">Home</a></li>
			<li><a href="websense-office-of-the-cso-services.php">Services</a></li>
			<li><a href="websense-office-of-the-cso-events.php">Events</a></li>
			<li><a href="websense-office-of-the-cso-connect.php">Connect</a></li>
		</ul>
	</div>
	<div data-role="content" class="wsPage">
		<h1>Office of the CSO</h1>
		<h2>Podcasts</h2>
        <h3>7 Stages of Advanced Threats</h3>
        <p>Jason Clark and James Robinson of the Office of the CSO explain the differences between advanced threats and traditional threats, and how the former follow a 7-stage model. Registration also enables you to view and download the podcast transcript.</p>
        <!--<ul class="standard tight">
        	<li>Tuesday, July 9, 2013</li>
			<li>10 a.m. BST | 11 a.m. CEST</li>
			<li>12 p.m. AST | 2:30 p.m. IST</li>
		</ul>-->
		<div data-role="collapsible-set" data-theme="c" data-content-theme="d" data-collapsed-icon="info" data-expanded-icon="info">
			<div data-role="collapsible" class="wsAccordion">
				<h3>Register and Listen</h3>
				<iframe width="100%" scrolling="no" height="450" frameborder="0" allowtransparency="true" src="http://a1.websense.com/mobile-test.html"></iframe>
			</div>
		</div>
		<h3>Next Generation Threats: The Best Defense </h3>
		<p>Jason Clark and Neil Thacker of the Office of the CSO debate whether cybercriminals' desire to steal critical data is greater than the ability of organizations to protect it. Registration also enables you to view and download the podcast transcript.</p>
		<!--<ul class="standard tight">
        	<li>Tuesday, July 23, 2013</li>
			<li>10 a.m. PDT | 12 p.m. Mexico</li>
			<li>1 p.m. EDT | 2 p.m. Brazil</li>
		</ul>-->
		<div data-role="collapsible-set" data-theme="c" data-content-theme="d" data-collapsed-icon="info" data-expanded-icon="info">
			<div data-role="collapsible" class="wsAccordion">
				<h3>Register and Listen</h3>
				<iframe width="100%" scrolling="no" height="450" frameborder="0" allowtransparency="true" src="http://a1.websense.com/mobile-test.html"></iframe>
			</div>
		</div>
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