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
	<div data-role="content" class="wsPage">
		<h1>Platforms</h1>
        <h2>We offer multiple platforms to match your organization’s needs.</h2>
        <p>Websense offers three platforms, plus a hybrid option, so you can choose how best to deploy Websense information security products at your organization.</p>
        <div data-role="collapsible-set" data-theme="c" data-content-theme="d" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d">
			<div data-role="collapsible">
				<h3>Cloud</h3>
				<p><b>Highly available cloud-based deployment.</b></p>
				<ul class="standard no-indent tight">
					<li>No hardware to purchase or maintain </li>
					<li>No software to install, update, or maintain </li>
					<li>Increased bandwidth </li>
					<li>Ease of scalability </li>
					<li>Automatic spooling of email </li>
					<li>Global ISO-27001-certified data centers </li>
				</ul>
				<a href="cloud-platforms.php" data-shadow="false" data-role="button" data-mini="true" class="wsBButton">Learn More</a>
			</div>
			<div data-role="collapsible" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d">
				<h3>Software</h3>
				<p><b>Installed on your servers. </b></p>
				<ul class="standard no-indent tight">
					<li>Easily adapts to your setup</li>
					<li>Well suited to virtual environments </li>
				</ul>
				<a href="software-platforms.php" data-shadow="false" data-role="button" data-mini="true" class="wsBButton">Learn More</a>
			</div>
			<div data-role="collapsible">
				<h3>Appliance</h3>
				<p><b>Simple on-site deployment.</b></p>
				<ul class="standard no-indent tight">
					<li>Optimal performance and reliability </li>
					<li>Easy deployment </li>
					<li>Simplified support and updates </li>
					<li>Common Criteria (CC) EAL 2+ certification  </li>
					<li>Economical compared to multiple-vendor setups </li>
					<li>Graphical interface for hardware and system management </li>
				</ul>
				<a href="appliances-platforms.php" data-shadow="false" data-role="button" data-mini="true" class="wsBButton">Learn More</a>
			</div>
			<div data-role="collapsible">
				<h3>Hybrid</h3>
				<p><b>Deployed on an appliance and in the cloud.</b></p>
				<ul class="standard no-indent tight">
					<li>Maximum flexibility </li>
					<li>Primary sites secured with appliances</li>
					<li>Remote offices and mobile users secured in the cloud </li>
					<li>A single policy and reporting system manages both platforms</li>
					<li>Half the operating costs of similar hybrid systems </li>
					<li>Back up web security with automatic failover to the cloud </li>
				</ul>
				<a href="hybrid-platforms.php" data-shadow="false" data-role="button" data-mini="true" class="wsBButton">Learn More</a>
			</div>
		</div>
	</div>
	<?php include 'footer.php'; ?>