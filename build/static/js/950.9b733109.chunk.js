(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[950],{32869:function(e,n,t){"use strict";t.d(n,{Ds:function(){return r.Ds}});var r=t(58518);t(58764)},74950:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return M}});var r=t(6907),a=t(93433),o=t(4942),i=t(1413),s=t(74165),c=t(15861),u=t(29439),l=t(72791),d=t(89164),f=t(4567),v=t(57088),p=t(18406),h=t(99615),m=t(52073),Z=t(32869),x=t(43513),g=t(5403),b=t(93006),k=t(85771),y=t(52739),S=t(13239),w=t(63466),P=t(80184),j=localStorage.getItem(m._.keyUserToken),C=(0,p.sw)(j),E={headers:{Authorization:"Bearer ".concat(C)}};function _(){var e=(0,v.K$)(),n=(0,Z.Ds)().enqueueSnackbar,t=(0,l.useState)(!1),r=(0,u.Z)(t,2),p=r[0],m=r[1],j=(0,l.useState)([]),C=(0,u.Z)(j,2),_=C[0],M=C[1],D=(0,l.useState)(!1),I=(0,u.Z)(D,2),z=I[0],F=I[1],A=(0,l.useState)(""),L=(0,u.Z)(A,2),N=L[0],R=L[1],T=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.ZP.post(h.Hv.employee.list,{},E);case 3:(t=e.sent)&&(m(!1),M(t.data.data)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n("Failed to fetch employees!",{variant:"error"}),m(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){m(!0),T()}),[]);var q=new Date,H=new Date(q.getFullYear(),q.getMonth()+1,0).getDate(),W=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t,r,a){var c,u,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),c=void 0===a?"present":a,u=_.map((function(e){if(e._id===t){var n=(0,i.Z)((0,i.Z)({},e.attendance),{},(0,o.Z)({},r,"present"===c?"absent":"present"));return(0,i.Z)((0,i.Z)({},e),{},{attendance:n})}return e})),l=u.find((function(e){return e._id===t})),console.log("\ud83d\ude80 ~ handleAttendance ~ updatedEmployee:",l.attendance),e.prev=5,e.next=8,h.ZP.post(h.Hv.employee.markAttendance,{employeeId:l._id,attendance:l.attendance},E);case 8:e.sent&&(n("Attendance updated!",{variant:"success"}),M(u),F(!1)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),F(!1),n("Failed to update attendance!",{variant:"error"});case 16:case 17:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(n,t,r){return e.apply(this,arguments)}}(),B=[{name:"Employee Names",selector:function(e){return e.name},sortable:"true",width:"150px"}].concat((0,a.Z)(Array.from({length:H},(function(e,n){var t=new Date(q.getFullYear(),q.getMonth(),n+1).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});return{name:t,center:"true",cell:function(e){return(0,P.jsx)(k.Z,{label:e.attendance&&"absent"===e.attendance[t]?"A":"P",color:e.attendance&&"absent"===e.attendance[t]?"error":"success",onClick:function(){return W(e._id,t,e.attendance&&e.attendance[t])}})}}})))),O=_.filter((function(e){var n;return null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(null===N||void 0===N?void 0:N.toLowerCase())}));return(0,P.jsxs)(d.Z,{maxWidth:!e.themeStretch&&"xl",children:[(0,P.jsx)(y.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:z,onClick:function(){return F(!1)},children:(0,P.jsx)(S.Z,{color:"inherit"})}),(0,P.jsx)(f.Z,{variant:"h4",children:"Employee Attendance"}),(0,P.jsx)(b.Z,{sx:{mt:2,mb:2},size:"small",type:"text",placeholder:"Search Employee",value:N,onChange:function(e){return R(e.target.value)},InputProps:{startAdornment:(0,P.jsx)(w.Z,{position:"start",children:(0,P.jsx)(g.Z,{})})}}),(0,P.jsx)(x.ZP,{columns:B,data:O,progressPending:p,pagination:!0})]})}function M(){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(r.ql,{children:(0,P.jsx)("title",{children:" Dashboard : Employee Attendance"})}),(0,P.jsx)(_,{})]})}},5403:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var a=r(t(45649)),o=t(80184);n.Z=(0,a.default)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},45649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(54421)},13239:function(e,n,t){"use strict";t.d(n,{Z:function(){return I}});var r=t(30168),a=t(63366),o=t(87462),i=t(72791),s=t(28182),c=t(94419),u=t(52554),l=t(14036),d=t(31402),f=t(66934),v=t(75878),p=t(21217);function h(e){return(0,p.Z)("MuiCircularProgress",e)}(0,v.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m,Z,x,g,b,k,y,S,w=t(80184),P=["className","color","disableShrink","size","style","thickness","value","variant"],j=44,C=(0,u.F4)(b||(b=m||(m=(0,r.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),E=(0,u.F4)(k||(k=Z||(Z=(0,r.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),_=(0,f.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["color".concat((0,l.Z)(t.color))]]}})((function(e){var n=e.ownerState,t=e.theme;return(0,o.Z)({display:"inline-block"},"determinate"===n.variant&&{transition:t.transitions.create("transform")},"inherit"!==n.color&&{color:(t.vars||t).palette[n.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,u.iv)(y||(y=x||(x=(0,r.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),C)})),M=(0,f.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,n){return n.svg}})({display:"block"}),D=(0,f.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,n){var t=e.ownerState;return[n.circle,n["circle".concat((0,l.Z)(t.variant))],t.disableShrink&&n.circleDisableShrink]}})((function(e){var n=e.ownerState,t=e.theme;return(0,o.Z)({stroke:"currentColor"},"determinate"===n.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===n.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var n=e.ownerState;return"indeterminate"===n.variant&&!n.disableShrink&&(0,u.iv)(S||(S=g||(g=(0,r.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),E)})),I=i.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCircularProgress"}),r=t.className,i=t.color,u=void 0===i?"primary":i,f=t.disableShrink,v=void 0!==f&&f,p=t.size,m=void 0===p?40:p,Z=t.style,x=t.thickness,g=void 0===x?3.6:x,b=t.value,k=void 0===b?0:b,y=t.variant,S=void 0===y?"indeterminate":y,C=(0,a.Z)(t,P),E=(0,o.Z)({},t,{color:u,disableShrink:v,size:m,thickness:g,value:k,variant:S}),I=function(e){var n=e.classes,t=e.variant,r=e.color,a=e.disableShrink,o={root:["root",t,"color".concat((0,l.Z)(r))],svg:["svg"],circle:["circle","circle".concat((0,l.Z)(t)),a&&"circleDisableShrink"]};return(0,c.Z)(o,h,n)}(E),z={},F={},A={};if("determinate"===S){var L=2*Math.PI*((j-g)/2);z.strokeDasharray=L.toFixed(3),A["aria-valuenow"]=Math.round(k),z.strokeDashoffset="".concat(((100-k)/100*L).toFixed(3),"px"),F.transform="rotate(-90deg)"}return(0,w.jsx)(_,(0,o.Z)({className:(0,s.Z)(I.root,r),style:(0,o.Z)({width:m,height:m},F,Z),ownerState:E,ref:n,role:"progressbar"},A,C,{children:(0,w.jsx)(M,{className:I.svg,ownerState:E,viewBox:"".concat(22," ").concat(22," ").concat(j," ").concat(j),children:(0,w.jsx)(D,{className:I.circle,style:z,ownerState:E,cx:j,cy:j,r:(j-g)/2,fill:"none",strokeWidth:g})})}))}))},63466:function(e,n,t){"use strict";t.d(n,{Z:function(){return S}});var r=t(4942),a=t(63366),o=t(87462),i=t(72791),s=t(28182),c=t(94419),u=t(14036),l=t(4567),d=t(93840),f=t(52930),v=t(66934),p=t(75878),h=t(21217);function m(e){return(0,h.Z)("MuiInputAdornment",e)}var Z,x=(0,p.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),g=t(31402),b=t(80184),k=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=(0,v.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,u.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,r.Z)({},"&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),S=i.forwardRef((function(e,n){var t=(0,g.Z)({props:e,name:"MuiInputAdornment"}),r=t.children,v=t.className,p=t.component,h=void 0===p?"div":p,x=t.disablePointerEvents,S=void 0!==x&&x,w=t.disableTypography,P=void 0!==w&&w,j=t.position,C=t.variant,E=(0,a.Z)(t,k),_=(0,f.Z)()||{},M=C;C&&_.variant,_&&!M&&(M=_.variant);var D=(0,o.Z)({},t,{hiddenLabel:_.hiddenLabel,size:_.size,disablePointerEvents:S,position:j,variant:M}),I=function(e){var n=e.classes,t=e.disablePointerEvents,r=e.hiddenLabel,a=e.position,o=e.size,i=e.variant,s={root:["root",t&&"disablePointerEvents",a&&"position".concat((0,u.Z)(a)),i,r&&"hiddenLabel",o&&"size".concat((0,u.Z)(o))]};return(0,c.Z)(s,m,n)}(D);return(0,b.jsx)(d.Z.Provider,{value:null,children:(0,b.jsx)(y,(0,o.Z)({as:h,ownerState:D,className:(0,s.Z)(I.root,v),ref:n},E,{children:"string"!==typeof r||P?(0,b.jsxs)(i.Fragment,{children:["start"===j?Z||(Z=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):null,r]}):(0,b.jsx)(l.Z,{color:"text.secondary",children:r})}))})}))},54421:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return a.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return i.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return u.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return v},unstable_ClassNameGenerator:function(){return k},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return h.Z},unsupportedProp:function(){return m},useControlled:function(){return Z.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return b.Z}});var r=t(55902),a=t(14036),o=t(78949).Z,i=t(74223),s=t(83199);var c=function(e,n){return function(){return null}},u=t(19103),l=t(98301),d=t(17602);t(87462);var f=function(e,n){return function(){return null}},v=t(62971).Z,p=t(40162),h=t(67384);var m=function(e,n,t,r,a){return null},Z=t(98278),x=t(89683),g=t(42071),b=t(23031),k={configure:function(e){r.Z.configure(e)}}},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=950.9b733109.chunk.js.map