(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(37)},30:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),u=(n(30),n(9)),i=n.n(u),s=n(16),l=n(17),m=n(18),h=n(23),p=n(19),f=n(24),d=n(20),v=n(5);function w(e){if(e.status>=200&&e.status<300)return e;var t=new Error("HTTP Error ".concat(e.statusText));throw t.status=e.statusText,t.response=e,console.log(t),t}function E(e){return e.json()}var b={getSummary:function(e){return fetch("/api/summary",{accept:"application/json"}).then(w).then(E).then(e)}},y=(n(32),function(e){var t=e.match;return a.React.createElement("div",null,"Current Route: ",t.params.tech)}),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={title:""},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:b.getSummary(function(e){t.setState({title:e.content})});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.React.createElement(d.a,null,a.React.createElement("div",{className:"App"},a.React.createElement("h1",null,"Welcome to ",this.state.title),a.React.createElement(v.a,{path:"/:tech",component:y}),a.React.createElement("div",null,a.React.createElement("h2",null,"Check out the project on GitHub for more information"),a.React.createElement("h3",null,a.React.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/yohangz/scala-play-react-seed"},"scala-play-react-seed")))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.63cd42fb.chunk.js.map