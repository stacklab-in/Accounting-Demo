(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[824],{32869:function(e,t,n){"use strict";n.d(t,{Ds:function(){return a.Ds}});var a=n(58518);n(58764)},25824:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var a=n(6907),r=n(4942),o=n(1413),i=n(74165),c=n(15861),s=n(29439),l=n(12065),d=n(64554),u=n(89164),p=n(4567),v=n(57088),h=n(72791),f=n(30439),x=n(25228),Z=n(61474),b=n(61889),m=n(93006),g=n(63466),y=n(73590),S=n(5403),w=n(43513),j=n(52073),z=n(18406),C=n(99615),P=n(88014),k=n(32869),I=n(80184),R={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"60%",bgcolor:"background.paper",boxShadow:24,borderRadius:"10px",p:3};function B(){var e=(0,v.K$)(),t=(0,k.Ds)().enqueueSnackbar,n=(0,h.useState)("one"),a=(0,s.Z)(n,2),B=a[0],E=a[1],V=(0,h.useState)(""),F=(0,s.Z)(V,2),_=F[0],N=F[1],A=(0,h.useState)(!1),T=(0,s.Z)(A,2),W=T[0],M=T[1],O=(0,h.useState)(!1),L=(0,s.Z)(O,2),q=(L[0],L[1]),H=(0,h.useState)(!1),U=(0,s.Z)(H,2),D=U[0],G=U[1],$=(0,h.useState)([]),K=(0,s.Z)($,2),J=K[0],Q=K[1],X=(0,h.useState)({_id:"",percentageValue:"",value:""}),Y=(0,s.Z)(X,2),ee=Y[0],te=Y[1],ne=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){var n,a,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem(j._.keyUserToken),a=(0,z.sw)(n),e.next=5,C.ZP.post(C.Hv.productBarcodeValues.details,{},{headers:{Authorization:"Bearer ".concat(a)}});case 5:(r=e.sent)&&(console.log(r),q(!1),r.data.data&&Object.keys(r.data.data).length>0&&te(r.data.data)),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),t("Failed to fetch Barcode Values!",{variant:"error"}),q(!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ae=function(e,t){te((function(n){return(0,o.Z)((0,o.Z)({},n),{},(0,r.Z)({},e,t))}))},re=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){var n,a,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem(j._.keyUserToken),a=(0,z.sw)(n),e.next=5,C.ZP.post(C.Hv.productBarcodeValues.list,{},{headers:{Authorization:"Bearer ".concat(a)}});case 5:(r=e.sent)&&(G(!1),Q(r.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t("Failed to fetch products!",{variant:"error"}),G(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),oe=(0,h.useState)(null),ie=(0,s.Z)(oe,2),ce=ie[0],se=(ie[1],Boolean(ce),(0,h.useState)({})),le=(0,s.Z)(se,2);le[0],le[1];(0,h.useEffect)((function(){q(!0),ne(),G(!0),re()}),[]);var de=function(){return M(!1)},ue=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){var n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=localStorage.getItem(j._.keyUserToken),a=(0,z.sw)(n),C.ZP.post(C.Hv.productBarcodeValues.add,ee,{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){t("Barcode Values created successfully!",{variant:"success"}),te(e.data.data),de()})).catch((function(e){t(e.error||e.msg,{variant:"error"})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){var n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=localStorage.getItem(j._.keyUserToken),a=(0,z.sw)(n),C.ZP.post(C.Hv.productBarcodeValues.update,ee,{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){t("Barcode Values updated successfully!",{variant:"success"}),de()})).catch((function(e){t(e.error||e.msg,{variant:"error"})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=[{name:"Product Name",selector:function(e){return e.productId.name},sortable:!0},{name:"Product Barcode",selector:function(e){return e.barcode},sortable:!0},{name:"Last Updated",selector:function(e){return null!==e&&void 0!==e&&e.updatedAt?(0,z.p6)(e.updatedAt):"N/A"},sortable:!0,width:"250px"},{name:"Actions",center:"true",cell:function(e){return(0,I.jsx)(f.Z,{onClick:function(){},style:{color:z.$_.actionButton},variant:"outlined",endIcon:(0,I.jsx)(P.Z,{}),children:"Print"})}}],he=J.filter((function(e){var t;return null===e||void 0===e||null===(t=e.barcode)||void 0===t?void 0:t.toString().includes(_)}));return(0,I.jsxs)(u.Z,{maxWidth:!e.themeStretch&&"xl",children:[(0,I.jsx)(p.Z,{variant:"h4",children:" Product Barcode "}),(0,I.jsxs)(x.Z,{sx:{mt:2},value:B,onChange:function(e,t){E(t)},textColor:"secondary",indicatorColor:"secondary","aria-label":"secondary tabs example",children:[(0,I.jsx)(Z.Z,{value:"one",label:"Barcode"}),(0,I.jsx)(Z.Z,{value:"two",label:"Barcode Values"})]}),"one"===B&&(0,I.jsx)(d.Z,{sx:{mt:2,width:1,p:2,borderRadius:2,bgcolor:function(e){return(0,l.Fq)(e.palette.grey[500],.04)},border:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:(0,I.jsxs)(b.ZP,{container:!0,spacing:2,children:[(0,I.jsx)(b.ZP,{item:!0,xs:12,children:(0,I.jsx)(m.Z,{size:"small",onChange:function(e){return N(e.target.value)},type:"text",placeholder:"Search Barcode",InputProps:{endAdornment:(0,I.jsx)(g.Z,{position:"end",children:(0,I.jsx)(S.Z,{})})}})}),(0,I.jsx)(b.ZP,{item:!0,xs:12,children:(0,I.jsx)(w.ZP,{style:{borderRadius:"20px"},title:"Barcodes",data:he,columns:ve,progressPending:D,pagination:!0})})]})}),"two"===B&&(0,I.jsx)(d.Z,{sx:{mt:2,width:1,p:2,borderRadius:2,bgcolor:function(e){return(0,l.Fq)(e.palette.grey[500],.04)},border:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:(0,I.jsxs)(b.ZP,{container:!0,spacing:2,children:[(0,I.jsx)(b.ZP,{item:!0,xs:6,children:(0,I.jsx)(m.Z,{fullWidth:!0,label:"Percentage Value",name:"percentageValue",value:ee.percentageValue,InputProps:{endAdornment:(0,I.jsx)(g.Z,{position:"end",children:"%"})},disabled:!0})}),(0,I.jsx)(b.ZP,{item:!0,xs:6,children:(0,I.jsx)(m.Z,{fullWidth:!0,label:"Value",name:"value",value:ee.value,disabled:!0})}),(0,I.jsx)(b.ZP,{item:!0,xs:12,children:(0,I.jsx)(f.Z,{variant:"contained",onClick:function(){return M(!0)},children:"CONFIGURE"})})]})}),(0,I.jsx)(y.Z,{open:W,children:(0,I.jsx)(d.Z,{sx:R,children:(0,I.jsxs)(b.ZP,{container:!0,spacing:2,children:[(0,I.jsx)(b.ZP,{item:!0,xs:6,children:(0,I.jsx)(m.Z,{fullWidth:!0,type:"number",label:"Percentage Value",name:"percentageValue",value:ee.percentageValue,InputProps:{endAdornment:(0,I.jsx)(g.Z,{position:"end",children:"%"})},onChange:function(e){return ae("percentageValue",e.target.value)}})}),(0,I.jsx)(b.ZP,{item:!0,xs:6,children:(0,I.jsx)(m.Z,{fullWidth:!0,type:"number",label:"Value",name:"value",value:ee.value,onChange:function(e){return ae("value",e.target.value)}})}),(0,I.jsxs)(b.ZP,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",gap:"10px",children:[(0,I.jsx)(f.Z,{variant:"contained",onClick:function(){ee._id.length>0?pe():ue()},disabled:!ee.percentageValue||!ee.value,children:"CONFIGURE"}),(0,I.jsx)(f.Z,{variant:"contained",color:"error",onClick:de,children:"Cancel"})]})]})})})]})}function E(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a.ql,{children:(0,I.jsx)("title",{children:" Dashboard : Barcodes"})}),(0,I.jsx)(B,{})]})}},88014:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var r=a(n(45649)),o=n(80184);t.Z=(0,r.default)((0,o.jsx)("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z"}),"Print")},45649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n(54421)},30439:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var a=n(4942),r=n(63366),o=n(87462),i=n(72791),c=n(28182),s=n(35735),l=n(94419),d=n(12065),u=n(66934),p=n(31402),v=n(95080),h=n(14036),f=n(91143);var x=i.createContext({}),Z=n(80184),b=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],m=function(e){return(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},g=(0,u.ZP)(v.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,h.Z)(n.color))],t["size".concat((0,h.Z)(n.size))],t["".concat(n.variant,"Size").concat((0,h.Z)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n,r,i=e.theme,c=e.ownerState,s="light"===i.palette.mode?i.palette.grey[300]:i.palette.grey[800],l="light"===i.palette.mode?i.palette.grey.A100:i.palette.grey[700];return(0,o.Z)({},i.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((i.vars||i).palette[c.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:i.vars?i.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(i.vars||i).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[c.color].main}}),"&:active":(0,o.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,a.Z)(t,"&.".concat(f.Z.focusVisible),(0,o.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,a.Z)(t,"&.".concat(f.Z.disabled),(0,o.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"contained"===c.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),t),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(i.palette[c.color].main,.5))},"contained"===c.variant&&{color:i.vars?i.vars.palette.text.primary:null==(n=(r=i.palette).getContrastText)?void 0:n.call(r,i.palette.grey[300]),backgroundColor:i.vars?i.vars.palette.Button.inheritContainedBg:s,boxShadow:(i.vars||i).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].contrastText,backgroundColor:(i.vars||i).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,a.Z)(t,"&.".concat(f.Z.focusVisible),{boxShadow:"none"}),(0,a.Z)(t,"&:active",{boxShadow:"none"}),(0,a.Z)(t,"&.".concat(f.Z.disabled),{boxShadow:"none"}),t)})),y=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat((0,h.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},m(t))})),S=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat((0,h.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},m(t))})),w=i.forwardRef((function(e,t){var n=i.useContext(x),a=(0,s.Z)(n,e),d=(0,p.Z)({props:a,name:"MuiButton"}),u=d.children,v=d.color,m=void 0===v?"primary":v,w=d.component,j=void 0===w?"button":w,z=d.className,C=d.disabled,P=void 0!==C&&C,k=d.disableElevation,I=void 0!==k&&k,R=d.disableFocusRipple,B=void 0!==R&&R,E=d.endIcon,V=d.focusVisibleClassName,F=d.fullWidth,_=void 0!==F&&F,N=d.size,A=void 0===N?"medium":N,T=d.startIcon,W=d.type,M=d.variant,O=void 0===M?"text":M,L=(0,r.Z)(d,b),q=(0,o.Z)({},d,{color:m,component:j,disabled:P,disableElevation:I,disableFocusRipple:B,fullWidth:_,size:A,type:W,variant:O}),H=function(e){var t=e.color,n=e.disableElevation,a=e.fullWidth,r=e.size,i=e.variant,c=e.classes,s={root:["root",i,"".concat(i).concat((0,h.Z)(t)),"size".concat((0,h.Z)(r)),"".concat(i,"Size").concat((0,h.Z)(r)),"inherit"===t&&"colorInherit",n&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(r))],endIcon:["endIcon","iconSize".concat((0,h.Z)(r))]},d=(0,l.Z)(s,f.F,c);return(0,o.Z)({},c,d)}(q),U=T&&(0,Z.jsx)(y,{className:H.startIcon,ownerState:q,children:T}),D=E&&(0,Z.jsx)(S,{className:H.endIcon,ownerState:q,children:E});return(0,Z.jsxs)(g,(0,o.Z)({ownerState:q,className:(0,c.Z)(n.className,H.root,z),component:j,disabled:P,focusRipple:!B,focusVisibleClassName:(0,c.Z)(H.focusVisible,V),ref:t,type:W},L,{classes:H,children:[U,u,D]}))}))},63466:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var a=n(4942),r=n(63366),o=n(87462),i=n(72791),c=n(28182),s=n(94419),l=n(14036),d=n(4567),u=n(93840),p=n(52930),v=n(66934),h=n(75878),f=n(21217);function x(e){return(0,f.Z)("MuiInputAdornment",e)}var Z,b=(0,h.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),m=n(31402),g=n(80184),y=["children","className","component","disablePointerEvents","disableTypography","position","variant"],S=(0,v.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat((0,l.Z)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===n.variant&&(0,a.Z)({},"&.".concat(b.positionStart,"&:not(.").concat(b.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),w=i.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiInputAdornment"}),a=n.children,v=n.className,h=n.component,f=void 0===h?"div":h,b=n.disablePointerEvents,w=void 0!==b&&b,j=n.disableTypography,z=void 0!==j&&j,C=n.position,P=n.variant,k=(0,r.Z)(n,y),I=(0,p.Z)()||{},R=P;P&&I.variant,I&&!R&&(R=I.variant);var B=(0,o.Z)({},n,{hiddenLabel:I.hiddenLabel,size:I.size,disablePointerEvents:w,position:C,variant:R}),E=function(e){var t=e.classes,n=e.disablePointerEvents,a=e.hiddenLabel,r=e.position,o=e.size,i=e.variant,c={root:["root",n&&"disablePointerEvents",r&&"position".concat((0,l.Z)(r)),i,a&&"hiddenLabel",o&&"size".concat((0,l.Z)(o))]};return(0,s.Z)(c,x,t)}(B);return(0,g.jsx)(u.Z.Provider,{value:null,children:(0,g.jsx)(S,(0,o.Z)({as:f,ownerState:B,className:(0,c.Z)(E.root,v),ref:t},k,{children:"string"!==typeof a||z?(0,g.jsxs)(i.Fragment,{children:["start"===C?Z||(Z=(0,g.jsx)("span",{className:"notranslate",children:"\u200b"})):null,a]}):(0,g.jsx)(d.Z,{color:"text.secondary",children:a})}))})}))},54421:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return i.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return l.Z},ownerDocument:function(){return d.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return p},setRef:function(){return v},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return f.Z},unsupportedProp:function(){return x},useControlled:function(){return Z.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return m.Z},useIsFocusVisible:function(){return g.Z}});var a=n(55902),r=n(14036),o=n(78949).Z,i=n(74223),c=n(83199);var s=function(e,t){return function(){return null}},l=n(19103),d=n(98301),u=n(17602);n(87462);var p=function(e,t){return function(){return null}},v=n(62971).Z,h=n(40162),f=n(67384);var x=function(e,t,n,a,r){return null},Z=n(98278),b=n(89683),m=n(42071),g=n(23031),y={configure:function(e){a.Z.configure(e)}}},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=824.3f6115b7.chunk.js.map