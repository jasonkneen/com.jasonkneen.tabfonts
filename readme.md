# TabFonts for Alloy
## Overview
This is a widget for the [Appcelerator](http://www.appcelerator.com) [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework which works ontop of an existing iOS TabGroup to allow custom captions, fonts etc.

The idea was to come up with something that could "just work" - you can add to your index.xml, initalise the widget with the TabGroup and setup some basic settings.

### NOTE: This is very much "work in progress" and I'm tweaking as I use this in current projects

![TabFonts](https://raw.github.com/jasonkneen/images/master/tabfonts/tabfonts.png)

## Quick Start
* [Download the latest version](https://github.com/jasonkneen/com.jasonkneen.tabfonts) of the widget as a ZIP file.
* Unzip the folder to your project under `app/widgets/com.jasonkneen.tabfonts`.
* Add the widget as a dependency to your `app/config.json` file:

```javascript
"dependencies": {
	"com.jasonkneen.tabfonts":"1.0"
}
```

* Add the widget as the last item in the first Window of your TabGroup.

```xml
<Alloy>
	<TabGroup platform="ios">		
		<Tab title="Home" icon="530-scooter.png" >
			<Window>
				<TitleControl platform="ios">
					<Label color="#fff" id="title">Home</Label>
				</TitleControl>
				<Require src="home" type="view"/>
				<Widget id="tabFonts" src="com.jasonkneen.tabfonts"/>
			</Window>
		</Tab>
		<Tab title="New" icon="533-helicopter.png">
			<Window class="container" title= "New">
				
				<Label id="label" >Hello, World</Label>
			</Window>
		</Tab>
		
	</TabGroup>
	<Require platform="android" src="home"></Require>
</Alloy>
```

* Configure the widget from the index.js file (current properties supported shown here)

```js
$.tabFonts.init({
	tabGroup : $.index,
	font : "MarkerFelt-Wide",
	color: "black",
	selectedColor: "white",
	fontSize: 11
});
```
## License

<pre>
Copyright 2014 Jason Kneen

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>
