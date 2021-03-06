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
	<div data-role="content" class="wsPage">
		<h1>Social Media</h1>
        <h2>Stay connected</h2>
        <p>Websense regularly releases information about security threats and new product announcements.</p>
		<div class="wsSocial" style="text-align:center;">
			<a href="#ws-blog" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-transition="pop" class="wsBlog"></a>
			<a href="#ws-linkedin" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-transition="pop" class="wsLI"></a>
			<a href="#ws-twitter" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-transition="pop" class="wsTwitter"></a>
			<a href="#ws-facebook" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-transition="pop" class="wsFB"></a>
			<a href="#ws-google" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-transition="pop" class="wsGoogle"></a>
			<a href="#ws-youtube" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-transition="pop" class="wsYT"></a>
		</div>
		<div data-role="popup" id="ws-blog" data-overlay-theme="a" class="ui-corner-all wsModal">
			<div data-role="content" class="ui-corner-bottom ui-content">
				<h3 class="ui-title">Leaving the mobile site</h3>
				<p>You are now leaving the Websense mobile site. Do you wish to proceed?</p>
				<div class="modCenter">
					<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
					<a href="https://community.websense.com/blogs/" data-role="button" data-inline="true" class="wsBButton">Continue</a>
				</div>
			</div>
		</div>
		<div data-role="popup" id="ws-linkedin" data-overlay-theme="a" class="ui-corner-all wsModal">
			<div data-role="content" class="ui-corner-bottom ui-content">
				<h3 class="ui-title">Leaving the mobile site</h3>
				<p>You are now leaving the Websense mobile site. Do you wish to proceed?</p>
				<div class="modCenter">
					<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
					<a href="https://community.websense.com/blogs/" data-role="button" data-inline="true" class="wsBButton" target=_blank">Continue</a>
				</div>
			</div>
		</div>
		<div data-role="popup" id="ws-twitter" data-overlay-theme="a" class="ui-corner-all wsModal">
			<div data-role="content" class="ui-corner-bottom ui-content">
				<h3 class="ui-title">Leaving the mobile site</h3>
				<p>You are now leaving the Websense mobile site. Do you wish to proceed?</p>
				<div class="modCenter">
					<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
					<a href="https://mobile.twitter.com/websense" data-role="button" data-inline="true" class="wsBButton" target=_blank">Continue</a>
				</div>
			</div>
		</div>
		<div data-role="popup" id="ws-facebook" data-overlay-theme="a" class="ui-corner-all wsModal">
			<div data-role="content" class="ui-corner-bottom ui-content">
				<h3 class="ui-title">Leaving the mobile site</h3>
				<p>You are now leaving the Websense mobile site. Do you wish to proceed?</p>
				<div class="modCenter">
					<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
					<a href="https://m.facebook.com/websense" data-role="button" data-inline="true" class="wsBButton" target=_blank">Continue</a>
				</div>
			</div>
		</div>
		<div data-role="popup" id="ws-google" data-overlay-theme="a" class="ui-corner-all wsModal">
			<div data-role="content" class="ui-corner-bottom ui-content">
				<h3 class="ui-title">Leaving the mobile site</h3>
				<p>You are now leaving the Websense mobile site. Do you wish to proceed?</p>
				<div class="modCenter">
					<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
					<a href="https://plus.google.com/+websense/about" data-role="button" data-inline="true" class="wsBButton" target=_blank">Continue</a>
				</div>
			</div>
		</div>
		<div data-role="popup" id="ws-youtube" data-overlay-theme="a" class="ui-corner-all wsModal">
			<div data-role="content" class="ui-corner-bottom ui-content">
				<h3 class="ui-title">Leaving the mobile site</h3>
				<p>You are now leaving the Websense mobile site. Do you wish to proceed?</p>
				<div class="modCenter">
					<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
					<a href="http://m.youtube.com/user/WBSNMKTG" data-role="button" data-inline="true" class="wsBButton" target=_blank">Continue</a>
				</div>
			</div>
		</div>
	</div>
	<?php include 'footer.php'; ?>                            