"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[806],{32869:function(e,n,a){a.d(n,{Ds:function(){return t.Ds}});var t=a(58518);a(58764)},48806:function(e,n,a){a.r(n),a.d(n,{default:function(){return Y}});var t=a(6907),r=a(74165),i=a(15861),o=a(4942),l=a(1413),c=a(29439),s=a(72791),u=a(64554),d=a(89164),f=a(4567),x=a(57088),h=a(89891),m=a(30439),b=a(71715),p=a(82626),Z=a(73590),k=a(61889),v=a(93006),j=a(85523),g=a(68096),y=a(50168),C=a(58406),D=a(42419),N=a(18406),A=a(99615),S=a(52073),w=a(32869),B=a(26759),_=a(43513),P=a(71652),T=a(98265),q=a(24750),E=a(97892),I=a.n(E),R=a(80184),W={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",bgcolor:"background.paper",borderRadius:"10px",boxShadow:24,p:2,backgroundColor:N.$_.modalbackground,height:"auto",overflow:"auto"},F={id:"",accountNumber:"",ifscCode:"",bankName:"",branchName:"",isDefault:!1},U={fromAccount:"",toAccount:"",amount:"",transferDate:null};function M(){var e=(0,x.K$)(),n=(0,w.Ds)().enqueueSnackbar,a=(0,s.useState)(!1),t=(0,c.Z)(a,2),E=t[0],M=t[1],Y=(0,s.useState)(!1),z=(0,c.Z)(Y,2),H=z[0],L=z[1],$=(0,s.useState)(F),K=(0,c.Z)($,2),O=K[0],G=K[1],V=(0,s.useState)([]),J=(0,c.Z)(V,2),Q=J[0],X=J[1],ee=(0,s.useState)([]),ne=(0,c.Z)(ee,2),ae=ne[0],te=ne[1],re=(0,s.useState)(""),ie=(0,c.Z)(re,2),oe=ie[0],le=ie[1],ce=(0,s.useState)(null),se=(0,c.Z)(ce,2),ue=se[0],de=se[1],fe=Boolean(ue),xe=(0,s.useState)({}),he=(0,c.Z)(xe,2),me=he[0],be=he[1],pe=(0,s.useState)(!1),Ze=(0,c.Z)(pe,2),ke=Ze[0],ve=Ze[1],je=(0,s.useState)(!1),ge=(0,c.Z)(je,2),ye=ge[0],Ce=ge[1],De=(0,s.useState)(U),Ne=(0,c.Z)(De,2),Ae=Ne[0],Se=Ne[1],we=function(e){var n=e.target,a=n.name,t=n.value;Se((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,o.Z)({},a,t))}))};console.log({bank:O});var Be=function(e){var n=e.target,a=n.name,t=n.value;G((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,o.Z)({},a,"ifscCode"===a||"bankName"===a||"branchName"===a?t.toUpperCase():t))}))},_e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var a,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=localStorage.getItem(S._.keyUserToken),t=(0,N.sw)(a),A.ZP.post(A.Hv.bank.update,O,{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){n("Bank updated successfully!",{variant:"success"}),G(F),le(""),Pe(),M(!1)})).catch((function(e){n(e.error,{variant:"error"})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Pe=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var a,t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem(S._.keyUserToken),t=(0,N.sw)(a),e.next=5,A.ZP.post(A.Hv.bank.list,{},{headers:{Authorization:"Bearer ".concat(t)}});case 5:(i=e.sent)&&(te(!1),X(i.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),n("Failed to fetch bank accounts!",{variant:"error"}),te(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){te(!0),Pe()}),[]);var Te=[{name:"Set as Default",selector:function(e){return e.isDefault},cell:function(e){return(0,R.jsx)(h.Z,{checked:e.isDefault,onChange:function(a){te(!0);var t=localStorage.getItem(S._.keyUserToken),r=(0,N.sw)(t);A.ZP.post(A.Hv.bank.setAsDefault,{id:e._id},{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){n("Default bank updated successfully!",{variant:"success"}),Pe(),te(!1)})).catch((function(e){n(e.error,{variant:"error"}),te(!1)}))}})},width:"160px"},{name:"Bank Details",selector:function(e){return e.branchName},cell:function(e){return(0,R.jsxs)("div",{children:[(0,R.jsx)(f.Z,{variant:"h6",children:e.bankName}),(0,R.jsx)(f.Z,{variant:"subtitle1",children:e.accountNumber}),(0,R.jsx)(f.Z,{variant:"subtitle2",children:e.ifscCode})]})},width:"auto"},{name:"Balance",selector:function(e){return N.MG.format(e.balance)}},{name:"Actions",width:"auto",cell:function(e){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(m.Z,{onClick:function(n){de(n.currentTarget),be(e)},style:{color:N.$_.actionButton},c:!0,variant:"outlined",endIcon:(0,R.jsx)(B.Z,{}),children:"Action"}),(0,R.jsxs)(b.Z,{id:"basic-menu",anchorEl:ue,open:fe,onClose:function(){de(null),be({})},MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,R.jsx)(p.Z,{onClick:function(){G((function(n){return(0,l.Z)((0,l.Z)((0,l.Z)({},n),e),{},{id:e._id})})),de(null),M(!0),L(!0),le(e.accountNumber)},children:"Edit Details"}),(0,R.jsx)(p.Z,{onClick:function(){return G((function(e){return(0,l.Z)((0,l.Z)({},e),{},{id:me._id,bankName:me.bankName,accountNumber:me.accountNumber,ifscCode:me.ifscCode})})),de(null),void ve(!0)},children:"Remove"})]})]})}}];return(0,R.jsxs)(d.Z,{maxWidth:!e.themeStretch&&"xl",children:[(0,R.jsx)(f.Z,{variant:"h4",children:"Bank Details "}),(0,R.jsxs)(u.Z,{sx:{mt:3,p:2,display:"flex",gap:"30px",flexDirection:"column"},children:[(0,R.jsxs)(u.Z,{sx:{display:"flex",gap:"10px"},children:[(0,R.jsx)(m.Z,{startIcon:(0,R.jsx)(D.Z,{}),variant:"contained",color:"primary",onClick:function(){M(!0)},children:"NEW BANK DETAILS"}),Q.length>1&&(0,R.jsx)(m.Z,{startIcon:(0,R.jsx)(D.Z,{}),variant:"contained",onClick:function(){Ce(!0)},children:"TRANSFER FUNDS"})]}),(0,R.jsx)(u.Z,{sx:{display:"flex",gap:"10px",border:"1px solid black",borderRadius:"10px"},children:(0,R.jsx)(_.ZP,{data:Q,columns:Te,progressPending:ae})})]}),(0,R.jsx)(Z.Z,{open:E,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,R.jsxs)(u.Z,{sx:W,children:[(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,R.jsx)(f.Z,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Bank Details"}),(0,R.jsxs)(k.ZP,{container:!0,spacing:2,children:[(0,R.jsx)(k.ZP,{item:!0,xs:12,children:(0,R.jsx)(v.Z,{sx:{borderRadius:"7px",backgroundColor:"white"},label:"Account Number",name:"accountNumber",type:"number",value:O.accountNumber,onChange:function(e){return Be(e)},fullWidth:!0,required:!0})}),(0,R.jsx)(k.ZP,{item:!0,xs:12,children:(0,R.jsx)(v.Z,{sx:{borderRadius:"7px",backgroundColor:"white"},label:"Confirm Bank Account Number",type:"number",value:oe,onChange:function(e){return le(e.target.value)},fullWidth:!0,required:!0})}),(0,R.jsx)(k.ZP,{item:!0,xs:12,children:(0,R.jsx)(v.Z,{sx:{borderRadius:"7px",backgroundColor:"white"},label:"IFSC Code",name:"ifscCode",value:O.ifscCode,onChange:function(e){return Be(e)},fullWidth:!0,required:!0})}),(0,R.jsx)(k.ZP,{item:!0,xs:12,children:(0,R.jsx)(v.Z,{sx:{borderRadius:"7px",backgroundColor:"white"},label:"Bank Name",name:"bankName",value:O.bankName,onChange:function(e){return Be(e)},fullWidth:!0,required:!0})}),(0,R.jsx)(k.ZP,{item:!0,xs:12,children:(0,R.jsx)(v.Z,{sx:{borderRadius:"7px",backgroundColor:"white"},label:"Branch Name",name:"branchName",value:O.branchName,onChange:function(e){return Be(e)},fullWidth:!0,required:!0})}),(0,R.jsx)(k.ZP,{item:!0,xs:12,children:(0,R.jsx)(j.Z,{control:(0,R.jsx)(h.Z,{checked:O.isDefault,onChange:function(e){G((function(e){return(0,l.Z)((0,l.Z)({},e),{},{isDefault:!O.isDefault})}))}}),label:"Make Default"})})]})]}),(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",justifyContent:"flex-end",padding:"10px"},children:[(0,R.jsx)(m.Z,{variant:"outlined",onClick:function(){G(F),le(""),M(!1)},children:"Cancel"}),(0,R.jsx)(m.Z,{variant:"contained",color:"primary",disabled:!O.accountNumber||!O.ifscCode||!O.bankName||!oe||!O.branchName||O.accountNumber!==oe,onClick:H?_e:function(){console.log({bank:O});var e=localStorage.getItem(S._.keyUserToken),a=(0,N.sw)(e);A.ZP.post(A.Hv.bank.add,O,{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){n("Bank added successfully!",{variant:"success"}),G(F),le(""),Pe(),M(!1)})).catch((function(e){n(e.error,{variant:"error"})}))},children:H?"UPDATE":"SAVE"})]})]})}),(0,R.jsx)(Z.Z,{open:ke,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,R.jsxs)(u.Z,{sx:W,children:[(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,R.jsx)(f.Z,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Bank Details"}),(0,R.jsxs)("div",{style:{backgroundColor:"white",padding:"10px",borderRadius:"10px"},children:[(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",marginBottom:"10px"},children:[(0,R.jsx)(v.Z,{label:"Bank Name",name:"bankName",value:O.bankName,disabled:!0,fullWidth:!0,required:!0}),(0,R.jsx)(v.Z,{label:"Account Number",name:"accountNumber",type:"number",value:O.accountNumber,disabled:!0,fullWidth:!0,required:!0})]}),(0,R.jsx)(k.ZP,{item:!0,xs:6,children:(0,R.jsx)(v.Z,{label:"IFSC Code",name:"ifscCode",value:O.ifscCode,disabled:!0,fullWidth:!0,required:!0})})]})]}),(0,R.jsx)(f.Z,{sx:{color:"red"},children:"Note : Deleting the bank account from here will remove the bank details from all existing invoices. Deleted banks cannot be used again and this action cannot be undone. "}),(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",justifyContent:"flex-end",padding:"10px"},children:[(0,R.jsx)(m.Z,{variant:"outlined",onClick:function(){G(F),ve(!1)},children:"CLOSE"}),(0,R.jsx)(m.Z,{variant:"contained",color:"primary",onClick:function(){var e=localStorage.getItem(S._.keyUserToken),a=(0,N.sw)(e);A.ZP.post(A.Hv.bank.delete,{id:O.id},{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){n("Bank deleted successfully!",{variant:"success"}),G(F),ve(!1),Pe()})).catch((function(e){n(e.error,{variant:"error"})}))},children:"DELETE"})]})]})}),(0,R.jsx)(Z.Z,{open:ye,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,R.jsxs)(u.Z,{sx:W,children:[(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,R.jsx)(f.Z,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Internal Bank to Bank Fund Transfer"}),(0,R.jsx)(f.Z,{id:"modal-modal-title",sx:{color:"black"},children:"Note : This Transfer only affects the internal bank balances in the software and does not affect the actual bank balances."}),(0,R.jsxs)("div",{style:{backgroundColor:"white",padding:"10px",borderRadius:"10px"},children:[(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",marginBottom:"10px"},children:[(0,R.jsxs)(g.Z,{fullWidth:!0,required:!0,children:[(0,R.jsx)(y.Z,{id:"demo-simple-select-label",children:"Select From Bank Account"}),(0,R.jsx)(C.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:Ae.fromAccount,label:"Select From Bank Account",name:"fromAccount",onChange:we,required:!0,children:Q.filter((function(e){return e._id!==Ae.toAccount})).map((function(e){return(0,R.jsx)(p.Z,{value:e._id,children:e.bankName})}))})]}),(0,R.jsxs)(g.Z,{fullWidth:!0,required:!0,children:[(0,R.jsx)(y.Z,{id:"demo-simple-select-label",children:"Select To Bank Account"}),(0,R.jsx)(C.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:Ae.toAccount,label:"Select To Bank Account",name:"toAccount",onChange:we,required:!0,children:Q.filter((function(e){return e._id!==Ae.fromAccount})).map((function(e){return(0,R.jsx)(p.Z,{value:e._id,children:e.bankName})}))})]})]}),(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",marginBottom:"10px"},children:[(0,R.jsx)(v.Z,{label:"Enter Amount",name:"amount",type:"number",value:Ae.amount,onChange:we,fullWidth:!0,required:!0}),(0,R.jsx)(P._,{dateAdapter:q.y,children:(0,R.jsx)(T.M,{label:"Transfer Date",value:Ae.transferDate,onChange:function(e){Se((function(n){return(0,l.Z)((0,l.Z)({},n),{},{transferDate:e})}))},format:"DD/MM/YYYY",slotProps:{textField:{fullWidth:!0}}})})]})]})]}),(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",justifyContent:"flex-end",padding:"10px"},children:[(0,R.jsx)(m.Z,{variant:"contained",color:"primary",onClick:function(){var e={fromAccount:Ae.fromAccount,toAccount:Ae.toAccount,amount:Ae.amount,transferDate:I()(Ae.transferDate).format("YYYY-MM-DD")},a=localStorage.getItem(S._.keyUserToken),t=(0,N.sw)(a);A.ZP.post(A.Hv.bank.transfer,e,{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){n("Bank transfer successful!",{variant:"success"}),Se(U),Ce(!1),Pe()})).catch((function(e){n(e.error,{variant:"error"})}))},disabled:!Ae.fromAccount||!Ae.toAccount||!Ae.amount||!Ae.transferDate,children:"TRANSFER FUNDS"}),(0,R.jsx)(m.Z,{variant:"outlined",onClick:function(){Se(U),Ce(!1)},children:"CLOSE"})]})]})})]})}function Y(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(t.ql,{children:(0,R.jsx)("title",{children:" Settings : Banking Details"})}),(0,R.jsx)(M,{})]})}}}]);
//# sourceMappingURL=806.175d698a.chunk.js.map