"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[522],{32869:function(e,n,a){a.d(n,{Ds:function(){return t.Ds}});var t=a(58518);a(58764)},38522:function(e,n,a){a.r(n),a.d(n,{default:function(){return R}});var t=a(4942),o=a(74165),r=a(15861),i=a(1413),s=a(29439),c=a(13034),l=a(89164),d=a(4567),u=a(61889),p=a(94721),v=a(93006),h=a(68096),m=a(50168),x=a(58406),Z=a(82626),f=a(30439),b=a(72791),g=a(6907),y=a(57689),k=a(8007),S=a(57088),C=(a(52073),a(18406),a(99615)),j=a(32869),w=a(43513),z=a(80184);function R(){var e=(0,S.K$)(),n=(0,y.s0)(),a=(0,y.TH)(),R=(0,j.Ds)().enqueueSnackbar,I=null===a||void 0===a?void 0:a.state,P=(0,b.useState)({id:"",name:"",email:"",role:"",permissions:[]}),N=(0,s.Z)(P,2),F=N[0],B=N[1],M=k.Ry().shape({name:k.Z_().required("Name is required").matches(/^[A-Za-z\s]+$/,"Name must contain only letters and spaces")});(0,b.useEffect)((function(){if(I){var e=Object.keys(I.permissions).map((function(e,n){return{id:n+1,moduleName:e,permissions:I.permissions[e]}}));B((function(n){return(0,i.Z)((0,i.Z)({},n),{},{id:I._id,name:I.name,email:I.email,role:I.roleId.name,permissions:e})}))}}),[I]);var E=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(){var a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={name:F.name},e.next=4,M.validate(a,{abortEarly:!1});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),R("User name is invalid!",{variant:"error"}),e.abrupt("return");case 10:return e.prev=10,e.next=13,C.ZP.post(C.Hv.user.updateRolesAndPermissions,{name:F.name,role:F.role,permissions:F.permissions,id:F.id});case 13:e.sent,R("User details updated!",{variant:"success"}),n(-1),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(10),R(e.t1.error||"Something went wrong!",{variant:"error"});case 21:case"end":return e.stop()}}),e,null,[[0,6],[10,18]])})));return function(){return e.apply(this,arguments)}}(),A=function(e,n,a){var o=F.permissions.map((function(o){return o.id===n?(0,i.Z)((0,i.Z)({},o),{},{permissions:(0,i.Z)((0,i.Z)({},o.permissions),{},(0,t.Z)({},a,e.target.checked))}):o}));B((function(e){return(0,i.Z)((0,i.Z)({},e),{},{permissions:o})}))},O=[{name:"Module Name",selector:function(e){return e.moduleName.charAt(0).toUpperCase()+e.moduleName.slice(1)},width:"150px"},{name:"View",selector:function(e){return e.permissions.r},cell:function(e){return(0,z.jsx)(c.Z,{disabled:"ADMIN"===F.role,checked:e.permissions.r,value:e.permissions.r,onChange:function(n){return A(n,e.id,"r")}})}},{name:"Edit",selector:function(e){return e.permissions.u},cell:function(e){return(0,z.jsx)(c.Z,{disabled:"ADMIN"===F.role,checked:e.permissions.u,value:e.permissions.u,onChange:function(n){return A(n,e.id,"u")}})}}];return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(g.ql,{children:(0,z.jsx)("title",{children:" Dashboard : User Details"})}),(0,z.jsxs)(l.Z,{maxWidth:!e.themeStretch&&"xl",children:[(0,z.jsx)(d.Z,{variant:"h4",children:" User Details "}),(0,z.jsxs)(u.ZP,{container:!0,sx:{p:2},spacing:2,children:[(0,z.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,z.jsx)(d.Z,{variant:"h5",children:"User Profile"}),(0,z.jsx)(d.Z,{variant:"body2",children:"Manage user details and Permissions here"})]}),(0,z.jsx)(u.ZP,{item:!0,xs:12,children:(0,z.jsx)(p.Z,{})}),(0,z.jsxs)(u.ZP,{item:!0,xs:3,children:[(0,z.jsx)(d.Z,{variant:"h6",children:"User Details"}),(0,z.jsx)(d.Z,{variant:"caption",children:"Manage user details here"})]}),(0,z.jsx)(u.ZP,{item:!0,xs:3,children:(0,z.jsx)(v.Z,{label:"Name",fullWidth:!0,value:F.name,onChange:function(e){B((function(n){return(0,i.Z)((0,i.Z)({},n),{},{name:e.target.value})}))}})}),(0,z.jsx)(u.ZP,{item:!0,xs:3,children:(0,z.jsx)(v.Z,{label:"Email Address",fullWidth:!0,value:F.email,disabled:!0})}),(0,z.jsx)(u.ZP,{item:!0,xs:3,children:(0,z.jsxs)(h.Z,{fullWidth:!0,children:[(0,z.jsx)(m.Z,{id:"demo-simple-select-label",children:"Role"}),(0,z.jsxs)(x.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:F.role,onChange:function(e){B((function(n){return(0,i.Z)((0,i.Z)({},n),{},{role:e.target.value})}))},label:"Role",children:[(0,z.jsx)(Z.Z,{value:"ADMIN",children:"ADMIN"}),(0,z.jsx)(Z.Z,{value:"MANAGER",children:"MANAGER"})]})]})}),(0,z.jsx)(u.ZP,{item:!0,xs:12,children:(0,z.jsx)(p.Z,{})}),(0,z.jsxs)(u.ZP,{item:!0,xs:3,children:[(0,z.jsx)(d.Z,{variant:"h6",children:"User Access"}),(0,z.jsx)(d.Z,{variant:"caption",children:"Manage user permissions here"})]}),(0,z.jsxs)(u.ZP,{item:!0,xs:5,children:[(0,z.jsx)(d.Z,{variant:"h6",children:"User Access"}),(0,z.jsx)(w.ZP,{columns:O,data:F.permissions})]})]}),(0,z.jsx)(u.ZP,{container:!0,spacing:2,children:(0,z.jsxs)(u.ZP,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",gap:"10px",children:[(0,z.jsx)(f.Z,{variant:"outlined",onClick:function(){B({name:"",email:"",role:"",permissions:[]}),n(-1)},children:"Cancel"}),(0,z.jsx)(f.Z,{variant:"contained",color:"primary",onClick:E,children:"SUBMIT"})]})})]})]})}},30439:function(e,n,a){a.d(n,{Z:function(){return S}});var t=a(4942),o=a(63366),r=a(87462),i=a(72791),s=a(28182),c=a(35735),l=a(94419),d=a(12065),u=a(66934),p=a(31402),v=a(95080),h=a(14036),m=a(91143);var x=i.createContext({}),Z=a(80184),f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],b=function(e){return(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},g=(0,u.ZP)(v.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,n){var a=e.ownerState;return[n.root,n[a.variant],n["".concat(a.variant).concat((0,h.Z)(a.color))],n["size".concat((0,h.Z)(a.size))],n["".concat(a.variant,"Size").concat((0,h.Z)(a.size))],"inherit"===a.color&&n.colorInherit,a.disableElevation&&n.disableElevation,a.fullWidth&&n.fullWidth]}})((function(e){var n,a,o,i=e.theme,s=e.ownerState,c="light"===i.palette.mode?i.palette.grey[300]:i.palette.grey[800],l="light"===i.palette.mode?i.palette.grey.A100:i.palette.grey[700];return(0,r.Z)({},i.typography.button,(n={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===s.variant&&"inherit"!==s.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[s.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[s.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===s.variant&&"inherit"!==s.color&&{border:"1px solid ".concat((i.vars||i).palette[s.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[s.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[s.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===s.variant&&{backgroundColor:i.vars?i.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===s.variant&&"inherit"!==s.color&&{backgroundColor:(i.vars||i).palette[s.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[s.color].main}}),"&:active":(0,r.Z)({},"contained"===s.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,t.Z)(n,"&.".concat(m.Z.focusVisible),(0,r.Z)({},"contained"===s.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,t.Z)(n,"&.".concat(m.Z.disabled),(0,r.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===s.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"contained"===s.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),n),"text"===s.variant&&{padding:"6px 8px"},"text"===s.variant&&"inherit"!==s.color&&{color:(i.vars||i).palette[s.color].main},"outlined"===s.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===s.variant&&"inherit"!==s.color&&{color:(i.vars||i).palette[s.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[s.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(i.palette[s.color].main,.5))},"contained"===s.variant&&{color:i.vars?i.vars.palette.text.primary:null==(a=(o=i.palette).getContrastText)?void 0:a.call(o,i.palette.grey[300]),backgroundColor:i.vars?i.vars.palette.Button.inheritContainedBg:c,boxShadow:(i.vars||i).shadows[2]},"contained"===s.variant&&"inherit"!==s.color&&{color:(i.vars||i).palette[s.color].contrastText,backgroundColor:(i.vars||i).palette[s.color].main},"inherit"===s.color&&{color:"inherit",borderColor:"currentColor"},"small"===s.size&&"text"===s.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===s.size&&"text"===s.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===s.size&&"outlined"===s.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===s.size&&"outlined"===s.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===s.size&&"contained"===s.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===s.size&&"contained"===s.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},s.fullWidth&&{width:"100%"})}),(function(e){var n;return e.ownerState.disableElevation&&(n={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,t.Z)(n,"&.".concat(m.Z.focusVisible),{boxShadow:"none"}),(0,t.Z)(n,"&:active",{boxShadow:"none"}),(0,t.Z)(n,"&.".concat(m.Z.disabled),{boxShadow:"none"}),n)})),y=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,n){var a=e.ownerState;return[n.startIcon,n["iconSize".concat((0,h.Z)(a.size))]]}})((function(e){var n=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===n.size&&{marginLeft:-2},b(n))})),k=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,n){var a=e.ownerState;return[n.endIcon,n["iconSize".concat((0,h.Z)(a.size))]]}})((function(e){var n=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===n.size&&{marginRight:-2},b(n))})),S=i.forwardRef((function(e,n){var a=i.useContext(x),t=(0,c.Z)(a,e),d=(0,p.Z)({props:t,name:"MuiButton"}),u=d.children,v=d.color,b=void 0===v?"primary":v,S=d.component,C=void 0===S?"button":S,j=d.className,w=d.disabled,z=void 0!==w&&w,R=d.disableElevation,I=void 0!==R&&R,P=d.disableFocusRipple,N=void 0!==P&&P,F=d.endIcon,B=d.focusVisibleClassName,M=d.fullWidth,E=void 0!==M&&M,A=d.size,O=void 0===A?"medium":A,W=d.startIcon,q=d.type,D=d.variant,V=void 0===D?"text":D,T=(0,o.Z)(d,f),U=(0,r.Z)({},d,{color:b,component:C,disabled:z,disableElevation:I,disableFocusRipple:N,fullWidth:E,size:O,type:q,variant:V}),H=function(e){var n=e.color,a=e.disableElevation,t=e.fullWidth,o=e.size,i=e.variant,s=e.classes,c={root:["root",i,"".concat(i).concat((0,h.Z)(n)),"size".concat((0,h.Z)(o)),"".concat(i,"Size").concat((0,h.Z)(o)),"inherit"===n&&"colorInherit",a&&"disableElevation",t&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(o))],endIcon:["endIcon","iconSize".concat((0,h.Z)(o))]},d=(0,l.Z)(c,m.F,s);return(0,r.Z)({},s,d)}(U),_=W&&(0,Z.jsx)(y,{className:H.startIcon,ownerState:U,children:W}),L=F&&(0,Z.jsx)(k,{className:H.endIcon,ownerState:U,children:F});return(0,Z.jsxs)(g,(0,r.Z)({ownerState:U,className:(0,s.Z)(a.className,H.root,j),component:C,disabled:z,focusRipple:!N,focusVisibleClassName:(0,s.Z)(H.focusVisible,B),ref:n,type:q},T,{classes:H,children:[_,u,L]}))}))},13034:function(e,n,a){a.d(n,{Z:function(){return j}});var t=a(4942),o=a(63366),r=a(87462),i=a(72791),s=a(28182),c=a(94419),l=a(12065),d=a(97278),u=a(74223),p=a(80184),v=(0,u.Z)((0,p.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,u.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,u.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),x=a(14036),Z=a(31402),f=a(66934),b=a(64178),g=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],y=(0,f.ZP)(d.Z,{shouldForwardProp:function(e){return(0,f.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var a=e.ownerState;return[n.root,a.indeterminate&&n.indeterminate,"default"!==a.color&&n["color".concat((0,x.Z)(a.color))]]}})((function(e){var n,a=e.theme,o=e.ownerState;return(0,r.Z)({color:(a.vars||a).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:a.vars?"rgba(".concat("default"===o.color?a.vars.palette.action.activeChannel:a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===o.color?a.palette.action.active:a.palette[o.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(n={},(0,t.Z)(n,"&.".concat(b.Z.checked,", &.").concat(b.Z.indeterminate),{color:(a.vars||a).palette[o.color].main}),(0,t.Z)(n,"&.".concat(b.Z.disabled),{color:(a.vars||a).palette.action.disabled}),n))})),k=(0,p.jsx)(h,{}),S=(0,p.jsx)(v,{}),C=(0,p.jsx)(m,{}),j=i.forwardRef((function(e,n){var a,t,l=(0,Z.Z)({props:e,name:"MuiCheckbox"}),d=l.checkedIcon,u=void 0===d?k:d,v=l.color,h=void 0===v?"primary":v,m=l.icon,f=void 0===m?S:m,j=l.indeterminate,w=void 0!==j&&j,z=l.indeterminateIcon,R=void 0===z?C:z,I=l.inputProps,P=l.size,N=void 0===P?"medium":P,F=l.className,B=(0,o.Z)(l,g),M=w?R:f,E=w?R:u,A=(0,r.Z)({},l,{color:h,indeterminate:w,size:N}),O=function(e){var n=e.classes,a=e.indeterminate,t=e.color,o={root:["root",a&&"indeterminate","color".concat((0,x.Z)(t))]},i=(0,c.Z)(o,b.y,n);return(0,r.Z)({},n,i)}(A);return(0,p.jsx)(y,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":w},I),icon:i.cloneElement(M,{fontSize:null!=(a=M.props.fontSize)?a:N}),checkedIcon:i.cloneElement(E,{fontSize:null!=(t=E.props.fontSize)?t:N}),ownerState:A,ref:n,className:(0,s.Z)(O.root,F)},B,{classes:O}))}))},97278:function(e,n,a){a.d(n,{Z:function(){return y}});var t=a(29439),o=a(63366),r=a(87462),i=a(72791),s=a(28182),c=a(94419),l=a(14036),d=a(66934),u=a(98278),p=a(52930),v=a(95080),h=a(75878),m=a(21217);function x(e){return(0,m.Z)("PrivateSwitchBase",e)}(0,h.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var Z=a(80184),f=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],b=(0,d.ZP)(v.Z)((function(e){var n=e.ownerState;return(0,r.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),g=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),y=i.forwardRef((function(e,n){var a=e.autoFocus,i=e.checked,d=e.checkedIcon,v=e.className,h=e.defaultChecked,m=e.disabled,y=e.disableFocusRipple,k=void 0!==y&&y,S=e.edge,C=void 0!==S&&S,j=e.icon,w=e.id,z=e.inputProps,R=e.inputRef,I=e.name,P=e.onBlur,N=e.onChange,F=e.onFocus,B=e.readOnly,M=e.required,E=void 0!==M&&M,A=e.tabIndex,O=e.type,W=e.value,q=(0,o.Z)(e,f),D=(0,u.Z)({controlled:i,default:Boolean(h),name:"SwitchBase",state:"checked"}),V=(0,t.Z)(D,2),T=V[0],U=V[1],H=(0,p.Z)(),_=m;H&&"undefined"===typeof _&&(_=H.disabled);var L="checkbox"===O||"radio"===O,G=(0,r.Z)({},e,{checked:T,disabled:_,disableFocusRipple:k,edge:C}),$=function(e){var n=e.classes,a=e.checked,t=e.disabled,o=e.edge,r={root:["root",a&&"checked",t&&"disabled",o&&"edge".concat((0,l.Z)(o))],input:["input"]};return(0,c.Z)(r,x,n)}(G);return(0,Z.jsxs)(b,(0,r.Z)({component:"span",className:(0,s.Z)($.root,v),centerRipple:!0,focusRipple:!k,disabled:_,tabIndex:null,role:void 0,onFocus:function(e){F&&F(e),H&&H.onFocus&&H.onFocus(e)},onBlur:function(e){P&&P(e),H&&H.onBlur&&H.onBlur(e)},ownerState:G,ref:n},q,{children:[(0,Z.jsx)(g,(0,r.Z)({autoFocus:a,checked:i,defaultChecked:h,className:$.input,disabled:_,id:L?w:void 0,name:I,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;U(n),N&&N(e,n)}},readOnly:B,ref:R,required:E,ownerState:G,tabIndex:A,type:O},"checkbox"===O&&void 0===W?{}:{value:W},z)),T?d:j]}))}))}}]);
//# sourceMappingURL=522.4870f538.chunk.js.map