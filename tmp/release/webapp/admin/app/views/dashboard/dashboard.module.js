(function(e){e(["views/dashboard/dashboard.controller","views/dashboard/overview.controller","views/dashboard/session.controller","views/dashboard/playback.controller"],function(t,n,r,i){var s=angular.module("wsDashboard",[]);s.controller("DashboardController",t),s.controller("DashboardOverviewController",n),s.controller("DashboardSessionController",r),s.controller("DashboardPlaybackController",i),s.run(["navigationService",function(e){var t=e.addLocation("Dashboard","#/dashboard")}]),s.config(["$routeProvider",function(e){e.when("/dashboard",{controller:"DashboardController",controllerAs:"vm",templateUrl:"app/views/dashboard/dashboard.template.html"}),e.when("/dashboard/single/:path*",{controller:"DashboardController",controllerAs:"vm",templateUrl:"app/views/dashboard/dashboard.template.html"}),e.when("/dashboard/overview/:path*",{controller:"DashboardOverviewController",controllerAs:"vm",templateUrl:"app/views/dashboard/overview.template.html"}),e.when("/dashboard/session/:path*",{controller:"DashboardSessionController",controllerAs:"vm",templateUrl:"app/views/dashboard/session.template.html"}),e.when("/dashboard/playback",{controller:"DashboardPlaybackController",controllerAs:"vm",templateUrl:"app/views/dashboard/playback.template.html"}),e.otherwise("/dashboard")}])})})(adminConsole.define);