	<div data-role="footer" class="wsFooter">
		<div data-role="navbar">
			<ul>
				<li><a href="/content/contact.php" class="ui-btn-active ui-state-persist">Contact Us</a></li>
				<li><a href="#popupDialog" class="ui-btn-active ui-state-persist"
				data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-transition="pop">Desktop</a></li>
			</ul>
		</div><!-- /navbar -->
	</div>
	<div data-role="popup" id="popupDialog" data-overlay-theme="a" class="ui-corner-all">
		<div data-role="content" class="ui-corner-bottom ui-content">
			<h3 class="ui-title">Leaving the mobile site</h3>
			<p>This link you will take you to our desktop site, not optimized for mobile devices. Do you wish to continue?</p>
			<div class="modCenter">
				<a href="#" data-role="button" data-inline="true" data-rel="back" class="wsGButton">Cancel</a> 
				<a href="http://www.websense.com" data-role="button" data-inline="true" class="wsBButton">Continue</a>
			</div>
		</div>
	</div>
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
	var SCROLL_DURATION = 0;
	var SCROLL_OFFSET = -95;
	$("div[data-role=collapsible] h3").on("click", function() { 
		_this = $(this);
		setTimeout(function() {
			$.scrollTo(_this.position().top + SCROLL_OFFSET, SCROLL_DURATION, { axis: "y" });
		},100);
	});
</script>
<script type="text/javascript">
	function receiveMessage(event)
		{
		  //alert(event.origin);

		  // Do we trust the sender of this message?  (might be
		  // different from what we originally opened, for example).
		  if (event.origin !== "http://stimulusdesign.com")
			return;
		//alert(event.data.height);
		
		  $("#frame-one").height(event.data.height);
		}
		window.addEventListener("message", receiveMessage, false);
</script>
<script src="http://websense.com/assets/js/2013/cso.js" type="text/javascript"></script> 
</body>
</html>