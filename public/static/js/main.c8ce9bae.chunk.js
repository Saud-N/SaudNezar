(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var r=n(2),s=n.n(r),a=n(10),c=n.n(a),i=(n(16),n.p,n(17),n(4)),u=n(5),o=n(8),p=n(7),h=(n(18),n(0)),f=(s.a.Component,n(11)),l=n(1),v=n.n(l),j=n(3),b=n(6),x=(n(21),function(t){Object(o.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).nextPage=Object(j.a)(v.a.mark((function t(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return window.scrollTo(0,0),t.next=3,r.getImgs(r.state.n+1);case 3:return e=t.sent,t.next=6,r.setState({n:r.state.n+1,pics:e});case 6:case"end":return t.stop()}}),t)}))),r.previousPage=Object(j.a)(v.a.mark((function t(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return window.scrollTo(0,0),t.next=3,r.getImgs(r.state.n-1);case 3:return e=t.sent,t.next=6,r.setState({n:r.state.n-1,pics:e});case 6:case"end":return t.stop()}}),t)}))),r.state={n:r.props.n,pics:[]},r.nextPage.bind(Object(b.a)(r)),r}return Object(u.a)(n,[{key:"getImgs",value:function(){var t=Object(j.a)(v.a.mark((function t(e){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://picsum.photos/v2/list?page=".concat(e,"&limit=25"));case 2:return n=t.sent,t.next=5,n.json();case 5:return n=(n=t.sent).map((function(t){return t.id})),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(j.a)(v.a.mark((function t(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getImgs(this.props.n);case 2:return e=t.sent,t.next=5,this.setState({pics:e});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e=[],n=Object(f.a)(this.state.pics);try{for(n.s();!(t=n.n()).done;){var r=t.value,s="https://picsum.photos/id/".concat(r,"/200/300");e.push(Object(h.jsx)("img",{src:s}))}}catch(a){n.e(a)}finally{n.f()}return this.state.n>10&&e.push(Object(h.jsx)("button",{onClick:this.previousPage,children:"Previous"})),this.state.n<100&&e.push(Object(h.jsx)("button",{onClick:this.nextPage,children:"Next"})),Object(h.jsx)("div",{className:"Page",children:e})}}]),n}(s.a.Component));var d=function(){return Object(h.jsx)(x,{n:10})};c.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.c8ce9bae.chunk.js.map