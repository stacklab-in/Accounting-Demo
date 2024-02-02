"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[41],{32869:function(e,t,r){r.d(t,{Ds:function(){return n.Ds}});var n=r(58518);r(58764)},65041:function(e,t,r){r.r(t),r.d(t,{default:function(){return fe}});var n=r(6907),a=r(45987),o=r(4942),s=r(74165),l=r(15861),i=r(1413),c=r(29439),d=r(72791),u=r(12065),h=r(64554),p=r(89164),x=r(4567),m=r(57088),f=r(83932),Z=r(30439),v=(r(71715),r(82626),r(61889)),g=r(93006),b=r(5574),j=r(65661),y=r(39157),w=r(97123),k=(r(26759),r(18406)),C=r(99615),S=r(52073),P=r(32869),B=r(43513),R=r(71652),I=r(24750),N=r(97892),L=r.n(N),M=r(57689),_=r(50533),D=r(36314),A=r(93433),T=r(87462),E=r(63366),W=(r(57441),r(28182)),z=r(94419),F=r(57271),H=r(66934),q=r(31402),O=r(74223),U=r(80184),V=(0,O.Z)((0,U.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),G=r(95080),K=["slots","slotProps"],$=(0,H.ZP)(G.Z)((function(e){var t=e.theme;return(0,T.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,T.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,T.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,u._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,u._4)(t.palette.grey[600],.12)})})})),J=(0,H.ZP)(V)({width:24,height:16});var Q=function(e){var t=e.slots,r=void 0===t?{}:t,n=e.slotProps,a=void 0===n?{}:n,o=(0,E.Z)(e,K),s=e;return(0,U.jsx)("li",{children:(0,U.jsx)($,(0,T.Z)({focusRipple:!0},o,{ownerState:s,children:(0,U.jsx)(J,(0,T.Z)({as:r.CollapsedIcon,ownerState:s},a.collapsedIcon))}))})},X=r(75878),Y=r(21217);function ee(e){return(0,Y.Z)("MuiBreadcrumbs",e)}var te=(0,X.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),re=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],ne=(0,H.ZP)(x.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,o.Z)({},"& .".concat(te.li),t.li),t.root]}})({}),ae=(0,H.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),oe=(0,H.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function se(e,t,r,n){return e.reduce((function(a,o,s){return s<e.length-1?a=a.concat(o,(0,U.jsx)(oe,{"aria-hidden":!0,className:t,ownerState:n,children:r},"separator-".concat(s))):a.push(o),a}),[])}var le=d.forwardRef((function(e,t){var r=(0,q.Z)({props:e,name:"MuiBreadcrumbs"}),n=r.children,a=r.className,o=r.component,s=void 0===o?"nav":o,l=r.slots,i=void 0===l?{}:l,u=r.slotProps,h=void 0===u?{}:u,p=r.expandText,x=void 0===p?"Show path":p,m=r.itemsAfterCollapse,f=void 0===m?1:m,Z=r.itemsBeforeCollapse,v=void 0===Z?1:Z,g=r.maxItems,b=void 0===g?8:g,j=r.separator,y=void 0===j?"/":j,w=(0,E.Z)(r,re),k=d.useState(!1),C=(0,c.Z)(k,2),S=C[0],P=C[1],B=(0,T.Z)({},r,{component:s,expanded:S,expandText:x,itemsAfterCollapse:f,itemsBeforeCollapse:v,maxItems:b,separator:y}),R=function(e){var t=e.classes;return(0,z.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},ee,t)}(B),I=(0,F.Z)({elementType:i.CollapsedIcon,externalSlotProps:h.collapsedIcon,ownerState:B}),N=d.useRef(null),L=d.Children.toArray(n).filter((function(e){return d.isValidElement(e)})).map((function(e,t){return(0,U.jsx)("li",{className:R.li,children:e},"child-".concat(t))}));return(0,U.jsx)(ne,(0,T.Z)({ref:t,component:s,color:"text.secondary",className:(0,W.Z)(R.root,a),ownerState:B},w,{children:(0,U.jsx)(ae,{className:R.ol,ref:N,ownerState:B,children:se(S||b&&L.length<=b?L:function(e){return v+f>=e.length?e:[].concat((0,A.Z)(e.slice(0,v)),[(0,U.jsx)(Q,{"aria-label":x,slots:{CollapsedIcon:i.CollapsedIcon},slotProps:{collapsedIcon:I},onClick:function(){P(!0);var e=N.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,A.Z)(e.slice(e.length-f,e.length)))}(L),R.separator,y,B)})}))})),ie=r(83854);function ce(e){var t=e.link,r=e.activeLast,n=e.disabled,a=t.name,o=t.href,s=t.icon,l=(0,i.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},n&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),c=(0,U.jsxs)(U.Fragment,{children:[s&&(0,U.jsx)(h.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),a]});return o?(0,U.jsx)(_.Z,{component:ie.r,href:o,sx:l,children:c}):(0,U.jsxs)(h.Z,{sx:l,children:[" ",c," "]})}var de=["links","action","heading","moreLink","activeLast","sx"];function ue(e){var t=e.links,r=e.action,n=e.heading,o=e.moreLink,s=e.activeLast,l=e.sx,c=(0,a.Z)(e,de),d=t[t.length-1].name;return(0,U.jsxs)(h.Z,{sx:(0,i.Z)({},l),children:[(0,U.jsxs)(D.Z,{direction:"row",alignItems:"center",children:[(0,U.jsxs)(h.Z,{sx:{flexGrow:1},children:[n&&(0,U.jsx)(x.Z,{variant:"h4",gutterBottom:!0,children:n}),!!t.length&&(0,U.jsx)(le,(0,i.Z)((0,i.Z)({separator:(0,U.jsx)(he,{})},c),{},{children:t.map((function(e){return(0,U.jsx)(ce,{link:e,activeLast:s,disabled:e.name===d},e.name||"")}))}))]}),r&&(0,U.jsxs)(h.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!o&&(0,U.jsx)(h.Z,{sx:{mt:2},children:o.map((function(e){return(0,U.jsx)(_.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function he(){return(0,U.jsx)(h.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}var pe=r(38072),xe={id:"",code:"",name:"",mobileNumber:"",dateOfBirth:null,address:{line1:"",line2:"",city:"",state:"",pincode:""}};function me(){var e=(0,m.K$)(),t=(0,P.Ds)().enqueueSnackbar,r=((0,M.s0)(),(0,d.useState)(!1)),n=(0,c.Z)(r,2),a=(n[0],n[1],(0,d.useState)(!1)),o=(0,c.Z)(a,2),i=(o[0],o[1]),N=(0,d.useState)([]),_=(0,c.Z)(N,2),D=_[0],A=_[1],T=(0,d.useState)(xe),E=(0,c.Z)(T,2),W=E[0],z=E[1],F=(0,d.useState)(!1),H=(0,c.Z)(F,2),q=(H[0],H[1],(0,d.useState)({})),O=(0,c.Z)(q,2),V=(O[0],O[1],(0,d.useState)("")),G=(0,c.Z)(V,2),K=G[0],$=(G[1],(0,M.TH)()),J=null===$||void 0===$?void 0:$.state;J.dateOfBirth=L()(J.dateOfBirth);var Q=(0,d.useState)(null),X=(0,c.Z)(Q,2),Y=X[0],ee=(X[1],Boolean(Y),(0,d.useState)(!1)),te=(0,c.Z)(ee,2),re=te[0],ne=te[1],ae=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(){var r,n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=localStorage.getItem(S._.keyUserToken),n=(0,k.sw)(r),e.next=5,C.ZP.post(C.Hv.employee.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(a=e.sent)&&(i(!1),A(a.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t("Failed to fetch employees!",{variant:"error"}),i(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){i(!0),ae()}),[]);D.filter((function(e){var t,r;return(null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(null===K||void 0===K?void 0:K.toLowerCase()))||(null===e||void 0===e||null===(r=e.code)||void 0===r?void 0:r.toLowerCase().includes(null===K||void 0===K?void 0:K.toLowerCase()))}));return(0,U.jsxs)(p.Z,{maxWidth:!e.themeStretch&&"xl",children:[(0,U.jsx)(ue,{heading:"Employee Details",links:[{name:"Dashboard",href:pe.H.dashboard.root},{name:"".concat(J.name)}],sx:{mb:{xs:3,md:5}}}),(0,U.jsx)(h.Z,{sx:{mt:2,width:1,p:2,borderRadius:2,bgcolor:function(e){return(0,u.Fq)(e.palette.grey[500],.04)},border:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:(0,U.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,U.jsx)(v.ZP,{item:!0,xs:12,children:(0,U.jsx)(x.Z,{variant:"h6",children:"Basic Details"})}),(0,U.jsx)(v.ZP,{item:!0,xs:4,children:(0,U.jsx)(g.Z,{label:"Name",value:J.name,fullWidth:!0,disabled:!0})}),(0,U.jsx)(v.ZP,{item:!0,xs:4,children:(0,U.jsx)(g.Z,{label:"Employee Code",value:J.code,fullWidth:!0,disabled:!0})}),(0,U.jsx)(v.ZP,{item:!0,xs:4,children:(0,U.jsx)(g.Z,{label:"Mobile Number",value:J.mobileNumber,fullWidth:!0,disabled:!0})}),(0,U.jsx)(v.ZP,{item:!0,xs:4,children:(0,U.jsx)(R._,{dateAdapter:I.y,children:(0,U.jsx)(f.M,{label:"Date of Birth",defaultValue:J.dateOfBirth,slotProps:{textField:{fullWidth:!0}},disabled:!0})})}),(0,U.jsx)(v.ZP,{item:!0,xs:8,children:(0,U.jsx)(g.Z,{label:"Address",multiline:!0,rows:2,value:"".concat(J.address.line1).concat(J.address.line2?", ".concat(J.address.line2):"",", ").concat(J.address.city,", ").concat(J.address.state," - ").concat(J.address.pincode),fullWidth:!0,disabled:!0})})]})}),(0,U.jsx)(h.Z,{sx:{mt:2,width:1,p:2,borderRadius:2,bgcolor:function(e){return(0,u.Fq)(e.palette.grey[500],.04)},border:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:(0,U.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,U.jsx)(v.ZP,{item:!0,xs:12,children:(0,U.jsx)(x.Z,{variant:"h6",children:"Sales History"})}),(0,U.jsx)(v.ZP,{item:!0,xs:12,children:(0,U.jsx)(B.ZP,{columns:[],data:[]})})]})}),(0,U.jsxs)(b.Z,{open:re,onClose:function(){return ne(!1)},children:[(0,U.jsx)(j.Z,{children:"Remove Employee"}),(0,U.jsx)(y.Z,{children:"Are you sure you want to delete this employee?"}),(0,U.jsxs)(w.Z,{children:[(0,U.jsx)(Z.Z,{onClick:function(){return ne(!1)},children:"Cancel"}),(0,U.jsx)(Z.Z,{onClick:function(){var e=localStorage.getItem(S._.keyUserToken),r=(0,k.sw)(e),n={headers:{Authorization:"Bearer ".concat(r)}};C.ZP.post(C.Hv.employee.delete,{id:W.id},n).then((function(e){e&&(t("Employee deleted successfully!",{variant:"success"}),ne(!1),z(xe),ae())})).catch((function(e){t(e.msg||e.error,{variant:"error"})}))},variant:"contained",color:"error",children:"Delete"})]})]})]})}function fe(){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(n.ql,{children:(0,U.jsx)("title",{children:" Employee : Details"})}),(0,U.jsx)(me,{})]})}},65661:function(e,t,r){var n=r(87462),a=r(63366),o=r(72791),s=r(28182),l=r(94419),i=r(4567),c=r(66934),d=r(31402),u=r(17673),h=r(85090),p=r(80184),x=["className","id"],m=(0,c.ZP)(i.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),f=o.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiDialogTitle"}),i=r.className,c=r.id,f=(0,a.Z)(r,x),Z=r,v=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},u.a,t)}(Z),g=o.useContext(h.Z).titleId,b=void 0===g?c:g;return(0,p.jsx)(m,(0,n.Z)({component:"h2",className:(0,s.Z)(v.root,i),ownerState:Z,ref:t,variant:"h6",id:null!=c?c:b},f))}));t.Z=f}}]);
//# sourceMappingURL=41.c8f01ccf.chunk.js.map