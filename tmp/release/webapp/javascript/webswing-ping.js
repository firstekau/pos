webswingRequirejs.define(["jquery","text!templates/network.html","webswing-util"],function(t,n,r){return function(){function p(){var e=null,t=0,n=0,i=0;for(var o in s){var l=s[o];"error"===l.result||"timeout"===l.result?(n++,i++):l.latency>c&&n++}i==f?(e='<span class="ws-message--error"><span class="ws-icon-warn"></span>${dialog.networkMonitor.offline}</span>',u=2):n>=h?(e='<span class="ws-message--warning"><span class="ws-icon-warn"></span>${dialog.networkMonitor.warn}</span>',u=1):u=0,e!=null&&u!=a?d(r.translate(e)):v()}function d(e){o==null&&(r.cfg.rootElement.append(r.translate(n)),o=r.cfg.rootElement.find('div[data-id="networkBar"]'),o.find('a[data-id="hide"]').on("click",function(e){a=u,v()})),o.find('span[data-id="message"]').html(e),o.show("fast")}function v(){o!=null&&(o.hide("fast"),o.remove(),o=null)}function m(e,t){function r(t,r){var s=(new Date).getTime(),o=new XMLHttpRequest;o.addEventListener("load",function(e){i("ok",(new Date).getTime()-s)}),o.addEventListener("error",function(e){i("error",(new Date).getTime()-s)}),o.addEventListener("timeout",function(e){i("timeout",(new Date).getTime()-s)}),o.open("GET",e+"rest/ping"),o.timeout=n,o.send()}function i(e,t){postMessage(JSON.stringify({result:e,latency:t}))}var n=t*1e3;setInterval(r,n)}function g(e){var t=new Array;return t.push=function(){return this.length>=e&&this.shift(),Array.prototype.push.apply(this,arguments)},t}var t=this,r,i,s,o,u,a=0,f=6,l=5,c=500,h=3;t.injects=r={cfg:"webswing.config",translate:"translate.translate",sendInput:"input.sendInput"},t.provides={},t.ready=function(){s=g(f);var e=r.cfg.connectionUrl;if(e.indexOf("http")!=0){var t=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");e=t+e}var n=URL.createObjectURL(new Blob(["(",m.toString(),')("'+e+'",'+l+")"],{type:"application/javascript"}));i=new Worker(n),i.onmessage=function(e){var t=JSON.parse(e.data);s.push(t),t.result==="ok"&&(r.sendInput({timestamps:{ping:t.latency}}),u==2&&(s=g(f))),p()}}}});