"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[994],{32869:function(e,t,n){n.d(t,{Ds:function(){return r.Ds}});var r=n(58518);n(58764)},90994:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var r=n(6907),a=n(93433),o=n(74165),i=n(15861),l=n(1413),u=n(29439),s=n(72791),c=n(89164),d=n(4567),p=n(57088),m=n(30439),h=n(71715),f=n(82626),x=n(48550),v=n(63466),Z=n(13400),y=n(36314),g=n(85771),b=n(73590),j=n(64554),P=n(89744),k=n(61889),S=n(68096),C=n(50168),w=n(58406),D=n(5574),A=n(65661),M=n(39157),T=n(97123),R=n(42419),I=n(5403),F=n(97892),_=n.n(F),Y=n(71652),z=n(24750),B=n(26759),q=n(43513),N=n(23937),H=n(27247),W=n(93704),E=n(18406),U=n(52073),V=n(99615),G=n(32869),L=n(8976),O=n(80184),$={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",borderRadius:"10px",height:"90%",overflowY:"auto",boxShadow:24,display:"flex",flexDirection:"column",justifyContent:"space-between",bgcolor:E.$_.modalbackground,gap:"10px",p:2},Q={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"400px",bgcolor:E.$_.modalbackground,borderRadius:"10px",height:"auto",boxShadow:24,p:2},K={vendor:null,purchaseDate:null,referenceNumber:"",products:[],offer:"",amountToPay:"",totalAmount:0,productDiscount:0,paymentMode:"",paymentStatus:"",bank:""},J={id:"",name:"",balance:0,amountToPay:0,paymentMode:"",bank:"",paymentDate:_()(new Date)},X={category:"All Categories",product:null,quantity:"",netAmount:null,discount:null,sellingPrice:null};function ee(){var e,t,n,r=(0,p.K$)(),F=(0,G.Ds)().enqueueSnackbar,ee=(0,s.useState)([]),te=(0,u.Z)(ee,2),ne=te[0],re=te[1],ae=(0,s.useState)((function(){return[_()("2022-04-17"),_()("2022-04-21")]})),oe=(0,u.Z)(ae,2),ie=(oe[0],oe[1],(0,L.E)().user),le=(0,s.useRef)(null),ue=(0,s.useState)(!1),se=(0,u.Z)(ue,2),ce=se[0],de=se[1],pe=(0,s.useState)(K),me=(0,u.Z)(pe,2),he=me[0],fe=me[1],xe=(0,s.useState)([]),ve=(0,u.Z)(xe,2),Ze=ve[0],ye=ve[1],ge=(0,s.useState)([]),be=(0,u.Z)(ge,2),je=(be[0],be[1],(0,s.useState)([])),Pe=(0,u.Z)(je,2),ke=Pe[0],Se=Pe[1],Ce=(0,s.useState)([]),we=(0,u.Z)(Ce,2),De=we[0],Ae=we[1],Me=(0,s.useState)([]),Te=(0,u.Z)(Me,2),Re=(Te[0],Te[1]),Ie=(0,s.useState)(""),Fe=(0,u.Z)(Ie,2),_e=Fe[0],Ye=Fe[1],ze=(0,s.useState)(X),Be=(0,u.Z)(ze,2),qe=Be[0],Ne=Be[1],He=(0,s.useState)(!1),We=(0,u.Z)(He,2),Ee=We[0],Ue=We[1],Ve=(0,s.useState)([]),Ge=(0,u.Z)(Ve,2),Le=Ge[0],Oe=Ge[1],$e=(0,s.useState)({totalPurchaseAmount:0,totalPaidAmount:0,pendingAmount:0}),Qe=(0,u.Z)($e,2),Ke=Qe[0],Je=Qe[1],Xe=(0,s.useState)(!1),et=(0,u.Z)(Xe,2),tt=et[0],nt=et[1],rt=(0,s.useState)(null),at=(0,u.Z)(rt,2),ot=at[0],it=at[1],lt=Boolean(ot),ut=(0,s.useState)({}),st=(0,u.Z)(ut,2),ct=st[0],dt=st[1],pt=(0,s.useState)(!1),mt=(0,u.Z)(pt,2),ht=mt[0],ft=mt[1],xt=(0,s.useState)(J),vt=(0,u.Z)(xt,2),Zt=vt[0],yt=vt[1],gt=(0,s.useState)(!1),bt=(0,u.Z)(gt,2),jt=bt[0],Pt=bt[1],kt=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(U._.keyUserToken),n=(0,E.sw)(t),e.next=5,V.ZP.post(V.Hv.vendor.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&ye(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),F("Failed to fetch vendors!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),St=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(U._.keyUserToken),n=(0,E.sw)(t),e.next=5,V.ZP.get(V.Hv.purchaseReturn.summary,{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&Je({totalPurchaseAmount:r.data.data.totalPurchaseAmount,totalPaidAmount:r.data.data.totalPaidAmount,pendingAmount:r.data.data.pendingAmount}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),F("Failed to fetch purchase summary!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Ct=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(U._.keyUserToken),n=(0,E.sw)(t),e.next=5,V.ZP.post(V.Hv.product.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&Ae(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),F("Failed to fetch products!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),wt=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(U._.keyUserToken),n=(0,E.sw)(t),e.next=5,V.ZP.post(V.Hv.purchaseReturn.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&(Ue(!1),Oe(r.data.data),re(r.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),F("Failed to fetch purchase orders!",{variant:"error"}),Ue(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Dt=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(U._.keyUserToken),n=(0,E.sw)(t),e.next=5,V.ZP.post(V.Hv.offer.list,{status:["LIVE"]},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&Re(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),F("Failed to fetch offers!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),At=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(U._.keyUserToken),n=(0,E.sw)(t),e.next=5,V.ZP.post(V.Hv.bank.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&Se(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),F("Failed to fetch bank accounts!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){Ue(!0),wt(),St(),kt(),Ct(),Dt(),At()}),[]);var Mt=(0,s.useState)(_()().startOf("month")),Tt=(0,u.Z)(Mt,2),Rt=Tt[0],It=Tt[1],Ft=(0,s.useState)(_()().endOf("month")),_t=(0,u.Z)(Ft,2),Yt=_t[0],zt=_t[1];(0,s.useEffect)((function(){if(Rt&&Yt){var e=ne.filter((function(e){var t=_()(e.createdAt);return console.log(Rt,Yt),t.isBetween(Rt,Yt,null,"[]")}));Oe(e)}else Oe(ne)}),[Rt,Yt]);var Bt=function(){fe(K),Ne(X),fe((function(e){return(0,l.Z)((0,l.Z)({},e),{},{vendor:null})}))},qt=function(e,t,n){"discount"===t&&(n<0?(n=0,F("Discount should be between 0 and 100 percent.",{variant:"error"})):n>100&&(n=100,F("Discount should be between 0 and 100 percent.",{variant:"error"}))),"quantity"===t&&n>he.products[e].product.quantity&&(n=he.products[e].product.quantity,F("There are only ".concat(he.products[e].product.quantity," units available."),{variant:"error"}));var r=(0,a.Z)(he.products),o=(0,l.Z)({},r[e]);o[t]=n,r[e]=o,console.log("new Product",r[e]),fe((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:r})}))},Nt=function(){it(null),console.log({tempData:ct}),fe((function(e){return(0,l.Z)((0,l.Z)({},e),{},{vendor:ct.vendorId,purchaseDate:_()(ct.purchaseDate),products:ct.products,paymentMode:ct.payments[ct.payments.length-1].paymentID.paymentMode,paymentStatus:ct.paymentStatus})})),Pt(!0),de(!0)},Ht=[{name:"Vendor Name",selector:function(e){return e.vendorId.name}},{name:"Product Name",width:"150px",selector:function(e){return e.products.length>1?"".concat(e.products[0].name,", & ").concat(e.products.length-1," more"):e.products[0].name}},{name:"Amount",selector:function(e){return e.totalAmount.toFixed(2)}},{name:"Payment Mode",selector:function(e){return e.payments[0].paymentID.paymentMode}},{name:"Payment Status",selector:function(e){return e.paymentStatus}},{name:"Invoice Number",width:"160px",selector:function(e){return e.invoiceNumber}},{name:"Last Updated",width:"250px",selector:function(e){return(0,E.p6)(e.updatedAt)},sortable:"true"},{name:"Actions",width:"130px",cell:function(e){var t,n,r;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(m.Z,{disabled:ie&&(null===ie||void 0===ie?void 0:ie.permissions)&&(null===ie||void 0===ie||null===(t=ie.permissions)||void 0===t?void 0:t.purchaseReturn)&&!(null!==ie&&void 0!==ie&&null!==(n=ie.permissions)&&void 0!==n&&null!==(r=n.purchaseReturn)&&void 0!==r&&r.u),onClick:function(t){it(t.currentTarget),dt(e)},style:{color:E.$_.actionButton},variant:"outlined",endIcon:(0,O.jsx)(B.Z,{}),children:"Action"}),(0,O.jsxs)(h.Z,{id:"basic-menu",anchorEl:ot,open:lt,onClose:function(){it(null),dt({})},MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,O.jsx)(f.Z,{onClick:Nt,children:"Edit"}),(0,O.jsx)(f.Z,{onClick:function(){},children:"Send via Email"}),(0,O.jsx)(f.Z,{onClick:function(){},children:"Send via Whatsapp"}),(0,O.jsx)(f.Z,{onClick:function(){nt(!0),it(null)},children:"Delete"}),ct.remainingAmount>0&&(0,O.jsx)(f.Z,{onClick:function(){return it(null),ft(!0),yt((function(e){return(0,l.Z)((0,l.Z)({},e),{},{name:ct.vendorId.name,balance:ct.remainingAmount,id:ct._id})})),void dt({})},children:"Record Payment"})]})]})}}],Wt=[{name:"Product Name",selector:function(e){var t,n;return null!==(t=null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.name)&&void 0!==t?t:e.name}},{name:"Quantity",selector:function(e){return e.quantity},cell:function(e,t){return(0,O.jsx)(x.Z,{autoFocus:t===he.products.length-1,disabled:jt,type:"number",onBlur:function(n){var r=(0,a.Z)(he.products),o=(0,l.Z)({},r[t]);(!e.quantity||parseFloat(e.quantity,10)<=0)&&(F("Quantity cannot be empty",{variant:"error"}),o.quantity="1",r[t]=o,fe((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:r})})))},onChange:function(e){return qt(t,"quantity",e.target.value)},value:e.quantity,size:"small"})},center:"true"},{name:"Purchase Price",selector:function(e){return e.sellingPrice},cell:function(e,t){return(0,O.jsx)(x.Z,{type:"number",disabled:jt,onBlur:function(){var n=(0,a.Z)(he.products),r=(0,l.Z)({},n[t]);(!e.sellingPrice||parseFloat(e.sellingPrice)<=0)&&(r.sellingPrice=String(1),n[t]=r,fe((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:n})})))},onChange:function(e){return qt(t,"sellingPrice",e.target.value)},value:e.sellingPrice,size:"small"})},center:"true"},{name:"GST Value",selector:function(e){var t,n;return null!==(t=null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.gstValue)&&void 0!==t?t:null===e||void 0===e?void 0:e.gstValue},center:"true"},{name:"Discount",selector:function(e){return e.discount},cell:function(e,t){return(0,O.jsx)(x.Z,{value:e.discount,size:"small",disabled:jt,type:"number",onBlur:function(){if(0===e.discount.length){var n=(0,a.Z)(he.products),r=(0,l.Z)({},n[t]);r.discount="0",n[t]=r,fe((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:n})}))}},onChange:function(e){return qt(t,"discount",e.target.value)},InputProps:{endAdornment:(0,O.jsx)(v.Z,{position:"end",children:(0,O.jsx)(W.Z,{fontSize:"small"})})}})},center:"true"},{name:"Net Amount",selector:function(e){var t,n=parseFloat(e.quantity||0)*parseFloat(e.sellingPrice||0);return n+parseFloat((null===e||void 0===e||null===(t=e.product)||void 0===t?void 0:t.gstValue)||(null===e||void 0===e?void 0:e.gstValue)||0)/100*n},center:"true"},{name:"Actions",cell:function(e,t){return(0,O.jsx)(Z.Z,{disabled:jt,onClick:function(){return function(e,t){console.log("deleting product...");var n=(0,a.Z)(he.products);n.splice(t,1),fe((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:n})}))}(0,t)},color:"error",variant:"outlined",children:(0,O.jsx)(H.Z,{})})},center:"true"}],Et=he.products.reduce((function(e,t){var n=function(e){return parseFloat(e.sellingPrice?e.sellingPrice:0)*parseFloat(e.quantity?e.quantity:0)*(parseFloat(e.discount?e.discount:0)/100)}(t);return e+n}),0);var Ut=he.products.reduce((function(e,t){var n,r=parseFloat(t.sellingPrice?t.sellingPrice:0),a=parseFloat(t.quantity?t.quantity:0)*r;return e+(a+parseFloat((null===t||void 0===t||null===(n=t.product)||void 0===n?void 0:n.gstValue)||(null===t||void 0===t?void 0:t.gstValue)||0)/100*a)}),0),Vt=Ut-Et,Gt=Le.filter((function(e){var t,n;return(null===e||void 0===e||null===(t=e.vendorId.name)||void 0===t?void 0:t.toLowerCase().includes(null===_e||void 0===_e?void 0:_e.toLowerCase()))||(null===e||void 0===e||null===(n=e.invoiceNumber)||void 0===n?void 0:n.toLowerCase().includes(null===_e||void 0===_e?void 0:_e.toLowerCase()))}));return(0,O.jsxs)(c.Z,{maxWidth:!r.themeStretch&&"xl",children:[(0,O.jsx)(d.Z,{variant:"h4",children:" Purchase Return Order "}),(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"20px"},children:[(0,O.jsxs)(y.Z,{direction:"row",spacing:1,children:[(0,O.jsx)(g.Z,{label:"Total  ".concat(E.MG.format(Ke.totalPurchaseAmount)),variant:"outlined"}),(0,O.jsx)(g.Z,{label:"Paid  ".concat(E.MG.format(Ke.totalPaidAmount)),variant:"outlined"}),(0,O.jsx)(g.Z,{label:"Pending  ".concat(E.MG.format(Ke.pendingAmount)),variant:"outlined"})]}),(null===ie||void 0===ie||null===(e=ie.permissions)||void 0===e||null===(t=e.purchaseReturn)||void 0===t?void 0:t.u)&&(0,O.jsx)(y.Z,{children:(0,O.jsx)(m.Z,{variant:"contained",color:"primary",startIcon:(0,O.jsx)(R.Z,{}),onClick:function(){de(!0),Pt(!1),fe((function(e){return(0,l.Z)((0,l.Z)({},e),{},{purchaseDate:_()(new Date)})}))},children:"CREATE PURCHASE RETURN ORDER"})})]}),(0,O.jsx)(b.Z,{open:ce,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,O.jsxs)(j.Z,{sx:$,children:[(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",backgroundColor:"white",padding:"15px",borderRadius:"10px"},children:[(0,O.jsx)(P.Z,{options:Ze,disabled:jt,getOptionLabel:function(e){return e.name},fullWidth:!0,value:he.vendor,onChange:function(e,t){fe((function(e){return(0,l.Z)((0,l.Z)({},e),{},{vendor:null!==t&&void 0!==t?t:null})}))},renderInput:function(e){return(0,O.jsx)(x.Z,(0,l.Z)((0,l.Z)({},e),{},{label:"Search Vendors",fullWidth:!0}))}}),(0,O.jsx)(Y._,{dateAdapter:z.y,children:(0,O.jsx)(N.M,{label:"Purchase Return Date",value:he.purchaseDate,onChange:function(e){fe((function(t){return(0,l.Z)((0,l.Z)({},t),{},{purchaseDate:e})}))},format:"DD/MM/YYYY",disabled:jt,slotProps:{textField:{fullWidth:!0}}})}),(0,O.jsx)(x.Z,{label:"Reference Number",type:"text",fullWidth:!0,value:he.referenceNumber,onChange:function(e){return fe((function(t){return(0,l.Z)((0,l.Z)({},t),{},{referenceNumber:e.target.value})}))}})]}),(0,O.jsx)(k.ZP,{container:!0,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px",display:"flex",justifyContent:"space-between"},alignItems:"center",children:(0,O.jsx)(k.ZP,{item:!0,xs:12,md:12,display:"flex",children:(0,O.jsx)(P.Z,{options:De,getOptionLabel:function(e){return"".concat(e.name," (").concat(e.barcode.toString(),")")},value:null!==(n=null===qe||void 0===qe?void 0:qe.product)&&void 0!==n?n:null,onChange:function(e,t){t?(Ne((function(e){return(0,l.Z)((0,l.Z)({},e),{},{product:t})})),function(e){if(he.products.find((function(t){return t.product.name===e.name})))F("Product already added!",{variant:"error"});else{var t=De.find((function(t){return t.name===e.name}));if(t&&t.quantity<e.quantity)F("Product quantity not available!",{variant:"error"});else{var n={product:e,sellingPrice:e.purchasePrice,quantity:1,category:e.category,discount:0};fe((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:[].concat((0,a.Z)(e.products),[n])})})),console.log(e),Ne(X),le.current&&le.current.blur()}}}(t)):Ne((function(e){return(0,l.Z)((0,l.Z)({},e),{},{product:null})}))},disabled:jt,fullWidth:!0,renderInput:function(e){return(0,O.jsx)(x.Z,(0,l.Z)((0,l.Z)({},e),{},{inputRef:le,label:"Search Products",fullWidth:!0}))}})})}),he.products.length>0&&(0,O.jsx)(k.ZP,{container:!0,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px"},alignItems:"center",children:(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(q.ZP,{columns:Wt,data:he.products})})}),(0,O.jsx)(k.ZP,{container:!0,display:"flex",justifyContent:"flex-end",children:(0,O.jsx)(k.ZP,{item:!0,xs:12,md:6,lg:6,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px"},children:(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,O.jsx)("div",{children:"Product Discount"}),(0,O.jsx)("div",{children:0===he.products.length?E.MG.format(0):E.MG.format(Et.toFixed(2))})]}),(0,O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,O.jsx)("div",{children:"Total Amount"}),(0,O.jsx)("div",{children:0===he.products.length?E.MG.format(0):E.MG.format(Ut.toFixed(2))})]})]})})}),(0,O.jsx)(k.ZP,{container:!0,display:"flex",justifyContent:"flex-end",children:(0,O.jsxs)(k.ZP,{item:!0,xs:12,md:6,lg:6,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px"},children:[(0,O.jsx)(x.Z,{fullWidth:!0,disabled:jt,size:"small",label:"Enter Amount",onBlur:function(e){console.log({netTotalAmountWithGST:Ut}),console.log({amountToPay:he.amountToPay}),parseFloat(he.amountToPay)>Ut&&(F("Amount to pay cannot be greater than total amount!",{variant:"error"}),fe((function(e){return(0,l.Z)((0,l.Z)({},e),{},{amountToPay:Ut})})))},value:he.amountToPay,onChange:function(e){return fe((function(t){return(0,l.Z)((0,l.Z)({},t),{},{amountToPay:e.target.value})}))}}),(0,O.jsxs)(S.Z,{fullWidth:!0,size:"small",children:[(0,O.jsx)(C.Z,{id:"demo-simple-select-label",children:"Select Payment Status"}),(0,O.jsx)(w.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Payment Status",value:he.paymentStatus,onChange:function(e){return fe((function(t){return(0,l.Z)((0,l.Z)({},t),{},{paymentStatus:e.target.value})}))},children:E.y0.paymentStatus.map((function(e,t){return(0,O.jsx)(f.Z,{value:e,children:e},t)}))})]})]}),(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px"},children:[(0,O.jsxs)(S.Z,{fullWidth:!0,size:"small",children:[(0,O.jsx)(C.Z,{id:"demo-simple-select-label",children:"Select Payment Mode"}),(0,O.jsx)(w.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Payment Mode",value:he.paymentMode,disabled:jt,onChange:function(e){return fe((function(t){return(0,l.Z)((0,l.Z)({},t),{},{paymentMode:e.target.value})}))},children:["CASH","CHEQUE"].map((function(e,t){return(0,O.jsx)(f.Z,{value:e,children:e},t)}))})]}),(0,O.jsxs)(S.Z,{fullWidth:!0,size:"small",children:[(0,O.jsx)(C.Z,{id:"demo-simple-select-label",children:"Select Bank"}),(0,O.jsx)(w.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Bank",value:he.bank,disabled:jt||"CASH"===he.paymentMode,onChange:function(e){return fe((function(t){return(0,l.Z)((0,l.Z)({},t),{},{bank:e.target.value})}))},children:ke.map((function(e,t){return(0,O.jsx)(f.Z,{value:e._id,children:e.bankName},t)}))})]})]})]})}),(0,O.jsx)(k.ZP,{container:!0,children:(0,O.jsxs)(k.ZP,{item:!0,xs:12,md:12,lg:12,sx:{backgroundColor:"white",p:"15px",borderRadius:"10px"},display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"20px"},children:[(0,O.jsx)("div",{children:"Total  :"}),(0,O.jsx)("div",{children:0===he.products.length?E.MG.format(0):E.MG.format(Vt)})]}),(0,O.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[jt?(0,O.jsx)(m.Z,{variant:"contained",onClick:function(){var e={};e.paymentStatus=he.paymentStatus,e.id=ct._id,console.log({updatePayload:e});var t=localStorage.getItem(U._.keyUserToken),n=(0,E.sw)(t);V.ZP.post(V.Hv.purchaseReturn.update,e,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){F("Purchase return order updated successfully!",{variant:"success"}),de(!1),dt({}),Bt(),wt(),Pt(!1),St()})).catch((function(e){F(e.error||"Something went wrong!",{variant:"error"})}))},color:"primary",disabled:!he.paymentStatus,children:"UPDATE"}):(0,O.jsx)(m.Z,{variant:"contained",onClick:function(){if(parseFloat(he.amountToPay)<=0)F("Amount to pay must be greater than 0!",{variant:"error"});else{var e=(0,l.Z)({},he);e.discount={},e.discount.productDiscount=Et,e.totalDiscount=Et,e.totalAmount=Number(Vt.toFixed(2)),e.purchaseDate=_()(e.purchaseDate).format("YYYY-MM-DD"),e.amountToPay=parseFloat(e.amountToPay),delete e.offer,console.log(e);var t=localStorage.getItem(U._.keyUserToken),n=(0,E.sw)(t);V.ZP.post(V.Hv.purchaseReturn.add,e,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){F("Purchase return order created successfully!",{variant:"success"}),de(!1),Bt(),wt(),St()})).catch((function(e){F(e.error||"Something went wrong!",{variant:"error"})}))}},color:"primary",disabled:!he.vendor||0===he.products.length||!he.amountToPay||!he.paymentMode||!he.paymentStatus||"CASH"!==he.paymentMode&&!he.bank,children:"SAVE"}),(0,O.jsx)(m.Z,{variant:"contained",color:"error",onClick:function(){Bt(),Pt(!1),de(!1)},children:"CANCEL"})]})]})})]})}),(0,O.jsxs)("div",{style:{marginTop:"20px"},children:[(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[(0,O.jsx)("div",{style:{display:"flex",marginTop:"8px"},children:(0,O.jsx)(x.Z,{placeholder:"Search",size:"small",value:_e,onChange:function(e){return Ye(e.target.value)},InputProps:{startAdornment:(0,O.jsx)(v.Z,{position:"start",children:(0,O.jsx)(I.Z,{})})}})}),(0,O.jsx)("div",{children:(0,O.jsx)(Y._,{dateAdapter:z.y,children:(0,O.jsxs)(j.Z,{sx:{display:"flex",flexDirection:"row",gap:"10px",alignItems:"center"},children:[(0,O.jsx)(N.M,{label:"From",format:"DD/MM/YYYY",value:Rt,slotProps:{textField:{size:"small"}},onChange:function(e){It(e)},renderInput:function(e){return(0,O.jsx)(x.Z,(0,l.Z)({},e))}}),(0,O.jsx)(d.Z,{children:"-"}),(0,O.jsx)(N.M,{label:"To",format:"DD/MM/YYYY",value:Yt,slotProps:{textField:{size:"small"}},onChange:function(e){zt(e)},renderInput:function(e){return(0,O.jsx)(x.Z,(0,l.Z)({},e))}})]})})})]}),(0,O.jsx)("div",{style:{marginTop:"20px"},children:(0,O.jsx)(q.ZP,{columns:Ht,data:Gt,progressPending:Ee,pagination:!0})})]}),(0,O.jsx)(b.Z,{id:"paymentModal",open:ht,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,O.jsx)(j.Z,{sx:Q,children:(0,O.jsxs)(k.ZP,{container:!0,sx:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(d.Z,{variant:"h6",children:"Customer Details"})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(x.Z,{label:"Name",value:Zt.name,disabled:!0,sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(x.Z,{label:"Balance",value:Zt.balance,disabled:!0,sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(d.Z,{variant:"h6",children:"Payment Details"})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(x.Z,{label:"Amount To Pay",value:Zt.amountToPay,onBlur:function(){Zt.amountToPay>Zt.balance&&(F("Amount to pay cannot be greater than balance!",{variant:"error"}),yt((function(e){return(0,l.Z)((0,l.Z)({},e),{},{amountToPay:Zt.balance})})))},onChange:function(e){return yt((function(t){return(0,l.Z)((0,l.Z)({},t),{},{amountToPay:e.target.value})}))},sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(Y._,{dateAdapter:z.y,children:(0,O.jsx)(N.M,{label:"Payment Date",value:Zt.paymentDate,maxDate:_()(new Date),onChange:function(e){yt((function(t){return(0,l.Z)((0,l.Z)({},t),{},{paymentDate:e})}))},sx:{backgroundColor:"white",borderRadius:"7px"},format:"DD/MM/YYYY",slotProps:{textField:{fullWidth:!0}}})})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsxs)(S.Z,{fullWidth:!0,children:[(0,O.jsx)(C.Z,{id:"record-payment-mode",children:"Select Payment Mode"}),(0,O.jsx)(w.Z,{labelId:"record-payment-mode",id:"demo-simple-select",label:"Select Payment Mode",sx:{backgroundColor:"white",borderRadius:"7px"},value:Zt.paymentMode,onChange:function(e){return yt((function(t){return(0,l.Z)((0,l.Z)({},t),{},{paymentMode:e.target.value})}))},children:E.y0.paymentMode.map((function(e,t){return(0,O.jsx)(f.Z,{value:e,children:e},t)}))})]})}),"CASH"!==Zt.paymentMode&&(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsxs)(S.Z,{fullWidth:!0,children:[(0,O.jsx)(C.Z,{id:"select-bank",children:"Select Bank"}),(0,O.jsx)(w.Z,{labelId:"select-bank",id:"demo-simple-select",label:"Select Bank",value:Zt.bank,sx:{backgroundColor:"white",borderRadius:"7px"},onChange:function(e){return yt((function(t){return(0,l.Z)((0,l.Z)({},t),{},{bank:e.target.value})}))},children:ke.map((function(e,t){return(0,O.jsx)(f.Z,{value:e._id,children:e.bankName},t)}))})]})}),(0,O.jsxs)(k.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[(0,O.jsx)(m.Z,{variant:"contained",color:"primary",onClick:function(){var e={};e.id=Zt.id,e.amountToPay=Zt.amountToPay,e.paymentDate=_()(Zt.paymentDate).format("YYYY-MM-DD"),e.paymentMode=Zt.paymentMode,Zt.bank.length>0&&(e.bank=Zt.bank);var t=localStorage.getItem(U._.keyUserToken),n=(0,E.sw)(t);V.ZP.post(V.Hv.purchaseReturn.recordPayment,e,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){F("Purchase order payment recorded successfully!",{variant:"success"}),ft(!1),yt(J),wt(),St()})).catch((function(e){F(e.error,{variant:"error"})}))},disabled:!Zt.amountToPay||!Zt.paymentMode||"CASH"!==Zt.paymentMode&&!Zt.bank,children:"Update Payment"}),(0,O.jsx)(m.Z,{variant:"contained",color:"error",onClick:function(){ft(!1),yt(J)},children:"Cancel"})]})]})})}),(0,O.jsxs)(D.Z,{open:tt,onClose:function(){return nt(!1)},children:[(0,O.jsx)(A.Z,{children:"Remove"}),(0,O.jsx)(M.Z,{children:"Are you sure you want to delete this purchase order?"}),(0,O.jsxs)(T.Z,{children:[(0,O.jsx)(m.Z,{onClick:function(){nt(!1),dt({})},children:"Cancel"}),(0,O.jsx)(m.Z,{onClick:function(){var e=localStorage.getItem(U._.keyUserToken),t=(0,E.sw)(e),n={headers:{Authorization:"Bearer ".concat(t)}};V.ZP.post(V.Hv.purchaseReturn.delete,{id:ct._id},n).then((function(e){e&&(F("Purchase return order deleted successfully!",{variant:"success"}),nt(!1),dt({}),wt(),St())})).catch((function(e){console.log(e),F(e.msg||e.error,{variant:"error"})}))},variant:"contained",color:"error",children:"Delete"})]})]})]})}function te(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(r.ql,{children:(0,O.jsx)("title",{children:" Dashboard: Purchase Return Order"})}),(0,O.jsx)(ee,{})]})}},27247:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45649)),o=n(80184);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},93704:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45649)),o=n(80184);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11m0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6M4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"}),"Percent")},65661:function(e,t,n){var r=n(87462),a=n(63366),o=n(72791),i=n(28182),l=n(94419),u=n(4567),s=n(66934),c=n(31402),d=n(17673),p=n(85090),m=n(80184),h=["className","id"],f=(0,s.ZP)(u.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),x=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiDialogTitle"}),u=n.className,s=n.id,x=(0,a.Z)(n,h),v=n,Z=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},d.a,t)}(v),y=o.useContext(p.Z).titleId,g=void 0===y?s:y;return(0,m.jsx)(f,(0,r.Z)({component:"h2",className:(0,i.Z)(Z.root,u),ownerState:v,ref:t,variant:"h6",id:null!=s?s:g},x))}));t.Z=x}}]);
//# sourceMappingURL=994.d1d4d9cb.chunk.js.map