(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/skiddle-logo.22dea327.png"},25:function(e,t,a){e.exports=a(60)},30:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(23),r=a.n(s),c=(a(30),a(2)),l=a(3),o=a(5),u=a(4),d=a(6),m=a(11),v=a.n(m),p=(a(47),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={keyword:""},a.onKeyUp=a.debounce(function(){a.props.callback&&a.props.callback(a.state.keyword)},1e3),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState({keyword:e.target.value})}},{key:"render",value:function(){return i.a.createElement("input",{type:"search",className:"search-events",placeholder:"Search for events",onKeyUp:this.onKeyUp,onChange:this.onChange.bind(this),value:this.state.keyword})}},{key:"componentDidMount",value:function(){this.setState({keyword:this.props.value})}},{key:"debounce",value:function(e,t){var a,n=this;return function(i){n.setState({keyword:i.currentTarget.value}),clearTimeout(a),a=setTimeout(function(){e.call(n),a=null},t)}}}]),t}(n.Component)),h=a(24),f=a.n(h),b=(a(48),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("header",{className:"app-header"},i.a.createElement("img",{src:f.a,className:"app-logo",alt:"skiddle"}),i.a.createElement("div",{className:"input-action-wrapper"},!this.props.view&&i.a.createElement(p,{callback:this.props.search,value:this.props.keyword}),"artistdetails"===this.props.view&&i.a.createElement("button",{className:"back-button ".concat(this.props.view),onClick:function(){return e.props.set({view:"eventdetails"})}},"Back to details"),("eventdetails"===this.props.view||"artistdetails"===this.props.view)&&i.a.createElement("button",{className:"back-button ".concat(this.props.view),onClick:function(){return e.props.set({view:null})}},"Back to results")))}}]),t}(n.Component)),k=a(8),E=a(9),g=(a(53),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(){this.props.callback&&this.props.callback({eventid:this.props.details.id,view:"eventdetails"})}},{key:"render",value:function(){var e=this,t=this.props.details;return i.a.createElement("div",{className:"card"},i.a.createElement("img",{className:"card-poster",src:t.largeimageurl,alt:t.eventname}),i.a.createElement("div",{className:"card-title card-segment"},t.eventname),i.a.createElement("div",{className:"card-description card-segment",dangerouslySetInnerHTML:{__html:t.description}}),i.a.createElement("div",{className:"card-date card-segment"},i.a.createElement(k.a,{icon:E.a,className:"icon"}),t.date),i.a.createElement("div",{className:"card-venue card-segment"},i.a.createElement(k.a,{icon:E.c,className:"icon"}),t.venue.name),i.a.createElement("button",{className:"card-details",onClick:function(){return e.onClick()}},"View Details"))}}]),t}(n.Component)),w=(a(54),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.events.map(function(t){return i.a.createElement(g,{details:t,key:t.id,callback:e.props.callback})});return i.a.createElement("div",{className:"events-collection"},t)}}]),t}(n.Component)),y=(a(55),a(56),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={details:null},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.details;return i.a.createElement("div",{className:"artist-wrapper",onClick:function(){return e.onClick()}},i.a.createElement("img",{className:"artist-pic",src:t.image,alt:t.name}),i.a.createElement("div",{className:"artist-name"},t.name))}},{key:"onClick",value:function(){this.props.callback&&this.props.callback()}}]),t}(n.Component)),O=(a(57),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"loader"})}}]),t}(n.Component)),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={details:null,loading:!0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.details;return e.loading?i.a.createElement(O,null):t?i.a.createElement("div",{className:"event-details-wrapper"},i.a.createElement("div",{className:"event-details-inner-wrapper"},i.a.createElement("div",{className:"event-header"},i.a.createElement("div",{className:"event-name"},t.eventname),i.a.createElement("img",{className:"event-poster",src:t.largeimageurl,alt:t.eventname}),i.a.createElement("div",{className:"event-description event-segment",dangerouslySetInnerHTML:{__html:t.description}})),i.a.createElement("div",{className:"event-banner"},i.a.createElement("div",{className:"event-details"},i.a.createElement("div",{className:"event-venue event-segment"},i.a.createElement(k.a,{icon:E.c,className:"icon"}),i.a.createElement("span",{className:"event-venue-name"},t.venue.name," in ",t.venue.town)),i.a.createElement("div",{className:"event-date event-segment"},i.a.createElement(k.a,{icon:E.a,className:"icon"}),i.a.createElement("span",{className:"event-date-name"},t.dateStart," to ",t.dateEnd)),i.a.createElement("div",{className:"event-price event-segment"},i.a.createElement(k.a,{icon:E.b,className:"icon"}),"Entry Price : ",t.entryprice),i.a.createElement("div",{className:"event-goers event-segment"},i.a.createElement(k.a,{icon:E.d,className:"icon"}),t.going.length," Going"))),t.artists.length>0&&i.a.createElement("h2",null,"who's on the line-up?"),this.getArtists(t.artists))):i.a.createElement("div",null,"Event details not found")}},{key:"getArtists",value:function(e){var t=this;return e&&e.length?i.a.createElement("div",{className:"event-artists"},e.map(function(e){return i.a.createElement(y,{details:e,callback:function(){t.props.callback({artistid:e.artistid,view:"artistdetails"})},key:e.artistid})})):null}},{key:"componentDidMount",value:function(){var e,t=this;this.setState({details:null,loading:!0}),(e=this.props.eventid,v.a.get("https://www.skiddle.com/api/v1/events/EVENT_ID/?api_key=008f1e6099ecc48e990e3776784d447b".replace("EVENT_ID",e))).then(function(e){t.setState({details:e.data.results,loading:!1})}).catch(function(e){console.log(e),t.setState({details:null,loading:!1})})}}]),t}(n.Component),N=(a(58),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={details:null,loading:!0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.details;if(e.loading)return i.a.createElement(O,null);if(!t)return i.a.createElement("div",null,"No details found");var a={image:t.imageurl,name:t.name},n=t.twitter.length?0==t.twitter.indexOf("twitter.com")?t.twitter:"https://twitter.com/".concat(t.twitter):null;return i.a.createElement("div",{className:"artist-details-wrapper"},i.a.createElement("div",{className:"artist-profile"},i.a.createElement(y,{details:a}),t.spotifyartisturl&&i.a.createElement("a",{href:t.spotifyartisturl,target:"_blank",rel:"noopener noreferrer"},"Spotify"),n&&i.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},"Twitter"),i.a.createElement("div",{className:"artist-fav"},"Favourite : ",t.favourite)),i.a.createElement("div",{className:"artist-description"},t.description))}},{key:"componentDidMount",value:function(){var e,t=this;this.setState({details:null,loading:!0}),(e=this.props.artistid,v.a.get("https://www.skiddle.com/api/v1/artist/ARTIST_ID?api_key=008f1e6099ecc48e990e3776784d447b".replace("ARTIST_ID",e))).then(function(e){t.setState({details:e.data.results,loading:!1})}).catch(function(e){console.log(e),t.setState({details:null,loading:!1})})}}]),t}(n.Component)),S=(a(59),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={keyword:"",events:[],eventid:null,artistid:null,view:null,loading:!0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app-host"},i.a.createElement(b,{view:this.state.view,keyword:this.state.keyword,search:this.searchEvents.bind(this),set:this.setStateObj.bind(this)}),this.getView())}},{key:"getView",value:function(){return this.state.loading?i.a.createElement(O,null):"eventdetails"===this.state.view?i.a.createElement(j,{eventid:this.state.eventid,callback:this.setStateObj.bind(this)}):"artistdetails"===this.state.view?i.a.createElement(N,{artistid:this.state.artistid}):i.a.createElement(w,{events:this.state.events,callback:this.setStateObj.bind(this)})}},{key:"componentDidMount",value:function(){this.searchEvents(this.state.keyword)}},{key:"searchEvents",value:function(e){var t=this;this.setStateObj({keyword:e,events:[],view:null,loading:!0}),function(e){return v.a.get("https://www.skiddle.com/api/v1/events/search/?api_key=008f1e6099ecc48e990e3776784d447b&keyword=KEY_WORD".replace("KEY_WORD",e))}(e).then(function(e){t.setStateObj({loading:!1,events:e.data.results})}).catch(function(e){console.log(e)})}},{key:"setStateObj",value:function(e){this.setState(e)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.1e3ac59e.chunk.js.map