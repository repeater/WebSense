<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>WebSense - AceInsight Report - Version 2</title>
	<script language="JavaScript" type="text/javascript">
		<!--
			if(document.images)
			{
			ws = Array()
			for(i=0;i<7;i++)
			{
			ws[i] = new Image()
			ws[i].src = "ws" + i + ".png"
			}
			}
			function iljval()
			{
			if(document.images)
			{
			valdbild = document.fargform.farg.selectedIndex+1;
			document.iljswitch.src = "ws"+valdbild+".png"
			}
			}
			window.onerror = null;
		//--> 
	</script>
	<style type="text/css">
		body {background:#000;}
		.nav,.content {width:1010px;position:relative;margin:0 auto;}
		.nav {height:50px;}
		.content {width:100%;text-align:center;}
	</style>
</head>
<body>
	<div class="nav">
		<form name="fargform">
			<select name = "farg" onChange = "iljval()">
				<option>Report 1 v2</option>
				<option>Report 2 v2</option>
				<option>Report 3 v2</option>
				<option>Report 4 v2</option>
				<option>Report 5 v2</option>
				<option>Report 6 v2</option>
				<option>Report 7 v2</option>
				<option>Report 8 v2</option>
				<option>Report 9 v2</option>
				<option>Report 10 v2</option>
				<option>Report 11 v2</option>
				<option>Report 12 v2</option>
				<option>Report 13 v2</option>
				<option>Report 14 v2</option>
				<option>Report 15 v2</option>
			</select>
		</form>
	</div>
	<div class="content"><img name="iljswitch" src="ws1.png" width="1010" /></div>
</body>
</html>
