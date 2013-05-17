<html>
<head>
<title>Web Security, Email Security, Data Security, Mobile Security- Websense.com</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile-1.3.0.min.css" />
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile.structure-1.3.0.min.css" />
<link rel="stylesheet" media="screen" type="text/css" href="/assets/css/mobile2013.css" />
</head>
<body>
<div data-role="page" class="wsShadow">
	<?php include 'header.php'; ?>
	<?php include 'panel.php'; ?>
	<div data-role="content">
		<div class="wsBG wsBGOne"></div>
		<h2>Download your copy of the "Websense® 2013 Threat Report" today.</h2>
		<p>Conventional information security measures, including anti-virus and next-generation firewalls, aren't enough to protect your organization from today's deluge of sophisticated web threats.</p>
		<p>That's just one of the key findings in the "Websense® 2013 Threat Report." Based on data collected by the Websense ThreatSeeker® Network, the world's largest and longest-standing security intelligence network, the Report details how advanced threats are specifically targeting mobile devices and social media, and rendering traditional security solutions ineffective.</p>
		<!--<a href="#" data-role="button" data-shadow="false">Download The 2013 Threat Report</a>-->
		
		<a name="top"></a>
		<div data-role="collapsible" data-iconpos="right" data-theme="b" data-content-theme="d">
                <h3><a href="#top">Download the 2013 Threat Report</a></h3>
                <iframe width="100%" scrolling="no" height="450" frameborder="0" allowtransparency="true" src="http://a1.websense.com/mobile-test.html"></iframe>
            </div>
		
	</div>
	<?php include 'footer.php'; ?>
</div>
<script>
	$(document).ready(function() {
		$( "#navpanel" ).trigger( "updatelayout" );
	});
</script>
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="http://code.jquery.com/mobile/1.3.0/jquery.mobile-1.3.0.min.js"></script>
</body>
</html>