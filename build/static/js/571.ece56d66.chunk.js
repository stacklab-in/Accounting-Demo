"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[571],{32869:function(e,t,n){n.d(t,{Ds:function(){return r.Ds}});var r=n(58518);n(58764)},36571:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var r=n(6907),a=n(4942),o=n(93433),l=n(74165),i=n(15861),u=n(1413),s=n(29439),c=n(72791),d=n(89164),p=n(4567),m=n(57088),f=n(30439),h=n(71715),x=n(82626),v=n(48550),Z=n(13400),b=n(36314),g=n(85771),y=n(63466),j=n(64554),P=n(73590),C=n(89744),k=n(61889),S=n(68096),w=n(50168),D=n(58406),M=n(5574),A=n(65661),I=n(39157),T=n(97123),N=n(42419),F=n(5403),B=n(97892),q=n.n(B),z=n(71652),R=n(24750),_=n(26759),E=n(43513),W=n(23937),Y=n(27247),H=n(18406),O=n(52073),U=n(99615),L=n(32869),V=n(8976),G=(n(35125),n(80184)),$={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",bgcolor:H.$_.modalbackground,borderRadius:"10px",height:"90%",overflowY:"auto",boxShadow:24,display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"10px",p:2},Q={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"400px",bgcolor:H.$_.modalbackground,borderRadius:"10px",height:"auto",boxShadow:24,p:2},K={customer:"",mobileNumber:"",salesMan:null,invoiceDate:null,invoiceDueDate:null,products:[],offer:"",amountToPay:"",totalAmount:0,productDiscount:0,paymentMode:"",paymentStatus:"",bank:"",multipleMode:{cash:"",upi:"",cheque:"",card:""}},J={category:"All Categories",product:null,quantity:"",netAmount:null,discount:null,sellingPrice:null},X={salesOrderId:"",name:"",balance:0,amountToPay:0,paymentMode:"",bank:"",paymentDate:q()(new Date)};function ee(){var e,t,n,r=(0,m.K$)(),B=(0,c.useRef)(null),ee=(0,V.E)().user,te=(0,c.useState)(0),ne=(0,s.Z)(te,2),re=ne[0],ae=ne[1],oe=(0,c.useState)(0),le=(0,s.Z)(oe,2),ie=le[0],ue=le[1],se=(0,L.Ds)().enqueueSnackbar,ce=(0,c.useState)(!1),de=(0,s.Z)(ce,2),pe=de[0],me=de[1],fe=function(){He(K),Ke(J),He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{customer:null})})),ae(0),ue(0)},he=(0,c.useState)(!1),xe=(0,s.Z)(he,2),ve=xe[0],Ze=xe[1],be=(0,c.useState)([]),ge=(0,s.Z)(be,2),ye=ge[0],je=ge[1],Pe=(0,c.useState)([]),Ce=(0,s.Z)(Pe,2),ke=Ce[0],Se=Ce[1],we=(0,c.useState)([]),De=(0,s.Z)(we,2),Me=(De[0],De[1],(0,c.useState)([])),Ae=(0,s.Z)(Me,2),Ie=Ae[0],Te=Ae[1],Ne=(0,c.useState)([]),Fe=(0,s.Z)(Ne,2),Be=Fe[0],qe=Fe[1],ze=(0,c.useState)([]),Re=(0,s.Z)(ze,2),_e=(Re[0],Re[1]),Ee=(0,c.useState)(K),We=(0,s.Z)(Ee,2),Ye=We[0],He=We[1],Oe=(0,c.useState)(""),Ue=(0,s.Z)(Oe,2),Le=Ue[0],Ve=Ue[1],Ge=(0,c.useState)(J),$e=(0,s.Z)(Ge,2),Qe=$e[0],Ke=$e[1],Je=(0,c.useState)(!1),Xe=(0,s.Z)(Je,2),et=Xe[0],tt=Xe[1],nt=(0,c.useState)([]),rt=(0,s.Z)(nt,2),at=rt[0],ot=rt[1],lt=(0,c.useState)([]),it=(0,s.Z)(lt,2),ut=it[0],st=it[1],ct=(0,c.useState)({totalSalesAmount:0,totalPaidAmount:0,pendingAmount:0}),dt=(0,s.Z)(ct,2),pt=dt[0],mt=dt[1],ft=(0,c.useState)(null),ht=(0,s.Z)(ft,2),xt=ht[0],vt=ht[1],Zt=Boolean(xt),bt=(0,c.useState)({}),gt=(0,s.Z)(bt,2),yt=gt[0],jt=gt[1],Pt=(0,c.useState)(!1),Ct=(0,s.Z)(Pt,2),kt=Ct[0],St=Ct[1],wt=(0,c.useState)(X),Dt=(0,s.Z)(wt,2),Mt=Dt[0],At=Dt[1],It=(0,c.useState)(!1),Tt=(0,s.Z)(It,2),Nt=Tt[0],Ft=Tt[1],Bt=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(){var t,n,r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(O._.keyUserToken),n=(0,H.sw)(t),e.next=5,U.ZP.post(U.Hv.customer.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&je(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),se("Failed to fetch customers!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),qt=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(){var t,n,r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(O._.keyUserToken),n=(0,H.sw)(t),e.next=5,U.ZP.post(U.Hv.employee.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&Se(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),se("Failed to fetch employees!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),zt=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(){var t,n,r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(O._.keyUserToken),n=(0,H.sw)(t),e.next=5,U.ZP.post(U.Hv.productBarcodeValues.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&qe(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),se("Failed to fetch products!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Rt=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(){var t,n,r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(O._.keyUserToken),n=(0,H.sw)(t),e.next=5,U.ZP.post(U.Hv.offer.list,{status:["LIVE"]},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&_e(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),se("Failed to fetch offers!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),_t=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(){var t,n,r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(O._.keyUserToken),n=(0,H.sw)(t),e.next=5,U.ZP.post(U.Hv.sales.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&(tt(!1),ot(r.data.data),st(r.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),se("Failed to fetch sales orders!",{variant:"error"}),tt(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Et=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(){var t,n,r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(O._.keyUserToken),n=(0,H.sw)(t),e.next=5,U.ZP.post(U.Hv.bank.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&Te(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),se("Failed to fetch bank accounts!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Wt=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(){var t,n,r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(O._.keyUserToken),n=(0,H.sw)(t),e.next=5,U.ZP.get(U.Hv.sales.summary,{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&mt({totalSalesAmount:r.data.data.totalSalesAmount,totalPaidAmount:r.data.data.totalPaidAmount,pendingAmount:r.data.data.pendingAmount}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),se("Failed to fetch bank accounts!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){tt(!0),_t(),Wt(),Bt(),qt(),zt(),Rt(),Et()}),[]);var Yt=[{name:"Invoice Number",selector:function(e){return e.invoiceNumber}},{name:"Customer Name",selector:function(e){return e.customerId.name},sortable:"true",width:"140px"},{name:"Sales Man Name",selector:function(e){return e.salesManId.name},sortable:"true",width:"160px"},{name:"Product Name",selector:function(e){return e.products.length>1?"".concat(e.products[0].name,", & ").concat(e.products.length-1," more"):e.products[0].name},width:"190px"},{name:"Amount",selector:function(e){return e.totalAmount.toFixed(2)},sortable:"true"},{name:"Payment Mode",selector:function(e){return e.payments[0].paymentID.paymentMode},sortable:"true"},{name:"Payment Status",selector:function(e){return e.paymentStatus},sortable:"true"},{name:"Voucher Amount",width:"120px",selector:function(e){return 0===e.discount.amount?"N/A":e.discount.amount.toFixed(2)}},{name:"Actions",width:"130px",cell:function(e){var t,n;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(f.Z,{disabled:!(null!==ee&&void 0!==ee&&null!==(t=ee.permissions)&&void 0!==t&&null!==(n=t.sales)&&void 0!==n&&n.u),onClick:function(t){vt(t.currentTarget),jt(e)},style:{color:H.$_.actionButton},variant:"outlined",endIcon:(0,G.jsx)(_.Z,{}),children:"Action"}),(0,G.jsxs)(h.Z,{id:"basic-menu",anchorEl:xt,open:Zt,onClose:function(){vt(null),jt({})},MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,G.jsx)(x.Z,{onClick:function(){},children:"Send via Email"}),(0,G.jsx)(x.Z,{onClick:function(){},children:"Send via Whatsapp"}),(0,G.jsx)(x.Z,{onClick:function(){Ze(!0),vt(null)},children:"Delete"}),(0,G.jsx)(x.Z,{onClick:function(){},children:"Print"}),yt.remainingAmount>0&&(0,G.jsx)(x.Z,{onClick:function(){return vt(null),St(!0),At((function(e){return(0,u.Z)((0,u.Z)({},e),{},{name:yt.customerId.name,balance:yt.remainingAmount,salesOrderId:yt._id})})),void jt({})},children:"Record Payment"})]})]})}}],Ht=function(e,t,n){"discount"===t&&n>Ye.products[e].product.sellingPrice&&(n=Ye.products[e].product.sellingPrice,se("Discount should not be greater than ".concat(Ye.products[e].product.sellingPrice,"."),{variant:"error"})),"quantity"===t&&n>Ye.products[e].product.quantity&&(n=Ye.products[e].product.quantity,se("There are only ".concat(Ye.products[e].product.quantity," units available."),{variant:"error"}));var r=(0,o.Z)(Ye.products),a=(0,u.Z)({},r[e]);a[t]=n,r[e]=a,console.log("new Product",r[e]),He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{products:r})}))},Ot=[{name:"Product Name",selector:function(e){var t,n;return null!==(t=null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.name)&&void 0!==t?t:e.name}},{name:"Quantity",selector:function(e){return e.quantity},cell:function(e,t){return(0,G.jsx)(v.Z,{autoFocus:t===Ye.products.length-1,type:"number",onBlur:function(n){var r=(0,o.Z)(Ye.products),a=(0,u.Z)({},r[t]);e.quantity&&"0"!==parseInt(e.quantity,10)||(se("Quantity cannot be empty",{variant:"error"}),a.quantity="1",r[t]=a,He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{products:r})})))},onChange:function(e){return Ht(t,"quantity",e.target.value)},value:e.quantity,size:"small"})},center:"true"},{name:"Sell Price",selector:function(e){return e.sellingPrice},cell:function(e,t){return(0,G.jsx)(v.Z,{type:"number",onBlur:function(){var n=(0,o.Z)(Ye.products),r=(0,u.Z)({},n[t]),a=r.barcodePurchasePrice;(!e.sellingPrice||a>parseInt(e.sellingPrice,10))&&(se("The product price cannot be lower than its purchase price of ".concat(Ut(a)),{variant:"error"}),r.sellingPrice=String(a),n[t]=r,He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{products:n})})))},onChange:function(e){return Ht(t,"sellingPrice",e.target.value)},value:e.sellingPrice,size:"small"})},center:"true"},{name:"SGST",selector:function(e){return null===e||void 0===e?void 0:e.sgst},cell:function(e,t){return(0,G.jsx)(v.Z,{type:"number",disabled:Nt||e.igst,onChange:function(e){return Ht(t,"sellingPrice",e.target.value)},value:e.sgst,size:"small"})},center:"true"},{name:"CGST",selector:function(e){return null===e||void 0===e?void 0:e.cgst},cell:function(e,t){return(0,G.jsx)(v.Z,{type:"number",disabled:Nt||e.igst,onChange:function(e){return Ht(t,"cgst",e.target.value)},value:e.cgst,size:"small"})},center:"true"},{name:"IGST",selector:function(e){return null===e||void 0===e?void 0:e.igst},cell:function(e,t){return(0,G.jsx)(v.Z,{type:"number",disabled:Nt||e.sgst||e.cgst,onChange:function(e){return Ht(t,"igst",e.target.value)},value:e.igst,size:"small"})},center:"true"},{name:"Discount",selector:function(e){return e.discount},cell:function(e,t){return(0,G.jsx)(v.Z,{value:e.discount,size:"small",type:"number",onBlur:function(){if(0===e.discount.length){var n=(0,o.Z)(Ye.products),r=(0,u.Z)({},n[t]);r.discount="0",n[t]=r,He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{products:n})}))}},onChange:function(e){return Ht(t,"discount",e.target.value)}})},center:"true"},{name:"Net Amount",selector:function(e){return parseInt(e.quantity||0,10)*parseInt(e.sellingPrice||0,10)},center:"true"},{name:"Actions",cell:function(e,t){return(0,G.jsx)(Z.Z,{onClick:function(){return function(e,t){console.log("deleting product...",Nt),Nt&&He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{offer:{}})}));var n=(0,o.Z)(Ye.products);n.splice(t,1),He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{products:n})}))}(0,t)},color:"error",variant:"outlined",children:(0,G.jsx)(Y.Z,{})})},center:"true"}],Ut=new Intl.NumberFormat("hi-In",{style:"currency",currency:"INR"}).format;var Lt=Ye.products.reduce((function(e,t){var n=function(e){return parseFloat(null!==e&&void 0!==e&&e.discount?null===e||void 0===e?void 0:e.discount:0)}(t);return e+n}),0),Vt=Ye.products.reduce((function(e,t){return e+parseInt(t.sellingPrice?t.sellingPrice:0,10)*parseInt(t.quantity?t.quantity:0,10)}),0),Gt=0;Object.keys(Ye.offer).length>0&&(Gt="PERCENTAGE"===Ye.offer.type?Vt*Ye.offer.typeValue/100:Ye.offer.typeValue);var $t=Vt-(Lt+Number(Gt))-parseFloat(""!==re?re:0),Qt=0;if(""!==Ye.multipleMode.cash||""!==Ye.multipleMode.upi||""!==Ye.multipleMode.cheque||""!==Ye.multipleMode.card||""!==Ye.multipleMode.cheque){var Kt=Ye.multipleMode||{cash:0,upi:0,cheque:0,card:0},Jt=parseFloat(Kt.cash||0),Xt=parseFloat(Kt.upi||0),en=parseFloat(Kt.cheque||0),tn=parseFloat(Kt.card||0);Qt=$t-(Jt+Xt+en+tn),Nt&&(Qt-=ie)}var nn=(0,c.useState)(q()().startOf("month")),rn=(0,s.Z)(nn,2),an=rn[0],on=rn[1],ln=(0,c.useState)(q()().endOf("month")),un=(0,s.Z)(ln,2),sn=un[0],cn=un[1];(0,c.useEffect)((function(){if(an&&sn){var e=ut.filter((function(e){var t=q()(e.createdAt);return console.log(an,sn),t.isBetween(an,sn,null,"[]")}));ot(e)}else ot(ut)}),[an,sn]);var dn=at.filter((function(e){var t,n;return(null===e||void 0===e||null===(t=e.customerId.name)||void 0===t?void 0:t.toLowerCase().includes(null===Le||void 0===Le?void 0:Le.toLowerCase()))||(null===e||void 0===e||null===(n=e.invoiceNumber)||void 0===n?void 0:n.toLowerCase().includes(null===Le||void 0===Le?void 0:Le.toLowerCase()))})),pn=function(e,t){var n=e.target.value;""!==n&&parseFloat(n)<0&&(se("Error: Negative amount not allowed for ".concat(t.toUpperCase()),{variant:"error"}),He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{multipleMode:(0,u.Z)((0,u.Z)({},e.multipleMode),{},(0,a.Z)({},t,""))})})))};return(0,G.jsxs)(d.Z,{maxWidth:!r.themeStretch&&"xl",children:[(0,G.jsx)(p.Z,{variant:"h4",children:" Sales "}),(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"20px"},children:[(0,G.jsxs)(b.Z,{direction:"row",spacing:1,children:[(0,G.jsx)(g.Z,{label:"Total  ".concat(H.MG.format(pt.totalSalesAmount)),variant:"outlined"}),(0,G.jsx)(g.Z,{label:"Paid  ".concat(H.MG.format(pt.totalPaidAmount)),variant:"outlined"}),(0,G.jsx)(g.Z,{label:"Pending  ".concat(H.MG.format(pt.pendingAmount)),variant:"outlined"})]}),(null===ee||void 0===ee||null===(e=ee.permissions)||void 0===e||null===(t=e.sales)||void 0===t?void 0:t.u)&&(0,G.jsx)(b.Z,{children:(0,G.jsx)(f.Z,{variant:"contained",color:"primary",startIcon:(0,G.jsx)(N.Z,{}),onClick:function(){He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{invoiceDate:q()(new Date)})})),me(!0),Ft(!1)},children:"CREATE SALES ORDER"})})]}),(0,G.jsxs)("div",{style:{marginTop:"20px"},children:[(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[(0,G.jsx)("div",{children:(0,G.jsx)(v.Z,{placeholder:"Search",size:"small",value:Le,onChange:function(e){return Ve(e.target.value)},InputProps:{startAdornment:(0,G.jsx)(y.Z,{position:"start",children:(0,G.jsx)(F.Z,{})})}})}),(0,G.jsx)("div",{children:(0,G.jsx)(z._,{dateAdapter:R.y,children:(0,G.jsxs)(j.Z,{sx:{display:"flex",flexDirection:"row",gap:"10px",alignItems:"center"},children:[(0,G.jsx)(W.M,{label:"From",format:"DD/MM/YYYY",value:an,slotProps:{textField:{size:"small"}},onChange:function(e){on(e)},renderInput:function(e){return(0,G.jsx)(v.Z,(0,u.Z)({},e))}}),(0,G.jsx)(p.Z,{children:"-"}),(0,G.jsx)(W.M,{label:"To",format:"DD/MM/YYYY",value:sn,slotProps:{textField:{size:"small"}},onChange:function(e){cn(e)},renderInput:function(e){return(0,G.jsx)(v.Z,(0,u.Z)({},e))}})]})})})]}),(0,G.jsx)("div",{style:{marginTop:"20px"},children:(0,G.jsx)(E.ZP,{columns:Yt,data:dn,pagination:!0,progressPending:et})})]}),(0,G.jsx)(P.Z,{open:pe,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,G.jsxs)(j.Z,{sx:$,children:[(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",backgroundColor:"white",padding:"15px",borderRadius:"10px"},children:[(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"15px"},children:[(0,G.jsx)(C.Z,{disabled:Nt,value:Ye.mobileNumber,options:ye,fullWidth:!0,getOptionLabel:function(e){return"string"===typeof e?e:e.mobileNumber},selectOnFocus:!0,onChange:function(e,t){console.log({newValue:t}),console.log("event calling and changing value from options"),He(t?function(e){return(0,u.Z)((0,u.Z)({},e),{},{mobileNumber:t,customer:t.name})}:function(e){return(0,u.Z)((0,u.Z)({},e),{},{mobileNumber:null,customer:""})})},onInputChange:function(e,t){if(!ye.some((function(e){return e.mobileNumber===t})))console.log("Mobile number new "),He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{mobileNumber:t,customer:""})}));else{var n=ye.find((function(e){return e.mobileNumber===t}));He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{mobileNumber:t,customer:n.name})}))}},onBlur:function(e){var t=Ye.mobileNumber;"string"===typeof t&&(/^\d+$/.test(t)?He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{mobileNumber:t.slice(0,10)})})):(He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{mobileNumber:""})})),se("Mobile number must be numerical digits only!",{variant:"error"})))},freeSolo:!0,renderInput:function(e){return(0,G.jsx)(v.Z,(0,u.Z)((0,u.Z)({},e),{},{label:"Mobile Number",fullWidth:!0}))}}),(0,G.jsx)(v.Z,{label:"Customer Name",disabled:Nt,value:Ye.customer,onBlur:function(e){var t=Ye.customer;/\d/.test(t)&&(He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{customer:""})})),se("Customer name cannot contain digits!",{variant:"error"}))},fullWidth:!0,onChange:function(e){He((function(t){return(0,u.Z)((0,u.Z)({},t),{},{customer:e.target.value})}))}})]}),(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"15px"},children:[(0,G.jsx)(C.Z,{value:Ye.salesMan,disabled:Nt,options:ke,getOptionLabel:function(e){return"".concat(e.name," - ").concat(e.code)},fullWidth:!0,onChange:function(e,t){He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{salesMan:t})}))},renderInput:function(e){return(0,G.jsx)(v.Z,(0,u.Z)((0,u.Z)({},e),{},{label:"Sales Man",fullWidth:!0}))}}),(0,G.jsx)(z._,{dateAdapter:R.y,children:(0,G.jsx)(W.M,{label:"Invoice Date",value:Ye.invoiceDate,onChange:function(e){He((function(t){return(0,u.Z)((0,u.Z)({},t),{},{invoiceDate:e})}))},format:"DD/MM/YYYY",disabled:Nt,slotProps:{textField:{fullWidth:!0}}})})]})]}),(0,G.jsx)(k.ZP,{container:!0,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px",display:"flex",justifyContent:"space-between"},alignItems:"center",children:(0,G.jsx)(k.ZP,{item:!0,xs:12,md:12,display:"flex",children:(0,G.jsx)(C.Z,{options:Be,getOptionLabel:function(e){return"".concat(e.productId.name," - ").concat(e.barcode)},value:null!==(n=null===Qe||void 0===Qe?void 0:Qe.product)&&void 0!==n?n:null,onChange:function(e,t){t?(Ke((function(e){return(0,u.Z)((0,u.Z)({},e),{},{product:t})})),function(e){var t,n,r,a=Be.find((function(t){return t.productId.name===e.productId.name}));if(a&&a.productId.quantity<e.productId.quantity)se("Product quantity not available!",{variant:"error"});else{var l={name:e.productId.name,sellingPrice:e.productId.sellingPrice||"",quantity:1,discount:0,sgst:(null===e||void 0===e||null===(t=e.productId)||void 0===t?void 0:t.sgst)||0,cgst:(null===e||void 0===e||null===(n=e.productId)||void 0===n?void 0:n.cgst)||0,igst:(null===e||void 0===e||null===(r=e.productId)||void 0===r?void 0:r.igst)||0,product:e.productId,barcodePurchasePrice:e.purchasePrice};He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{products:[].concat((0,o.Z)(e.products),[l])})})),Ke(J),B.current&&B.current.blur()}}(t)):Ke((function(e){return(0,u.Z)((0,u.Z)({},e),{},{product:null})}))},fullWidth:!0,renderInput:function(e){return(0,G.jsx)(v.Z,(0,u.Z)((0,u.Z)({},e),{},{inputRef:B,label:"Search Products",fullWidth:!0}))}})})}),Ye.products.length>0&&(0,G.jsxs)(k.ZP,{container:!0,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px"},alignItems:"center",children:[(0,G.jsx)(k.ZP,{item:!0,xs:12,children:(0,G.jsx)(E.ZP,{columns:Ot,data:Ye.products})}),(0,G.jsx)(k.ZP,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",sx:{mt:2},children:(0,G.jsxs)("div",{style:{width:"200px"},children:[(0,G.jsx)("div",{children:"Voucher"}),(0,G.jsx)("div",{style:{paddingTop:"5px"},children:(0,G.jsx)(v.Z,{fullWidth:!0,size:"small",type:"number",label:"Enter Discount",onBlur:function(e){""===re&&ae("0"),parseFloat(re)>$t&&(ae(""),se("Discount cannot be greater than total amount!",{variant:"error"}))},value:re,onChange:function(e){Object.keys(Ye.offer).length>0&&He((function(e){return(0,u.Z)((0,u.Z)({},e),{},{offer:{}})})),ae(e.target.value)}})})]})})]}),(0,G.jsx)(k.ZP,{container:!0,display:"flex",justifyContent:"flex-end",children:(0,G.jsx)(k.ZP,{item:!0,xs:12,md:6,lg:6,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px"},children:(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,G.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,G.jsx)("div",{children:"Product Discount"}),(0,G.jsx)("div",{children:0===Ye.products.length?Ut(0):Ut(Lt+parseFloat(re))})]}),0!==Object.keys(Ye.offer).length?(0,G.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,G.jsx)("div",{children:"Offer Discount"}),(0,G.jsx)("div",{children:Ut(Gt)})]}):null,(0,G.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,G.jsx)("div",{children:"Total Amount"}),(0,G.jsx)("div",{children:0===Ye.products.length?Ut(0):Ut(Vt)})]})]})})}),(0,G.jsx)("div",{style:{backgroundColor:"white",padding:"15px",borderRadius:"10px"},children:(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px"},children:[(0,G.jsx)(v.Z,{name:"cashAmount",placeholder:"Enter cash amount if you want to",label:"Cash",fullWidth:!0,type:"number",size:"small",value:Ye.multipleMode.cash,onChange:function(e){return He((function(t){return(0,u.Z)((0,u.Z)({},t),{},{multipleMode:(0,u.Z)((0,u.Z)({},t.multipleMode),{},{cash:e.target.value})})}))},onBlur:function(e){return pn(e,"cash")}}),(0,G.jsx)(v.Z,{name:"cashAmount",placeholder:"Enter upi amount if you want to",label:"UPI",fullWidth:!0,type:"number",size:"small",value:Ye.multipleMode.upi,onChange:function(e){return He((function(t){return(0,u.Z)((0,u.Z)({},t),{},{multipleMode:(0,u.Z)((0,u.Z)({},t.multipleMode),{},{upi:e.target.value})})}))},onBlur:function(e){return pn(e,"upi")}}),(0,G.jsx)(v.Z,{name:"cashAmount",placeholder:"Enter cheque amount if you want to",label:"CHEQUE",fullWidth:!0,type:"number",size:"small",value:Ye.multipleMode.cheque,onChange:function(e){return He((function(t){return(0,u.Z)((0,u.Z)({},t),{},{multipleMode:(0,u.Z)((0,u.Z)({},t.multipleMode),{},{cheque:e.target.value})})}))},onBlur:function(e){return pn(e,"cheque")}}),(0,G.jsx)(v.Z,{name:"cashAmount",placeholder:"Enter card amount if you want to",label:"CARD",fullWidth:!0,type:"number",size:"small",value:Ye.multipleMode.card,onChange:function(e){return He((function(t){return(0,u.Z)((0,u.Z)({},t),{},{multipleMode:(0,u.Z)((0,u.Z)({},t.multipleMode),{},{card:e.target.value})})}))},onBlur:function(e){return pn(e,"card")}})]})}),(0,G.jsx)("div",{style:{backgroundColor:"white",padding:"15px",borderRadius:"10px"},children:(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px"},children:[(0,G.jsxs)(S.Z,{fullWidth:!0,size:"small",children:[(0,G.jsx)(w.Z,{id:"demo-simple-select-label",children:"Select Payment Status"}),(0,G.jsx)(D.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Payment Status",value:Ye.paymentStatus,disabled:Nt,onChange:function(e){return He((function(t){return(0,u.Z)((0,u.Z)({},t),{},{paymentStatus:e.target.value})}))},children:H.y0.paymentStatus.map((function(e,t){return(0,G.jsx)(x.Z,{value:e,children:e},t)}))})]}),(0,G.jsxs)(S.Z,{fullWidth:!0,size:"small",children:[(0,G.jsx)(w.Z,{id:"demo-simple-select-label",children:"Select Bank"}),(0,G.jsx)(D.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Bank",value:Ye.bank,disabled:Nt||"CASH"===Ye.paymentMode,onChange:function(e){return He((function(t){return(0,u.Z)((0,u.Z)({},t),{},{bank:e.target.value})}))},children:Ie.map((function(e,t){return(0,G.jsx)(x.Z,{value:e._id,children:e.bankName},t)}))})]})]})}),(0,G.jsx)(k.ZP,{container:!0,children:(0,G.jsxs)(k.ZP,{item:!0,xs:12,md:12,lg:12,sx:{backgroundColor:"white",p:"15px",borderRadius:"10px"},display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,G.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",gap:"20px"},children:[(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"40px"},children:[(0,G.jsx)("div",{children:"Total  :"}),(0,G.jsx)("div",{children:0===Ye.products.length?Ut(0):Ut($t)})]}),(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"40px"},children:[(0,G.jsx)("div",{children:"Balance  :"}),(0,G.jsx)("div",{children:0===Ye.products.length?Ut(0):Ut(Qt)})]}),Nt&&(0,G.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"40px"},children:[(0,G.jsx)("div",{children:"Previously Paid  :"}),(0,G.jsx)("div",{children:0===Ye.products.length?Ut(0):Ut(ie)})]})]}),(0,G.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[Nt?(0,G.jsx)(f.Z,{variant:"contained",onClick:function(){if($t<ie)se("Order Amount Must be greater than ".concat(Ut(ie),"!"),{variant:"error"});else{if(0!==Qt){if(""===Ye.amountToPay||0===parseFloat(Ye.amountToPay))return void se("Amount to pay cannot be empty or 0!.",{variant:"error"});if(parseFloat(Ye.amountToPay)>$t-ie)return void se("Amount to pay cannot be greater than ".concat(Ut($t-ie),"!"),{variant:"error"})}console.log("sales.amountToPay",Ye.amountToPay);var e=(0,u.Z)({},Ye);e.discount={},e.discount.productDiscount=Lt,e.discount.amount=parseFloat(re),Object.keys(Ye.offer).length>0&&(e.discount.offer={},e.discount.offer.discount=Gt,e.discount.offer.id=Ye.offer),e.products=Ye.products,e.balanceAmount=Qt,e.totalDiscount=Lt+Gt+parseFloat(re),e.totalAmount=$t,e.paymentStatus=Ye.paymentStatus,e.id=yt._id,delete e.offer,delete e.invoiceDueDate,delete e.salesMan,delete e.customer,delete e.invoiceDate,delete e.mobileNumber,console.log({updatePayload:e});var t=localStorage.getItem(O._.keyUserToken),n=(0,H.sw)(t);U.ZP.post(U.Hv.sales.update,e,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){se("Sales order updated successfully!",{variant:"success"}),me(!1),jt({}),fe(),_t(),Ft(!1),Wt()})).catch((function(e){se(e.error||e.err,{variant:"error"})}))}},color:"primary",disabled:!Ye.paymentStatus,children:"UPDATE"}):(0,G.jsx)(f.Z,{variant:"contained",onClick:function(){var e=(0,u.Z)({},Ye),t=e.multipleMode.cash||0,n=e.multipleMode.upi||0,r=e.multipleMode.cheque||0,a=e.multipleMode.card||0,o=parseFloat(t)+parseFloat(n)+parseFloat(r)+parseFloat(a),l=$t-o;if(console.log("\ud83d\ude80 ~ handleSaveSalesOrder ~ amountDifference:",l),l<0)se("Amount entered exceeds total amount!",{variant:"error"});else if(l>0&&"PAID"===e.paymentStatus)se("Amount entered is less than total amount!. Please select paymentStatus as pending.",{variant:"error"});else if("string"===typeof Ye.mobileNumber&&Ye.mobileNumber.length<10)se("Mobile number must be 10 digits!",{variant:"error"});else if(Ye.customer.length<=1)se("Customer name must be greater than one alphabet!",{variant:"error"});else{e.discount={},e.discount.productDiscount=Lt,e.discount.amount=parseFloat(re),Object.keys(Ye.offer).length>0&&(e.discount.offer={},e.discount.offer.discount=Gt,e.discount.offer.id=Ye.offer),e.invoiceDate=q()(e.invoiceDate).format("YYYY-MM-DD"),e.totalDiscount=Lt+Gt+parseFloat(re),e.totalAmount=$t,delete e.offer,delete e.amountToPay,delete e.invoiceDueDate,delete e.paymentMode,console.log(e);var i=localStorage.getItem(O._.keyUserToken),s=(0,H.sw)(i);U.ZP.post(U.Hv.sales.add,e,{headers:{Authorization:"Bearer ".concat(s)}}).then((function(e){se("Sales order created successfully!",{variant:"success"}),me(!1),fe(),_t(),Wt()})).catch((function(e){se(e.error||e.err,{variant:"error"})}))}},color:"primary",disabled:!Ye.customer||!Ye.mobileNumber||!Ye.salesMan||0===Ye.products.length||!Ye.paymentStatus||"CASH"!==Ye.paymentMode&&!Ye.bank,children:"SAVE"}),(0,G.jsx)(f.Z,{variant:"contained",color:"error",onClick:function(){me(!1),Ft(!1),fe()},children:"CANCEL"})]})]})})]})}),(0,G.jsx)(P.Z,{id:"paymentModal",open:kt,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,G.jsx)(j.Z,{sx:Q,children:(0,G.jsxs)(k.ZP,{container:!0,sx:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,G.jsx)(k.ZP,{item:!0,xs:12,children:(0,G.jsx)(p.Z,{variant:"h6",children:"Customer Details"})}),(0,G.jsx)(k.ZP,{item:!0,xs:12,children:(0,G.jsx)(v.Z,{label:"Name",value:Mt.name,disabled:!0,sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,G.jsx)(k.ZP,{item:!0,xs:12,children:(0,G.jsx)(v.Z,{label:"Balance",value:Mt.balance,disabled:!0,sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,G.jsx)(k.ZP,{item:!0,xs:12,children:(0,G.jsx)(p.Z,{variant:"h6",children:"Payment Details"})}),(0,G.jsx)(k.ZP,{item:!0,xs:12,children:(0,G.jsx)(v.Z,{label:"Amount To Pay",value:Mt.amountToPay,onBlur:function(){Mt.amountToPay>Mt.balance&&(se("Amount to pay cannot be greater than balance!",{variant:"error"}),At((function(e){return(0,u.Z)((0,u.Z)({},e),{},{amountToPay:Mt.balance})})))},onChange:function(e){return At((function(t){return(0,u.Z)((0,u.Z)({},t),{},{amountToPay:e.target.value})}))},sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,G.jsx)(k.ZP,{item:!0,xs:12,children:(0,G.jsx)(z._,{dateAdapter:R.y,children:(0,G.jsx)(W.M,{label:"Payment Date",value:Mt.paymentDate,maxDate:q()(new Date),onChange:function(e){At((function(t){return(0,u.Z)((0,u.Z)({},t),{},{paymentDate:e})}))},sx:{backgroundColor:"white",borderRadius:"7px"},format:"DD/MM/YYYY",slotProps:{textField:{fullWidth:!0}}})})}),(0,G.jsx)(k.ZP,{item:!0,xs:12,children:(0,G.jsxs)(S.Z,{fullWidth:!0,children:[(0,G.jsx)(w.Z,{id:"record-payment-mode",children:"Select Payment Mode"}),(0,G.jsx)(D.Z,{labelId:"record-payment-mode",id:"demo-simple-select",label:"Select Payment Mode",sx:{backgroundColor:"white",borderRadius:"7px"},value:Mt.paymentMode,onChange:function(e){return At((function(t){return(0,u.Z)((0,u.Z)({},t),{},{paymentMode:e.target.value})}))},children:["CASH","CARD","UPI","CHEQUE"].map((function(e,t){return(0,G.jsx)(x.Z,{value:e,children:e},t)}))})]})}),"CASH"!==Mt.paymentMode&&(0,G.jsx)(k.ZP,{item:!0,xs:12,children:(0,G.jsxs)(S.Z,{fullWidth:!0,children:[(0,G.jsx)(w.Z,{id:"select-bank",children:"Select Bank"}),(0,G.jsx)(D.Z,{labelId:"select-bank",id:"demo-simple-select",label:"Select Bank",value:Mt.bank,sx:{backgroundColor:"white",borderRadius:"7px"},onChange:function(e){return At((function(t){return(0,u.Z)((0,u.Z)({},t),{},{bank:e.target.value})}))},children:Ie.map((function(e,t){return(0,G.jsx)(x.Z,{value:e._id,children:e.bankName},t)}))})]})}),(0,G.jsxs)(k.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[(0,G.jsx)(f.Z,{variant:"contained",color:"primary",onClick:function(){var e={};e.salesOrderId=Mt.salesOrderId,e.amountToPay=Mt.amountToPay,e.paymentDate=Mt.paymentDate,e.paymentMode=Mt.paymentMode,Mt.bank.length>0&&(e.bank=Mt.bank);var t=localStorage.getItem(O._.keyUserToken),n=(0,H.sw)(t);U.ZP.post(U.Hv.sales.recordPayment,e,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){se("Sales order payment recorded successfully!",{variant:"success"}),St(!1),At(X),_t(),Wt()})).catch((function(e){se(e.error,{variant:"error"})}))},disabled:!Mt.amountToPay||!Mt.paymentMode||"CASH"!==Mt.paymentMode&&!Mt.bank,children:"Update Payment"}),(0,G.jsx)(f.Z,{variant:"contained",color:"error",onClick:function(){St(!1),At(X)},children:"Cancel"})]})]})})}),(0,G.jsxs)(M.Z,{open:ve,onClose:function(){return Ze(!1)},children:[(0,G.jsx)(A.Z,{children:"Remove"}),(0,G.jsx)(I.Z,{children:"Are you sure you want to delete this sales order?"}),(0,G.jsxs)(T.Z,{children:[(0,G.jsx)(f.Z,{onClick:function(){Ze(!1),jt({})},children:"Cancel"}),(0,G.jsx)(f.Z,{onClick:function(){var e=localStorage.getItem(O._.keyUserToken),t=(0,H.sw)(e),n={headers:{Authorization:"Bearer ".concat(t)}};U.ZP.post(U.Hv.sales.delete,{id:yt._id},n).then((function(e){e&&(se("Sales order deleted successfully!",{variant:"success"}),Ze(!1),jt({}),_t(),Wt())})).catch((function(e){console.log(e),se(e.msg||e.error,{variant:"error"})}))},variant:"contained",color:"error",children:"Delete"})]})]})]})}function te(){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(r.ql,{children:(0,G.jsx)("title",{children:" Dashboard : Sales"})}),(0,G.jsx)(ee,{})]})}},27247:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45649)),o=n(80184);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},65661:function(e,t,n){var r=n(87462),a=n(63366),o=n(72791),l=n(28182),i=n(94419),u=n(4567),s=n(66934),c=n(31402),d=n(17673),p=n(85090),m=n(80184),f=["className","id"],h=(0,s.ZP)(u.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),x=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiDialogTitle"}),u=n.className,s=n.id,x=(0,a.Z)(n,f),v=n,Z=function(e){var t=e.classes;return(0,i.Z)({root:["root"]},d.a,t)}(v),b=o.useContext(p.Z).titleId,g=void 0===b?s:b;return(0,m.jsx)(h,(0,r.Z)({component:"h2",className:(0,l.Z)(Z.root,u),ownerState:v,ref:t,variant:"h6",id:null!=s?s:g},x))}));t.Z=x}}]);
//# sourceMappingURL=571.ece56d66.chunk.js.map