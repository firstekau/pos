(function(e){e([],function(){function t(e,t,n,r,i){function o(){s.paths=[],r.getPaths().then(function(e){s.paths=e,s.lastUpdated=new Date})}function u(){return s.path!=null?["/"+s.path]:s.paths}function a(e){e==null||e.length===0?t.path("/dashboard"):t.path("/dashboard/single"+(e.charAt(0)!=="/"?"/":"")+e)}function f(e){return e!=null||s.path!=null&&s.path.length!==0?e==="/"+s.path?!0:!1:!0}function l(){s.newPath=""}function c(){r.create(s.newPath).then(o)}var s=this;s.path=n.path,s.refresh=o,s.clean=l,s.create=c,s.newPath="",s.paths=[],s.lastUpdated=null,s.getVisiblePaths=u,s.permissions=i,s.showSingle=a,s.isActive=f,o()}return t.$inject=["$scope","$location","$routeParams","configRestService","permissions"],t})})(adminConsole.define);