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
<div data-role="page">
	<?php include 'header.php'; ?>
	<?php include 'panel.php'; ?>
	<div data-role="content" class="wsPage">
	<a name="top"></a>
		<div class="wsBG wsBGTwo"></div>
		<h2>Our most comprehensive information security solution.</h2>
        <p>Websense&reg; TRITON™ Enterprise protects on-site and remote employees from the latest threats in a unified, hybrid solution. You
        can add <a href="cybersecurity-intelligence-services-overview.aspx">Websense CyberSecurity Intelligence™ (CSI) services</a> to get online
        malware sandboxing and direct access to <a href="http://securitylabs.websense.com/">Websense Security Labs™</a> threat researchers.</p>
        <p>And as with all TRITON solutions, you get:</p>
        <ul class="standard">
            <li>Unified Architecture</li>
            <li>Unified Security Intelligence</li>
            <li>Unified Policy and Reporting</li>
        </ul>
        <p>Top Features</p>
        <p><a href="web-security-gateway-anywhere-features.aspx">Web Security Gateway Anywhere</a></p>
        <ul class="standard">
            <li><b>Websense TruHybrid™ deployment</b> protects entire networks, including headquarters, branch offices and remote and mobile users. It enables provisioning through one unified interface.</li>
            <li><b>Websense TruWeb DLP™ capability</b> prevents data loss and enables compliance. It includes unique features such as geo-location destination awareness and detection of criminal encrypted uploads, password file data theft, and slow data leaks (“drip” DLP). Other highlights include natural language processing, advanced machine learning and more than 1,600 policies and templates.</li>
            <li><b>Gateway threat analysis</b> uses real-time, inline security analysis from <a href="websense-advanced-classification-engine.aspx">Websense ACE (Advanced Classification Engine)</a> and threat intelligence from the <a href="websense-threatseeker-network.aspx">Websense ThreatSeeker™ Network</a> to defend against advanced malware, blended threats and spam.</li>
        </ul>
        <p><a href="email-security-gateway-anywhere-features.aspx">Email Security Gateway Anywhere</a></p>
        <ul class="standard">
            <li><b>Websense TruHybrid™ deployment</b> conserves your network bandwidth by removing spam and threats from inbound email in the cloud. TruHybrid™ deployment is ISO 27001 certified and provides 99.999% service availability and 99% or higher spam detection.</li>
            <li><b>Websense TruEmail DLP™ capability</b> offers enterprise-level protection against data theft and data loss for the SMTP channel. It includes natural language processing, data fingerprinting, mobile email DLP, incident forensics reporting, and more than 1,600 built-in templates for compliance to prevent confidential data from leaving the corporate network via email.</li>
            <li><b>URL sandboxing</b> provides point-of-click threat analysis by isolating suspicious links embedded in emails and analyzing their destination when users click on them.</li>
        </ul>
        <p><a href="data-security-suite-features.aspx">Data Security Suite</a></p>
        <ul class="standard">
            <li><b>Websense PreciseID™ technology</b> identifies and classifies more than 370 different file types and formats — even when content is cut and pasted from one format to another. In conjunction with the <a href="websense-threatseeker-network.aspx">Websense ThreatSeeker Network</a>, PreciseID technology enables Data Security Suite to protect confidential data and prevent information leaks.</li>
            <li><b>Over 1,600 pre-defined policies and over 1,100 pre-defined content classifiers</b> help identify and protect sensitive information. </li>
            <li><b>Optical character recognition (OCR)</b> identifies sensitive data embedded within images and prevents loss. </li>
        </ul>
		<div data-role="collapsible-set" data-theme="c" data-content-theme="d" data-collapsed-icon="info" data-expanded-icon="info">
			<div data-role="collapsible" class="wsAccordion">
				<h3>Download the White Paper</h3>
				<iframe width="100%" scrolling="no" height="450" frameborder="0" allowtransparency="true" src="http://a1.websense.com/mobile-test.html"></iframe>
			</div>
		</div>
	</div>
	<?php include 'footer.php'; ?>
</div>
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="http://code.jquery.com/mobile/1.3.0/jquery.mobile-1.3.0.min.js"></script>
<script>
	$(document).ready(function() {
		$( "#navpanel" ).trigger( "updatelayout" );
	});
</script>
<script src="http://demos.flesler.com/jquery/scrollTo/js/jquery.scrollTo-min.js"></script>
<script type="text/javascript">
	$("div[data-role=collapsible] h3").on("click", function() { 
		_this = this;
		setTimeout(function() {
			$.scrollTo(_this);
		},100);
	});
</script>
</body>
</html>