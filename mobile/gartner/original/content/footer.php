	<div data-role="footer" class="wsFooter">
		<div data-role="navbar">
			<ul>
				<li><a href="/content/contact.php" class="ui-btn-active ui-state-persist">Contact Us</a></li>
				<li><a href="http://www.websense.com" target="_new" class="ui-btn-active ui-state-persist">Desktop</a></li>
			</ul>
		</div><!-- /navbar -->
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
</body>
</html>