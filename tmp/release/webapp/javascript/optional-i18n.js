/**
 * @license RequireJS i18n 2.0.6 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/i18n for details
 */

(function(){function t(e,t,n,r,i,s){n.push(e),typeof t[e]!="object"&&r.push(i+e+"/"+s)}function n(e,t){if(require._fileExists(e.toUrl(t+".js")))return!0;console.log("Warning: '"+t+".js' does not exist")}function r(e,t,n){var i;for(i in t)t.hasOwnProperty(i)&&(!e.hasOwnProperty(i)||n)?e[i]=t[i]:typeof t[i]=="object"&&(!e[i]&&t[i]&&(e[i]={}),r(e[i],t[i],n))}var e=/(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/;webswingRequirejs.define(["module"],function(i){var s=i.config?i.config():{};return{version:"2.0.6.optional",load:function(i,o,u,a){function w(e){var t=e.requireModules&&e.requireModules[0];console.warn("Could not load optional module: "+t);var n=window.webswingRequirejs?window.webswingRequirejs.require:require;n.undef(t),webswingRequirejs.define(t,[],function(){return{}}),o([t])}a=a||{},a.locale&&(s.locale=a.locale);var f,l=e.exec(i),c=l[1],h=l[4],p=l[5],d=h.split("-"),v=[],m={},g,y,b="";l[5]?(c=l[1],f=c+p):(f=i,p=l[4],h=s.locale,h||(h=s.locale=typeof navigator=="undefined"?"root":(navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage||"root").toLowerCase()),d=h.split("-")),a.isBuild?n(o,f)?o([f],u):u({}):o([f],function(e){var n=[],i;t("root",e,n,v,c,p);for(g=0;g<d.length;g++)i=d[g],b+=(b?"-":"")+i,t(b,e,n,v,c,p);o(v,function(){var t,i,s;for(t=n.length-1;t>-1&&n[t];t--)s=n[t],i=e[s],typeof i!="object"&&(i=o(c+s+"/"+p)),r(m,i);u(m)},w)},w)}}})})();