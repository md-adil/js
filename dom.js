var dom = (function(){
	var tags = ['a','abbr','address','area','article','aside','audio','b','base','bdi','bdo','big','blockquote','body','br','button','canvas','caption','cite','code','col','colgroup','data','datalist','dd','del','details','dfn','dialog','div','dl','dt','em','embed','fieldset','figcaption','figure','footer','form','h1','h2','h3','h4','h5','h6','head','header','hr','html','i','iframe','img','input','ins','kbd','keygen','label','legend','li','link','main','map','mark','menu','menuitem','meta','meter','nav','noscript','object','ol','optgroup','option','output','p','param','picture','pre','progress','q','rp','rt','ruby','s','samp','script','section','select','small','source','span','strong','style','sub','summary','sup','table','tbody','td','textarea','tfoot','th','thead','time','title','tr','track','u','ul', 'var','video','wbr',
	'circle','clipPath','defs','ellipse','g','line','linearGradient','mask','path','pattern','polygon','polyline','radialGradient','rect','stop','svg','text','tspan'];

	var domObj = function(tag, arg1, arg2, arg3) {
		var attrs = arg1, content = arg2;
		if(!arg2) {
			attrs = null;
			content = arg1;
		}
		var el = document.createElement(tag);
		if(typeof content == 'object') {
			el.appendChild(content);
		} else {
			el.innerHTML = content;
		}
		if(attrs) {
			for(var attr in attrs) {
				el[attr] = attrs[attr];
			}
		}
		if(arg3) {
			domObj.el = el;
			arg3.call(domObj);
		}
		return el;
	};
	Object.defineProperties(domObj, {
		to: {
			value: function(target) {
				element = this.el;
				var tes = document.querySelectorAll(target);
				for(var i = 0; i < tes.length; i++) {
					tes[i].appendChild(element);
				}
				delete this.el;
			}
		}
	});
	tags.forEach(function(tag) {
		Object.defineProperty(domObj, tag, {
			value: function(arg1, arg2, arg3) {
				return this.call(this, tag, arg1, arg2, arg3);
			}
		});
	});
	return domObj;
}());