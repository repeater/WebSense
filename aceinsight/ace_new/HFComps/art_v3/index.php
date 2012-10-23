<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>WebSense - AceInsight Portal - Version 3</title>
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
		.nav,.content {width:1214px;position:relative;margin:0 auto;}
		.nav {height:50px;}
		.content {width:100%;text-align:center;}
	</style>
</head>
<body>
	<div class="nav">
		<form name="fargform">
			<select name = "farg" onChange = "iljval()">
				<option>Screen 1 v3</option>
				<option>Screen 2 v3</option>
				<option>Screen 3 v3</option>
				<option>Screen 4 v3</option>
				<option>Screen 5 v3</option>
				<option>Screen 6 v3</option>
				<option>Screen 7 v3</option>
				<option>Screen 8 v3</option>
				<option>Screen 9 v3</option>
			</select>
		</form>
	</div>
	<div class="content"><img name="iljswitch" src="ws1.png" width="1214" /></div>
</body>
</html>
