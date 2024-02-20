"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[112],{32869:function(e,r,a){a.d(r,{Ds:function(){return n.Ds}});var n=a(58518);a(58764)},96112:function(e,r,a){a.r(r),a.d(r,{default:function(){return i}});var n=a(6907),t=a(50276),s=a(80184);function i(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.ql,{children:(0,s.jsx)("title",{children:" Jwt: Login"})}),(0,s.jsx)(t.Q,{})]})}},50276:function(e,r,a){a.d(r,{Q:function(){return S},$:function(){return T}});var n=a(74165),t=a(1413),s=a(15861),i=a(29439),l=a(72791),o=a(46002),d=a(63515),u=a(36314),c=a(13400),m=a(4567),h=a(63466),p=a(38072),x=a(83854),f=a(62950),v=a(33805),g=a(22459),Z=a(8976),w=a(44e3),b=a(80184);var j=a(61134);function k(e){var r=e.children,a=e.onSubmit,n=e.methods;return(0,b.jsx)(j.RV,(0,t.Z)((0,t.Z)({},n),{},{children:(0,b.jsx)("form",{onSubmit:a,children:r})}))}var y=a(93006),C=a(99615),E=a(18406),P=a(52073),N=a(32869),q=a(78184);function S(){var e=(0,Z.E)().login,r=(0,f.tv)(),a=(0,l.useState)(""),p=(0,i.Z)(a,2),x=p[0],v=(p[1],(0,f.lr)(),(0,l.useState)({email:"adminuser@test.in",password:"defaultPassword",emailErr:!1,passErr:!1})),j=(0,i.Z)(v,2),C=j[0],S=j[1],_=(0,N.Ds)().enqueueSnackbar,A=(0,l.useState)(!1),D=(0,i.Z)(A,2),F=D[0],T=D[1],W=(0,g.k)(),z=function(){var r=(0,s.Z)((0,n.Z)().mark((function r(){var a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,0!==C.email.length&&a.test(C.email)){r.next=4;break}return S((function(e){return(0,t.Z)((0,t.Z)({},e),{},{emailErr:!0})})),r.abrupt("return");case 4:if(S((function(e){return(0,t.Z)((0,t.Z)({},e),{},{emailErr:!1})})),0!==C.password.length){r.next=8;break}return S((function(e){return(0,t.Z)((0,t.Z)({},e),{},{passErr:!0})})),r.abrupt("return");case 8:return S((function(e){return(0,t.Z)((0,t.Z)({},e),{},{passErr:!1})})),r.prev=10,T(!0),T(!1),r.next=15,null===e||void 0===e?void 0:e(C.email,C.password);case 15:r.next=21;break;case 17:r.prev=17,r.t0=r.catch(10),T(!1),_(r.t0.error,{variant:"error"});case 21:case"end":return r.stop()}}),r,null,[[10,17]])})));return function(){return r.apply(this,arguments)}}();(0,l.useEffect)((function(){var e=localStorage.getItem(P._.keyUserToken);if(e){var a=(0,E.sw)(e);if(a){var n=(0,q.oO)(a),t=Math.floor(Date.now()/1e3);n.exp&&n.exp<t?(localStorage.clear(),alert("Your session has expired. Please log in again."),window.location.href="/"):r.push("/dashboard")}}}),[]);var I=(0,b.jsx)(u.Z,{spacing:2,sx:{mb:5},children:(0,b.jsx)(m.Z,{variant:"h4",children:"Sign in to Accounting Software"})}),$=(0,b.jsxs)(u.Z,{spacing:2.5,children:[!!x&&(0,b.jsx)(d.Z,{severity:"error",children:x}),(0,b.jsx)(y.Z,{name:"email",label:"Email address",value:C.email,onChange:function(e){S((function(r){return(0,t.Z)((0,t.Z)({},r),{},{email:e.target.value,emailErr:!1})}))},error:C.emailErr,helperText:C.emailErr?"Please enter valid email!":null}),(0,b.jsx)(y.Z,{name:"password",label:"Password",type:W.value?"text":"password",value:C.password,onChange:function(e){S((function(r){return(0,t.Z)((0,t.Z)({},r),{},{password:e.target.value,passErr:!1})}))},error:C.passErr,helperText:C.passErr?"Please enter valid password!":null,InputProps:{endAdornment:(0,b.jsx)(h.Z,{position:"end",children:(0,b.jsx)(c.Z,{onClick:W.onToggle,edge:"end",children:(0,b.jsx)(w.Z,{icon:W.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,b.jsx)(o.Z,{fullWidth:!0,color:"inherit",size:"large",variant:"contained",loading:F,onClick:z,children:"Login"})]});return(0,b.jsxs)(k,{children:[I,$]})}var _=a(4942),A=a(8007),D=a(50533),F=a(64554);function T(){var e=(0,Z.E)().register,r=(0,f.tv)(),a=(0,l.useState)(""),j=(0,i.Z)(a,2),k=j[0],E=j[1],P=(0,l.useState)(!1),N=(0,i.Z)(P,2),q=N[0],S=N[1],T=(0,f.lr)(),W=T.get("name"),z=T.get("email"),I=T.get("uuid"),$=W.split(" "),L=(0,g.k)(),B=A.Ry().shape({firstName:A.Z_().required("First name required"),lastName:A.Z_().required("Last name required"),email:A.Z_().required("Email is required").email("Email must be a valid email address"),password:A.Z_().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Password must contain at least 8 characters, 1 number, 1 symbol, 1 uppercase letter, and 1 lowercase letter")}),R={firstName:$[0],lastName:$[$.length-1],email:z,password:"",confirmPassword:""},G=(0,l.useState)(R),H=(0,i.Z)(G,2),O=H[0],Q=H[1],U=function(e){var r=e.target,a=r.name,n=r.value;Q((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,_.Z)({},a,n))}))},J=function(){var a=(0,s.Z)((0,n.Z)().mark((function a(){var t,s,i,l,o,d;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return S(!0),a.prev=1,a.next=4,B.validate(O,{abortEarly:!1});case 4:return E(""),a.next=7,C.ZP.post(C.Hv.auth.passwordTable.details,{email:O.email});case 7:if(!(t=a.sent).data.data){a.next=21;break}if(s=t.data.data,i=s.uuidCode,l=s.expiryDate,o=new Date(l),d=new Date,!(i===I&&o>d)){a.next=18;break}return a.next=15,null===e||void 0===e?void 0:e(O.email,O.password,O.firstName,O.lastName);case 15:r.push(v.wd),a.next=19;break;case 18:E("The link is expired");case 19:a.next=22;break;case 21:E("The link is expired");case 22:a.next=27;break;case 24:a.prev=24,a.t0=a.catch(1),a.t0.errors&&a.t0.errors.length>0?E(a.t0.errors[0]):E("string"===typeof a.t0?a.t0:a.t0.error);case 27:return a.prev=27,S(!1),a.finish(27);case 30:case"end":return a.stop()}}),a,null,[[1,24,27,30]])})));return function(){return a.apply(this,arguments)}}(),M=(0,b.jsxs)("div",{children:[!!k&&(0,b.jsx)(d.Z,{severity:"error",children:k}),(0,b.jsx)(y.Z,{name:"firstName",label:"First name",fullWidth:!0,value:O.firstName,onChange:U,sx:{mt:4,backgroundColor:"white"},required:!0}),(0,b.jsx)(y.Z,{name:"lastName",label:"Last name",fullWidth:!0,value:O.lastName,onChange:U,sx:{mt:4,backgroundColor:"white"},required:!0}),(0,b.jsx)(y.Z,{name:"email",label:"Email address",fullWidth:!0,value:O.email,onChange:U,sx:{mt:4,backgroundColor:"white"},required:!0}),(0,b.jsx)(y.Z,{name:"password",label:"Password",fullWidth:!0,type:"password",value:O.password,onChange:U,sx:{mt:4,backgroundColor:"white"},required:!0}),(0,b.jsx)(m.Z,{sx:{mb:2.5},variant:"caption",display:"block",gutterBottom:!0,children:"At least 8 characters, 1 number, 1 symbol, 1 upper case and lower case"}),(0,b.jsx)(y.Z,{name:"confirmPassword",label:"Confirm Password",fullWidth:!0,value:O.confirmPassword,onChange:U,required:!0,type:L.value?"text":"password",InputProps:{endAdornment:(0,b.jsx)(h.Z,{position:"end",children:(0,b.jsx)(c.Z,{onClick:L.onToggle,edge:"end",children:(0,b.jsx)(w.Z,{icon:L.value?"solar:eye-bold":"solar:eye-closed-bold"})})})},sx:{backgroundColor:"white"}}),(0,b.jsx)(o.Z,{fullWidth:!0,color:"primary",sx:{mt:4,borderRadius:"18px"},size:"large",variant:"contained",disabled:""===O.firstName||""===O.lastName||""===O.email||""===O.password||""===O.confirmPassword,loading:q,onClick:J,children:"SIGN UP NOW"}),(0,b.jsxs)(u.Z,{direction:"row",spacing:.5,justifyContent:"center",children:[(0,b.jsx)(m.Z,{variant:"body2",children:" Already have an account? "}),(0,b.jsx)(D.Z,{href:p.H.auth.jwt.login,component:x.r,variant:"subtitle2",color:"#074DFF",children:"SIGN IN"})]})]});return(0,b.jsx)("div",{style:{backgroundColor:"#F3F8FB",display:"flex",alignItems:"center",flexDirection:"column",width:"100vw",height:"800px",gap:"30px"},children:(0,b.jsxs)("div",{style:{width:"600px"},children:[(0,b.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"30px"},children:(0,b.jsx)(F.Z,{component:"img",src:"/logo/logo_single.svg",sx:{width:120,height:120,display:"flex",justifyContent:"center"}})}),M]})})}}}]);
//# sourceMappingURL=112.f1d620de.chunk.js.map