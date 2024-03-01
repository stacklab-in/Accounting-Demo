"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[377],{61474:function(e,t,o){var r=o(4942),l=o(63366),n=o(87462),i=o(72791),a=o(28182),c=o(94419),s=o(95080),d=o(14036),u=o(31402),f=o(66934),v=o(73901),b=o(80184),p=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],h=(0,f.ZP)(s.Z,{name:"MuiTab",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.label&&o.icon&&t.labelIcon,t["textColor".concat((0,d.Z)(o.textColor))],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})((function(e){var t,o,l,i=e.theme,a=e.ownerState;return(0,n.Z)({},i.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},a.label&&{flexDirection:"top"===a.iconPosition||"bottom"===a.iconPosition?"column":"row"},{lineHeight:1.25},a.icon&&a.label&&(0,r.Z)({minHeight:72,paddingTop:9,paddingBottom:9},"& > .".concat(v.Z.iconWrapper),(0,n.Z)({},"top"===a.iconPosition&&{marginBottom:6},"bottom"===a.iconPosition&&{marginTop:6},"start"===a.iconPosition&&{marginRight:i.spacing(1)},"end"===a.iconPosition&&{marginLeft:i.spacing(1)})),"inherit"===a.textColor&&(t={color:"inherit",opacity:.6},(0,r.Z)(t,"&.".concat(v.Z.selected),{opacity:1}),(0,r.Z)(t,"&.".concat(v.Z.disabled),{opacity:(i.vars||i).palette.action.disabledOpacity}),t),"primary"===a.textColor&&(o={color:(i.vars||i).palette.text.secondary},(0,r.Z)(o,"&.".concat(v.Z.selected),{color:(i.vars||i).palette.primary.main}),(0,r.Z)(o,"&.".concat(v.Z.disabled),{color:(i.vars||i).palette.text.disabled}),o),"secondary"===a.textColor&&(l={color:(i.vars||i).palette.text.secondary},(0,r.Z)(l,"&.".concat(v.Z.selected),{color:(i.vars||i).palette.secondary.main}),(0,r.Z)(l,"&.".concat(v.Z.disabled),{color:(i.vars||i).palette.text.disabled}),l),a.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},a.wrapped&&{fontSize:i.typography.pxToRem(12)})})),m=i.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiTab"}),r=o.className,s=o.disabled,f=void 0!==s&&s,m=o.disableFocusRipple,Z=void 0!==m&&m,S=o.fullWidth,w=o.icon,x=o.iconPosition,g=void 0===x?"top":x,C=o.indicator,y=o.label,B=o.onChange,M=o.onClick,W=o.onFocus,P=o.selected,E=o.selectionFollowsFocus,R=o.textColor,T=void 0===R?"inherit":R,k=o.value,I=o.wrapped,N=void 0!==I&&I,L=(0,l.Z)(o,p),z=(0,n.Z)({},o,{disabled:f,disableFocusRipple:Z,selected:P,icon:!!w,iconPosition:g,label:!!y,fullWidth:S,textColor:T,wrapped:N}),F=function(e){var t=e.classes,o=e.textColor,r=e.fullWidth,l=e.wrapped,n=e.icon,i=e.label,a=e.selected,s=e.disabled,u={root:["root",n&&i&&"labelIcon","textColor".concat((0,d.Z)(o)),r&&"fullWidth",l&&"wrapped",a&&"selected",s&&"disabled"],iconWrapper:["iconWrapper"]};return(0,c.Z)(u,v.V,t)}(z),A=w&&y&&i.isValidElement(w)?i.cloneElement(w,{className:(0,a.Z)(F.iconWrapper,w.props.className)}):w;return(0,b.jsxs)(h,(0,n.Z)({focusRipple:!Z,className:(0,a.Z)(F.root,r),ref:t,role:"tab","aria-selected":P,disabled:f,onClick:function(e){!P&&B&&B(e,k),M&&M(e)},onFocus:function(e){E&&!P&&B&&B(e,k),W&&W(e)},ownerState:z,tabIndex:P?0:-1},L,{children:["top"===g||"start"===g?(0,b.jsxs)(i.Fragment,{children:[A,y]}):(0,b.jsxs)(i.Fragment,{children:[y,A]}),C]}))}));t.Z=m},25228:function(e,t,o){o.d(t,{Z:function(){return J}});var r,l=o(29439),n=o(4942),i=o(63366),a=o(87462),c=o(72791),s=(o(57441),o(28182)),d=o(94419),u=o(57271),f=o(66934),v=o(31402),b=o(13967),p=o(83199);function h(){if(r)return r;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),r="reverse",e.scrollLeft>0?r="default":(e.scrollLeft=1,0===e.scrollLeft&&(r="negative")),document.body.removeChild(e),r}function m(e,t){var o=e.scrollLeft;if("rtl"!==t)return o;switch(h()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function Z(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function S(e,t,o){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},n=r.ease,i=void 0===n?Z:n,a=r.duration,c=void 0===a?300:a,s=null,d=t[e],u=!1,f=function(){u=!0},v=function r(n){if(u)l(new Error("Animation cancelled"));else{null===s&&(s=n);var a=Math.min(1,(n-s)/c);t[e]=i(a)*(o-d)+d,a>=1?requestAnimationFrame((function(){l(null)})):requestAnimationFrame(r)}};return d===o?(l(new Error("Element already at target position")),f):(requestAnimationFrame(v),f)}var w=o(40162),x=o(17602),g=o(80184),C=["onChange"],y={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var B=o(74223),M=(0,B.Z)((0,g.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),W=(0,B.Z)((0,g.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),P=o(95080),E=o(75878),R=o(21217);function T(e){return(0,R.Z)("MuiTabScrollButton",e)}var k=(0,E.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),I=["className","slots","slotProps","direction","orientation","disabled"],N=(0,f.ZP)(P.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.orientation&&t[o.orientation]]}})((function(e){var t=e.ownerState;return(0,a.Z)((0,n.Z)({width:40,flexShrink:0,opacity:.8},"&.".concat(k.disabled),{opacity:0}),"vertical"===t.orientation&&{width:"100%",height:40,"& svg":{transform:"rotate(".concat(t.isRtl?-90:90,"deg)")}})})),L=c.forwardRef((function(e,t){var o,r,l=(0,v.Z)({props:e,name:"MuiTabScrollButton"}),n=l.className,c=l.slots,f=void 0===c?{}:c,p=l.slotProps,h=void 0===p?{}:p,m=l.direction,Z=(0,i.Z)(l,I),S="rtl"===(0,b.Z)().direction,w=(0,a.Z)({isRtl:S},l),x=function(e){var t=e.classes,o={root:["root",e.orientation,e.disabled&&"disabled"]};return(0,d.Z)(o,T,t)}(w),C=null!=(o=f.StartScrollButtonIcon)?o:M,y=null!=(r=f.EndScrollButtonIcon)?r:W,B=(0,u.Z)({elementType:C,externalSlotProps:h.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:w}),P=(0,u.Z)({elementType:y,externalSlotProps:h.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:w});return(0,g.jsx)(N,(0,a.Z)({component:"div",className:(0,s.Z)(x.root,n),ref:t,role:null,ownerState:w,tabIndex:null},Z,{children:"left"===m?(0,g.jsx)(C,(0,a.Z)({},B)):(0,g.jsx)(y,(0,a.Z)({},P))}))})),z=o(89683);function F(e){return(0,R.Z)("MuiTabs",e)}var A=(0,E.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),H=o(98301),j=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],X=function(e,t){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild},Y=function(e,t){return e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild},D=function(e,t,o){for(var r=!1,l=o(e,t);l;){if(l===e.firstChild){if(r)return;r=!0}var n=l.disabled||"true"===l.getAttribute("aria-disabled");if(l.hasAttribute("tabindex")&&!n)return void l.focus();l=o(e,l)}},V=(0,f.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[(0,n.Z)({},"& .".concat(A.scrollButtons),t.scrollButtons),(0,n.Z)({},"& .".concat(A.scrollButtons),o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile),t.root,o.vertical&&t.vertical]}})((function(e){var t=e.ownerState,o=e.theme;return(0,a.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&(0,n.Z)({},"& .".concat(A.scrollButtons),(0,n.Z)({},o.breakpoints.down("sm"),{display:"none"})))})),_=(0,f.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:function(e,t){var o=e.ownerState;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((function(e){var t=e.ownerState;return(0,a.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})})),O=(0,f.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:function(e,t){var o=e.ownerState;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})})),q=(0,f.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:function(e,t){return t.indicator}})((function(e){var t=e.ownerState,o=e.theme;return(0,a.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create()},"primary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.primary.main},"secondary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})})),K=(0,f.ZP)((function(e){var t=e.onChange,o=(0,i.Z)(e,C),r=c.useRef(),l=c.useRef(null),n=function(){r.current=l.current.offsetHeight-l.current.clientHeight};return(0,w.Z)((function(){var e=(0,p.Z)((function(){var e=r.current;n(),e!==r.current&&t(r.current)})),o=(0,x.Z)(l.current);return o.addEventListener("resize",e),function(){e.clear(),o.removeEventListener("resize",e)}}),[t]),c.useEffect((function(){n(),t(r.current)}),[t]),(0,g.jsx)("div",(0,a.Z)({style:y,ref:l},o))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),G={},U=c.forwardRef((function(e,t){var o=(0,v.Z)({props:e,name:"MuiTabs"}),r=(0,b.Z)(),f="rtl"===r.direction,Z=o["aria-label"],w=o["aria-labelledby"],C=o.action,y=o.centered,B=void 0!==y&&y,M=o.children,W=o.className,P=o.component,E=void 0===P?"div":P,R=o.allowScrollButtonsMobile,T=void 0!==R&&R,k=o.indicatorColor,I=void 0===k?"primary":k,N=o.onChange,A=o.orientation,U=void 0===A?"horizontal":A,J=o.ScrollButtonComponent,Q=void 0===J?L:J,$=o.scrollButtons,ee=void 0===$?"auto":$,te=o.selectionFollowsFocus,oe=o.slots,re=void 0===oe?{}:oe,le=o.slotProps,ne=void 0===le?{}:le,ie=o.TabIndicatorProps,ae=void 0===ie?{}:ie,ce=o.TabScrollButtonProps,se=void 0===ce?{}:ce,de=o.textColor,ue=void 0===de?"primary":de,fe=o.value,ve=o.variant,be=void 0===ve?"standard":ve,pe=o.visibleScrollbar,he=void 0!==pe&&pe,me=(0,i.Z)(o,j),Ze="scrollable"===be,Se="vertical"===U,we=Se?"scrollTop":"scrollLeft",xe=Se?"top":"left",ge=Se?"bottom":"right",Ce=Se?"clientHeight":"clientWidth",ye=Se?"height":"width",Be=(0,a.Z)({},o,{component:E,allowScrollButtonsMobile:T,indicatorColor:I,orientation:U,vertical:Se,scrollButtons:ee,textColor:ue,variant:be,visibleScrollbar:he,fixed:!Ze,hideScrollbar:Ze&&!he,scrollableX:Ze&&!Se,scrollableY:Ze&&Se,centered:B&&!Ze,scrollButtonsHideMobile:!T}),Me=function(e){var t=e.vertical,o=e.fixed,r=e.hideScrollbar,l=e.scrollableX,n=e.scrollableY,i=e.centered,a=e.scrollButtonsHideMobile,c=e.classes,s={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",l&&"scrollableX",n&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[l&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,d.Z)(s,F,c)}(Be),We=(0,u.Z)({elementType:re.StartScrollButtonIcon,externalSlotProps:ne.startScrollButtonIcon,ownerState:Be}),Pe=(0,u.Z)({elementType:re.EndScrollButtonIcon,externalSlotProps:ne.endScrollButtonIcon,ownerState:Be});var Ee=c.useState(!1),Re=(0,l.Z)(Ee,2),Te=Re[0],ke=Re[1],Ie=c.useState(G),Ne=(0,l.Z)(Ie,2),Le=Ne[0],ze=Ne[1],Fe=c.useState({start:!1,end:!1}),Ae=(0,l.Z)(Fe,2),He=Ae[0],je=Ae[1],Xe=c.useState({overflow:"hidden",scrollbarWidth:0}),Ye=(0,l.Z)(Xe,2),De=Ye[0],Ve=Ye[1],_e=new Map,Oe=c.useRef(null),qe=c.useRef(null),Ke=function(){var e,t,o=Oe.current;if(o){var l=o.getBoundingClientRect();e={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:m(o,r.direction),scrollWidth:o.scrollWidth,top:l.top,bottom:l.bottom,left:l.left,right:l.right}}if(o&&!1!==fe){var n=qe.current.children;if(n.length>0){var i=n[_e.get(fe)];0,t=i?i.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},Ge=(0,z.Z)((function(){var e,t,o=Ke(),r=o.tabsMeta,l=o.tabMeta,i=0;if(Se)t="top",l&&r&&(i=l.top-r.top+r.scrollTop);else if(t=f?"right":"left",l&&r){var a=f?r.scrollLeftNormalized+r.clientWidth-r.scrollWidth:r.scrollLeft;i=(f?-1:1)*(l[t]-r[t]+a)}var c=(e={},(0,n.Z)(e,t,i),(0,n.Z)(e,ye,l?l[ye]:0),e);if(isNaN(Le[t])||isNaN(Le[ye]))ze(c);else{var s=Math.abs(Le[t]-c[t]),d=Math.abs(Le[ye]-c[ye]);(s>=1||d>=1)&&ze(c)}})),Ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.animation,l=void 0===o||o;l?S(we,Oe.current,e,{duration:r.transitions.duration.standard}):Oe.current[we]=e},Je=function(e){var t=Oe.current[we];Se?t+=e:(t+=e*(f?-1:1),t*=f&&"reverse"===h()?-1:1),Ue(t)},Qe=function(){for(var e=Oe.current[Ce],t=0,o=Array.from(qe.current.children),r=0;r<o.length;r+=1){var l=o[r];if(t+l[Ce]>e){0===r&&(t=e);break}t+=l[Ce]}return t},$e=function(){Je(-1*Qe())},et=function(){Je(Qe())},tt=c.useCallback((function(e){Ve({overflow:null,scrollbarWidth:e})}),[]),ot=(0,z.Z)((function(e){var t=Ke(),o=t.tabsMeta,r=t.tabMeta;if(r&&o)if(r[xe]<o[xe]){var l=o[we]+(r[xe]-o[xe]);Ue(l,{animation:e})}else if(r[ge]>o[ge]){var n=o[we]+(r[ge]-o[ge]);Ue(n,{animation:e})}})),rt=(0,z.Z)((function(){if(Ze&&!1!==ee){var e,t,o=Oe.current,l=o.scrollTop,n=o.scrollHeight,i=o.clientHeight,a=o.scrollWidth,c=o.clientWidth;if(Se)e=l>1,t=l<n-i-1;else{var s=m(Oe.current,r.direction);e=f?s<a-c-1:s>1,t=f?s>1:s<a-c-1}e===He.start&&t===He.end||je({start:e,end:t})}}));c.useEffect((function(){var e,t=(0,p.Z)((function(){Oe.current&&(Ge(),rt())})),o=(0,x.Z)(Oe.current);return o.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t),Array.from(qe.current.children).forEach((function(t){e.observe(t)}))),function(){t.clear(),o.removeEventListener("resize",t),e&&e.disconnect()}}),[Ge,rt]);var lt=c.useMemo((function(){return(0,p.Z)((function(){rt()}))}),[rt]);c.useEffect((function(){return function(){lt.clear()}}),[lt]),c.useEffect((function(){ke(!0)}),[]),c.useEffect((function(){Ge(),rt()})),c.useEffect((function(){ot(G!==Le)}),[ot,Le]),c.useImperativeHandle(C,(function(){return{updateIndicator:Ge,updateScrollButtons:rt}}),[Ge,rt]);var nt=(0,g.jsx)(q,(0,a.Z)({},ae,{className:(0,s.Z)(Me.indicator,ae.className),ownerState:Be,style:(0,a.Z)({},Le,ae.style)})),it=0,at=c.Children.map(M,(function(e){if(!c.isValidElement(e))return null;var t=void 0===e.props.value?it:e.props.value;_e.set(t,it);var o=t===fe;return it+=1,c.cloneElement(e,(0,a.Z)({fullWidth:"fullWidth"===be,indicator:o&&!Te&&nt,selected:o,selectionFollowsFocus:te,onChange:N,textColor:ue,value:t},1!==it||!1!==fe||e.props.tabIndex?{}:{tabIndex:0}))})),ct=function(){var e={};e.scrollbarSizeListener=Ze?(0,g.jsx)(K,{onChange:tt,className:(0,s.Z)(Me.scrollableX,Me.hideScrollbar)}):null;var t=He.start||He.end,o=Ze&&("auto"===ee&&t||!0===ee);return e.scrollButtonStart=o?(0,g.jsx)(Q,(0,a.Z)({slots:{StartScrollButtonIcon:re.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:We},orientation:U,direction:f?"right":"left",onClick:$e,disabled:!He.start},se,{className:(0,s.Z)(Me.scrollButtons,se.className)})):null,e.scrollButtonEnd=o?(0,g.jsx)(Q,(0,a.Z)({slots:{EndScrollButtonIcon:re.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Pe},orientation:U,direction:f?"left":"right",onClick:et,disabled:!He.end},se,{className:(0,s.Z)(Me.scrollButtons,se.className)})):null,e}();return(0,g.jsxs)(V,(0,a.Z)({className:(0,s.Z)(Me.root,W),ownerState:Be,ref:t,as:E},me,{children:[ct.scrollButtonStart,ct.scrollbarSizeListener,(0,g.jsxs)(_,{className:Me.scroller,ownerState:Be,style:(0,n.Z)({overflow:De.overflow},Se?"margin".concat(f?"Left":"Right"):"marginBottom",he?void 0:-De.scrollbarWidth),ref:Oe,onScroll:lt,children:[(0,g.jsx)(O,{"aria-label":Z,"aria-labelledby":w,"aria-orientation":"vertical"===U?"vertical":null,className:Me.flexContainer,ownerState:Be,onKeyDown:function(e){var t=qe.current,o=(0,H.Z)(t).activeElement;if("tab"===o.getAttribute("role")){var r="horizontal"===U?"ArrowLeft":"ArrowUp",l="horizontal"===U?"ArrowRight":"ArrowDown";switch("horizontal"===U&&f&&(r="ArrowRight",l="ArrowLeft"),e.key){case r:e.preventDefault(),D(t,o,Y);break;case l:e.preventDefault(),D(t,o,X);break;case"Home":e.preventDefault(),D(t,null,X);break;case"End":e.preventDefault(),D(t,null,Y)}}},ref:qe,role:"tablist",children:at}),Te&&nt]}),ct.scrollButtonEnd]}))})),J=U}}]);
//# sourceMappingURL=377.511d5811.chunk.js.map