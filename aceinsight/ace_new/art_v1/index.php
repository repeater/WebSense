<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>WebSense - AceInsight Portal</title>
	<script language="JavaScript" type="text/javascript">
		<!--
			if(document.images)
			{
			bild = new Array()
			for(i=0;i<7;i++)
			{
			ws[i] = new Image()
			ws[i].src = "iljbild" + i + ".png"
			}
			}
			function iljval()
			{
			if(document.images)
			{
			valdbild=document.fargform.farg.options[document. fargform.farg.selectedIndex].text.charAt(5)
			document.iljswitch.src = "iljbild"+valdbild+".png"
			}
			}
			window.onerror = null;
		//--> 
	</script>
</head>
<body>
	<form name ="fargform">
		<select name = "farg" size = "8" onChange = "iljval()">
			<option>ws 1
			<option>ws 2
			<option>ws 3
			<option>ws 4
			<option>ws 5
			<option>ws 6
			<option>ws 7
		</select>
	</form>
	
	<img name="iljswitch" src="ai_home.png" width="1214" />
</body>
</html>
