(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/exit.2cff134c.svg"},function(e,t,n){e.exports=n.p+"static/media/logo.9505d405.png"},,,,,function(e,t,n){e.exports=n(36)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),l=(n(25),n(11)),s=n(12),o=n(18),u=n(13),p=n(19),d=(n(26),n(27),n(28),function(e){return r.a.createElement("button",{className:"button-primary",onClick:e.handleClick},e.text)}),m=(n(29),function(e){return r.a.createElement("div",{className:"form-capture-age"},r.a.createElement("p",{className:"request-age"},"Give us your age to continue:"),r.a.createElement("input",{className:"input-age",type:"text",onChange:function(t){e.passAge(t.target.value)}}),r.a.createElement("br",null),r.a.createElement(d,{text:"Submit",handleClick:e.handleClick}))}),h=function(e){return r.a.createElement("div",{className:"welcome"},r.a.createElement("p",{className:"text-title"},"BREWING FOR PUNKS - DIY"),null===e.adult&&r.a.createElement(m,{passAge:e.passAge,handleClick:e.checkAge}),!0===e.adult&&r.a.createElement(d,{text:"Browse beers",handleClick:function(){e.list(!0)}}),!1===e.adult&&r.a.createElement("p",{className:"text-restriction"},"The catalogue is for adults only.",r.a.createElement("br",null),r.a.createElement("br",null),"Get back to us when you\u2019re 18.",r.a.createElement("br",null),r.a.createElement("br",null),"In the meantime, tell your elders about us.",r.a.createElement("br",null),r.a.createElement("br",null),"They\u2019ll love it."))},f=(n(30),function(e){return r.a.createElement("div",{className:"flex-container"},e.beers.map(function(t,n){return r.a.createElement("div",{key:n,className:"beer",onClick:function(){e.details(!0),e.index(n)}},r.a.createElement("p",{className:"beer-name"},t.name),r.a.createElement("img",{src:t.image_url,alt:"beer",className:"beer-image"}))}))}),g=(n(31),n(14)),E=n.n(g),b=function(e){return r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"text"},r.a.createElement("p",{className:"name"},e.beers[e.index].name),r.a.createElement("p",{className:"tagline"},e.beers[e.index].tagline),r.a.createElement("hr",null),r.a.createElement("p",{className:"description"},e.beers[e.index].description),r.a.createElement("hr",null),r.a.createElement("p",{className:"food"},"Food pairing:",r.a.createElement("br",null),r.a.createElement("br",null),e.beers[e.index].food_pairing.join(" \u2022 "))),r.a.createElement("img",{src:e.beers[e.index].image_url,alt:"beer",className:"beer-image-large"}),r.a.createElement("img",{src:E.a,alt:"exit",className:"button-exit",onClick:function(){e.details(!1)}})))},v=n(15),w=n.n(v),x=n(4);var A=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBeers("https://api.punkapi.com/v2/beers?page=1&per_page=80"),console.log(this.props.error)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,!this.props.beerList&&r.a.createElement("div",null,r.a.createElement("img",{src:w.a,alt:"logo",className:"logo"}),r.a.createElement(h,{adult:this.props.isAdult,checkAge:function(){e.props.checkAge(e.props.age)},passAge:this.props.passAge,list:this.props.toggleBeerList})),this.props.beerList&&this.props.error&&alert("Unable to fetch data!"),this.props.beerList&&r.a.createElement(f,{beers:this.props.beers,details:this.props.toggleDetails,index:this.props.passIndex}),this.props.popUp&&r.a.createElement(b,{beers:this.props.beers,details:this.props.toggleDetails,index:this.props.beerIndex}))}}]),t}(r.a.Component),y=Object(x.b)(function(e){return{beers:e.data,error:e.fetchError,popUp:e.showDetails,beerIndex:e.captureIndex,beerList:e.showBeers,age:e.captureAge,isAdult:e.ifAdult}},function(e){return{passAge:function(t){e(function(e){return{type:"CAPTUR_AGE",captureAge:e}}(t))},checkAge:function(t){e(function(e){return{type:"IF_ADULT",ifAdult:e>=18}}(t))},fetchBeers:function(t){e(function(e){return function(t){fetch(e).then(function(e){return e}).then(function(e){return e.json()}).then(function(e){return t({type:"FETCH_SUCCESS",data:e})}).catch(function(){return t({type:"FETCH_ERROR",error:!0})})}}(t))},toggleDetails:function(t){e(function(e){return{type:"SHOW_DETAILS",showDetails:e}}(t))},passIndex:function(t){e(function(e){return{type:"CAPTURE_INDEX",captureIndex:e}}(t))},toggleBeerList:function(t){e(function(e){return{type:"SHOW_BEERS",showBeers:e}}(t))}}})(A),N=n(1),C=n(17);var k=Object(N.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SUCCESS":return t.data;default:return e}},fetchError:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ERROR":return t.error;default:return e}},showDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_DETAILS":return t.showDetails;default:return e}},captureIndex:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CAPTURE_INDEX":return t.captureIndex;default:return e}},showBeers:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_BEERS":return t.showBeers;default:return e}},captureAge:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CAPTUR_AGE":return t.captureAge;default:return e}},ifAdult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IF_ADULT":return t.ifAdult;default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I,_=Object(N.d)(k,I,Object(N.a)(C.a));i.a.render(r.a.createElement(x.a,{store:_},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[20,1,2]]]);
//# sourceMappingURL=main.3ecf5a15.chunk.js.map