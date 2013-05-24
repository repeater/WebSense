<html>
<head>
<title>Web Security, Email Security, Data Security, Mobile Security- Websense.com</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile-1.3.0.min.css" />
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.3.0/jquery.mobile.structure-1.3.0.min.css" />
<link rel="stylesheet" media="screen" type="text/css" href="/assets/css/mobile2013.css" />
</head>
<body>
<div data-role="page">
	<?php include 'header.php'; ?>
	<?php include 'panel.php'; ?>
	<div data-role="content" class="wsPage">
		<div class="wsBG wsBGOne"></div>
		<h2>Contact Websense&reg;</h2>
		<h3>North America Corporate Office</h3>
		<address>
			<a href="directions.php" title="Mapping Directions to Websense">10240 Sorrento Valley Road</a><br />
			San Diego, CA 92121
		</address>
		Tel: <a href="tel:1-800-723-1166" title="Websense Corporate Number">1-800-723-1166</a> or <br />
		Tel: <a href="tel:1-858-320-8000" title="Websense Corporate Number">1-858-320-8000</a><br />
		Fax: 1-858-458-2950
		
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