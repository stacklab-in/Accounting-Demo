"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[112],{32869:function(e,r,n){n.d(r,{Ds:function(){return a.Ds}});var a=n(58518);n(58764)},96112:function(e,r,n){n.r(r),n.d(r,{default:function(){return i}});var a=n(6907),t=n(50276),s=n(80184);function i(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.ql,{children:(0,s.jsx)("title",{children:" Jwt: Login"})}),(0,s.jsx)(t.Q,{})]})}},50276:function(e,r,n){n.d(r,{Q:function(){return A},$:function(){return F}});var a=n(74165),t=n(1413),s=n(15861),i=n(29439),l=n(72791),o=n(46002),u=n(63515),c=n(36314),d=n(13400),m=n(4567),p=n(63466),h=n(38072),x=n(83854),f=n(62950),Z=n(33805),v=n(22459),g=n(8976),j=n(44e3),b=n(45987),w=n(61134),y=n(93006),k=n(80184),S=["name","helperText","type"];function E(e){var r=e.name,n=e.helperText,a=e.type,s=(0,b.Z)(e,S),i=(0,w.Gc)().control;return(0,k.jsx)(w.Qr,{name:r,control:i,render:function(e){var r=e.field,i=e.fieldState.error;return(0,k.jsx)(y.Z,(0,t.Z)((0,t.Z)({},r),{},{fullWidth:!0,type:a,value:"number"===a&&0===r.value?"":r.value,onChange:function(e){"number"===a?r.onChange(Number(e.target.value)):r.onChange(e.target.value)},error:!!i,helperText:i?null===i||void 0===i?void 0:i.message:n},s))}})}function _(e){var r=e.children,n=e.onSubmit,a=e.methods;return(0,k.jsx)(w.RV,(0,t.Z)((0,t.Z)({},a),{},{children:(0,k.jsx)("form",{onSubmit:n,children:r})}))}var P=n(99615),C=n(18406),T=n(52073),q=n(32869),N=n(78184);function A(){var e=(0,f.tv)(),r=(0,l.useState)(""),n=(0,i.Z)(r,2),h=n[0],x=(n[1],(0,f.lr)(),(0,l.useState)({email:"adminuser@test.in",password:"defaultPassword",emailErr:!1,passErr:!1})),Z=(0,i.Z)(x,2),g=Z[0],b=Z[1],w=(0,q.Ds)().enqueueSnackbar,S=(0,l.useState)(!1),E=(0,i.Z)(S,2),A=E[0],I=E[1],z=(0,v.k)(),D=function(){var r=(0,s.Z)((0,a.Z)().mark((function r(){var n,s,i,l;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,0!==g.email.length&&n.test(g.email)){r.next=4;break}return b((function(e){return(0,t.Z)((0,t.Z)({},e),{},{emailErr:!0})})),r.abrupt("return");case 4:if(b((function(e){return(0,t.Z)((0,t.Z)({},e),{},{emailErr:!1})})),0!==g.password.length){r.next=8;break}return b((function(e){return(0,t.Z)((0,t.Z)({},e),{},{passErr:!0})})),r.abrupt("return");case 8:return b((function(e){return(0,t.Z)((0,t.Z)({},e),{},{passErr:!1})})),r.prev=10,I(!0),r.next=14,P.ZP.post(P.Hv.auth.login,{email:g.email,password:g.password});case 14:(s=r.sent)&&(i=(0,C.n0)(JSON.stringify(s.data.data.user)),localStorage.setItem(T._.keyUserData,i),l=(0,C.n0)(s.data.data.token),localStorage.setItem(T._.keyUserToken,l),P.ZP.defaults.headers.common.Authorization="Bearer ".concat(s.data.data.token),I(!1),e.push("/dashboard")),r.next=23;break;case 19:r.prev=19,r.t0=r.catch(10),I(!1),w(r.t0.error,{variant:"error"});case 23:case"end":return r.stop()}}),r,null,[[10,19]])})));return function(){return r.apply(this,arguments)}}();(0,l.useEffect)((function(){var r=localStorage.getItem(T._.keyUserToken);if(r){var n=(0,C.sw)(r);if(n){var a=(0,N.oO)(n),t=Math.floor(Date.now()/1e3);a.exp&&a.exp<t?(localStorage.clear(),alert("Your session has expired. Please log in again."),window.location.href="/"):e.push("/dashboard")}}}),[]);var F=(0,k.jsx)(c.Z,{spacing:2,sx:{mb:5},children:(0,k.jsx)(m.Z,{variant:"h4",children:"Sign in to Accounting Software"})}),L=(0,k.jsxs)(c.Z,{spacing:2.5,children:[!!h&&(0,k.jsx)(u.Z,{severity:"error",children:h}),(0,k.jsx)(y.Z,{name:"email",label:"Email address",value:g.email,onChange:function(e){b((function(r){return(0,t.Z)((0,t.Z)({},r),{},{email:e.target.value,emailErr:!1})}))},error:g.emailErr,helperText:g.emailErr?"Please enter valid email!":null}),(0,k.jsx)(y.Z,{name:"password",label:"Password",type:z.value?"text":"password",value:g.password,onChange:function(e){b((function(r){return(0,t.Z)((0,t.Z)({},r),{},{password:e.target.value,passErr:!1})}))},error:g.passErr,helperText:g.passErr?"Please enter valid password!":null,InputProps:{endAdornment:(0,k.jsx)(p.Z,{position:"end",children:(0,k.jsx)(d.Z,{onClick:z.onToggle,edge:"end",children:(0,k.jsx)(j.Z,{icon:z.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,k.jsx)(o.Z,{fullWidth:!0,color:"inherit",size:"large",variant:"contained",loading:A,onClick:D,children:"Login"})]});return(0,k.jsxs)(_,{children:[F,L]})}var I=n(8007),z=n(44695),D=n(50533);function F(){var e=(0,g.E)().register,r=(0,f.tv)(),n=(0,l.useState)(""),t=(0,i.Z)(n,2),b=t[0],y=t[1],S=(0,f.lr)().get("returnTo"),P=(0,v.k)(),C=I.Ry().shape({firstName:I.Z_().required("First name required"),lastName:I.Z_().required("Last name required"),email:I.Z_().required("Email is required").email("Email must be a valid email address"),password:I.Z_().required("Password is required")}),T=(0,w.cI)({resolver:(0,z.X)(C),defaultValues:{firstName:"",lastName:"",email:"",password:""}}),q=T.reset,N=T.handleSubmit,A=T.formState.isSubmitting,F=N(function(){var n=(0,s.Z)((0,a.Z)().mark((function n(t){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,null===e||void 0===e?void 0:e(t.email,t.password,t.firstName,t.lastName);case 3:r.push(S||Z.wd),n.next=11;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0),q(),y("string"===typeof n.t0?n.t0:n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()),L=(0,k.jsxs)(c.Z,{spacing:2,sx:{mb:5,position:"relative"},children:[(0,k.jsx)(m.Z,{variant:"h4",children:"Get started absolutely free"}),(0,k.jsxs)(c.Z,{direction:"row",spacing:.5,children:[(0,k.jsx)(m.Z,{variant:"body2",children:" Already have an account? "}),(0,k.jsx)(D.Z,{href:h.H.auth.jwt.login,component:x.r,variant:"subtitle2",children:"Sign in"})]})]}),Q=(0,k.jsxs)(m.Z,{component:"div",sx:{color:"text.secondary",mt:2.5,typography:"caption",textAlign:"center"},children:["By signing up, I agree to ",(0,k.jsx)(D.Z,{underline:"always",color:"text.primary",children:"Terms of Service"})," and ",(0,k.jsx)(D.Z,{underline:"always",color:"text.primary",children:"Privacy Policy"}),"."]}),U=(0,k.jsx)(_,{methods:T,onSubmit:F,children:(0,k.jsxs)(c.Z,{spacing:2.5,children:[!!b&&(0,k.jsx)(u.Z,{severity:"error",children:b}),(0,k.jsxs)(c.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,k.jsx)(E,{name:"firstName",label:"First name"}),(0,k.jsx)(E,{name:"lastName",label:"Last name"})]}),(0,k.jsx)(E,{name:"email",label:"Email address"}),(0,k.jsx)(E,{name:"password",label:"Password",type:P.value?"text":"password",InputProps:{endAdornment:(0,k.jsx)(p.Z,{position:"end",children:(0,k.jsx)(d.Z,{onClick:P.onToggle,edge:"end",children:(0,k.jsx)(j.Z,{icon:P.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,k.jsx)(o.Z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:A,children:"Create account"})]})});return(0,k.jsxs)(k.Fragment,{children:[L,U,Q]})}}}]);
//# sourceMappingURL=112.b99dd689.chunk.js.map