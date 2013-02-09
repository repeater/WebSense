L for it<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>websense mobile</title>
	<link type="text/css" rel="stylesheet" href="css/websense_mobile.css" />
<!--	<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.0b3/jquery.mobile-1.0b3.min.css" />-->
	
	<link rel="stylesheet" type="text/css" href="http://jquerymobile.com/test/css/themes/default/jquery.mobile.css" />
	
<!--	<script src="http://code.jquery.com/jquery-1.6.2.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.0b3/jquery.mobile-1.0b3.min.js"></script>-->
	
	
	<script src="http://jquerymobile.com/test/js/jquery.js"></script>
	<script src="http://jquerymobile.com/test/docs/_assets/js/jqm-docs.js"></script>
	<script src="http://jquerymobile.com/test/js/jquery.mobile.js"></script>


	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&libraries=places&key=AIzaSyDKpCpi_bRs2NU8q5yGJ37y45Ls_lEr1Bs"></script> 
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
						self.openInfoWindow({ 'content': 'Your authority is not recognized in fort kickass.' }, this);
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

	<style>
		.ui-btn-inner {
		    font-size: 13px;
		    white-space: nowrap;
		}
		.ui-link-inherit {
			margin:2px 0;
		}
		.ui-content {padding:0;}
		/*html, body, #map_canvas {
        	margin: 0;
        	padding: 0;
        	height: 100%;
        	height:320px;
        	width:320px;
      	}*/
      	#firstHeading, #bodyContent ul {font-size:13px;}
		
	</style>
</head>
<body>
<div data-role="page" class="ui-responsive-panel">
	<?php include 'header.php'; ?>
	<div data-role="content">
		
		<div id="directions_map">
			<div data-role="content">	
				<div class="ui-bar-c ui-corner-all ui-shadow" style="padding:1em;">
					<div id="map_canvas_1" style="height:300px;"></div>
					<p>
						<label for="from">From</label>
						<input id="from" class="ui-bar-c" type="text" placeholder="Your location" />
					</p>
					<p>
						<label for="to">To</label>
						<input id="to" class="ui-bar-c" type="text" value="10240 Sorrento Valley Rd San Diego, California 92121" />
					</p>
					<a id="submit" href="#" data-role="button" data-icon="search">Get directions</a>
				</div>
				<div id="results" class="ui-listview ui-listview-inset ui-corner-all ui-shadow" style="display:none;">
					<div class="ui-li ui-li-divider ui-btn ui-bar-b ui-corner-top ui-btn-up-undefined">Results</div>
					<div id="directions"></div>
					<div class="ui-li ui-li-divider ui-btn ui-bar-b ui-corner-bottom ui-btn-up-undefined"></div>
				</div>
			</div>
		</div>
		
	</div>
	<div data-role="footer">
		
		<div data-role="navbar">
			<ul>
				<li><a href="#">Contact Us</a></li>
				<li><a href="#">Corporate Site</a></li>
			</ul>
		</div><!-- /navbar -->
	</div>
	 <?php include 'panel.php'; ?>
</div>
</body>
</html>
