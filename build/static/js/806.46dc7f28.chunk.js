"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[806],{32869:function(e,n,a){a.d(n,{Ds:function(){return t.Ds}});var t=a(58518);a(58764)},48806:function(e,n,a){a.r(n),a.d(n,{default:function(){return M}});var t=a(6907),r=a(74165),i=a(15861),l=a(4942),o=a(1413),c=a(29439),s=a(72791),d=a(64554),u=a(89164),x=a(4567),f=a(57088),h=a(53837),m=a(30439),b=a(71715),p=a(82626),Z=a(73590),k=a(61889),j=a(93006),v=a(85523),g=a(68096),C=a(50168),y=a(58406),D=a(42419),N=a(18406),A=a(99615),S=a(52073),w=a(32869),B=a(26759),_=a(43513),P=a(71652),T=a(83932),q=a(24750),E=a(97892),I=a.n(E),R=a(80184),W={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",bgcolor:"background.paper",borderRadius:"10px",boxShadow:24,p:2,backgroundColor:N.$_.modalbackground,height:"auto",overflow:"auto"},F={id:"",accountNumber:"",ifscCode:"",bankName:"",branchName:"",isDefault:!1},U={fromAccount:"",toAccount:"",amount:"",transferDate:null};function Y(){var e=(0,f.K$)(),n=(0,w.Ds)().enqueueSnackbar,a=(0,s.useState)(!1),t=(0,c.Z)(a,2),E=t[0],Y=t[1],M=(0,s.useState)(F),z=(0,c.Z)(M,2),H=z[0],L=z[1],$=(0,s.useState)([]),K=(0,c.Z)($,2),O=K[0],V=K[1],G=(0,s.useState)([]),J=(0,c.Z)(G,2),Q=J[0],X=J[1],ee=(0,s.useState)(""),ne=(0,c.Z)(ee,2),ae=ne[0],te=ne[1],re=(0,s.useState)(null),ie=(0,c.Z)(re,2),le=ie[0],oe=ie[1],ce=Boolean(le),se=(0,s.useState)({}),de=(0,c.Z)(se,2),ue=de[0],xe=de[1],fe=(0,s.useState)(!1),he=(0,c.Z)(fe,2),me=he[0],be=he[1],pe=(0,s.useState)(!1),Ze=(0,c.Z)(pe,2),ke=Ze[0],je=Ze[1],ve=(0,s.useState)(U),ge=(0,c.Z)(ve,2),Ce=ge[0],ye=ge[1],De=function(e){var n=e.target,a=n.name,t=n.value;ye((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,l.Z)({},a,t))}))},Ne=function(e){var n=e.target,a=n.name,t=n.value;L((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,l.Z)({},a,"ifscCode"===a||"bankName"===a||"branchName"===a?t.toUpperCase():t))}))},Ae=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var a,t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem(S._.keyUserToken),t=(0,N.sw)(a),e.next=5,A.ZP.post(A.Hv.bank.list,{},{headers:{Authorization:"Bearer ".concat(t)}});case 5:(i=e.sent)&&(X(!1),V(i.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),n("Failed to fetch bank accounts!",{variant:"error"}),X(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){X(!0),Ae()}),[]);var Se=[{name:"Set as Default",selector:function(e){return e.isDefault},cell:function(e){return(0,R.jsx)(h.Z,{checked:e.isDefault,onChange:function(a){X(!0);var t=localStorage.getItem(S._.keyUserToken),r=(0,N.sw)(t);A.ZP.post(A.Hv.bank.setAsDefault,{id:e._id},{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){n("Default bank updated successfully!",{variant:"success"}),Ae(),X(!1)})).catch((function(e){n(e.error,{variant:"error"}),X(!1)}))}})}},{name:"Bank Details",selector:function(e){return e.branchName},cell:function(e){return(0,R.jsxs)("div",{children:[(0,R.jsx)(x.Z,{variant:"h6",children:e.bankName}),(0,R.jsx)(x.Z,{variant:"subtitle1",children:e.accountNumber}),(0,R.jsx)(x.Z,{variant:"subtitle2",children:e.ifscCode})]})}},{name:"Actions",width:"auto",cell:function(e){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(m.Z,{onClick:function(n){oe(n.currentTarget),xe(e)},style:{color:N.$_.actionButton},c:!0,variant:"outlined",endIcon:(0,R.jsx)(B.Z,{}),children:"Action"}),(0,R.jsxs)(b.Z,{id:"basic-menu",anchorEl:le,open:ce,onClose:function(){oe(null),xe({})},MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,R.jsx)(p.Z,{onClick:function(){},children:"Edit Details"}),(0,R.jsx)(p.Z,{onClick:function(){return L((function(e){return(0,o.Z)((0,o.Z)({},e),{},{id:ue._id,bankName:ue.bankName,accountNumber:ue.accountNumber,ifscCode:ue.ifscCode})})),oe(null),void be(!0)},children:"Remove"})]})]})}}];return(0,R.jsxs)(u.Z,{maxWidth:!e.themeStretch&&"xl",children:[(0,R.jsx)(x.Z,{variant:"h4",children:"Bank Details "}),(0,R.jsxs)(d.Z,{sx:{mt:3,p:2,display:"flex",gap:"30px",flexDirection:"column"},children:[(0,R.jsxs)(d.Z,{sx:{display:"flex",gap:"10px"},children:[(0,R.jsx)(m.Z,{startIcon:(0,R.jsx)(D.Z,{}),variant:"contained",color:"primary",onClick:function(){Y(!0)},children:"NEW BANK DETAILS"}),O.length>1&&(0,R.jsx)(m.Z,{startIcon:(0,R.jsx)(D.Z,{}),variant:"contained",onClick:function(){je(!0)},children:"TRANSFER FUNDS"})]}),(0,R.jsx)(d.Z,{sx:{display:"flex",gap:"10px",border:"1px solid black",borderRadius:"10px",width:"70%"},children:(0,R.jsx)(_.ZP,{data:O,columns:Se,progressPending:Q})})]}),(0,R.jsx)(Z.Z,{open:E,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,R.jsxs)(d.Z,{sx:W,children:[(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,R.jsx)(x.Z,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Bank Details"}),(0,R.jsxs)(k.ZP,{container:!0,spacing:2,children:[(0,R.jsx)(k.ZP,{item:!0,xs:12,children:(0,R.jsx)(j.Z,{sx:{borderRadius:"7px",backgroundColor:"white"},label:"Account Number",name:"accountNumber",type:"number",value:H.accountNumber,onChange:function(e){return Ne(e)},fullWidth:!0,required:!0})}),(0,R.jsx)(k.ZP,{item:!0,xs:12,children:(0,R.jsx)(j.Z,{sx:{borderRadius:"7px",backgroundColor:"white"},label:"Confirm Bank Account Number",type:"number",value:ae,onChange:function(e){return te(e.target.value)},fullWidth:!0,required:!0})}),(0,R.jsx)(k.ZP,{item:!0,xs:12,children:(0,R.jsx)(j.Z,{sx:{borderRadius:"7px",backgroundColor:"white"},label:"IFSC Code",name:"ifscCode",value:H.ifscCode,onChange:function(e){return Ne(e)},fullWidth:!0,required:!0})}),(0,R.jsx)(k.ZP,{item:!0,xs:12,children:(0,R.jsx)(j.Z,{sx:{borderRadius:"7px",backgroundColor:"white"},label:"Bank Name",name:"bankName",value:H.bankName,onChange:function(e){return Ne(e)},fullWidth:!0,required:!0})}),(0,R.jsx)(k.ZP,{item:!0,xs:12,children:(0,R.jsx)(j.Z,{sx:{borderRadius:"7px",backgroundColor:"white"},label:"Branch Name",name:"branchName",value:H.branchName,onChange:function(e){return Ne(e)},fullWidth:!0,required:!0})}),(0,R.jsx)(k.ZP,{item:!0,xs:12,children:(0,R.jsx)(v.Z,{control:(0,R.jsx)(h.Z,{checked:H.isDefault,onChange:function(e){L((function(e){return(0,o.Z)((0,o.Z)({},e),{},{isDefault:!H.isDefault})}))}}),label:"Make Default"})})]})]}),(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",justifyContent:"flex-end",padding:"10px"},children:[(0,R.jsx)(m.Z,{variant:"outlined",onClick:function(){L(F),te(""),Y(!1)},children:"Cancel"}),(0,R.jsx)(m.Z,{variant:"contained",color:"primary",disabled:!H.accountNumber||!H.ifscCode||!H.bankName||!ae||!H.branchName||H.accountNumber!==ae,onClick:function(){console.log({bank:H});var e=localStorage.getItem(S._.keyUserToken),a=(0,N.sw)(e);A.ZP.post(A.Hv.bank.add,H,{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){n("Bank added successfully!",{variant:"success"}),L(F),te(""),Ae(),Y(!1)})).catch((function(e){n(e.error,{variant:"error"})}))},children:"SAVE"})]})]})}),(0,R.jsx)(Z.Z,{open:me,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,R.jsxs)(d.Z,{sx:W,children:[(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,R.jsx)(x.Z,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Bank Details"}),(0,R.jsxs)("div",{style:{backgroundColor:"white",padding:"10px",borderRadius:"10px"},children:[(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",marginBottom:"10px"},children:[(0,R.jsx)(j.Z,{label:"Bank Name",name:"bankName",value:H.bankName,disabled:!0,fullWidth:!0,required:!0}),(0,R.jsx)(j.Z,{label:"Account Number",name:"accountNumber",type:"number",value:H.accountNumber,disabled:!0,fullWidth:!0,required:!0})]}),(0,R.jsx)(k.ZP,{item:!0,xs:6,children:(0,R.jsx)(j.Z,{label:"IFSC Code",name:"ifscCode",value:H.ifscCode,disabled:!0,fullWidth:!0,required:!0})})]})]}),(0,R.jsx)(x.Z,{sx:{color:"red"},children:"Note : Deleting the bank account from here will remove the bank details from all existing invoices. Deleted banks cannot be used again and this action cannot be undone. "}),(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",justifyContent:"flex-end",padding:"10px"},children:[(0,R.jsx)(m.Z,{variant:"outlined",onClick:function(){L(F),be(!1)},children:"CLOSE"}),(0,R.jsx)(m.Z,{variant:"contained",color:"primary",onClick:function(){var e=localStorage.getItem(S._.keyUserToken),a=(0,N.sw)(e);A.ZP.post(A.Hv.bank.delete,{id:H.id},{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){n("Bank deleted successfully!",{variant:"success"}),L(F),be(!1),Ae()})).catch((function(e){n(e.error,{variant:"error"})}))},children:"DELETE"})]})]})}),(0,R.jsx)(Z.Z,{open:ke,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,R.jsxs)(d.Z,{sx:W,children:[(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,R.jsx)(x.Z,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Internal Bank to Bank Fund Transfer"}),(0,R.jsx)(x.Z,{id:"modal-modal-title",sx:{color:"black"},children:"Note : This Transfer only affects the internal bank balances in the software and does not affect the actual bank balances."}),(0,R.jsxs)("div",{style:{backgroundColor:"white",padding:"10px",borderRadius:"10px"},children:[(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",marginBottom:"10px"},children:[(0,R.jsxs)(g.Z,{fullWidth:!0,required:!0,children:[(0,R.jsx)(C.Z,{id:"demo-simple-select-label",children:"Select From Bank Account"}),(0,R.jsx)(y.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:Ce.fromAccount,label:"Select From Bank Account",name:"fromAccount",onChange:De,required:!0,children:O.filter((function(e){return e._id!==Ce.toAccount})).map((function(e){return(0,R.jsx)(p.Z,{value:e._id,children:e.bankName})}))})]}),(0,R.jsxs)(g.Z,{fullWidth:!0,required:!0,children:[(0,R.jsx)(C.Z,{id:"demo-simple-select-label",children:"Select To Bank Account"}),(0,R.jsx)(y.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:Ce.toAccount,label:"Select To Bank Account",name:"toAccount",onChange:De,required:!0,children:O.filter((function(e){return e._id!==Ce.fromAccount})).map((function(e){return(0,R.jsx)(p.Z,{value:e._id,children:e.bankName})}))})]})]}),(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",marginBottom:"10px"},children:[(0,R.jsx)(j.Z,{label:"Enter Amount",name:"amount",type:"number",value:Ce.amount,onChange:De,fullWidth:!0,required:!0}),(0,R.jsx)(P._,{dateAdapter:q.y,children:(0,R.jsx)(T.M,{label:"Transfer Date",value:Ce.transferDate,onChange:function(e){ye((function(n){return(0,o.Z)((0,o.Z)({},n),{},{transferDate:e})}))},format:"DD/MM/YYYY",slotProps:{textField:{fullWidth:!0}}})})]})]})]}),(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",justifyContent:"flex-end",padding:"10px"},children:[(0,R.jsx)(m.Z,{variant:"contained",color:"primary",onClick:function(){var e={fromAccount:Ce.fromAccount,toAccount:Ce.toAccount,amount:Ce.amount,transferDate:I()(Ce.transferDate).format("YYYY-MM-DD")},a=localStorage.getItem(S._.keyUserToken),t=(0,N.sw)(a);A.ZP.post(A.Hv.bank.transfer,e,{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){n("Bank transfer successful!",{variant:"success"}),ye(U),je(!1),Ae()})).catch((function(e){n(e.error,{variant:"error"})}))},disabled:!Ce.fromAccount||!Ce.toAccount||!Ce.amount||!Ce.transferDate,children:"TRANSFER FUNDS"}),(0,R.jsx)(m.Z,{variant:"outlined",onClick:function(){ye(U),je(!1)},children:"CLOSE"})]})]})})]})}function M(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(t.ql,{children:(0,R.jsx)("title",{children:" Settings : Banking Details"})}),(0,R.jsx)(Y,{})]})}}}]);
//# sourceMappingURL=806.46dc7f28.chunk.js.map