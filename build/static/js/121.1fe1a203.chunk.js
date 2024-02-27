(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[121],{32869:function(e,t,n){"use strict";n.d(t,{Ds:function(){return o.Ds}});var o=n(58518);n(58764)},94962:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var o=n(6907),a=n(74165),r=n(15861),i=n(29439),s=n(72791),c=n(89164),l=n(4567),u=n(57088),d=n(43513),p=n(30439),v=n(71715),h=n(82626),f=n(93006),m=n(63466),b=n(5403),g=n(26759),x=n(99615),Z=n(52073),y=n(32869),S=n(18406),w=n(24750),z=n(51612),C=n(97892),I=n.n(C),k=n(71652),j=n(80184);function P(){var e=(0,u.K$)(),t=(0,y.Ds)().enqueueSnackbar,n=(0,s.useState)(""),o=(0,i.Z)(n,2),C=o[0],P=o[1],R=(0,s.useState)(!1),E=(0,i.Z)(R,2),N=E[0],F=E[1],T=(0,s.useState)((function(){return[I()("2022-04-17"),I()("2022-04-21")]})),_=(0,i.Z)(T,2),L=_[0],M=_[1],B=(0,s.useState)([]),A=(0,i.Z)(B,2),D=A[0],W=A[1],O=(0,s.useState)(null),q=(0,i.Z)(O,2),V=q[0],H=q[1],G=Boolean(V),$=(0,s.useState)({}),K=(0,i.Z)($,2),U=(K[0],K[1]),J=(0,s.useState)(!1),Q=(0,i.Z)(J,2),X=(Q[0],Q[1]),Y=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var n,o,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem(Z._.keyUserToken),o=(0,S.sw)(n),e.next=5,x.ZP.post(x.Hv.receipt.list,{},{headers:{Authorization:"Bearer ".concat(o)}});case 5:(r=e.sent)&&(F(!1),console.log(r.data.data),W(r.data.data)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t("Failed to fetch records!",{variant:"error"}),F(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){F(!0),Y()}),[]);var ee=[{name:"Customer Name",selector:function(e){return e.customerName},sortable:!0},{name:"Invoice Number",selector:function(e){return e.invoiceNumber},sortable:!0},{name:"Amount Paid",selector:function(e){return e.amount},sortable:!0},{name:"Payment Mode",selector:function(e){return e.paymentId.paymentMode},sortable:!0},{name:"Payment Status",selector:function(e){return e.paymentId.paymentStatus},sortable:!0},{name:"Party Type",selector:function(e){return e.partyType},sortable:!0},{name:"Payment Date",selector:function(e){return new Date(e.createdAt).toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"})},sortable:!0},{name:"Actions",width:"130px",cell:function(e){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(p.Z,{onClick:function(t){H(t.currentTarget),U(e)},style:{color:S.$_.actionButton},variant:"outlined",endIcon:(0,j.jsx)(g.Z,{}),children:"Action"}),(0,j.jsx)(v.Z,{id:"basic-menu",anchorEl:V,open:G,onClose:function(){H(null),U({})},MenuListProps:{"aria-labelledby":"basic-button"},children:(0,j.jsx)(h.Z,{onClick:function(){X(!0),H(null)},children:"Delete"})})]})}}],te=D.filter((function(e){var t,n,o=null===e||void 0===e||null===(t=e.invoiceNumber)||void 0===t?void 0:t.toLowerCase().includes(null===C||void 0===C?void 0:C.toLowerCase()),a=null===e||void 0===e||null===(n=e.customerName)||void 0===n?void 0:n.toLowerCase().includes(null===C||void 0===C?void 0:C.toLowerCase());return o||a}));return(0,j.jsxs)(c.Z,{maxWidth:!e.themeStretch&&"xl",children:[(0,j.jsx)(l.Z,{variant:"h4",children:" Receipts "}),(0,j.jsxs)("div",{style:{display:"flex",justifyContent:"start",alignItems:"center",marginTop:"20px",gap:"10px"},children:[(0,j.jsx)(f.Z,{size:"small",onChange:function(e){return P(e.target.value)},type:"text",placeholder:"Search by Inv/Name",InputProps:{startAdornment:(0,j.jsx)(m.Z,{position:"start",children:(0,j.jsx)(b.Z,{})})}}),(0,j.jsx)(k._,{dateAdapter:w.y,children:(0,j.jsx)(z.n,{size:"small",label:"Date Range",value:L,onChange:function(e){return M(e)}})})]}),(0,j.jsx)("div",{style:{marginTop:"20px"},children:(0,j.jsx)(d.ZP,{columns:ee,data:te,pagination:!0,progressPending:N})})]})}function R(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.ql,{children:(0,j.jsx)("title",{children:" Dashboard: Receipts"})}),(0,j.jsx)(P,{})]})}},45649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(54421)},30439:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var o=n(4942),a=n(63366),r=n(87462),i=n(72791),s=n(28182),c=n(35735),l=n(94419),u=n(12065),d=n(66934),p=n(31402),v=n(95080),h=n(14036),f=n(91143);var m=i.createContext({}),b=n(80184),g=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=function(e){return(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},Z=(0,d.ZP)(v.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,h.Z)(n.color))],t["size".concat((0,h.Z)(n.size))],t["".concat(n.variant,"Size").concat((0,h.Z)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n,a,i=e.theme,s=e.ownerState,c="light"===i.palette.mode?i.palette.grey[300]:i.palette.grey[800],l="light"===i.palette.mode?i.palette.grey.A100:i.palette.grey[700];return(0,r.Z)({},i.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,u.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===s.variant&&"inherit"!==s.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[s.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,u.Fq)(i.palette[s.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===s.variant&&"inherit"!==s.color&&{border:"1px solid ".concat((i.vars||i).palette[s.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[s.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,u.Fq)(i.palette[s.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===s.variant&&{backgroundColor:i.vars?i.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===s.variant&&"inherit"!==s.color&&{backgroundColor:(i.vars||i).palette[s.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[s.color].main}}),"&:active":(0,r.Z)({},"contained"===s.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,o.Z)(t,"&.".concat(f.Z.focusVisible),(0,r.Z)({},"contained"===s.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,o.Z)(t,"&.".concat(f.Z.disabled),(0,r.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===s.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"contained"===s.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),t),"text"===s.variant&&{padding:"6px 8px"},"text"===s.variant&&"inherit"!==s.color&&{color:(i.vars||i).palette[s.color].main},"outlined"===s.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===s.variant&&"inherit"!==s.color&&{color:(i.vars||i).palette[s.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[s.color].mainChannel," / 0.5)"):"1px solid ".concat((0,u.Fq)(i.palette[s.color].main,.5))},"contained"===s.variant&&{color:i.vars?i.vars.palette.text.primary:null==(n=(a=i.palette).getContrastText)?void 0:n.call(a,i.palette.grey[300]),backgroundColor:i.vars?i.vars.palette.Button.inheritContainedBg:c,boxShadow:(i.vars||i).shadows[2]},"contained"===s.variant&&"inherit"!==s.color&&{color:(i.vars||i).palette[s.color].contrastText,backgroundColor:(i.vars||i).palette[s.color].main},"inherit"===s.color&&{color:"inherit",borderColor:"currentColor"},"small"===s.size&&"text"===s.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===s.size&&"text"===s.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===s.size&&"outlined"===s.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===s.size&&"outlined"===s.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===s.size&&"contained"===s.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===s.size&&"contained"===s.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},s.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,o.Z)(t,"&.".concat(f.Z.focusVisible),{boxShadow:"none"}),(0,o.Z)(t,"&:active",{boxShadow:"none"}),(0,o.Z)(t,"&.".concat(f.Z.disabled),{boxShadow:"none"}),t)})),y=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat((0,h.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},x(t))})),S=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat((0,h.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},x(t))})),w=i.forwardRef((function(e,t){var n=i.useContext(m),o=(0,c.Z)(n,e),u=(0,p.Z)({props:o,name:"MuiButton"}),d=u.children,v=u.color,x=void 0===v?"primary":v,w=u.component,z=void 0===w?"button":w,C=u.className,I=u.disabled,k=void 0!==I&&I,j=u.disableElevation,P=void 0!==j&&j,R=u.disableFocusRipple,E=void 0!==R&&R,N=u.endIcon,F=u.focusVisibleClassName,T=u.fullWidth,_=void 0!==T&&T,L=u.size,M=void 0===L?"medium":L,B=u.startIcon,A=u.type,D=u.variant,W=void 0===D?"text":D,O=(0,a.Z)(u,g),q=(0,r.Z)({},u,{color:x,component:z,disabled:k,disableElevation:P,disableFocusRipple:E,fullWidth:_,size:M,type:A,variant:W}),V=function(e){var t=e.color,n=e.disableElevation,o=e.fullWidth,a=e.size,i=e.variant,s=e.classes,c={root:["root",i,"".concat(i).concat((0,h.Z)(t)),"size".concat((0,h.Z)(a)),"".concat(i,"Size").concat((0,h.Z)(a)),"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(a))],endIcon:["endIcon","iconSize".concat((0,h.Z)(a))]},u=(0,l.Z)(c,f.F,s);return(0,r.Z)({},s,u)}(q),H=B&&(0,b.jsx)(y,{className:V.startIcon,ownerState:q,children:B}),G=N&&(0,b.jsx)(S,{className:V.endIcon,ownerState:q,children:N});return(0,b.jsxs)(Z,(0,r.Z)({ownerState:q,className:(0,s.Z)(n.className,V.root,C),component:z,disabled:k,focusRipple:!E,focusVisibleClassName:(0,s.Z)(V.focusVisible,F),ref:t,type:A},O,{classes:V,children:[H,d,G]}))}))},63466:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var o=n(4942),a=n(63366),r=n(87462),i=n(72791),s=n(28182),c=n(94419),l=n(14036),u=n(4567),d=n(93840),p=n(52930),v=n(66934),h=n(75878),f=n(21217);function m(e){return(0,f.Z)("MuiInputAdornment",e)}var b,g=(0,h.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),x=n(31402),Z=n(80184),y=["children","className","component","disablePointerEvents","disableTypography","position","variant"],S=(0,v.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat((0,l.Z)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===n.variant&&(0,o.Z)({},"&.".concat(g.positionStart,"&:not(.").concat(g.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),w=i.forwardRef((function(e,t){var n=(0,x.Z)({props:e,name:"MuiInputAdornment"}),o=n.children,v=n.className,h=n.component,f=void 0===h?"div":h,g=n.disablePointerEvents,w=void 0!==g&&g,z=n.disableTypography,C=void 0!==z&&z,I=n.position,k=n.variant,j=(0,a.Z)(n,y),P=(0,p.Z)()||{},R=k;k&&P.variant,P&&!R&&(R=P.variant);var E=(0,r.Z)({},n,{hiddenLabel:P.hiddenLabel,size:P.size,disablePointerEvents:w,position:I,variant:R}),N=function(e){var t=e.classes,n=e.disablePointerEvents,o=e.hiddenLabel,a=e.position,r=e.size,i=e.variant,s={root:["root",n&&"disablePointerEvents",a&&"position".concat((0,l.Z)(a)),i,o&&"hiddenLabel",r&&"size".concat((0,l.Z)(r))]};return(0,c.Z)(s,m,t)}(E);return(0,Z.jsx)(d.Z.Provider,{value:null,children:(0,Z.jsx)(S,(0,r.Z)({as:f,ownerState:E,className:(0,s.Z)(N.root,v),ref:t},j,{children:"string"!==typeof o||C?(0,Z.jsxs)(i.Fragment,{children:["start"===I?b||(b=(0,Z.jsx)("span",{className:"notranslate",children:"\u200b"})):null,o]}):(0,Z.jsx)(u.Z,{color:"text.secondary",children:o})}))})}))},54421:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return a.Z},createChainedFunction:function(){return r},createSvgIcon:function(){return i.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return l.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return v},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return f.Z},unsupportedProp:function(){return m},useControlled:function(){return b.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return Z.Z}});var o=n(55902),a=n(14036),r=n(78949).Z,i=n(74223),s=n(83199);var c=function(e,t){return function(){return null}},l=n(19103),u=n(98301),d=n(17602);n(87462);var p=function(e,t){return function(){return null}},v=n(62971).Z,h=n(40162),f=n(67384);var m=function(e,t,n,o,a){return null},b=n(98278),g=n(89683),x=n(42071),Z=n(23031),y={configure:function(e){o.Z.configure(e)}}},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=121.1fe1a203.chunk.js.map