/***********************************************
**	Combined Global Scripts
**	Author:		Gilbert Martin
**	Created: 	08/22/12
**	Modified:	08/22/12
**	Notes:		N/A
**	Contents:	com1 - SWFObject
**				com2 - jws
**				com3 - Jquery Placeholder
**				com4 - Jquery Cookie		
**				com5 - mbox code
**				com6 - flowplayer
**				com7 - unified websense scripts
**/

/*	com1	
	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

/***********************
* com2
* Author: fhays
* Description: Javascript library for various data points on websense.com
* -----------------------
*/
var jws = (function() {
    // constructor
    function utility(baseUrl) {
        this.baseUrl = 'https://www.websense.com';
        if (baseUrl != null && typeof (baseUrl) != 'undefined')
            this.baseUrl = baseUrl;
    }

    // public instance methods
    utility.prototype.getVisitor = function(callback) {
        var ajaxBase = this.baseUrl;
        doAjax("GetVisitor", ajaxBase, callback);
    }
    
    utility.prototype.logout = function(callback) {
        var ajaxBase = this.baseUrl;
        doAjax("Logout", ajaxBase, callback);
    }

    // private methods
    function doAjax(methodName, ajaxBase, successCallback) {
        $.ajax({
            url: ajaxBase + "/controls/WebDataServiceJsonp.asmx/" + methodName,
            dataType: "jsonp",
			contentType: "",
            success: function(msg) {
                if (successCallback != null)
                    successCallback(msg.d);
            }
        });
    }

    return {
        utility: utility,

        // finds commented out code in a form and re-inserts into the dom without comments.
        removeFormComments: function (className) {
            $(function () {
                $("form." + className).contents().each(function () {
                    if (this.nodeType == 8) {
                        $(this).parent().prepend(this.nodeValue);
                        $(this).remove();
                    }
                });
            });
        }
    }
})();

/**com3
 * jQuery.placeholder - Placeholder plugin for input fields
 * Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
 * Date: 2008/10/14
 *
 * @author Blair Mitchelmore
 * @version 1.0.1
 *
 **/
new function($) {
    $.fn.placeholder = function(settings) {
        settings = settings || {};
        var key = settings.dataKey || "placeholderValue";
        var attr = settings.attr || "placeholder";
        var className = settings.className || "placeholder";
        var values = settings.values || [];
        var block = settings.blockSubmit || false;
        var blank = settings.blankSubmit || false;
        var submit = settings.onSubmit || false;
        var value = settings.value || "";
        var position = settings.cursor_position || 0;

        
        return this.filter(":input").each(function(index) { 
            $.data(this, key, values[index] || $(this).attr(attr)); 
        }).each(function() {
            if ($.trim($(this).val()) === "")
                $(this).addClass(className).val($.data(this, key));
        }).focus(function() {
            if ($.trim($(this).val()) === $.data(this, key)) 
                $(this).removeClass(className).val(value)
                if ($.fn.setCursorPosition) {
                  $(this).setCursorPosition(position);
                }
        }).blur(function() {
            if ($.trim($(this).val()) === value)
                $(this).addClass(className).val($.data(this, key));
        }).each(function(index, elem) {
            if (block)
                new function(e) {
                    $(e.form).submit(function() {
                        return $.trim($(e).val()) != $.data(e, key)
                    });
                }(elem);
            else if (blank)
                new function(e) {
                    $(e.form).submit(function() {
                        if ($.trim($(e).val()) == $.data(e, key)) 
                            $(e).removeClass(className).val("");
                        return true;
                    });
                }(elem);
            else if (submit)
                new function(e) { $(e.form).submit(submit); }(elem);
        });
    };
}(jQuery);

/*jslint browser: true */ /*global jQuery: true */

/**com4
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {
    
    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        
        value = String(value);
        
        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
$(document).ready(function(){	
	$('#language .mm-list li a').click(function(e){	
			$.cookie('manualLanguage', $(this).attr('id'), {expires: 365,  path: '/'});	
	});
	
});


/* com5
 * mbox code
 */
var mboxCopyright = "Copyright 1996-2011. Adobe Systems Incorporated. All rights reserved.";mboxUrlBuilder = function(a, b) { this.a = a; this.b = b; this.c = new Array(); this.d = function(e) { return e; }; this.f = null;};mboxUrlBuilder.prototype.addParameter = function(g, h) { var i = new RegExp('(\'|")'); if (i.exec(g)) { throw "Parameter '" + g + "' contains invalid characters"; } for (var j = 0; j < this.c.length; j++) { var k = this.c[j]; if (k.name == g) { k.value = h; return this; } } var l = new Object(); l.name = g; l.value = h; this.c[this.c.length] = l; return this;};mboxUrlBuilder.prototype.addParameters = function(c) { if (!c) { return this; } for (var j = 0; j < c.length; j++) { var m = c[j].indexOf('='); if (m == -1 || m == 0) { continue; } this.addParameter(c[j].substring(0, m), c[j].substring(m + 1, c[j].length)); } return this;};mboxUrlBuilder.prototype.setServerType = function(n) { this.o = n;};mboxUrlBuilder.prototype.setBasePath = function(f) { this.f = f;};mboxUrlBuilder.prototype.setUrlProcessAction = function(p) { this.d = p;};mboxUrlBuilder.prototype.buildUrl = function() { var q = this.f ? this.f : '/m2/' + this.b + '/mbox/' + this.o; var r = document.location.protocol == 'file:' ? 'http:' : document.location.protocol; var e = r + "//" + this.a + q; var s = e.indexOf('?') != -1 ? '&' : '?'; for (var j = 0; j < this.c.length; j++) { var k = this.c[j]; e += s + encodeURIComponent(k.name) + '=' + encodeURIComponent(k.value); s = '&'; } return this.t(this.d(e));};mboxUrlBuilder.prototype.getParameters = function() { return this.c;};mboxUrlBuilder.prototype.setParameters = function(c) { this.c = c;};mboxUrlBuilder.prototype.clone = function() { var u = new mboxUrlBuilder(this.a, this.b); u.setServerType(this.o); u.setBasePath(this.f); u.setUrlProcessAction(this.d); for (var j = 0; j < this.c.length; j++) { u.addParameter(this.c[j].name, this.c[j].value); } return u;};mboxUrlBuilder.prototype.t = function(v) { return v.replace(/\"/g, '&quot;').replace(/>/g, '&gt;');};mboxStandardFetcher = function() { };mboxStandardFetcher.prototype.getType = function() { return 'standard';};mboxStandardFetcher.prototype.fetch = function(w) { w.setServerType(this.getType()); document.write('<' + 'scr' + 'ipt src="' + w.buildUrl() + '" language="JavaScript"><' + '\/scr' + 'ipt>');};mboxStandardFetcher.prototype.cancel = function() { };mboxAjaxFetcher = function() { };mboxAjaxFetcher.prototype.getType = function() { return 'ajax';};mboxAjaxFetcher.prototype.fetch = function(w) { w.setServerType(this.getType()); var e = w.buildUrl(); this.x = document.createElement('script'); this.x.src = e; document.body.appendChild(this.x);};mboxAjaxFetcher.prototype.cancel = function() { };mboxMap = function() { this.y = new Object(); this.z = new Array();};mboxMap.prototype.put = function(A, h) { if (!this.y[A]) { this.z[this.z.length] = A; } this.y[A] = h;};mboxMap.prototype.get = function(A) { return this.y[A];};mboxMap.prototype.remove = function(A) { this.y[A] = undefined;};mboxMap.prototype.each = function(p) { for (var j = 0; j < this.z.length; j++ ) { var A = this.z[j]; var h = this.y[A]; if (h) { var B = p(A, h); if (B === false) { break; } } }};mboxFactory = function(C, b, D) { this.E = false; this.C = C; this.D = D; this.F = new mboxList(); mboxFactories.put(D, this); this.G = typeof document.createElement('div').replaceChild != 'undefined' && (function() { return true; })() && typeof document.getElementById != 'undefined' && typeof (window.attachEvent || document.addEventListener || window.addEventListener) != 'undefined' && typeof encodeURIComponent != 'undefined'; this.H = this.G && mboxGetPageParameter('mboxDisable') == null; var I = D == 'default'; this.J = new mboxCookieManager( 'mbox' + (I ? '' : ('-' + D)), (function() { return mboxCookiePageDomain(); })()); this.H = this.H && this.J.isEnabled() && (this.J.getCookie('disable') == null); if (this.isAdmin()) { this.enable(); } this.K(); this.L = mboxGenerateId(); this.M = mboxScreenHeight(); this.N = mboxScreenWidth(); this.O = mboxBrowserWidth(); this.P = mboxBrowserHeight(); this.Q = mboxScreenColorDepth(); this.R = mboxBrowserTimeOffset(); this.S = new mboxSession(this.L, 'mboxSession', 'session', 31 * 60, this.J); this.T = new mboxPC('PC', 1209600, this.J); this.w = new mboxUrlBuilder(C, b); this.U(this.w, I); this.V = new Date().getTime(); this.W = this.V; var X = this; this.addOnLoad(function() { X.W = new Date().getTime(); }); if (this.G) { this.addOnLoad(function() { X.E = true; X.getMboxes().each(function(Y) { Y.setFetcher(new mboxAjaxFetcher()); Y.finalize(); }); }); this.limitTraffic(100, 10368000); if (this.H) { this.Z(); this._ = new mboxSignaler(function(ab, c) { return X.create(ab, c); }, this.J); } }};mboxFactory.prototype.isEnabled = function() { return this.H;};mboxFactory.prototype.getDisableReason = function() { return this.J.getCookie('disable');};mboxFactory.prototype.isSupported = function() { return this.G;};mboxFactory.prototype.disable = function(bb, cb) { if (typeof bb == 'undefined') { bb = 60 * 60; } if (typeof cb == 'undefined') { cb = 'unspecified'; } if (!this.isAdmin()) { this.H = false; this.J.setCookie('disable', cb, bb); }};mboxFactory.prototype.enable = function() { this.H = true; this.J.deleteCookie('disable');};mboxFactory.prototype.isAdmin = function() { return document.location.href.indexOf('mboxEnv') != -1;};mboxFactory.prototype.limitTraffic = function(db, bb) {};mboxFactory.prototype.addOnLoad = function(eb) { if (this.isDomLoaded()) { eb(); } else { var fb = false; var gb = function() { if (fb) { return; } fb = true; eb(); }; this.hb.push(gb); if (this.isDomLoaded() && !fb) { gb(); } }};mboxFactory.prototype.getEllapsedTime = function() { return this.W - this.V;};mboxFactory.prototype.getEllapsedTimeUntil = function(ib) { return ib - this.V;};mboxFactory.prototype.getMboxes = function() { return this.F;};mboxFactory.prototype.get = function(ab, jb) { return this.F.get(ab).getById(jb || 0);};mboxFactory.prototype.update = function(ab, c) { if (!this.isEnabled()) { return; } if (!this.isDomLoaded()) { var X = this; this.addOnLoad(function() { X.update(ab, c); }); return; } if (this.F.get(ab).length() == 0) { throw "Mbox " + ab + " is not defined"; } this.F.get(ab).each(function(Y) { Y.getUrlBuilder() .addParameter('mboxPage', mboxGenerateId()); Y.load(c); });};mboxFactory.prototype.create = function( ab, c, kb) { if (!this.isSupported()) { return null; } var e = this.w.clone(); e.addParameter('mboxCount', this.F.length() + 1); e.addParameters(c); var jb = this.F.get(ab).length(); var lb = this.D + '-' + ab + '-' + jb; var mb; if (kb) { mb = new mboxLocatorNode(kb); } else { if (this.E) { throw 'The page has already been loaded, can\'t write marker'; } mb = new mboxLocatorDefault(lb); } try { var X = this; var nb = 'mboxImported-' + lb; var Y = new mbox(ab, jb, e, mb, nb); if (this.H) { Y.setFetcher( this.E ? new mboxAjaxFetcher() : new mboxStandardFetcher()); } Y.setOnError(function(ob, n) { Y.setMessage(ob); Y.activate(); if (!Y.isActivated()) { X.disable(60 * 60, ob); window.location.reload(false); } }); this.F.add(Y); } catch (pb) { this.disable(); throw 'Failed creating mbox "' + ab + '", the error was: ' + pb; } var qb = new Date(); e.addParameter('mboxTime', qb.getTime() - (qb.getTimezoneOffset() * 60000)); return Y;};mboxFactory.prototype.getCookieManager = function() { return this.J;};mboxFactory.prototype.getPageId = function() { return this.L;};mboxFactory.prototype.getPCId = function() { return this.T;};mboxFactory.prototype.getSessionId = function() { return this.S;};mboxFactory.prototype.getSignaler = function() { return this._;};mboxFactory.prototype.getUrlBuilder = function() { return this.w;};mboxFactory.prototype.U = function(e, I) { e.addParameter('mboxHost', document.location.hostname) .addParameter('mboxSession', this.S.getId()); if (!I) { e.addParameter('mboxFactoryId', this.D); } if (this.T.getId() != null) { e.addParameter('mboxPC', this.T.getId()); } e.addParameter('mboxPage', this.L); e.addParameter('screenHeight', this.M); e.addParameter('screenWidth', this.N); e.addParameter('browserWidth', this.O); e.addParameter('browserHeight', this.P); e.addParameter('browserTimeOffset', this.R); e.addParameter('colorDepth', this.Q); e.setUrlProcessAction(function(e) { e += '&mboxURL=' + encodeURIComponent(document.location); var rb = encodeURIComponent(document.referrer); if (e.length + rb.length < 2000) { e += '&mboxReferrer=' + rb; } e += '&mboxVersion=' + mboxVersion; return e; });};mboxFactory.prototype.sb = function() { return "";};mboxFactory.prototype.Z = function() { document.write('<style>.' + 'mboxDefault' + ' { visibility:hidden; }</style>');};mboxFactory.prototype.isDomLoaded = function() { return this.E;};mboxFactory.prototype.K = function() { if (this.hb != null) { return; } this.hb = new Array(); var X = this; (function() { var tb = document.addEventListener ? "DOMContentLoaded" : "onreadystatechange"; var ub = false; var vb = function() { if (ub) { return; } ub = true; for (var i = 0; i < X.hb.length; ++i) { X.hb[i](); } }; if (document.addEventListener) { document.addEventListener(tb, function() { document.removeEventListener(tb, arguments.callee, false); vb(); }, false); window.addEventListener("load", function(){ document.removeEventListener("load", arguments.callee, false); vb(); }, false); } else if (document.attachEvent) { if (self !== self.top) { document.attachEvent(tb, function() { if (document.readyState === 'complete') { document.detachEvent(tb, arguments.callee); vb(); } }); } else { var wb = function() { try { document.documentElement.doScroll('left'); vb(); } catch (xb) { setTimeout(wb, 13); } }; wb(); } } if (document.readyState === "complete") { vb(); } })();};mboxSignaler = function(yb, J) { this.J = J; var zb = J.getCookieNames('signal-'); for (var j = 0; j < zb.length; j++) { var Ab = zb[j]; var Bb = J.getCookie(Ab).split('&'); var Y = yb(Bb[0], Bb); Y.load(); J.deleteCookie(Ab); }};mboxSignaler.prototype.signal = function(Cb, ab ) { this.J.setCookie('signal-' + Cb, mboxShiftArray(arguments).join('&'), 45 * 60);};mboxList = function() { this.F = new Array();};mboxList.prototype.add = function(Y) { if (Y != null) { this.F[this.F.length] = Y; }};mboxList.prototype.get = function(ab) { var B = new mboxList(); for (var j = 0; j < this.F.length; j++) { var Y = this.F[j]; if (Y.getName() == ab) { B.add(Y); } } return B;};mboxList.prototype.getById = function(Db) { return this.F[Db];};mboxList.prototype.length = function() { return this.F.length;};mboxList.prototype.each = function(p) { if (typeof p != 'function') { throw 'Action must be a function, was: ' + typeof(p); } for (var j = 0; j < this.F.length; j++) { p(this.F[j]); }};mboxLocatorDefault = function(g) { this.g = 'mboxMarker-' + g; document.write('<div id="' + this.g + '" style="visibility:hidden;display:none">&nbsp;</div>');};mboxLocatorDefault.prototype.locate = function() { var Eb = document.getElementById(this.g); while (Eb != null) { if (Eb.nodeType == 1) { if (Eb.className == 'mboxDefault') { return Eb; } } Eb = Eb.previousSibling; } return null;};mboxLocatorDefault.prototype.force = function() { var Fb = document.createElement('div'); Fb.className = 'mboxDefault'; var Gb = document.getElementById(this.g); Gb.parentNode.insertBefore(Fb, Gb); return Fb;};mboxLocatorNode = function(Hb) { this.Eb = Hb;};mboxLocatorNode.prototype.locate = function() { return typeof this.Eb == 'string' ? document.getElementById(this.Eb) : this.Eb;};mboxLocatorNode.prototype.force = function() { return null;};mboxCreate = function(ab ) { var Y = mboxFactoryDefault.create( ab, mboxShiftArray(arguments)); if (Y) { Y.load(); } return Y;};mboxDefine = function(kb, ab ) { var Y = mboxFactoryDefault.create(ab, mboxShiftArray(mboxShiftArray(arguments)), kb); return Y;};mboxUpdate = function(ab ) { mboxFactoryDefault.update(ab, mboxShiftArray(arguments));};mbox = function(g, Ib, w, Jb, nb) { this.Kb = null; this.Lb = 0; this.mb = Jb; this.nb = nb; this.Mb = null; this.Nb = new mboxOfferContent(); this.Fb = null; this.w = w; this.message = ''; this.Ob = new Object(); this.Pb = 0; this.Ib = Ib; this.g = g; this.Qb(); w.addParameter('mbox', g) .addParameter('mboxId', Ib); this.Rb = function() {}; this.Sb = function() {}; this.Tb = null;};mbox.prototype.getId = function() { return this.Ib;};mbox.prototype.Qb = function() { if (this.g.length > 250) { throw "Mbox Name " + this.g + " exceeds max length of " + "250 characters."; } else if (this.g.match(/^\s+|\s+$/g)) { throw "Mbox Name " + this.g + " has leading/trailing whitespace(s)."; }};mbox.prototype.getName = function() { return this.g;};mbox.prototype.getParameters = function() { var c = this.w.getParameters(); var B = new Array(); for (var j = 0; j < c.length; j++) { if (c[j].name.indexOf('mbox') != 0) { B[B.length] = c[j].name + '=' + c[j].value; } } return B;};mbox.prototype.setOnLoad = function(p) { this.Sb = p; return this;};mbox.prototype.setMessage = function(ob) { this.message = ob; return this;};mbox.prototype.setOnError = function(Rb) { this.Rb = Rb; return this;};mbox.prototype.setFetcher = function(Ub) { if (this.Mb) { this.Mb.cancel(); } this.Mb = Ub; return this;};mbox.prototype.getFetcher = function() { return this.Mb;};mbox.prototype.load = function(c) { if (this.Mb == null) { return this; } this.setEventTime("load.start"); this.cancelTimeout(); this.Lb = 0; var w = (c && c.length > 0) ? this.w.clone().addParameters(c) : this.w; this.Mb.fetch(w); var X = this; this.Vb = setTimeout(function() { X.Rb('browser timeout', X.Mb.getType()); }, 15000); this.setEventTime("load.end"); return this;};mbox.prototype.loaded = function() { this.cancelTimeout(); if (!this.activate()) { var X = this; setTimeout(function() { X.loaded(); }, 100); }};mbox.prototype.activate = function() { if (this.Lb) { return this.Lb; } this.setEventTime('activate' + ++this.Pb + '.start'); if (this.show()) { this.cancelTimeout(); this.Lb = 1; } this.setEventTime('activate' + this.Pb + '.end'); return this.Lb;};mbox.prototype.isActivated = function() { return this.Lb;};mbox.prototype.setOffer = function(Nb) { if (Nb && Nb.show && Nb.setOnLoad) { this.Nb = Nb; } else { throw 'Invalid offer'; } return this;};mbox.prototype.getOffer = function() { return this.Nb;};mbox.prototype.show = function() { this.setEventTime('show.start'); var B = this.Nb.show(this); this.setEventTime(B == 1 ? "show.end.ok" : "show.end"); return B;};mbox.prototype.showContent = function(Wb) { if (Wb == null) { return 0; } if (this.Fb == null || !this.Fb.parentNode) { this.Fb = this.getDefaultDiv(); if (this.Fb == null) { return 0; } } if (this.Fb != Wb) { this.Xb(this.Fb); this.Fb.parentNode.replaceChild(Wb, this.Fb); this.Fb = Wb; } this.Yb(Wb); this.Sb(); return 1;};mbox.prototype.hide = function() { this.setEventTime('hide.start'); var B = this.showContent(this.getDefaultDiv()); this.setEventTime(B == 1 ? 'hide.end.ok' : 'hide.end.fail'); return B;};mbox.prototype.finalize = function() { this.setEventTime('finalize.start'); this.cancelTimeout(); if (this.getDefaultDiv() == null) { if (this.mb.force() != null) { this.setMessage('No default content, an empty one has been added'); } else { this.setMessage('Unable to locate mbox'); } } if (!this.activate()) { this.hide(); this.setEventTime('finalize.end.hide'); } this.setEventTime('finalize.end.ok');};mbox.prototype.cancelTimeout = function() { if (this.Vb) { clearTimeout(this.Vb); } if (this.Mb != null) { this.Mb.cancel(); }};mbox.prototype.getDiv = function() { return this.Fb;};mbox.prototype.getDefaultDiv = function() { if (this.Tb == null) { this.Tb = this.mb.locate(); } return this.Tb;};mbox.prototype.setEventTime = function(Zb) { this.Ob[Zb] = (new Date()).getTime();};mbox.prototype.getEventTimes = function() { return this.Ob;};mbox.prototype.getImportName = function() { return this.nb;};mbox.prototype.getURL = function() { return this.w.buildUrl();};mbox.prototype.getUrlBuilder = function() { return this.w;};mbox.prototype._b = function(Fb) { return Fb.style.display != 'none';};mbox.prototype.Yb = function(Fb) { this.ac(Fb, true);};mbox.prototype.Xb = function(Fb) { this.ac(Fb, false);};mbox.prototype.ac = function(Fb, bc) { Fb.style.visibility = bc ? "visible" : "hidden"; Fb.style.display = bc ? "block" : "none";};mboxOfferContent = function() { this.Sb = function() {};};mboxOfferContent.prototype.show = function(Y) { var B = Y.showContent(document.getElementById(Y.getImportName())); if (B == 1) { this.Sb(); } return B;};mboxOfferContent.prototype.setOnLoad = function(Sb) { this.Sb = Sb;};mboxOfferAjax = function(Wb) { this.Wb = Wb; this.Sb = function() {};};mboxOfferAjax.prototype.setOnLoad = function(Sb) { this.Sb = Sb;};mboxOfferAjax.prototype.show = function(Y) { var cc = document.createElement('div'); cc.id = Y.getImportName(); cc.innerHTML = this.Wb; var B = Y.showContent(cc); if (B == 1) { this.Sb(); } return B;};mboxOfferDefault = function() { this.Sb = function() {};};mboxOfferDefault.prototype.setOnLoad = function(Sb) { this.Sb = Sb;};mboxOfferDefault.prototype.show = function(Y) { var B = Y.hide(); if (B == 1) { this.Sb(); } return B;};mboxCookieManager = function mboxCookieManager(g, dc) { this.g = g; this.dc = dc == '' || dc.indexOf('.') == -1 ? '' : '; domain=' + dc; this.ec = new mboxMap(); this.loadCookies();};mboxCookieManager.prototype.isEnabled = function() { this.setCookie('check', 'true', 60); this.loadCookies(); return this.getCookie('check') == 'true';};mboxCookieManager.prototype.setCookie = function(g, h, bb) { if (typeof g != 'undefined' && typeof h != 'undefined' && typeof bb != 'undefined') { var fc = new Object(); fc.name = g; fc.value = escape(h); fc.expireOn = Math.ceil(bb + new Date().getTime() / 1000); this.ec.put(g, fc); this.saveCookies(); }};mboxCookieManager.prototype.getCookie = function(g) { var fc = this.ec.get(g); return fc ? unescape(fc.value) : null;};mboxCookieManager.prototype.deleteCookie = function(g) { this.ec.remove(g); this.saveCookies();};mboxCookieManager.prototype.getCookieNames = function(gc) { var hc = new Array(); this.ec.each(function(g, fc) { if (g.indexOf(gc) == 0) { hc[hc.length] = g; } }); return hc;};mboxCookieManager.prototype.saveCookies = function() { var ic = new Array(); var jc = 0; this.ec.each(function(g, fc) { ic[ic.length] = g + '#' + fc.value + '#' + fc.expireOn; if (jc < fc.expireOn) { jc = fc.expireOn; } }); var kc = new Date(jc * 1000); document.cookie = this.g + '=' + ic.join('|') + '; expires=' + kc.toGMTString() + '; path=/' + this.dc;};mboxCookieManager.prototype.loadCookies = function() { this.ec = new mboxMap(); var lc = document.cookie.indexOf(this.g + '='); if (lc != -1) { var mc = document.cookie.indexOf(';', lc); if (mc == -1) { mc = document.cookie.indexOf(',', lc); if (mc == -1) { mc = document.cookie.length; } } var nc = document.cookie.substring( lc + this.g.length + 1, mc).split('|'); var oc = Math.ceil(new Date().getTime() / 1000); for (var j = 0; j < nc.length; j++) { var fc = nc[j].split('#'); if (oc <= fc[2]) { var pc = new Object(); pc.name = fc[0]; pc.value = fc[1]; pc.expireOn = fc[2]; this.ec.put(pc.name, pc); } } }};mboxSession = function(qc, rc, Ab, sc, J) { this.rc = rc; this.Ab = Ab; this.sc = sc; this.J = J; this.tc = false; this.Ib = typeof mboxForceSessionId != 'undefined' ? mboxForceSessionId : mboxGetPageParameter(this.rc); if (this.Ib == null || this.Ib.length == 0) { this.Ib = J.getCookie(Ab); if (this.Ib == null || this.Ib.length == 0) { this.Ib = qc; this.tc = true; } } J.setCookie(Ab, this.Ib, sc);};mboxSession.prototype.getId = function() { return this.Ib;};mboxSession.prototype.forceId = function(uc) { this.Ib = uc; this.J.setCookie(this.Ab, this.Ib, this.sc);};mboxPC = function(Ab, sc, J) { this.Ab = Ab; this.sc = sc; this.J = J; this.Ib = typeof mboxForcePCId != 'undefined' ? mboxForcePCId : J.getCookie(Ab); if (this.Ib != null) { J.setCookie(Ab, this.Ib, sc); }};mboxPC.prototype.getId = function() { return this.Ib;};mboxPC.prototype.forceId = function(uc) { if (this.Ib != uc) { this.Ib = uc; this.J.setCookie(this.Ab, this.Ib, this.sc); return true; } return false;};mboxGetPageParameter = function(g) { var B = null; var vc = new RegExp(g + "=([^\&]*)"); var wc = vc.exec(document.location); if (wc != null && wc.length >= 2) { B = wc[1]; } return B;};mboxSetCookie = function(g, h, bb) { return mboxFactoryDefault.getCookieManager().setCookie(g, h, bb);};mboxGetCookie = function(g) { return mboxFactoryDefault.getCookieManager().getCookie(g);};mboxCookiePageDomain = function() { var dc = (/([^:]*)(:[0-9]{0,5})?/).exec(document.location.host)[1]; var xc = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/; if (!xc.exec(dc)) { var yc = (/([^\.]+\.[^\.]{3}|[^\.]+\.[^\.]+\.[^\.]{2})$/).exec(dc); if (yc) { dc = yc[0]; } } return dc ? dc: "";};mboxShiftArray = function(zc) { var B = new Array(); for (var j = 1; j < zc.length; j++) { B[B.length] = zc[j]; } return B;};mboxGenerateId = function() { return (new Date()).getTime() + "-" + Math.floor(Math.random() * 999999);};mboxScreenHeight = function() { return screen.height;};mboxScreenWidth = function() { return screen.width;};mboxBrowserWidth = function() { return (window.innerWidth) ? window.innerWidth : document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;};mboxBrowserHeight = function() { return (window.innerHeight) ? window.innerHeight : document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight;};mboxBrowserTimeOffset = function() { return -new Date().getTimezoneOffset();};mboxScreenColorDepth = function() { return screen.pixelDepth;};if (typeof mboxVersion == 'undefined') { var mboxVersion = 40; var mboxFactories = new mboxMap(); var mboxFactoryDefault = new mboxFactory('websense.tt.omtrdc.net', 'websense', 'default');};if (mboxGetPageParameter("mboxDebug") != null || mboxFactoryDefault.getCookieManager() .getCookie("debug") != null) { setTimeout(function() { if (typeof mboxDebugLoaded == 'undefined') { alert('Could not load the remote debug.\nPlease check your connection' + ' to Test&amp;Target servers'); } }, 60*60); document.write('<' + 'scr' + 'ipt language="Javascript1.2" src=' + '"http://admin6.testandtarget.omniture.com/admin/mbox/mbox_debug.jsp?mboxServerHost=websense.tt.omtrdc.net' + '&clientCode=websense"><' + '\/scr' + 'ipt>');};


/* com6
 * flowplayer.js 3.2.8. The Flowplayer API
 *
 * Copyright 2009-2011 Flowplayer Oy
 *
 * This file is part of Flowplayer.
 *
 * Flowplayer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Flowplayer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Flowplayer.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Date: 2011-12-30 12:34:08 -0500 (Fri, 30 Dec 2011)
 * Revision: 761
 */
(function(){function g(o){console.log("$f.fireEvent",[].slice.call(o))}function k(q){if(!q||typeof q!="object"){return q}var o=new q.constructor();for(var p in q){if(q.hasOwnProperty(p)){o[p]=k(q[p])}}return o}function m(t,q){if(!t){return}var o,p=0,r=t.length;if(r===undefined){for(o in t){if(q.call(t[o],o,t[o])===false){break}}}else{for(var s=t[0];p<r&&q.call(s,p,s)!==false;s=t[++p]){}}return t}function c(o){return document.getElementById(o)}function i(q,p,o){if(typeof p!="object"){return q}if(q&&p){m(p,function(r,s){if(!o||typeof s!="function"){q[r]=s}})}return q}function n(s){var q=s.indexOf(".");if(q!=-1){var p=s.slice(0,q)||"*";var o=s.slice(q+1,s.length);var r=[];m(document.getElementsByTagName(p),function(){if(this.className&&this.className.indexOf(o)!=-1){r.push(this)}});return r}}function f(o){o=o||window.event;if(o.preventDefault){o.stopPropagation();o.preventDefault()}else{o.returnValue=false;o.cancelBubble=true}return false}function j(q,o,p){q[o]=q[o]||[];q[o].push(p)}function e(){return"_"+(""+Math.random()).slice(2,10)}var h=function(t,r,s){var q=this,p={},u={};q.index=r;if(typeof t=="string"){t={url:t}}i(this,t,true);m(("Begin*,Start,Pause*,Resume*,Seek*,Stop*,Finish*,LastSecond,Update,BufferFull,BufferEmpty,BufferStop").split(","),function(){var v="on"+this;if(v.indexOf("*")!=-1){v=v.slice(0,v.length-1);var w="onBefore"+v.slice(2);q[w]=function(x){j(u,w,x);return q}}q[v]=function(x){j(u,v,x);return q};if(r==-1){if(q[w]){s[w]=q[w]}if(q[v]){s[v]=q[v]}}});i(this,{onCuepoint:function(x,w){if(arguments.length==1){p.embedded=[null,x];return q}if(typeof x=="number"){x=[x]}var v=e();p[v]=[x,w];if(s.isLoaded()){s._api().fp_addCuepoints(x,r,v)}return q},update:function(w){i(q,w);if(s.isLoaded()){s._api().fp_updateClip(w,r)}var v=s.getConfig();var x=(r==-1)?v.clip:v.playlist[r];i(x,w,true)},_fireEvent:function(v,y,w,A){if(v=="onLoad"){m(p,function(B,C){if(C[0]){s._api().fp_addCuepoints(C[0],r,B)}});return false}A=A||q;if(v=="onCuepoint"){var z=p[y];if(z){return z[1].call(s,A,w)}}if(y&&"onBeforeBegin,onMetaData,onStart,onUpdate,onResume".indexOf(v)!=-1){i(A,y);if(y.metaData){if(!A.duration){A.duration=y.metaData.duration}else{A.fullDuration=y.metaData.duration}}}var x=true;m(u[v],function(){x=this.call(s,A,y,w)});return x}});if(t.onCuepoint){var o=t.onCuepoint;q.onCuepoint.apply(q,typeof o=="function"?[o]:o);delete t.onCuepoint}m(t,function(v,w){if(typeof w=="function"){j(u,v,w);delete t[v]}});if(r==-1){s.onCuepoint=this.onCuepoint}};var l=function(p,r,q,t){var o=this,s={},u=false;if(t){i(s,t)}m(r,function(v,w){if(typeof w=="function"){s[v]=w;delete r[v]}});i(this,{animate:function(y,z,x){if(!y){return o}if(typeof z=="function"){x=z;z=500}if(typeof y=="string"){var w=y;y={};y[w]=z;z=500}if(x){var v=e();s[v]=x}if(z===undefined){z=500}r=q._api().fp_animate(p,y,z,v);return o},css:function(w,x){if(x!==undefined){var v={};v[w]=x;w=v}r=q._api().fp_css(p,w);i(o,r);return o},show:function(){this.display="block";q._api().fp_showPlugin(p);return o},hide:function(){this.display="none";q._api().fp_hidePlugin(p);return o},toggle:function(){this.display=q._api().fp_togglePlugin(p);return o},fadeTo:function(y,x,w){if(typeof x=="function"){w=x;x=500}if(w){var v=e();s[v]=w}this.display=q._api().fp_fadeTo(p,y,x,v);this.opacity=y;return o},fadeIn:function(w,v){return o.fadeTo(1,w,v)},fadeOut:function(w,v){return o.fadeTo(0,w,v)},getName:function(){return p},getPlayer:function(){return q},_fireEvent:function(w,v,x){if(w=="onUpdate"){var z=q._api().fp_getPlugin(p);if(!z){return}i(o,z);delete o.methods;if(!u){m(z.methods,function(){var B=""+this;o[B]=function(){var C=[].slice.call(arguments);var D=q._api().fp_invoke(p,B,C);return D==="undefined"||D===undefined?o:D}});u=true}}var A=s[w];if(A){var y=A.apply(o,v);if(w.slice(0,1)=="_"){delete s[w]}return y}return o}})};function b(q,G,t){var w=this,v=null,D=false,u,s,F=[],y={},x={},E,r,p,C,o,A;i(w,{id:function(){return E},isLoaded:function(){return(v!==null&&v.fp_play!==undefined&&!D)},getParent:function(){return q},hide:function(H){if(H){q.style.height="0px"}if(w.isLoaded()){v.style.height="0px"}return w},show:function(){q.style.height=A+"px";if(w.isLoaded()){v.style.height=o+"px"}return w},isHidden:function(){return w.isLoaded()&&parseInt(v.style.height,10)===0},load:function(J){if(!w.isLoaded()&&w._fireEvent("onBeforeLoad")!==false){var H=function(){if(u&&!flashembed.isSupported(G.version)){q.innerHTML=""}if(J){J.cached=true;j(x,"onLoad",J)}flashembed(q,G,{config:t})};var I=0;m(a,function(){this.unload(function(K){if(++I==a.length){H()}})})}return w},unload:function(J){if(u.replace(/\s/g,"")!==""){if(w._fireEvent("onBeforeUnload")===false){if(J){J(false)}return w}D=true;try{if(v){v.fp_close();w._fireEvent("onUnload")}}catch(H){}var I=function(){v=null;q.innerHTML=u;D=false;if(J){J(true)}};if(/WebKit/i.test(navigator.userAgent)&&!/Chrome/i.test(navigator.userAgent)){setTimeout(I,0)}else{I()}}else{if(J){J(false)}}return w},getClip:function(H){if(H===undefined){H=C}return F[H]},getCommonClip:function(){return s},getPlaylist:function(){return F},getPlugin:function(H){var J=y[H];if(!J&&w.isLoaded()){var I=w._api().fp_getPlugin(H);if(I){J=new l(H,I,w);y[H]=J}}return J},getScreen:function(){return w.getPlugin("screen")},getControls:function(){return w.getPlugin("controls")._fireEvent("onUpdate")},getLogo:function(){try{return w.getPlugin("logo")._fireEvent("onUpdate")}catch(H){}},getPlay:function(){return w.getPlugin("play")._fireEvent("onUpdate")},getConfig:function(H){return H?k(t):t},getFlashParams:function(){return G},loadPlugin:function(K,J,M,L){if(typeof M=="function"){L=M;M={}}var I=L?e():"_";w._api().fp_loadPlugin(K,J,M,I);var H={};H[I]=L;var N=new l(K,null,w,H);y[K]=N;return N},getState:function(){return w.isLoaded()?v.fp_getState():-1},play:function(I,H){var J=function(){if(I!==undefined){w._api().fp_play(I,H)}else{w._api().fp_play()}};if(w.isLoaded()){J()}else{if(D){setTimeout(function(){w.play(I,H)},50)}else{w.load(function(){J()})}}return w},getVersion:function(){var I="flowplayer.js 3.2.8";if(w.isLoaded()){var H=v.fp_getVersion();H.push(I);return H}return I},_api:function(){if(!w.isLoaded()){throw"Flowplayer "+w.id()+" not loaded when calling an API method"}return v},setClip:function(H){m(H,function(I,J){if(typeof J=="function"){j(x,I,J);delete H[I]}else{if(I=="onCuepoint"){$f(q).getCommonClip().onCuepoint(H[I][0],H[I][1])}}});w.setPlaylist([H]);return w},getIndex:function(){return p},bufferAnimate:function(H){v.fp_bufferAnimate(H===undefined||H);return w},_swfHeight:function(){return v.clientHeight}});m(("Click*,Load*,Unload*,Keypress*,Volume*,Mute*,Unmute*,PlaylistReplace,ClipAdd,Fullscreen*,FullscreenExit,Error,MouseOver,MouseOut").split(","),function(){var H="on"+this;if(H.indexOf("*")!=-1){H=H.slice(0,H.length-1);var I="onBefore"+H.slice(2);w[I]=function(J){j(x,I,J);return w}}w[H]=function(J){j(x,H,J);return w}});m(("pause,resume,mute,unmute,stop,toggle,seek,getStatus,getVolume,setVolume,getTime,isPaused,isPlaying,startBuffering,stopBuffering,isFullscreen,toggleFullscreen,reset,close,setPlaylist,addClip,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled").split(","),function(){var H=this;w[H]=function(J,I){if(!w.isLoaded()){return w}var K=null;if(J!==undefined&&I!==undefined){K=v["fp_"+H](J,I)}else{K=(J===undefined)?v["fp_"+H]():v["fp_"+H](J)}return K==="undefined"||K===undefined?w:K}});w._fireEvent=function(Q){if(typeof Q=="string"){Q=[Q]}var R=Q[0],O=Q[1],M=Q[2],L=Q[3],K=0;if(t.debug){g(Q)}if(!w.isLoaded()&&R=="onLoad"&&O=="player"){v=v||c(r);o=w._swfHeight();m(F,function(){this._fireEvent("onLoad")});m(y,function(S,T){T._fireEvent("onUpdate")});s._fireEvent("onLoad")}if(R=="onLoad"&&O!="player"){return}if(R=="onError"){if(typeof O=="string"||(typeof O=="number"&&typeof M=="number")){O=M;M=L}}if(R=="onContextMenu"){m(t.contextMenu[O],function(S,T){T.call(w)});return}if(R=="onPluginEvent"||R=="onBeforePluginEvent"){var H=O.name||O;var I=y[H];if(I){I._fireEvent("onUpdate",O);return I._fireEvent(M,Q.slice(3))}return}if(R=="onPlaylistReplace"){F=[];var N=0;m(O,function(){F.push(new h(this,N++,w))})}if(R=="onClipAdd"){if(O.isInStream){return}O=new h(O,M,w);F.splice(M,0,O);for(K=M+1;K<F.length;K++){F[K].index++}}var P=true;if(typeof O=="number"&&O<F.length){C=O;var J=F[O];if(J){P=J._fireEvent(R,M,L)}if(!J||P!==false){P=s._fireEvent(R,M,L,J)}}m(x[R],function(){P=this.call(w,O,M);if(this.cached){x[R].splice(K,1)}if(P===false){return false}K++});return P};function B(){if($f(q)){$f(q).getParent().innerHTML="";p=$f(q).getIndex();a[p]=w}else{a.push(w);p=a.length-1}A=parseInt(q.style.height,10)||q.clientHeight;E=q.id||"fp"+e();r=G.id||E+"_api";G.id=r;u=q.innerHTML;if(typeof t=="string"){t={clip:{url:t}}}t.playerId=E;t.clip=t.clip||{};if(q.getAttribute("href",2)&&!t.clip.url){t.clip.url=q.getAttribute("href",2)}s=new h(t.clip,-1,w);t.playlist=t.playlist||[t.clip];var I=0;m(t.playlist,function(){var L=this;if(typeof L=="object"&&L.length){L={url:""+L}}m(t.clip,function(M,N){if(N!==undefined&&L[M]===undefined&&typeof N!="function"){L[M]=N}});t.playlist[I]=L;L=new h(L,I,w);F.push(L);I++});m(t,function(L,M){if(typeof M=="function"){if(s[L]){s[L](M)}else{j(x,L,M)}delete t[L]}});m(t.plugins,function(L,M){if(M){y[L]=new l(L,M,w)}});if(!t.plugins||t.plugins.controls===undefined){y.controls=new l("controls",null,w)}y.canvas=new l("canvas",null,w);u=q.innerHTML;function K(L){if(/iPad|iPhone|iPod/i.test(navigator.userAgent)&&!/.flv$/i.test(F[0].url)&&!J()){return true}if(!w.isLoaded()&&w._fireEvent("onBeforeClick")!==false){w.load()}return f(L)}function J(){return w.hasiPadSupport&&w.hasiPadSupport()}function H(){if(u.replace(/\s/g,"")!==""){if(q.addEventListener){q.addEventListener("click",K,false)}else{if(q.attachEvent){q.attachEvent("onclick",K)}}}else{if(q.addEventListener&&!J()){q.addEventListener("click",f,false)}w.load()}}setTimeout(H,0)}if(typeof q=="string"){var z=c(q);if(!z){throw"Flowplayer cannot access element: "+q}q=z;B()}else{B()}}var a=[];function d(o){this.length=o.length;this.each=function(q){m(o,q)};this.size=function(){return o.length};var p=this;for(name in b.prototype){p[name]=function(){var q=arguments;p.each(function(){this[name].apply(this,q)})}}}window.flowplayer=window.$f=function(){var p=null;var o=arguments[0];if(!arguments.length){m(a,function(){if(this.isLoaded()){p=this;return false}});return p||a[0]}if(arguments.length==1){if(typeof o=="number"){return a[o]}else{if(o=="*"){return new d(a)}m(a,function(){if(this.id()==o.id||this.id()==o||this.getParent()==o){p=this;return false}});return p}}if(arguments.length>1){var t=arguments[1],q=(arguments.length==3)?arguments[2]:{};if(typeof t=="string"){t={src:t}}t=i({bgcolor:"#000000",version:[9,0],expressInstall:"http://static.flowplayer.org/swf/expressinstall.swf",cachebusting:false},t);if(typeof o=="string"){if(o.indexOf(".")!=-1){var s=[];m(n(o),function(){s.push(new b(this,k(t),k(q)))});return new d(s)}else{var r=c(o);return new b(r!==null?r:k(o),k(t),k(q))}}else{if(o){return new b(o,k(t),k(q))}}}return null};i(window.$f,{fireEvent:function(){var o=[].slice.call(arguments);var q=$f(o[0]);return q?q._fireEvent(o.slice(1)):null},addPlugin:function(o,p){b.prototype[o]=p;return $f},each:m,extend:i});if(typeof jQuery=="function"){jQuery.fn.flowplayer=function(q,p){if(!arguments.length||typeof arguments[0]=="number"){var o=[];this.each(function(){var r=$f(this);if(r){o.push(r)}});return arguments.length?o[arguments[0]]:new d(o)}return this.each(function(){$f(this,k(q),p?k(p):{})})}}})();(function(){var h=document.all,j="http://www.adobe.com/go/getflashplayer",c=typeof jQuery=="function",e=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,b={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:false,cachebusting:false};if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}})}function i(m,l){if(l){for(var f in l){if(l.hasOwnProperty(f)){m[f]=l[f]}}}return m}function a(f,n){var m=[];for(var l in f){if(f.hasOwnProperty(l)){m[l]=n(f[l])}}return m}window.flashembed=function(f,m,l){if(typeof f=="string"){f=document.getElementById(f.replace("#",""))}if(!f){return}if(typeof m=="string"){m={src:m}}return new d(f,i(i({},b),m),l)};var g=i(window.flashembed,{conf:b,getVersion:function(){var m,f;try{f=navigator.plugins["Shockwave Flash"].description.slice(16)}catch(o){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");f=m&&m.GetVariable("$version")}catch(n){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");f=m&&m.GetVariable("$version")}catch(l){}}}f=e.exec(f);return f?[f[1],f[3]]:[0,0]},asString:function(l){if(l===null||l===undefined){return null}var f=typeof l;if(f=="object"&&l.push){f="array"}switch(f){case"string":l=l.replace(new RegExp('(["\\\\])',"g"),"\\$1");l=l.replace(/^\s?(\d+\.?\d*)%/,"$1pct");l=l.replace(/(%)/g,"%25").replace(/'/g,"\\u0027").replace(/"/g,"\\u0022").replace(/&/g,"%26");return'"'+l+'"';case"array":return"["+a(l,function(o){return g.asString(o)}).join(",")+"]";case"function":return'"function()"';case"object":var m=[];for(var n in l){if(l.hasOwnProperty(n)){m.push('"'+n+'":'+g.asString(l[n]))}}return"{"+m.join(",")+"}"}return String(l).replace(/\s/g," ").replace(/\'/g,'"')},getHTML:function(o,l){o=i({},o);var n='<object width="'+o.width+'" height="'+o.height+'" id="'+o.id+'" name="'+o.id+'"';if(o.cachebusting){o.src+=((o.src.indexOf("?")!=-1?"&":"?")+Math.random())}if(o.w3c||!h){n+=' data="'+o.src+'" type="application/x-shockwave-flash"'}else{n+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'}n+=">";if(o.w3c||h){n+='<param name="movie" value="'+o.src+'" />'}o.width=o.height=o.id=o.w3c=o.src=null;o.onFail=o.version=o.expressInstall=null;for(var m in o){if(o[m]){n+='<param name="'+m+'" value="'+o[m]+'" />'}}var p="";if(l){for(var f in l){if(l[f]){var q=l[f];p+=f+"="+(/function|object/.test(typeof q)?g.asString(q):q)+"&"}}p=p.slice(0,-1);n+='<param name="flashvars" value=\''+p+"' />"}n+="</object>";return n},isSupported:function(f){return k[0]>f[0]||k[0]==f[0]&&k[1]>=f[1]}});var k=g.getVersion();function d(f,n,m){if(g.isSupported(n.version)){f.innerHTML=g.getHTML(n,m)}else{if(n.expressInstall&&g.isSupported([6,65])){f.innerHTML=g.getHTML(i(n,{src:n.expressInstall}),{MMredirectURL:encodeURIComponent(location.href),MMplayerType:"PlugIn",MMdoctitle:document.title})}else{if(!f.innerHTML.replace(/\s/g,"")){f.innerHTML="<h2>Flash version "+n.version+" or greater is required</h2><h3>"+(k[0]>0?"Your version is "+k:"You have no flash plugin installed")+"</h3>"+(f.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+j+"'>here</a></p>");if(f.tagName=="A"){f.onclick=function(){location.href=j}}}if(n.onFail){var l=n.onFail.call(this);if(typeof l=="string"){f.innerHTML=l}}}}if(h){window[n.id]=document.getElementById(n.id)}i(this,{getRoot:function(){return f},getOptions:function(){return n},getConf:function(){return m},getApi:function(){return f.firstChild}})}if(c){jQuery.tools=jQuery.tools||{version:"3.2.8"};jQuery.tools.flashembed={conf:b};jQuery.fn.flashembed=function(l,f){return this.each(function(){$(this).data("flashembed",flashembed(this,l,f))})}}})();

/**com7
 * Unified Websense Scripts
 
 */
$(document).ready(function(){	
	

	
	/*
	----------------------------------------------------------------------
	MyWebsense Login Code
	----------------------------------------------------------------------
	*/
	var welcomeTxt;
	var util = new jws.utility('https://www.websense.com');
	util.getVisitor(function (visitor) {
		if (visitor != null) {
			welcomeTxt = '<span id="welcome">Welcome,</span>' + "&nbsp;" + visitor.firstName + " " + '[ <a id="myws-logout" href="#">logout</a> ]' + $('#top-menu li:first-child p').html();
			$('#top-menu li:first-child p').html(welcomeTxt)
			$('#top-menu li:first-child p a').last().css({
				'marginLeft' : '20px'
			})
		} else {

		}
	});

	$('a#myws-logout').live('click', function () {
		util.logout(function () {
			location.reload();
		});
	});
	
	//Main Navigation Highlighting
	var elementSelected = '#' + $('#MainMenuTabId').text();
	
	if( elementSelected != '#'){
		$(elementSelected).parents('li').addClass('active');
	
		if ($.browser.msie){
			$(elementSelected).parents('li').addClass('active').css({
			'left' : '-15px',
			'marginRight' : '15px'
			})
		}	
	}
	/*
	----------------------------------------------------------------------
	function:	JQuery Launch Modal Windows with Close function
	desc:		Event listener onclick on anchor with class 
				"show-modal-window". Takes the href of the anchor and 
				launches the window identified with it. If anchor has
				class "white", appends class to modal BG html for a 
				white bg.
	options:	none
	last ver:	12.16.10
	notes:		Used in conjunction with modal window. See HTML.
	----------------------------------------------------------------------
	*/
	
	//Shows modal window
	$('.show-modal-window').click(function(e){
		e.preventDefault();
		
		if( $(this).hasClass('white') )
			$('.modal-bg').addClass('white');
			
		showModal( $(this).attr('href') );
	});
	
	//Closes modal window and modal bg, reset to black.
	$('.modal-close').click(function(e){
		e.preventDefault();
		$(this).parents('.modal-window').hide();
		$('.modal-bg').animate({
			opacity: 0
		}, 250, function(){
			$(this).hide();
		});
		
		if( $('.modal-bg').hasClass('white') )
			$('.modal-bg').removeClass('white');
	});
	
	//Shows background modal and fills window, then show modal window
	function showModal(window){
		var w = $(document).width();
		var h = $(document).height();
		var offset = $('body').offset();

		$('.modal-bg').css({
			'width' : w,
			'height' : h,
			'left': '-' + offset.left + 'px',
			'top' : '-' + offset.top + 'px',
			'display' : 'block',
			'z-index' : '20'
		}).animate({
			opacity: .8
		}, 250, function(){
			$(window).css({
				'top': '10px',
				'left': '50%',
				'margin-left': '-' + $(window).width()/2 + 'px'
			}).fadeIn('fast', function(){
				if (!$.support.opacity) 
					this.style.removeAttribute('filter');
			});
		});
	}
	
	//Title Swaps
	$('a.modal-title-swap').live('click', function(e){
		e.preventDefault();
		$('.modal-header p').html( $(this).attr('title') );
	
	});
	
	
	/*
	----------------------------------------------------------------------
	GET URL PARAMATER
	----------------------------------------------------------------------
	*/
	function getURLParm(name) {
		return unescape(
			(RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
		);
	}
	
	
	/*
	----------------------------------------------------------------------
	HOME PAGE CODE
	----------------------------------------------------------------------
	*/	
	//Latest News
	var selectFlag = true;
	var suspendFlag = true;
	var firstRun = true;
	
	$('#news-list li').first().fadeIn('slow', function(){
		if (!$.support.opacity) 
			this.style.removeAttribute('filter');
	});
	
	

	setInterval(ticknews,5000); //time in milliseconds

	function ticknews() {
		if( selectFlag && suspendFlag ){
			$('#news-list li:first').detach().appendTo('ul#news-list').hide();
			$('#news-list li:first').fadeIn('slow', function(){
				if (!$.support.opacity) 
					this.style.removeAttribute('filter');
			});			
			$('#news-list .spacer').remove();
		}
		else
			selectFlag = true;
	} 
	
	$('#latest-prev').click(function(e){
		selectFlag = false;
		e.preventDefault();
		$('#news-list li:first').hide();
		$('#news-list li:last').detach().prependTo('ul#news-list').show();
	})
	
	$('#latest-next').click(function(e){
		selectFlag = false;
		e.preventDefault();
		$('#news-list li:first').detach().appendTo('ul#news-list').hide();
		$('#news-list li:first').show();	
	})
	
	$('ul#news-list li a').live('mouseover mouseout',function(e){
		if(e.type == 'mouseover')
			suspendFlag = false;
		else
			suspendFlag = true;
	});
	
	$('#header #language-selector').click(function(){
		$(this).children('#language').slideToggle('fast');
	});
	
	/*
	----------------------------------------------------------------------
	VIDEO PLAYER IN A MODAL WINDOW
	----------------------------------------------------------------------
	*/
	var videoUrl;
	var classesStr;
	
	$('a.play-video').live('click', function(e){
		e.preventDefault();
		videoUrl = $(this).attr('href');
		index = videoUrl.indexOf('#') + 1;
		finalUrl = videoUrl.substring(index);
		classesStr = $(this).attr('class');
		var customFlag = false;
		
		if( $(this).hasClass('custom') )
			customFlag = 'true';

		$('#video-player .modal-header p').html( $(this).attr('title') );
		showModal('#video-player');
		videoPlay(customFlag);
	});
	
	function videoPlay(flag){
		if ( flag == 'true'){
			var classes = classesStr.split(" ");
			var w = classes[2];
			var h = classes[3];

			var div = '<div id="tvideo"><a href="#" style="display:block;width:'+w+'px;height:'+h+'px;" id="player"></a></div>';
			$('#video-player .modal-body').html(div);
			
			cssWidth = parseInt(w) + 24;
			$('#video-player').css({ 'width': cssWidth + 'px'});
			
			setVideo();
		}
		else{
			var div = '<div id="tvideo"><a href="#" style="display:block;width:640px;height:360px;" id="player"></a></div>';
			$('#video-player .modal-body').html(div);
			setVideo();
		}
	}	
	
	function setVideo(){
		$f("player", "/assets/swf/flowplayer.commercial-3.2.8.swf", {
			key: '#@f113ffd29f0d2a7f09c',
			clip: {
				url: finalUrl,
				autoPlay: true,
				autoBuffering: true,
				eventCategory: 'Websense Video Player'
			},
			plugins:{
				gatracker: {
					url: "/assets/swf/flowplayer.analytics-3.2.2.swf",
					events: {
						all: true
					},
					accountId: "UA-23948603-1" // your Google Analytics id here
				}
			}
		});
	}
	
	$('.modal-window a.modal-close').live('click', function(e){
		e.preventDefault();
		swfobject.removeSWF('tvideo');
		$f("player").stop();
	});
	
	$('#hp-quicklinks').removeClass('closed').addClass('opened');
	
	

});	