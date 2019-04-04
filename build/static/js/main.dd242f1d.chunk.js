(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t){},149:function(e,t){},154:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(61),c=n.n(l),o=(n(69),n(3)),i=n(4),s=n(14),u=n(12),m=n(13),h=n(25),b=n(21),p=n.n(b),E=function(){function e(t,n,a,r){var l=this;Object(o.a)(this,e),this.unityOfSensor=function(){f.TEMPERATURE=" \xb0C ",f.PERCENT=" % ",f.OPEN_CLOSE="";var e=[];return f.hasOwnProperty(l.type)&&e.push(f[l.type]),e.join("")},this._id=t,this._name=n,this._data=a,this._type=r}return Object(i.a)(e,[{key:"id",get:function(){return this._id||""},set:function(e){this._id=e}},{key:"name",get:function(){return this._name||""},set:function(e){this._name=e}},{key:"data",get:function(){return this._data||{}},set:function(e){this._data=e}},{key:"type",get:function(){return this._type||""},set:function(e){this._type=e}}]),e}(),f={},d=function(){function e(t){Object(o.a)(this,e),this._value=t}return Object(i.a)(e,[{key:"getAverage",value:function(){for(var e=0;e<this.value.length;e++)if(!Number(this.value[e]))return"Pas de valeur moyenne pour ce capteur !";var t=0;for(e=0;e<this.value.length;e++)t+=parseFloat(this.value[e]);return t/this.value.length}},{key:"getlastValues",value:function(){return" "+this.value[this.value.length-1]}},{key:"getDate",value:function(){return(new Date).toLocaleString()}},{key:"value",get:function(){return this._value||[]},set:function(e){this._value=e}}]),e}(),v=n(158),O=n(157),g=n(156),y=n(155),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.sensorList.map(function(e){return r.a.createElement("p",null,r.a.createElement(y.a,{to:"/".concat(e.name.replace(/\s+/g,"_"))},r.a.createElement("button",{className:"btn btn-outline-success btn-lg btn-block"},e.name)))});return r.a.createElement("ul",null,e)}}]),t}(a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t,n,a,l,c,o;if("undefined"!==typeof this.props.sensorInformation){var i=this.props.sensorInformation;e=i.id.substring(6),t=i.name,n=Number(i.data.getlastValues())?parseFloat(i.data.getlastValues()).toFixed(2):i.data.getlastValues(),a=i.type,o=i.unityOfSensor(),l=Number(i.data.getAverage())?parseFloat(i.data.getAverage()).toFixed(2):i.data.getAverage(),c=i.data.getDate()}return r.a.createElement("div",null,r.a.createElement("b",null,"ID : ",e," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"NOM : ",t),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"VALEUR : ",n," ",o),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"TYPE : ",a),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"VALEUR MOYENNE : ",l," ",o),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null," DATE : ",c),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(a.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;if("undefined"!==typeof this.props.sensorHistoric){var t=this.props.sensorHistoric.data.value;e=t.slice(Math.max(t.length-5,1)).map(function(e){return Number(e)&&(e=parseFloat(e).toFixed(2)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e))})}return r.a.createElement("tbody",null,e)}}]),t}(a.Component),U=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.brokerUrl,t=this.props.onSubmit,n=this.props.onUpdate;return console.log(e),r.a.createElement("form",{class:"form-inline",action:e},r.a.createElement("div",{class:"form-group mx-sm-3 mb-2"},r.a.createElement("input",{value:e,onChange:n,type:"text",class:"form-control",placeholder:" Saisir l'URL du Brocker"})),r.a.createElement("button",{onClick:t,type:"submit",class:"btn btn-primary mb-2"},"VALIDER"))}}]),t}(a.Component),w=n(62),N=n.n(w),_=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={list:[],brockerUrlValue:new WebSocket("ws://"+window.location.host+"/socket").url},N()(Object(h.a)(Object(h.a)(n))),n.dataOperation(),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"selectedSensor",value:function(e){for(var t=0;t<this.state.list.length;t++)if(this.state.list[t].name===e)return this.state.list[t]}},{key:"onUpdateBrockerInput",value:function(e){this.setState({brockerUrlValue:e.target.brockerUrlValue})}},{key:"onSubmitBrockerForm",value:function(e){return r.a.createElement(v.a,{to:this.state.brockerUrlValue})}},{key:"dataOperation",value:function(){var e=this,t=[],a=n(74).connect(this.state.brockerUrlValue);a.on("connect",function(){a.subscribe("#",function(e){})}),a.on("message",function(n,a){var r=JSON.parse(a.toString()),l=r.name,c=r.value,o=r.type,i=new d([c]);if(function(e,t){for(var n=0;n<t.length;n++)if(t[n].id===e)return!0}(n,t)){var s=function(e,t){for(var n=0;n<t.length;n++)if(t[n].id===e)return t[n]}(n,t);t.push.apply(s.data.value,[c])}else{var u=new E(n,l,i,o);t.push(u)}e.setState({list:t})})}},{key:"render",value:function(){var e=this;return r.a.createElement(O.a,null,r.a.createElement("div",{className:p.a.App},r.a.createElement("article",null,r.a.createElement("header",null,"BIENVENUE SUR LA PAGE D'ACCUEIL"),r.a.createElement("div",{className:"content"},r.a.createElement("nav",null,r.a.createElement("p",{contenteditable:!0},"LISTE DES CAPTEURS"),r.a.createElement(k,{sensorList:this.state.list})),r.a.createElement("main",null,r.a.createElement(U,{brokerUrl:this.state.brockerUrlValue,onSubmit:this.onSubmitBrockerForm,onUpdate:this.onUpdateBrockerInput}),r.a.createElement("br",null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"contenerInfoSensor"},r.a.createElement("strong",{contenteditable:!0},"INFORMATIONS DES CAPTEURS"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(g.a,{path:"/:urlToRecuva",exact:!0,strict:!0,render:function(t){return r.a.createElement(j,{sensorInformation:e.selectedSensor(t.match.params.urlToRecuva.replace(/\_+/g," "))})}})),r.a.createElement("div",{className:"contenerHistoricTable"},r.a.createElement("table",{class:"table w-100 p-3"},r.a.createElement("thead",{class:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"HISTORIQUE"))),r.a.createElement(g.a,{path:"/:urlToRecuva",exact:!0,strict:!0,render:function(t){return r.a.createElement(S,{sensorHistoric:e.selectedSensor(t.match.params.urlToRecuva.replace(/\_+/g," "))})}})))))),r.a.createElement("footer",null,"All rights reversed.",r.a.createElement("br",null),r.a.createElement("small",null,"@ Dosseh KOUTO 2019")))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(153);c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},21:function(e,t,n){},64:function(e,t,n){e.exports=n(154)},69:function(e,t,n){},78:function(e,t){},80:function(e,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.dd242f1d.chunk.js.map