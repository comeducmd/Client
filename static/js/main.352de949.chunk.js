(this.webpackJsonpcnc=this.webpackJsonpcnc||[]).push([[0],{141:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},215:function(e,t,a){},355:function(e,t,a){},357:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var s=a(1),o=a.n(s),c=a(36),n=a.n(c),i=(a(212),a(16)),r=a.p+"static/media/logoTransparent.fdeb1b30.svg",l=(a(213),a(3)),d=function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{id:"footer-container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{id:"footer-logo",src:r,alt:"CNC Logo"}),Object(l.jsx)("p",{children:"Compare and Commit"}),Object(l.jsx)("p",{children:"Fill your Commits"}),Object(l.jsx)("p",{children:"Find Programming Languages for You"}),Object(l.jsx)("p",{id:"footer-first-div-last-p",children:"\xa92021 SKKU COMEDU CMD CNC. All rights reserved"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"footer-p-title",children:"Contributors"}),Object(l.jsx)("p",{children:"\uae40\uc11c\uc9c4"}),Object(l.jsx)("p",{children:"\uc724\uc138\ub9b0"}),Object(l.jsx)("p",{children:"\uc774\uc775\uaddc"}),Object(l.jsx)("p",{children:"\uc774\uc7ac\ud658"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"footer-p-title",children:"Interests"}),Object(l.jsx)("p",{children:"Computer Education"}),Object(l.jsx)("p",{children:"Work Life Balance"}),Object(l.jsx)("p",{children:"Artificial Intelligence"}),Object(l.jsx)("p",{children:"Thinking"})]})]})})},m=a(93),p=a(94),g=a(95),j=a(106),u=a.p+"static/media/logoSimple.acc22696.svg",b=a(370),h=a(184),x=a.n(h),v=a(185),O=a.n(v)()(x.a).mixin({toast:!0,position:"top-end",timer:3e3,timerProgressBar:!0}),f=function(e,t){return O.fire({icon:e,title:t})},N=(a(215),function(e){Object(g.a)(a,e);var t=Object(j.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return Object(l.jsx)(b.a,{in:this.props.viewHome,children:Object(l.jsx)("main",{children:Object(l.jsxs)("div",{id:"main-container",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("img",{src:u,className:"simpleLogo",alt:"CNC Logo"}),Object(l.jsxs)("div",{className:"title",children:["Compare and ",Object(l.jsx)("br",{})," Commit"]})]}),Object(l.jsxs)("div",{className:"submit",children:[Object(l.jsx)("svg",{className:"star",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{d:"M12.0654 0.59375L15.2847 8.991L23.9846 12.0983L15.2847 15.2055L12.0654 23.6028L8.84612 15.2055L0.146179 12.0983L8.84612 8.991L12.0654 0.59375Z",fill:"#0EB633"})}),Object(l.jsx)("div",{className:"submitTitle",children:"Input Usernames"}),Object(l.jsx)("hr",{width:"60rem",color:"black",size:"1",align:"left"}),Object(l.jsx)("input",{type:"text",placeholder:"Your Name",id:"me",onChange:function(t){e.props.setMyName(t.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"Other's Name",id:"friend",onChange:function(t){e.props.setFriendName(t.target.value)}}),Object(l.jsx)("input",{type:"submit",value:"Let's Go!",id:"submitBtn",onClick:function(t){console.log("letsgo clicked"),e.props.myName===e.props.friendName?f("warning","Type different user"):""!==e.props.myName&&""!==e.props.friendName?(console.log("Let's compare ".concat(e.props.myName," and ").concat(e.props.friendName)),e.props.setHome(!1),e.props.setCompare(!0),window.scrollTo(0,0)):f("warning","Type all usernames")}})]})]})})})}}]),a}(s.Component)),y=a(33),w=a(28),k=a.n(w),C=a(49),L=a(374),_=a(380),S=a(375),A=a(371),M=a(98),P=a.n(M);a(141);var B=function(e){var t="",a="",o="",c=new Date,n=c.getFullYear(),r=c.getMonth()+1,d=c.getDate();d=(d=d<10?"0"+d:d)>29?28:d,r<10?(a=n+"-0"+r+"-"+d,t=n-1+"-0"+r+"-"+d,o=1===r?n+"-12-"+d:n+"-0"+(r-1)+"-"+d):(a=n+"-"+r+"-"+d,o=n+"-"+(r-1)+"-"+d,t=n-1+"-"+r+"-"+d),console.log(a,o);var m=Object(s.useState)(a),p=Object(i.a)(m,2),g=p[0],j=p[1],u=Object(s.useState)(o),b=Object(i.a)(u,2),h=b[0],x=b[1],v=Object(s.useState)({data:[{x:"",y:0}],total:0}),O=Object(i.a)(v,2),N=O[0],w=O[1],M=Object(s.useState)({data:[{x:"",y:0}],total:0}),B=Object(i.a)(M,2),F=B[0],D=B[1],T=Object(s.useState)({days:[{me:0,y:0,total:0}]}),E=Object(i.a)(T,2),R=E[0],I=E[1],H=function(e,t,a,s,o){w({data:e,total:t}),D({data:a,total:s}),I({days:o})};return Object(s.useEffect)((function(){function t(){return(t=Object(C.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P.a.get("/compare-commits?MyName=".concat(e.myName,"&OtherName=").concat(e.friendName,"&StartDate=").concat(h,"&EndDate=").concat(g)).then((function(t){if(400===t.data.code)f("warning","Invalid Username"),setTimeout((function(){e.setCompare(!1),e.setHome(!0)}),3e3);else{for(var a=[],s=[],o=t.data.my_data.date,c=t.data.my_data.count,n=t.data.other_data.count,i=0,r=0,l=0,d=0,m=0;m<o.length;m++)a.push({x:o[m],y:c[m]}),s.push({x:o[m],y:n[m]}),i+=c[m],r+=n[m],c[m]>n[m]?l+=1:c[m]<n[m]&&(d+=1);H(a,i,s,r,{me:l,y:d,total:a.length})}}),(function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[g,h,e]),Object(l.jsx)("main",{children:Object(l.jsxs)("div",{id:"main-container2",children:[Object(l.jsxs)("div",{className:"header2",children:[Object(l.jsx)("div",{className:"title title2",children:"Compare"}),Object(l.jsxs)("div",{className:"versus",children:[Object(l.jsx)("span",{className:"me",children:e.myName}),Object(l.jsxs)("div",{className:"vs",children:[Object(l.jsx)("div",{className:"vs-sub",id:"v",children:"V"}),Object(l.jsx)("div",{className:"vs-sub",id:"s",children:"S"})]}),Object(l.jsx)("span",{className:"friend",children:e.friendName})]})]}),Object(l.jsx)(A.a,Object(y.a)(Object(y.a)({in:e.viewCompare,style:{transformOrigin:"0 -10 0"}},e.viewCompare?{timeout:1e3}:{}),{},{children:Object(l.jsxs)("div",{className:"selectdate",children:[Object(l.jsx)("p",{className:"selectment",children:"Select a period"}),Object(l.jsx)("hr",{width:"60rem",color:"black",size:"1",align:"left"}),Object(l.jsxs)("div",{className:"calendar",children:[Object(l.jsx)("input",{type:"date",name:"startdate",value:h,min:t,max:g,onChange:function(e){return t=e.target.value,void x(t);var t}}),Object(l.jsx)("input",{type:"date",name:"enddate",value:g,min:h,max:a,onChange:function(e){return t=e.target.value,void j(t);var t}})]})]})})),Object(l.jsxs)("div",{className:"subdiv",children:[Object(l.jsxs)("div",{className:"chart",children:[Object(l.jsxs)(L.a,{animate:{duration:500,onLoad:{duration:500}},minDomain:{y:0},domainPadding:{x:[10,-10],y:20},width:1200,height:600,children:[Object(l.jsx)(_.a,{style:{axis:{stroke:"#1b5c2d"},tickLabels:{fontSize:25,fill:"#1b5c2d"},grid:{stroke:"#1b5c2d",strokeWidth:.25}},dependentAxis:!0}),Object(l.jsx)(_.a,{style:{axis:{stroke:"#1b5c2d"},ticks:{stroke:"#1b5c2d"}},tickFormat:function(e){return""}}),Object(l.jsx)(S.a,{style:{data:{stroke:"#B9EFC2",strokeWidth:5,strokeLinecap:"round"}},data:N.data,interpolation:"natural"}),Object(l.jsx)(S.a,{style:{data:{stroke:"#2C974B",strokeWidth:5,strokeLinecap:"round"}},data:F.data,interpolation:"natural"})]}),Object(l.jsxs)("div",{className:"userClassify",children:[Object(l.jsxs)("div",{className:"users",children:[Object(l.jsx)("div",{className:"box",id:"box1"}),Object(l.jsx)("div",{className:"usernames",children:e.myName})]}),Object(l.jsxs)("div",{className:"users",children:[Object(l.jsx)("div",{className:"box",id:"box2"}),Object(l.jsx)("div",{className:"usernames",children:e.friendName})]})]})]}),Object(l.jsxs)("div",{className:"analysis",children:[Object(l.jsxs)("div",{className:"rectangle",children:[Object(l.jsx)("div",{id:"rect-total-title",children:"Total Commits"}),Object(l.jsxs)("div",{className:"rect-total-sub",children:[Object(l.jsxs)("span",{className:"rect-total-num",children:[N.total," "]})," by ",e.myName]}),Object(l.jsxs)("div",{className:"rect-total-sub",children:[Object(l.jsxs)("span",{className:"rect-total-num",children:[F.total," "]})," by ",e.friendName]})]}),Object(l.jsxs)("div",{className:"rectangle",children:[Object(l.jsxs)("div",{className:"rect-container",children:[Object(l.jsxs)("div",{className:"rect-names",children:[e.myName," commited more in"]}),Object(l.jsxs)("div",{className:"rect-days",children:[R.days.me," / ",R.days.total," Days"]})]}),Object(l.jsxs)("div",{className:"rect-container",children:[Object(l.jsxs)("div",{className:"rect-names",children:[e.friendName," commited more in"]}),Object(l.jsxs)("div",{className:"rect-days",children:[R.days.y," / ",R.days.total," Days"]})]})]})]})]}),Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsxs)("div",{className:"arrow-div",id:"prevArrow",children:[Object(l.jsx)("svg",{className:"arrowSVG",width:"18px",height:"17px",viewBox:"0 0 18 17",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",onClick:function(){console.log("back to home"),e.setHome(!0),e.setCompare(!1),window.scrollTo(0,0)},children:Object(l.jsxs)("g",{id:"prev",transform:"translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)",children:[Object(l.jsx)("polygon",{className:"arrow",points:"16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"}),Object(l.jsx)("polygon",{className:"arrow-fixed",points:"16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"}),Object(l.jsx)("path",{d:"M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"})]})}),Object(l.jsx)("span",{children:"go back to main"})]}),Object(l.jsxs)("div",{className:"arrow-div",id:"nextArrow",children:[Object(l.jsx)("span",{children:"go to commit page"}),Object(l.jsx)("svg",{className:"arrowSVG",width:"18px",height:"17px",viewBox:"-1 0 18 17",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnXlink:"http://www.w3.org/1999/xlink",onClick:function(){console.log("go to commit"),e.setCompare(!1),e.setCommit(!0),window.scrollTo(0,0)},children:Object(l.jsxs)("g",{children:[Object(l.jsx)("polygon",{className:"arrow",points:"16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"}),Object(l.jsx)("polygon",{className:"arrow-fixed",points:"16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"}),Object(l.jsx)("path",{d:"M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"})]})})]})]})]})})},F=a(378),D=a(198),T=a.n(D),E=(a(353),a(354),a(79));function R(e){var t=e.className,a=e.style,s=e.onClick;return Object(l.jsx)("div",{className:t,style:Object(y.a)(Object(y.a)({},a),{},{display:"block",background:"grey",borderRadius:"50%"}),onClick:s})}function I(e){var t=e.className,a=e.style,s=e.onClick;return Object(l.jsx)("div",{className:t,style:Object(y.a)(Object(y.a)({},a),{},{display:"block",background:"grey",borderRadius:"50%"}),onClick:s})}var H=function(e){Object(g.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(m.a)(this,a);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(p.a)(a,[{key:"callAPI",value:function(){var e=Object(C.a)(k.a.mark((function e(){var t,a,s=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.myName,a=this.props.friendName,e.abrupt("return",fetch("/compare-languages?MyName=".concat(t,"&OtherName=").concat(a)).then((function(e){return e.json()})).then((function(e){return console.log(e),e})).catch((function(e){console.log(e),f("warning","Cannot Get Data"),setTimeout((function(){s.props.setCommit(!1),s.props.setCompare(!0)}))})));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUnusedLangData",value:function(){var e=Object(C.a)(k.a.mark((function e(){var t,a,s,o,c,n,i,r,l,d,m;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.callAPI();case 2:for(t=e.sent,a=t.no_commit_lang,s=t.developer.id,o=t.developer.name,c=t.repository.repo,n=t.repository.desc,i=E.data,r=E.exclude_data,console.log(a),l=0;l<a.length;l++)console.log(a[l]),d=i.filter((function(e){return e.name==a[l]})),console.log(d),!d.length||r.includes(a[l])?(console.log("we should exclude ".concat(a[l])),a.splice(l,1),s.splice(l,1),o.splice(l,1),c.splice(l,1),n.splice(l,1),l-=1):a[l]=[a[l],d[0].src];for(console.log(t),console.log(a,o,s,c,n),m=0;m<a.length;m++)a[m].push({id:t.developer.id[m],name:o[m]}),a[m].push({desc:n[m],repo:c[m]});this.setState(a),console.log(this.state);case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getUnusedLangData()}},{key:"renderLanguages",value:function(){var e=this;return Object.values(this.state).map((function(t){return a={name:t[0],src:t[1],onModalOpen:function(){e.props.openModal(t[0],t[2],t[3])}},Object(l.jsxs)("div",{className:"carousel-element",onClick:a.onModalOpen,children:[Object(l.jsx)("img",{className:"carousel-img",src:a.src,alt:a.name}),Object(l.jsx)("div",{className:"carousel-div",children:a.name})]});var a}))}},{key:"render",value:function(){var e={dots:!0,infinite:!0,speed:500,nextArrow:Object(l.jsx)(R,{}),prevArrow:Object(l.jsx)(I,{}),slidesToShow:2,slidesToScroll:1,initialSlide:0,autoplay:!0,autoplaySpeed:1500,pauseOnHover:!0},t=this.state;return Object(l.jsx)("div",{children:Object(l.jsx)(T.a,Object(y.a)(Object(y.a)({},e),{},{children:t?this.renderLanguages():"loading"}))})}}]),a}(s.Component),V=(a(355),a(356),a(199));var G=function(e){for(var t=Object(s.useState)({colors:[],langs:[]}),a=Object(i.a)(t,2),o=a[0],c=a[1],n=function(e){c(e)},r=[],d=0;d<o.langs.length;d++){var m=o.colors[d];r.push(Object(l.jsxs)("li",{children:[Object(l.jsx)("div",{className:"chart-lang-box",style:{backgroundColor:m}}),Object(l.jsx)("div",{className:"chart-lang-str",children:o.langs[d].x})]},d))}Object(s.useEffect)((function(){function t(){return(t=Object(C.a)(k.a.mark((function t(){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=E.data,P.a.get("/top-five-languages?MyName=".concat(e.myName)).then((function(t){if(400===t.data.code)f("warning","Cannot Get Data"),setTimeout((function(){e.setCommit(!1),e.setCompare(!0)}));else{var s=t.data.top_five_langs,o=t.data.top_five_pct,c=[];console.log("Top 5 Lang >>",s);for(var i=0;i<s.length;i++)for(var r=0;r<a.length;r++)s[i]==a[r].name&&c.push(a[r].color);for(var d={colors:c,langs:[{x:s[0],y:o[0]},{x:s[1],y:o[1]},{x:s[2],y:o[2]},{x:s[3],y:o[3]},{x:s[4],y:o[4]}]},m=[],p=0;p<d.langs.length;p++){var g=d.colors[p];m.push(Object(l.jsxs)("li",{children:[Object(l.jsx)("div",{className:"chart-lang-box",style:{backgroundColor:g}}),Object(l.jsx)("div",{className:"chart-lang-str",children:d.langs[p].x})]},p))}n(d)}}),(function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var p=function(e){O(e)},g=Object(s.useState)({language:[],repositories:[],developers:[]}),j=Object(i.a)(g,2),u=j[0],b=j[1],h=Object(s.useState)(!1),x=Object(i.a)(h,2),v=x[0],O=x[1];return Object(l.jsxs)("main",{children:[Object(l.jsxs)(V.a,{open:v,onClose:function(){p(!1)},center:!0,children:[Object(l.jsx)("h2",{id:"modal_language_title",children:u.language}),Object(l.jsx)("div",{className:"modal_section_title",children:"Visit Popular Developers"}),Object(l.jsx)("div",{className:"modal_profiles",children:u.developers.id?u.developers.id.map((function(e){var t="https://github.com/".concat(e,".png"),a="https://github.com/".concat(e);return Object(l.jsxs)("a",{className:"gh_profile_container_a",href:a,children:[Object(l.jsx)("img",{className:"gh_profile_img_rounded",src:t}),Object(l.jsx)("h3",{className:"gh_profile_h3_username",children:e})]})})):Object(l.jsx)("div",{})}),Object(l.jsx)("div",{className:"modal_section_title",children:"Visit Popular Repositories"}),Object(l.jsx)("table",{children:Object(l.jsxs)("tbody",{children:[Object(l.jsx)("tr",{children:u.repositories.repo?u.repositories.repo.map((function(e){var t=e.replace("https://github.com/","");return Object(l.jsx)("td",{children:Object(l.jsx)("a",{className:"gh_repo_name_a",href:e,children:t})})})):Object(l.jsx)("div",{})}),Object(l.jsx)("tr",{children:u.repositories.desc?u.repositories.desc.map((function(e){return Object(l.jsx)("td",{children:e})})):Object(l.jsx)("div",{})})]})})]}),Object(l.jsxs)("div",{id:"main-container2",children:[Object(l.jsx)("div",{className:"header2",children:Object(l.jsx)("div",{className:"title title2",children:"Commit"})}),Object(l.jsxs)("div",{className:"subdiv2",children:[Object(l.jsxs)("div",{className:"title-commit-sub",children:[e.myName,"'s Top 5 Commits"]}),Object(l.jsxs)("div",{id:"chart-container",children:[Object(l.jsx)("div",{id:"chart-pie",children:Object(l.jsx)(F.a,{startAngle:-90,endAngle:270,colorScale:o.colors,data:o.langs,labels:function(e){e.l;return""}})}),Object(l.jsx)("div",{id:"chart-pie-description",children:Object(l.jsx)("ul",{children:r})})]})]}),Object(l.jsxs)("div",{className:"subdiv2",children:[Object(l.jsxs)("div",{className:"title-commit-sub",children:["Languages that ",e.friendName," Commit More"]}),Object(l.jsx)("div",{className:"carousel-container",children:Object(l.jsx)(H,{myName:e.myName,friendName:e.friendName,openModal:function(e,t,a){!function(e,t,a){b({language:e,repositories:a,developers:t}),console.log(u)}(e,t,a),p(!0)}})})]})]})]})};a(357);var J=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(s.useState)(!1),n=Object(i.a)(c,2),r=n[0],m=n[1],p=Object(s.useState)(!1),g=Object(i.a)(p,2),j=g[0],u=g[1],b=Object(s.useState)(""),h=Object(i.a)(b,2),x=h[0],v=h[1],O=Object(s.useState)(""),f=Object(i.a)(O,2),y=f[0],w=f[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{id:"main-background"}),a?Object(l.jsx)(N,{myName:x,friendName:y,setMyName:v,setFriendName:w,viewHome:a,setHome:o,setCompare:m,setCommit:u}):null,r?Object(l.jsx)(B,{myName:x,friendName:y,setHome:o,viewCompare:r,setCompare:m,setCommit:u}):null,j?Object(l.jsx)(G,{myName:x,friendName:y,setHome:o,setCommit:u,viewCommit:j}):null,Object(l.jsx)(d,{})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,382)).then((function(t){var a=t.getCLS,s=t.getFID,o=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),s(e),o(e),c(e),n(e)}))};n.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(J,{})}),document.getElementById("root")),U()},79:function(e){e.exports=JSON.parse('{"data":[{"name":"TypeScript","color":"#2b7489","src":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"},{"name":"PureBasic","color":"#5a6986","src":"https://static.macupdate.com/products/20218/m/purebasic-logo.png?v=1589906404"},{"name":"Objective-C++","color":"#6866fb","src":"https://brandslogos.com/wp-content/uploads/images/c-logo-black-and-white.png"},{"name":"Jupyter Notebook","color":"#DA5B0B","src":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png"},{"name":"Dart","color":"#00B4AB","src":"https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"},{"name":"Shell","color":"#89e051","src":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1024px-Bash_Logo_Colored.svg.png"},{"name":"Nix","color":"#7e7eff","src":"https://nixos.wiki/images/thumb/2/20/Home-nixos-logo.png/x207px-Home-nixos-logo.png.pagespeed.ic.38jujIAhx5.png"},{"name":"Elixir","color":"#6e4a7e","src":"https://secure.meetupstatic.com/photos/event/c/a/2/d/600_452871757.jpeg"},{"name":"Kotlin","color":"#F18E33","src":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/600px-Kotlin_Icon.svg.png"},{"name":"Crystal","color":"#776791","src":"https://res.cloudinary.com/practicaldev/image/fetch/s--Q_caf-pz--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/14/crystal-logo-2.png"},{"name":"Objective-C","color":"#438eff","src":"https://seeklogo.com/images/O/objective-c-logo-81746870EF-seeklogo.com.png"},{"name":"Ruby","color":"#701516","src":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png"},{"name":"Go","color":"#375eab","src":"https://sdtimes.com/wp-content/uploads/2018/02/golang.sh_-490x490.png"},{"name":"PHP","color":"#4F5D95","src":"https://i.pinimg.com/originals/40/72/d2/4072d2ad5f640ccbe88d9d5b82e2d702.png"},{"name":"Java","color":"#b07219","src":"https://i.pinimg.com/originals/f1/ea/a7/f1eaa7278f64e27128e062a3de918265.png"},{"name":"Scala","color":"#DC322F","src":"https://pngimage.net/wp-content/uploads/2018/06/scala-png-1.png"},{"name":"Perl","color":"#0298c3","src":"https://cdn.worldvectorlogo.com/logos/perl-programming-language.svg"},{"name":"Lua","color":"#000080","src":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1200px-Lua-Logo.svg.png"},{"name":"Vue","color":"#2c3e50","src":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"},{"name":"CoffeeScript","color":"#244776","src":"https://cdn.worldvectorlogo.com/logos/coffeescript.svg"},{"name":"HTML","color":"#e44b23","src":"https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png"},{"name":"OCaml","color":"#3be133","src":"https://icons-for-free.com/iconfiles/png/512/vscode+icons+type+ocaml-1324451435855960373.png"},{"name":"Pascal","color":"#b0ce4e","src":"https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/d7/24/08/d7240855-0e51-7f7e-6c2d-3bafdea5a05f/source/512x512bb.jpg"},{"name":"F#","color":"#b845fc","src":"https://upload.wikimedia.org/wikipedia/commons/5/57/Fsharp_logo.png"},{"name":"Puppet","color":"#302B6D","src":"https://orcharhino.com/wp-content/uploads/2020/09/Artboard-1pup.png"},{"name":"JavaScript","color":"#f1e05a","src":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"},{"name":"R","color":"#198ce7","src":"https://download.logo.wine/logo/R_(programming_language)/R_(programming_language)-Logo.wine.png"},{"name":"Erlang","color":"#B83998","src":"https://upload.wikimedia.org/wikipedia/commons/0/04/Erlang_logo.svg"},{"name":"Python","color":"#3572A5","src":"http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png"},{"name":"Common Lisp","color":"#3fb68b","src":"https://img.icons8.com/color/452/lisp.png"},{"name":"SystemVerilog","color":"#DAE1C2","src":"https://eirikpre.gallerycdn.vsassets.io/extensions/eirikpre/systemverilog/0.11.3/1612434073897/Microsoft.VisualStudio.Services.Icons.Default"},{"name":"Groovy","color":"#e69f56","src":"https://www.logo.wine/a/logo/Apache_Groovy/Apache_Groovy-Logo.wine.svg"},{"name":"Julia","color":"#a270ba","src":"https://julialang.org/assets/infra/profile.png"},{"name":"Haskell","color":"#29b544","src":"https://assets.clever-cloud.com/logos/haskell.svg"},{"name":"cpp","color":"#f34b7d","src":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"},{"name":"Swift","color":"#ffac45","src":"https://miro.medium.com/max/1138/1*6-G_o5PZSzppyfdLTbFu-A.png"},{"name":"C","color":"#555555","src":"https://blog.kakaocdn.net/dn/GuPNi/btqR1Frt6YJ/iffYKS8KIa3k1xkkpqMre1/img.png"},{"name":"Clojure","color":"#db5855","src":"https://blog.kakaocdn.net/dn/qoAdw/btqCjRMxkON/bINEkX7tk3mcpoXL79Up7k/img.png"},{"name":"Rust","color":"#dea584","src":"https://rust-kr.org/static/logo.svg"},{"name":"Vala","color":"#fbe5cd","src":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Vala_Logo.svg/1200px-Vala_Logo.svg.png"},{"name":"C#","color":"#178600","src":"https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"},{"name":"CSS","color":"#563d7c","src":"https://logodix.com/logo/1111675.png"},{"name":"Emacs Lisp","color":"#c065db","src":"https://cdn.imgbin.com/24/5/0/imgbin-emacs-lisp-text-editor-gnu-computer-software-txt-file-iQ0a30SBVsiJFwGsfb7GvZYVk.jpg"},{"name":"TeX","color":"#3D6117","src":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TeX_logo.svg/1200px-TeX_logo.svg.png"},{"name":"C++","color":"#555555","src":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"}],"exclude_data":["Pure Data","Forth","Red","Hy","Volt","Haxe","Factor","ColdFusion","Glyph","Cirru","Visual Basic .NET","Component Pascal","EJS","PowerShell","FreeMarker","Gosu","ColdFusion CFC","SAS","D","Racket","RAML","Eiffel","xBase","Web Ontology Language","Frege","Mercury","NewLisp","Self","edn","Rebol","AspectJ","MTML","Agda","wisp","Opal","Oz","Mirah","Objective-J","Arc","Brainfuck","Nit","APL","SQF","MAXScript","Makefile","Verilog","LSL","eC","Fancy","Shen","ActionScript","Diff","Ragel in Ruby Host","Fantom","Zephir","Click","Smalltalk","DM","Ioke","PogoScript","LiveScript","VimL","PureScript","ABAP","Matlab","Slash","Pan","LookML","Eagle","Scheme","PLSQL","Max","Latte","XQuery","Omgrofl","XC","Nimrod","Chapel","Dylan","E","Parrot","Grammatical Framework","Game Maker Language","Papyrus","NetLinx+ERB","Clean","Alloy","Squirrel","PAWN","UnrealScript","Standard ML","Slim","Perl6","NCL","Io","Rouge","AGS Script","Dogescript","nesC","Lex","API Blueprint","AutoHotkey","Isabelle","Metal","Clarion","JSONiq","Boo","AutoIt","Prolog","SourcePawn","AMPL","FORTRAN","ANTLR","Harbour","Tcl","BlitzMax","PigLatin","Lasso","ECL","VHDL","Elm","Propeller Spin","X10","IDL","ATS","Ada","Unity3D Asset","Nu","LFE","SuperCollider","Oxygene","ASP","Assembly","Gnuplot","JFlex","NetLinx","Turing","Processing","Arduino","FLUX","NetLogo","Stan","SaltStack","QML","Pike","LOLCODE","ooc","Handlebars","J","Mask","EmberScript","Nemerle","KRL","Ren\'Py","Unified Parallel C"]}')}},[[358,1,2]]]);
//# sourceMappingURL=main.352de949.chunk.js.map