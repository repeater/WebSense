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
			<li><a href="websense-triton-security-products.php">TRITON</a></li>
			<li><a href="websense-web-security-products.php">Web</a></li>
			<li><a href="websense-email-security-products.php">Email</a></li>
			<!--<li><a href="websense-data-security-products.php">Data</a></li>-->
			<li><a href="websense-mobile-security-products.php">Mobile</a></li>
		</ul>
	</div>
	<div data-role="content" class="wsPage">
		<h1>Data Discover</h1>
        <h2>Find your confidential data no matter where it is.</h2>
        <div data-role="collapsible-set" data-theme="c" data-content-theme="d" data-collapsed-icon="info" data-expanded-icon="info">
			<div data-role="collapsible" class="wsAccordion">
				<h3>Download the White Paper</h3>
				<iframe width="100%" scrolling="no" height="450" frameborder="0" allowtransparency="true" src="http://a1.websense.com/mobile-test.html"></iframe>
			</div>
		</div>
        <p>Websense<sup>&reg;</sup> Data Discover performs agent and agent-less discovery scans on networks, email servers, desktops, laptops and more. It can take remediation actions including encrypt, remove file, replace file, audit and log.</p>
        <a href="data-discover-tech-specs.php" data-shadow="false" data-role="button" data-mini="true" class="wsBButton" target="_new">Tech specs</a>
		<h4>Top Features</h4>
		<ul class="standard">
			<li><b>Discovers and classifies confidential data</b> stored on networks, endpoints and elsewhere. </li>
			<li><b>Automatically performs remediation actions</b> wherever sensitive data is found. </li>
			<li><b>Operates efficiently</b> with minimal impact on server performance by scheduling scans during off-peak hours. </li>
			<li><b>Identifies confidential data accurately</b> by using Websense PreciseID&trade; technology, natural language processing, digital fingerprints and optical character recognition (OCR).</li>
		</ul>
    </div>
	<?php include 'footer.php'; ?>