webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n@font-face {\r\n  font-family: \"RobotoBold\";\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  src: url('RobotoBold.af01b5037ff63cf05210.woff')\r\n}\n@font-face {\r\n  font-family: \"RobotoMedium\";\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  src: url('RobotoMedium.5ca830617cdc06dbc5e2.woff')\r\n}\n@font-face {\r\n  font-family: \"RobotoRegular\";\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  src: url('RobotoRegular.18b2429ba6e7179daeec.woff')\r\n}\n@font-face {\r\n  font-family: \"RobotoLight\";\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  src: url('RobotoLight.d9c55cf94676b51b238f.woff')\r\n}\n@font-face {\r\n    font-family: \"MagistralTT-bold(1)\";\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    src: url('magistraltt-bold.5c9672c027d34598b334.woff')\r\n  }\n@font-face {\r\n  font-family: \"MagistralTT\";\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  src: url('magistraltt.5e3f46f48a0e79ec04c0.woff')\r\n}\n@font-face {\r\n  font-family: \"MagistralTT-Bold\";\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  src: url('magistraltt-bold.5c9672c027d34598b334.woff');\r\n}\n/*-----------Universal Styles----------------*/\nhtml, body {\n     height: 100%; \n}\nbody { \n    margin: 0; \n    padding: 0;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n/*-----------Padding----------------------*/\n.pad{\n    padding: 70px 0 70px;\n}\n/*------------Color Styling-----------*/\n.text-white{\n    color: white;\n}\n.chain{\n    color: #E79B07;\n}\na, p{\n    color: white;\n}\na:hover{\n    color: white;\n    text-decoration: none;\n}\n.blue{\n    color: rgb(90, 90, 202);\n    font-size: 20px;\n    font-weight: 500;\n}\n.blue:hover{\n    color:rgb(63, 63, 173);\n}\n.grey{\n    color: rgb(131, 138, 236);\n    font-size: 19px;\n    font-weight: 200\n}\n.grey:hover{\n    color:rgb(96, 96, 161);\n}\n.get{\n    color: #252a33;\n}\n.get:hover{\n    color: rgb(96, 96, 161);\n}\n.off-white{\n    background-color: rgba(234, 239, 245, 0.822);\n}\n/*-------------Font Styling-----------------*/\n.ultra-light{\n    font-size: 13px;\n    font-weight: 500;\n    font-family: \"RobotoRegular\";\n}\n.ultra-medium{\n    font-size: 14px;\n    font-weight: 500;\n    font-family: \"RobotoRegular\";\n}\n.logo-text{\n    font-family:'MagistralTT-Bold';\n    font-size: 30px;\n}\nli{\n    color: rgba(221, 233, 243, 0.822);\n}\n.textt {\n    text-align: center;\n}\n/*------------Positioning-------------*/\n.middle{\n    text-align: center;\n}\n/*----------Sizing----------------*/\n.size{\n    width: 40px;\n}\n/*---------Forms Stying---------*/\n.line-up{\n    color: white !important;\n    background-color: #252a33 !important;\n    border: 1px solid rgba(231, 156, 7, 0.568) !important;\n    border-radius: 25px !important;\n}\n.line-up:focus{\n    background-color: rgba(82, 99, 167, 0.603) !important;\n    outline: 0px !important;\n}\n/*----------Button Styling-----------*/\n.lit-btn{\n    background-color: rgba(82, 99, 167, 0.603)7;\n    border-radius: 25px;\n    border: 1px solid rgb(250, 173, 18);\n    display: inline-block;\n    line-height: 40px;\n    font-weight: 500; \n}\n.lit-btn:hover{\n    background-color:  rgba(82, 99, 167, 0.603);\n    border: 2px solid rgb(250, 173, 18);\n\n}\n/*---------------Seap-styling-----------*/\n.font-size-1{\n\tfont-size: 42px !important;\n\tcolor: white;\n}\n.font-size-2{\n\tfont-size: 44px !important;\n\tcolor: white;\n}\n.font-size-3{\n\tfont-size: 41px !important;\n\tcolor: white;\n}\n.font-size-4{\n\tfont-size: 20px !important;\n\tcolor: white;\n}\n.font-size-5{\n\tfont-size: 27px !important;\n\tcolor: white;\n}\n.font-six{\n    font-size: 5px;\n    color:black;\n}\n.font{\n\tfont-size: 13px;\n\tcolor: white;\n}\n.dark{\n\tcolor: black\n}\n.white{\n\tcolor: white;\n}\n.effect:hover{\n\ttext-decoration: none;\n}\n.btn-green{\n\tbackground-color: #FBEC5D ;\n}\n.btn-orange{\n\tbackground-color: #EB5E66 ;\n}\n.btn-army{\n\tbackground-color: #2E8B57 ;\n}\n.btn-violet{\n\tbackground-color: #B272A6;\n}\n.btn-yellow{\n\tbackground-color: #FFFCCF;\n}\n.btn-grin{\n  background-color: #A6D785;\n}\n.btn-wine{\n\tbackground-color: #F87531;\n}\n.btn-purple{\n  background-color:   #E0427F;\n}\n.btn-blue{\n\tbackground-color: #33A1C9;\n}\n.text-green{\n  color: #1E8449;\n}\n.text-purple{\n  color: #A569BD;\n}\n.text-blue{\n  color: #04375A;\n}\n.bold{\n\tfont-weight: bold;\n\tfont-size: 14px;\n}\n.bold-1{\n  font-weight: bold;\n  font-size: 15px;\n}\n.bold-2{\n  font-weight: bold;\n  font-size: 16px;\n}\n.hov{\n    border: 1px solid white !important;\n}\n.hov:hover{\n\tcolor: grey;\n\tborder: thin dashed grey !important;\t\n}\n.dark-hover{\n  color: white !important;\n}\n.dark-hover:hover{\n  color: black !important;\n}\n.green{\n  background-color: #4D6FAC;\n}\n.white-hover:hover{\n     background-color: rgba(0,0,0,0.3);\n     color:red;\n}\n.m-border{\n\tborder-right: 1px solid #696969;\n}\n.l-border{\n\tborder-right: 1px solid white;\n}\n.m-bd{\n\tborder-left: 2px solid white;\n}\n.link{\n\tcolor: white;\n}\n.link:hover{\n   color: #3399ff;\n   text-decoration: none;\n}\n.text-link{\n  color: black;\n}\n.text-link:hover{\n   color: #3399ff;\n   text-decoration: none;\n}\n.main-bg{\n\tbackground-color: #f5f5f7;\n}\n.first{\n\tposition: absolute;\n\ttop: 200px;\n\tleft: 260px;\n\tz-index: 1;\n}\n.bisque{\n    background-color: #EDE7E7;\n}\n.box-shadow{\n\t-webkit-box-shadow: 2px 2px  5px 2px grey;\n\t        box-shadow: 2px 2px  5px 2px grey;\n\t\n}\n.green{\n\tcolor: green;\n}\n.bol{\n\tfont-weight: bolder;\n\tcolor: white;\n}\n.m-white{\n\tbackground-color: white;\n}\n.f{\n\ttext-decoration: none;\n\tcolor: white;\n\n}\n.f:hover{\n    color: white;\n}\n.m-padding{\n    padding-top: 100px;\n    padding-bottom: 100px;\n}\n.foot-bg{\n  background: rgba(0,0,0,0.5);\n}\n@media (min-width: 200px) { \n   .m-padding{\n              padding-top: 200px;\n              padding-bottom: 425px;\n            }\n   .universal{\n              background-image: url('glo.28acc09a222a0e86cf6b.jpg');\n              background-repeat: no-repeat;\n              background-attachment: fixed;\n            }\n  .foot-bg{\n              background: rgba(0,0,0,0.5);\n              padding-top:  20px;\n              padding-bottom: 50px;\n            }\n }\n@media (min-width: 768px) { \n    .m-padding{\n              padding-top: 150px;\n              padding-bottom: 470px;\n              }\n }\n@media (min-width: 992px) {\n    .ee{\n\t    background-color: #D6C7C4;\n\t    min-height: 500px;\t\n       }\n    .m-padding{\n          padding-top: 150px;\n          padding-bottom: 400px;\n       }\n}\n@media (min-width: 1200px) { \n    .ee{\n\t    background-color:#D6C7C4;\n\t    min-height: 500px;\n       }\n       .m-padding{\n          padding-top: 130px;\n          padding-bottom: 200px;\n       }\n}\n@media (min-width: 1400px) { \n    .ee{\n        background-color:#000000;\n        min-height: 800px;\n       }\n       .m-padding{\n          padding-top: 150px;\n          padding-bottom: 350px;\n       }\n}\n.b-nav-links{\n    color: #EC7063;\n    text-decoration: none;\n}\n.b-nav-links:hover{\n    color: #C0392B;\n    text-decoration: none;\n}\n/* Nav bar dropdowns css*/\n.dropbtn {\n    background-color: #DCDCDC;\n    color: black;\n    font-size: 25px;\n    border: none;\n    cursor: pointer;\n}\n.dropbtn:hover {\n    background-color: #DCDCDC;\n}\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n.dropdown-content a {\n    color: grey;\n     padding: 10px;\n    text-decoration: none;\n    display: block;\n}\n.dropdown-content a:hover {\n\tbackground-color: white;\n\ttext-decoration: none;\n\tcolor: black;\n}\n.show {display:block;}\n.foot-border{\n  border-bottom: 1px solid;\n  border-color:  #000033   ;\n}\n.foot-border-2{\n  border-bottom: 1px solid white;\n}\n.foot-text{\n  font-size: 35px;\n  font-weight: bold;\n  color: white;\n}\n/* The side navigation menu */\n.sidenav {\n    height: 100%; /* 100% Full-height */\n    width: 213px;\n    display:none;\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    left: 0; \n    background-color: #C0D9D9; /* Blue*/\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px; /* Place content 60px from the top */\n    -webkit-transition: 0.5s;\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n    margin-top: 65px;\n}\n/* The navigation menu links */\n.sidenav a {\n    padding: 10px 10px 10px 32px;\n    text-decoration: none;\n    font-size: 15px;\n    color: #5959AB;\n    display: block;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n}\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover {\n    color: #551A8B;\n    text-decoration: none;\n}\n/* Position and style the close button (top right corner) */\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\n#main {\n    -webkit-transition: margin-left .5s;\n    transition: margin-left .5s;\n    padding: 20px;\n}\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n}\n.dropdown-container {\n    display: none;\n    background-color: #E8F1D4;\n    padding-left: 10px;\n \n}\n.btn-light-blue{\n    background-color: #C0D9D9;\n}\n.tab button {\n  background-color: #65909A ;  \n  color: white;\n  font-weight: bold;\n}\n.tab button:hover {\n    background-color: #4F8E83  ;\n}\n.tab button:active {\n  background-color: #4F8E83;\n}\n.tabcontent {\n    display: none;\n    padding: 6px 12px;\n    border: 1px solid #ccc;\n    border-top: none;\n}\n.head-border{\n  border-bottom: 2px solid;\n  border-color:  white;\n}\n.text-bluee{\n  color: #000033;\n}\n.center{\n  float: none; \n  margin: 0 auto;\n}\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map