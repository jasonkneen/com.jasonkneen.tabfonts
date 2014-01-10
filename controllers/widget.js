// initalise the properties
//
// $.tabFonts.init({
//	tabGroup : $.index,
//	font : "MarkerFelt-Wide",
//	selectedColor: "white",
//	fontSize: 11
// });

exports.init = function(args) {

	var tabGroup = args.tabGroup, tabButtons = [];

	// view to hoel the buttons
	var tabCaptionsWrapper = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : 55,
		bottom : 0,
		backgroundColor : "transparent",
		touchEnabled : false,
		layout : "horizontal"
	});

	// go through each tab in the tabgroup
	tabGroup.tabs.forEach(function(tab) {

		// create a button to overlay the tab
		var tabButton = Ti.UI.createButton({
			width : (100 / tabGroup.tabs.length) + "%",
			top : 35,
			height : 20,
			color : args.color || "#888",
			selectedColor : args.selectedColor || "#fff",
			touchEnabled : false,
			title : tab.title,
			style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
			font : {
				fontSize : args.fontSize || 10,
				fontFamily : args.font || "AvenirNextCondensed-DemiBold"
			}
		});

		// remove the real tab title
		tab.title = "";

		//  listen for tab changes, hilight accordingly
		tabGroup.addEventListener("focus", function(e) {
			tabButtons[e.index].color = args.selectedColor || "#fff";
			if (tabButtons[e.previousIndex]) {
				tabButtons[e.previousIndex].color = args.color || "#888";
			}
		});

		// add to the view
		tabCaptionsWrapper.add(tabButton);
		
		// keep a pointer to the button
		tabButtons.push(tabButton);
	});
	
	// add to the tabgroup
	tabGroup.add(tabCaptionsWrapper);
};
