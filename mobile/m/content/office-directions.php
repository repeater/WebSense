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
		<!--<div class="wsBG wsBGOne"></div>-->
		<div id="directions_map">
		<h1>Corporate Office</h1>
			<h2>Directions</h2>
			<div data-role="content" style="padding:0 !important;">	
				<div class="ui-bar-c ui-corner-all ui-shadow wsMapSearch" style="border:none;">
					<div id="map_canvas_1" style="height:300px;"></div>
					<div id="results" class="ui-listview ui-listview-inset ui-corner-all ui-shadow" style="display:none;">
						<div class="ui-li ui-li-divider ui-btn ui-bar-c ui-corner-top ui-btn-up-undefined"><h3>Results<h3></div>
						<div id="directions"></div>
						<div class="ui-li ui-li-divider ui-btn ui-bar-c ui-corner-bottom ui-btn-up-undefined"></div>
					</div>
					<p>
						<label for="from" class="wsBold"><b>From</b></label>
						<input id="from" class="ui-bar-c" type="text" placeholder="Your location" />
					</p>
					<p>
						<label for="to"><b>To</b></label>
						<input id="to" class="ui-bar-c wsBold" type="text" value="10240 Sorrento Valley Rd San Diego, California 92121" />
					</p>
					<a href="#" id="submit" data-role="button" data-icon="search">Get Directions</a>
				</div>
			</div>
		</div>
	</div>
	<?php include 'footer.php'; ?>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&libraries=places&key=AIzaSyAWiBTk-mEE636LdcJVpGo71mpjKkfsnzs"></script> 
<script src="http://jquery-ui-map.googlecode.com/svn/trunk/ui/jquery.ui.map.js"></script>
<script src="http://jquery-ui-map.googlecode.com/svn/trunk/ui/jquery.ui.map.services.js"></script>
<script src="http://jquery-ui-map.googlecode.com/svn/trunk/ui/jquery.ui.map.extensions.js"></script>
<script type="text/javascript">			
	var mobileDemo = { 'center': '32.890501, -117.210278', 'zoom': 14 };
	
	////////////////////////////////////////////////////////////
	
	$(function() {
		$('#map_canvas_1').gmap({'center': mobileDemo.center, 'zoom': mobileDemo.zoom, 'disableDefaultUI':true, 'callback': function() {
			var self = this;
			
			// add marker
			self.addMarker({'position': this.get('map').getCenter() }).click(function() {
				self.openInfoWindow({ 'content': 'Some Text' }, this);
			});

			// get current position
			self.getCurrentPosition( function(position, status) {
				if ( status === 'OK' ) {
					var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
					//self.get('map').panTo(latlng);
					self.search({ 'location': latlng }, function(results, status) {
						if ( status === 'OK' ) {
							$('#from').val(results[0].formatted_address);
						}
					});
				} else {
					alert('Unable to get current position');
				}
			});
		
			// submit
			$('#submit').click(function() {
				self.displayDirections({ 'origin': $('#from').val(), 'destination': $('#to').val(), 'travelMode': google.maps.DirectionsTravelMode.DRIVING }, { 'panel': document.getElementById('directions')}, function(response, status) {
					if ( status !== 'OK' ) { 
						$("#directions").html("We could not calculate directions between " + $("#from").val() + " and " + $("#from").val());
					}
					$('#results').show()
				});
				return false;
			});
		}});
	});
</script>