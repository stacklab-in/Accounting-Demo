"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[950],{32869:function(e,t,n){n.d(t,{Ds:function(){return r.Ds}});var r=n(58518);n(58764)},74950:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(6907),a=(n(4942),n(1413),n(74165)),i=n(15861),o=n(29439),s=n(72791),c=n(89164),l=n(4567),u=n(57088),d=n(30439),m=(n(71715),n(82626),n(5574)),f=n(65661),h=n(39157),p=n(97123),Z=(n(26759),n(18406)),v=n(99615),x=n(52073),g=n(32869),b=(n(43513),n(80184)),y={id:"",name:"",email:"",mobileNumber:"",type:"",company:{name:"",gstNumber:"",billingAddress:{line1:"",line2:"",city:"",state:"",pincode:""},shippingAddress:{line1:"",line2:"",city:"",state:"",pincode:""}}},k={name:!1,email:!1,mobileNumber:!1,type:!1,company:{name:!1,gstNumber:!1,billingAddress:{line1:!1,line2:!1,city:!1,state:!1,pincode:!1},shippingAddress:{line1:!1,line2:!1,city:!1,state:!1,pincode:!1}}};function S(){var e=(0,u.K$)(),t=(0,g.Ds)().enqueueSnackbar,n=(0,s.useState)(!1),r=(0,o.Z)(n,2),S=(r[0],r[1],(0,s.useState)(!1)),j=(0,o.Z)(S,2),w=(j[0],j[1]),C=(0,s.useState)([]),A=(0,o.Z)(C,2),_=A[0],D=A[1],N=(0,s.useState)(y),R=(0,o.Z)(N,2),T=R[0],B=R[1],E=(0,s.useState)(k),I=(0,o.Z)(E,2),P=(I[0],I[1],(0,s.useState)(!1)),q=(0,o.Z)(P,2),z=(q[0],q[1],(0,s.useState)({})),F=(0,o.Z)(z,2),H=(F[0],F[1],(0,s.useState)("")),L=(0,o.Z)(H,2),M=L[0],U=(L[1],(0,s.useState)(null)),K=(0,o.Z)(U,2),W=K[0],$=(K[1],Boolean(W),(0,s.useState)(!1)),G=(0,o.Z)($,2),J=G[0],O=G[1],Q=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem(x._.keyUserToken),r=(0,Z.sw)(n),e.next=5,v.ZP.post(v.Hv.customer.list,{},{headers:{Authorization:"Bearer ".concat(r)}});case 5:(i=e.sent)&&(w(!1),D(i.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t("Failed to fetch customers!",{variant:"error"}),w(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){w(!0),Q()}),[]);_.filter((function(e){var t;return null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(null===M||void 0===M?void 0:M.toLowerCase())}));return(0,b.jsxs)(c.Z,{maxWidth:!e.themeStretch&&"xl",children:[(0,b.jsx)(l.Z,{variant:"h4",children:" Employee Attendance "}),(0,b.jsxs)(m.Z,{open:J,onClose:function(){return O(!1)},children:[(0,b.jsx)(f.Z,{children:"Remove Customer"}),(0,b.jsx)(h.Z,{children:"Are you sure you want to delete this customer?"}),(0,b.jsxs)(p.Z,{children:[(0,b.jsx)(d.Z,{onClick:function(){return O(!1)},children:"Cancel"}),(0,b.jsx)(d.Z,{onClick:function(){var e=localStorage.getItem(x._.keyUserToken),n=(0,Z.sw)(e),r={headers:{Authorization:"Bearer ".concat(n)}};v.ZP.post(v.Hv.customer.delete,{id:T.id},r).then((function(e){e&&(t("Customer deleted successfully!",{variant:"success"}),O(!1),B(y),Q())})).catch((function(e){t(e.msg||e.error,{variant:"error"})}))},variant:"contained",color:"error",children:"Delete"})]})]})]})}function j(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r.ql,{children:(0,b.jsx)("title",{children:" Dashboard : Employee Attendance"})}),(0,b.jsx)(S,{})]})}},65661:function(e,t,n){var r=n(87462),a=n(63366),i=n(72791),o=n(28182),s=n(94419),c=n(4567),l=n(66934),u=n(31402),d=n(17673),m=n(85090),f=n(80184),h=["className","id"],p=(0,l.ZP)(c.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),Z=i.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiDialogTitle"}),c=n.className,l=n.id,Z=(0,a.Z)(n,h),v=n,x=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},d.a,t)}(v),g=i.useContext(m.Z).titleId,b=void 0===g?l:g;return(0,f.jsx)(p,(0,r.Z)({component:"h2",className:(0,o.Z)(x.root,c),ownerState:v,ref:t,variant:"h6",id:null!=l?l:b},Z))}));t.Z=Z}}]);
//# sourceMappingURL=950.3278ca6a.chunk.js.map