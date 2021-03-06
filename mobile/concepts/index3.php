<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>websense mobile</title>
	<link rel="stylesheet" type="text/css" href="http://jquerymobile.com/demos/1.3.0/css/themes/default/jquery.mobile-1.3.0.css" />
	<link rel="stylesheet" type="text/css" href="http://jquerymobile.com/demos/1.3.0/docs/_assets/css/jqm-demos.css" />
	<link rel="stylesheet" type="text/css" href="css/websense_mobile.css" />
	<style rel="stylesheet" type="text/css">
		.ui-btn-inner {
		    font-size: 13px;
		    white-space: nowrap;
		}
		.ui-link-inherit {
			margin:2px 0;
		}
	</style>
	<script>
		$(document).ready(function() {
			$( "#navpanel" ).trigger( "updatelayout" );
		});
	</script>
</head>
<body>
<div data-role="page">
	<?php include 'header.php'; ?>
	<?php include 'panel.php'; ?>
	<div data-role="content">
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
            <li><b>Websense TruEmail DLP™ capability</b> offers enterprise-level protection against data theft and data loss for the SMTP channel. It includes natural language processing, data fingerprinting, mobile email DLP, incident forensics reporting, and more than 1,600 built-in templates for compliance to prevent confidential data from leaving the corporate network via email.</li>
            <li><b>URL sandboxing</b> provides point-of-click threat analysis by isolating suspicious links embedded in emails and analyzing their destination when users click on them.</li>
        </ul>
        <p><a href="data-security-suite-features.aspx">Data Security Suite</a></p>
        <ul class="standard">
            <li><b>Websense PreciseID™ technology</b> identifies and classifies more than 370 different file types and formats — even when content is cut and pasted from one format to another. In conjunction with the <a href="websense-threatseeker-network.aspx">Websense ThreatSeeker Network</a>, PreciseID technology enables Data Security Suite to protect confidential data and prevent information leaks.</li>
            <li><b>Over 1,600 pre-defined policies and over 1,100 pre-defined content classifiers</b> help identify and protect sensitive information. </li>
            <li><b>Optical character recognition (OCR)</b> identifies sensitive data embedded within images and prevents loss. </li>
        </ul>
        <table class="lined">
            <thead>
                <tr>
                    <th class="center">Feature </th>
                    <th class="center span3">Description </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>TRITON Unified Security Center</b></td>
                    <td class="span3">
                    Reduces TCO by unifying management of web security, data security and email security components.
                    </td>
                </tr>
                <tr>
                    <td><b>Malware protection</b></td>
                    <td class="span3">
                    <a href="websense-advanced-classification-engine.aspx">Websense ACE (Advanced Classification Engine)</a> scans inbound and outbound email for malware, spyware and targeted and blended threats. Combining real-time composite risk scoring with security intelligence from the <a href="websense-threatseeker-network.aspx">Websense ThreatSeeker&reg; Network</a>, ACE protects against both known and unknown threats within email.
                    </td>
                </tr>
                <tr>
                    <td><b>Spam Detection </b></td>
                    <td class="span3">
                    Websense provides highly accurate spam blocking with very low false positives that is backed by a 99% or higher spam detection service level agreement. Spam is identified using a combination of technologies including sender reputation, adaptive learning, URL analysis, heuristics, suspicious PDF identification and optical recognition of image spam.          </td>
                </tr>
                <tr>
                    <td><b>Enterprise Class DLP</b></td>
                    <td class="span3">
                    Expands DLP across all enterprise channels with a simple license key upgrade, letting you use a single management console to create and apply one policy to email, web and endpoints.          </td>
                </tr>
                <tr>
                    <td><b>Mobile Email DLP</b></td>
                    <td class="span3">
                    Prevents users from accessing confidential emails and attachments on mobile devices.
                    </td>
                </tr>
                <tr>
                    <td><b>Email Spooling for Disaster Recovery </b></td>
                    <td class="span3">
                    Built-in redundancy and email spooling ensures that email is never lost during a network or mail server outage.           </td>
                </tr>
                <tr>
                    <td><b>Quarantine Management </b></td>
                    <td class="span3">
                    Includes a powerful search engine for complete visibility and access of quarantined messages and logs.
                    </td>
                </tr>
                <tr>
                    <td><b>End-User Self Service </b></td>
                    <td class="span3">
                    Reduces administrative overhead by giving scheduled and on-demand access to users, enabling them to view and release quarantined messages and whitelist/blacklist senders.
                    </td>
                </tr>
                <tr>
                    <td><b>Reporting</b></td>
                    <td class="span3">
                    Includes multiple report types to provide summary and detailed visibility into types and volumes of threats, number of messages processed, policy violations and more.
                    </td>
                </tr>
                <tr>
                    <td><b>TLS Encryption </b></td>
                    <td class="span3">
                    Encrypts email between the sender's mail server and the receiver's mail server to prevent the email from being intercepted or altered while traversing the Internet.
                    </td>
                </tr>
                <tr>
                    <td><b>Advanced Email Encryption* </b></td>
                    <td class="span3">
                    Encrypts the entire email and any attachments so that the contents are viewed only by intended recipient(s).
                    </td>
                </tr>
                <tr>
                    <td><b>Email Archive* </b></td>
                    <td class="span3">
                    Every email that any person in your business sends and receives is securely archived, searchable and accessible forever in the cloud.
                    </td>
                </tr>
                <tr>
                    <td><b>Image Analysis* </b></td>
                    <td class="span3">
                    Reliably detects pornographic images to ensure compliance with network use policy.
                    </td>
                </tr>
            </tbody>
        </table>
		<!--<video width="320" height="240" poster="http://www.websense.com/assets/imgs/2013/video-thumb-next-generation-email-security.png" preload="auto" controls>
		  <source src="http://www.websense.com/assets/videos/EmailSecurity.mp4" type="video/mp4">
		  <source src="assets/video/video-ace-en.mov" type="video/m4v">
		  <source src="http://v2v.cc/~j/theora_testsuite/320x240.ogg">
		  <source src="movie.ogg" type="video/ogg">
		  Your browser does not support the video tag.
		</video>-->
		<h2>Unified Data Loss Prevention for Gateways, Endpoints and Discovery</h2>
		<p>From tarnished brand reputation to regulatory fines, the adverse impacts of data breaches are clear. Just a single incident of data loss can erode a business's competitive advantage, weaken consumer confidence, and result in fines or penalties from regulators. The problem is further exacerbated with rapid proliferation of mobile computing devices, widespread use of peripheral devices, and easy access to file-sharing software — all increasing the opportunity for data loss and theft.</p>
		<h3>Why is Websense Data Security Suite the best choice?</h3>
		<p>Websense Data Security Suite secures organizations against a wide range of data loss scenarios with a single policy framework for network and endpoint data loss prevention and confidential data discovery.</p>
		<div data-role="collapsible-set" data-theme="b" data-content-theme="c">
			<div data-role="collapsible">
				<h2>Data Security Suite</h2>
				<ul data-role="listview">
					<li><p>Websense Data Security Suite comprises all three data security products for full data loss prevention (DLP).</p>
						<p><a href="#"Learn more </a></p>
					</li>
				</ul>
			</div>
			<div data-role="collapsible">
				<h2>Data Security Gateway</h2>
				<ul data-role="listview">
					<li><a href="index.html">
						<p>Websense Data Security Suite comprises all three data security products for full data loss prevention (DLP).</p>
						<p><a href="#"Learn more </a></p>
						</a>
					</li>
				</ul>
			</div>
			<div data-role="collapsible">
				<h2>Data Endpoint</h2>
				<ul data-role="listview">
					<li><a href="index.html">
						<p>Websense Data Security Suite comprises all three data security products for full data loss prevention (DLP).</p>
						<p><a href="#"Learn more </a></p>
						</a>
					</li>
				</ul>
			</div>
			<div data-role="collapsible">
				<h2>Data Discover</h2>
				<ul data-role="listview">
					<li><a href="index.html">
						<p>Websense Data Security Suite comprises all three data security products for full data loss prevention (DLP).</p>
						<p><a href="#"Learn more </a></p>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div data-role="collapsible" data-theme="b" data-content-theme="c">
				<h2>Download White Paper</h2>
				<iframe width="280" height="450" src="http://a1.websense.com/defending-against-todays-targeted-phishing-attacks.html?sfcmpid=70120000000aR15" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
		</div>
		<ul data-role="listview" data-inset="true">
			<li data-role="list-divider">Next Steps</li>
			<li><a href="index.html">Tech Specs</a></li>
			<li><a href="index.html">Product Resources</a></li>
			<li><a href="index.html">Related Products</a></li>
		</ul>
	<div data-role="footer">
		
		<div data-role="navbar">
			<ul>
				<li><a href="#">Contact Us</a></li>
				<li><a href="#">Corporate Site</a></li>
			</ul>
		</div><!-- /navbar -->
	</div>
	 
</div>
<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
<script src="http://jquerymobile.com/demos/1.3.0/docs/_assets/js/jquery.mobile.demos.js"></script>
<script src="http://jquerymobile.com/demos/1.3.0/js/jquery.mobile-1.3.0.js"></script>
</body>
</html>