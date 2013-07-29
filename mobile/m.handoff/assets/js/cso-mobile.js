google.load("feeds", "1");
function initialize() 
{
	var newsFeed = new google.feeds.Feed("http://community.websense.com/blogs/websense-insights/rss.aspx?Tags=Office+of+the+CSO&AndTags=1 ");
	newsFeed.setNumEntries(10);
	newsFeed.load(function(result) 
	{
		if (!result.error) 
		{
			var container = document.getElementById("csoblog-content");
			if (container) { 
				for (var i = 0; i < 10; i++) 
				{
					var entry = result.feed.entries[i];
					var url = entry.link;
					var title = entry.title;
					var newItem = document.createElement("li");
					newItem.innerHTML ='<a href=' + url + '>' + title + '</a>';
					container.appendChild(newItem);   
				}
			}
		}
	});
	
}
google.setOnLoadCallback(initialize);
