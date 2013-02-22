<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>websense mobile</title>
	<link type="text/css" rel="stylesheet" href="css/websense_mobile.css" />
<!--	<link rel="stylesheet" type="text/css" href="http://code.jquery.com/mobile/1.0b3/jquery.mobile-1.0b3.min.css" />-->
	
	<link rel="stylesheet" type="text/css" href="http://jquerymobile.com/test/css/themes/default/jquery.mobile.css" />
	<link rel="stylesheet" type="text/css" href="http://jquerymobile.com/test/docs/_assets/css/jqm-docs.css" />
<!--	<script src="http://code.jquery.com/jquery-1.6.2.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.0b3/jquery.mobile-1.0b3.min.js"></script>-->
	
	
	<script src="http://jquerymobile.com/test/js/jquery.js"></script>
	<script src="http://jquerymobile.com/test/docs/_assets/js/jqm-docs.js"></script>
	<script src="http://jquerymobile.com/test/js/jquery.mobile.js"></script>

	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDKpCpi_bRs2NU8q5yGJ37y45Ls_lEr1Bs&sensor=false"></script>
    <script>
      function initialize() {
        var myLatlng = new google.maps.LatLng(32.890501, -117.210278);
        var mapOptions = {
          zoom: 13,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

        var contentString = '<div id="content" style="width:200px;">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Websense North America Office</h1>'+
            '<div id="bodyContent">'+
            '<ul><li>10240 Sorrento Valley Rd</li>'+
			'<li>San Diego, California 92121</li>'+
			'<li>Tel:<a href="tel:18007231166"> 1-800-723-1166</a></li>'+
			'<li><a href="tel:18583208000">1-858-320-8000</a></li>'+
			'<li>Fax: 1-858-458-2950</li>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Websense North America Office'
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
      }

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
		html, body, #map_canvas {
        	margin: 0;
        	padding: 0;
        	height: 100%;
        	height:320px;
        	width:320px;
      	}
      	#firstHeading, #bodyContent ul {font-size:13px;}
		
	</style>
</head>
<body onload="initialize()">
<div data-role="page" class="ui-responsive-panel">
	<?php include 'header.php'; ?>
	<div data-role="content">
		<div id="map_canvas"></div>
	</div>
	<div data-role="footer"></div>
	 <?php include 'panel.php'; ?>
	
</div>
</body>
</html>
