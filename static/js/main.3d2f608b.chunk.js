(this["webpackJsonpei-app"]=this["webpackJsonpei-app"]||[]).push([[0],{129:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),o=(a(129),a(40)),s=a(69),l=a(50),d=a(13),b=a(44),j=a(208),p=a(228),u=a(229),h=a(223),m={backup:{id:"D3F4UL7",name:"(anonymous user)",pe:0,se:0,permit:!0,hyperloop:!0,trophies:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],gifts_collected:0,epic_research:{hold_to_hatch:15,epic_hatchery:20,epic_internal_incubators:20,video_doubler_time:12,epic_clucking:20,epic_multiplier:100,cheaper_contractors:10,bust_unions:10,cheaper_research:10,epic_silo_quality:0,silo_capacity:20,int_hatch_sharing:10,int_hatch_calm:20,accounting_tricks:20,soul_eggs:140,prestige_bonus:20,drone_rewards:20,epic_egg_laying:20,transportation_lobbyist:30,warp_shift:0,prophecy_bonus:5,hold_to_research:8},mission_archive:[],mission_running:[],artifacts:new Map,_iat:0,_ver:0},public:!1},O=Object(n.createContext)(m),g=a(109),f=a(93),x=a(65),y=a(233),v=a(209),k=a(210),_=a(211),w=a(94),S=a.n(w),I=a(217),C=a(212),T=a(230),D=a(234),E=a(96),M=a.n(E),N=a(97),B=a.n(N),W=a(67),P=a.n(W),A=a(2),F=Object(j.a)((function(e){return Object(y.a)({menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},formControl:Object(x.a)({margin:e.spacing(1),minWidth:170,display:"none"},e.breakpoints.up("sm"),{display:"inline-flex"})})}));function L(e){var t=F();return Object(A.jsx)(v.a,{position:"static",children:Object(A.jsxs)(k.a,{children:[Object(A.jsx)(_.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return e.setSidebarOpened(!0)},children:Object(A.jsx)(S.a,{})}),Object(A.jsx)("div",{className:t.title}),Object(A.jsx)(C.a,{className:t.formControl,children:Object(A.jsx)(T.a,{displayEmpty:!0,value:e.profileManager.profile.backup.id,inputProps:{"aria-label":"Without label"},onChange:function(t){return function(t){var a,n=Object(f.a)(e.profileManager.profiles);try{for(n.s();!(a=n.n()).done;){var r=a.value;if(r.backup.id===t){e.profileManager.setProfile(r);break}}}catch(i){n.e(i)}finally{n.f()}}(t.target.value)},children:e.profileManager.profiles.map((function(e){return Object(A.jsx)(I.a,{value:e.backup.id,children:e.backup.name||e.backup.id},e.backup.id)}))})}),Object(A.jsx)(D.a,{title:"Settings",children:Object(A.jsx)(_.a,{component:b.b,to:"/settings",color:"inherit","aria-label":"settings",children:Object(A.jsx)(P.a,{})})}),Object(A.jsx)(D.a,{title:"Dark Theme",children:Object(A.jsx)(_.a,{color:"inherit","aria-label":"toggle dark theme",onClick:function(){return e.setDarkThemeEnabled(!e.darkThemeEnabled)},children:e.darkThemeEnabled?Object(A.jsx)(M.a,{}):Object(A.jsx)(B.a,{})})})]})})}var R=a(110),Y=a(26),z=a(232),G=a(216),J=a(221),U=a(162),q=a(218),H=a(219),K=a(222),Q=a(220),V=a(98),X=a.n(V),Z=a(99),$=a.n(Z),ee=a(100),te=a.n(ee),ae=a(101),ne=a.n(ae),re=a(102),ie=a.n(re),ce=Object(j.a)((function(e){return Object(y.a)({list:{width:250},title:{color:e.palette.text.secondary,marginBottom:e.spacing(.5),"&:hover":{color:e.palette.primary.main}},toolbar:Object(Y.a)(Object(Y.a)({},e.mixins.toolbar),{},{paddingLeft:e.spacing(3),display:"flex",flexGrow:1,flexDirection:"column",alignItems:"flex-start",justifyContent:"center"})})}));function oe(e){var t=e.icon,a=e.primary,i=e.to,c=e.disabled,o=Object(n.useMemo)((function(){return r.a.forwardRef((function(e,t){return Object(A.jsx)(b.b,Object(Y.a)({to:i,ref:t},e))}))}),[i]);return Object(A.jsx)("li",{children:Object(A.jsxs)(U.a,{button:!0,component:o,disabled:c,children:[t?Object(A.jsx)(q.a,{children:t}):null,Object(A.jsx)(H.a,{primary:a})]})})}function se(e){var t=e.icon,a=e.primary,n=e.to,r=e.disabled;return Object(A.jsx)("li",{children:Object(A.jsxs)(U.a,{button:!0,disabled:r,component:function(e){var t=e.children,a=Object(R.a)(e,["children"]);return Object(A.jsx)(Q.a,Object(Y.a)(Object(Y.a)({href:n,color:"textPrimary"},a),{},{children:t}))},children:[t?Object(A.jsx)(q.a,{children:t}):null,Object(A.jsx)(H.a,{primary:a})]})})}function le(e){var t=ce(),a=function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&e.setSidebarOpened(!1)};return Object(A.jsx)(z.a,{anchor:"left",open:e.sidebarOpened,onClose:function(){return e.setSidebarOpened(!1)},children:Object(A.jsxs)("div",{className:t.list,role:"presentation",onClick:a,onKeyDown:a,children:[Object(A.jsxs)("div",{className:t.toolbar,children:[Object(A.jsx)(Q.a,{component:b.b,to:"/",className:t.title,variant:"h6",color:"inherit",children:"Egg, Inc. Laboratory"}),"v".concat("0.1.1")]}),Object(A.jsx)(J.a,{}),Object(A.jsxs)(G.a,{children:[Object(A.jsx)(oe,{to:"/",primary:"Home",icon:Object(A.jsx)(X.a,{})}),Object(A.jsx)(oe,{disabled:!0,to:"/",primary:"Dashboard",icon:Object(A.jsx)($.a,{})})]}),Object(A.jsx)(J.a,{}),Object(A.jsx)(G.a,{subheader:Object(A.jsx)(K.a,{children:"Experimental Features"}),children:Object(A.jsx)(oe,{disabled:!0,to:"/",primary:"Mission Data Collection",icon:Object(A.jsx)(te.a,{})})}),Object(A.jsx)(J.a,{}),Object(A.jsxs)(G.a,{children:[Object(A.jsx)(oe,{to:"/settings",primary:"Settings",icon:Object(A.jsx)(P.a,{})}),Object(A.jsx)(oe,{to:"/update_log",primary:"Update Log",icon:Object(A.jsx)(ne.a,{})}),Object(A.jsx)(se,{to:"https://github.com/ei-labo/front/issues",primary:"Issue Report",icon:Object(A.jsx)(ie.a,{})})]})]})})}var de=a(53),be=Object(j.a)((function(e){return{footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:e.palette.primary.dark}}}));function je(){return Object(A.jsxs)(de.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 mikit ",(new Date).getFullYear(),"."]})}function pe(){var e=be();return Object(A.jsx)("footer",{className:e.footer,children:Object(A.jsxs)(h.a,{maxWidth:"sm",children:[Object(A.jsx)(de.a,{variant:"body1",children:"This site is powered by A.I. eggs"}),Object(A.jsx)(je,{})]})})}var ue=a(75),he=a.n(ue),me=a(103),Oe=a(104),ge=Object(j.a)((function(e){return{listItem:{marginTop:e.spacing(1)},image:{maxWidth:"100%"}}}));var fe={overrides:{h1:{component:de.a,props:{gutterBottom:!0,variant:"h4"}},h2:{component:de.a,props:{gutterBottom:!0,variant:"h6"}},h3:{component:de.a,props:{gutterBottom:!0,variant:"subtitle1"}},h4:{component:de.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0}},p:{component:de.a,props:{paragraph:!0}},a:{component:Q.a},li:{component:function(e){var t=ge();return Object(A.jsx)("li",{className:t.listItem,children:Object(A.jsx)(de.a,Object(Y.a)({component:"span"},e))})}},img:{component:function(e){var t=ge();return Object(A.jsx)("img",{className:t.image,src:e.src,title:e.title,alt:e.alt})}}}};function xe(e){return Object(A.jsx)(Oe.a,Object(Y.a)({options:fe},e))}var ye=a(224),ve=a(213),ke=a(235),_e=a(225),we=a(227),Se=a(226),Ie=a(108),Ce=a.n(Ie),Te=a(105),De=a.n(Te),Ee=a(106),Me=a(107),Ne=a.n(Me);function Be(e){var t=e.profileManager,a=Object(n.useState)(""),r=Object(o.a)(a,2),i=r[0],c=r[1],s=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=Object(l.b)().enqueueSnackbar;return De.a.create({baseURL:"https://ei-app-backend.uc.r.appspot.com",transformResponse:[function(a){var n=JSON.parse(a);if(200<=n.status&&n.status<300){var r=Ne.a.toByteArray(n.data);return JSON.parse(Ee.a.inflate(r,{to:"string"}))}return e&&t(n.message,{variant:"error"}),n}]})}(),d=Object(l.b)().enqueueSnackbar,b=Object(n.useState)(!1),j=Object(o.a)(b,2),p=j[0],u=j[1],h=function(){var e=Object(me.a)(he.a.mark((function e(a){var n,r,o;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="EI".concat(i),!t.profiles.some((function(e){return e.backup.id===n}))){e.next=4;break}return d("You have already registered that ID",{variant:"error"}),e.abrupt("return");case 4:return e.prev=4,u(!0),e.next=8,s.post("/users/",{id:n});case 8:r=e.sent,o={backup:r.data,public:!1},t.setProfiles(t.profiles.concat(o)),t.setProfile(o),c(""),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(4);case 17:return e.prev=17,u(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[4,15,17,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("div",{children:[Object(A.jsx)(de.a,{variant:"h4",gutterBottom:!0,children:" Settings "}),Object(A.jsx)(de.a,{variant:"h5",gutterBottom:!0,children:" Accounts "}),Object(A.jsxs)(C.a,{fullWidth:!0,children:[Object(A.jsxs)(ye.a,{container:!0,spacing:3,justify:"flex-start",alignItems:"flex-end",children:[Object(A.jsxs)(ye.a,{item:!0,children:[Object(A.jsx)(ke.a,{htmlFor:"my-input",children:"Your Egg, Inc. ID"}),Object(A.jsx)(ve.a,{fullWidth:!0,value:i,onChange:function(e){return c(e.target.value.replaceAll(/[^0-9]/g,"").substr(0,16))},id:"standard-adornment-weight",startAdornment:Object(A.jsx)(_e.a,{position:"end",children:"EI"}),"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"weight"}})]}),Object(A.jsx)(ye.a,{item:!0,children:Object(A.jsx)(Se.a,{disabled:i.length<16||p,onClick:h,variant:"contained",color:"secondary",startIcon:Object(A.jsx)(Ce.a,{}),children:"Add"})})]}),Object(A.jsx)(we.a,{id:"standard-weight-helper-text",children:"Your ID is displayed in the settings screen."})]}),Object(A.jsx)(xe,{children:"## Your privacy\n\nWe use your egg inc ID in some features.\nThe ID is a kind of credentials to the game server, and it might be used for various actions like examples below:\n\n- Fetch your game progress\n- Get all codes of coops you joined\n\nAnd some more harmful actions, which we don't know they're possible or not.\n\n- Shoot down your artifact spaceships\n- Take away your all GEs\n\nWe highly recommend you not to share the id to untrustable, and it's okay you decide not to share it with our service.\nEven if you input the id to this service, we promise we don't store it on our server and not use it for evil.\nThe id is used only when you're viewing this site and we keep usage at minimal possible.\n"})]})}var We=a.p+"static/media/logo.22d79166.png";function Pe(e){var t="vertical"===e.axis?1:e.size,a="horizontal"===e.axis?1:e.size;return Object(A.jsx)("span",Object(Y.a)({style:Object(Y.a)({display:"block",width:t,minWidth:t,height:a,minHeight:a},e.style)},e.delegated))}var Ae=Object(j.a)((function(e){return{image:{maxWidth:"100%",width:"600px",display:"block",marginLeft:"auto",marginRight:"auto"}}}));function Fe(){var e=Ae();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("img",{src:We,className:e.image,title:"logo",alt:"logo"}),Object(A.jsx)(Pe,{size:50}),Object(A.jsx)(xe,{children:"## About this app\n\nThe egg, inc. laboratory is a 3rd party application.\nThis app unofficially uses the internal dataflow of the game.\nWe're fully taking care not to harm the game system,\nhowever, the service can be terminated anytime if the original developer asked to.\nWe sincerely ask you to understand the use of this app is unsupported action,\nand we do not take any responsibility or liability for any damage or loss caused through our service.\n\n## Getting started\n\nAt this moment we only provide few features publicly, however, you can see what's here in the menu. You can save your ID in the settings page to enable some personalized features.\n\n## Contact\n\nIf you find an issue with this app, report it to `mikit#7826` on discord or post it [here](https://github.com/ei-labo/front/issues).\n"})]})}function Le(){return Object(A.jsx)(xe,{children:"# Update Log\n\n_bug fixes are not listed here._\n\n## v0.1.0\n\n_Released on 2021-02-22_\n\n- Added dark theme\n- Support multiple profiles\n"})}var Re=Object(j.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(3),marginBottom:e.spacing(3)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:e.palette.secondary.dark}}})),Ye=Object(s.a)("theme"),ze=Object(s.a)("profile"),Ge=Object(s.a)("profiles");function Je(e){return Object(A.jsxs)(d.c,{children:[Object(A.jsx)(d.a,{path:"/settings",children:Object(A.jsx)(Be,{profileManager:e.profileManager})}),Object(A.jsx)(d.a,{path:"/update_log",children:Object(A.jsx)(Le,{})}),Object(A.jsx)(d.a,{path:"/",children:Object(A.jsx)(Fe,{})})]})}var Ue=function(){var e=Re(),t=Ye(!1),a=Object(o.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),d=s[0],j=s[1],f=ze(m),x=Object(o.a)(f,2),y=x[0],v=x[1],k=Ge([m]),_=Object(o.a)(k,2),w={profile:y,setProfile:v,profiles:_[0],setProfiles:_[1]};return Object(A.jsx)("div",{className:e.root,children:Object(A.jsx)(n.StrictMode,{children:Object(A.jsx)(p.a,{theme:r?Object(g.a)({palette:{type:"dark",primary:{light:"#62727b",main:"#37474f",dark:"#102027"},secondary:{light:"#a4a4a4",main:"#757575",dark:"#494949"}}}):Object(g.a)({palette:{type:"light",primary:{light:"#b2fff7",main:"#80ccc4",dark:"#4f9b94"},secondary:{light:"#a78172",main:"#775447",dark:"#4a2b20"}}}),children:Object(A.jsx)(l.a,{maxSnack:3,children:Object(A.jsxs)(b.a,{children:[Object(A.jsx)(u.a,{}),Object(A.jsxs)(O.Provider,{value:y,children:[Object(A.jsx)(L,{profileManager:w,darkThemeEnabled:r,setDarkThemeEnabled:i,setSidebarOpened:j}),Object(A.jsx)(le,{sidebarOpened:d,setSidebarOpened:j}),Object(A.jsx)(h.a,{component:"main",maxWidth:"md",className:e.main,children:Object(A.jsx)(Je,{profileManager:w})}),Object(A.jsx)(pe,{})]})]})})})})})},qe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,236)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};a(156),a(157),a(158),a(159);c.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(Ue,{})}),document.getElementById("root")),qe()}},[[160,1,2]]]);
//# sourceMappingURL=main.3d2f608b.chunk.js.map