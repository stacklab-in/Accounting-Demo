"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[636],{32869:function(e,t,n){n.d(t,{Ds:function(){return r.Ds}});var r=n(58518);n(58764)},78636:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var r=n(6907),a=n(93433),o=n(74165),l=n(15861),i=n(1413),u=n(29439),s=n(72791),c=n(89164),d=n(4567),p=n(57088),m=n(30439),h=n(71715),f=n(82626),x=n(48550),v=n(63466),Z=n(13400),y=n(36314),g=n(85771),b=n(73590),j=n(64554),P=n(89744),k=n(61889),S=n(68096),C=n(50168),w=n(58406),D=n(5574),A=n(65661),M=n(39157),T=n(97123),I=n(42419),F=n(5403),Y=n(97892),_=n.n(Y),R=n(71652),z=n(24750),B=n(26759),H=n(43513),E=n(23937),N=n(27247),W=n(93704),q=n(18406),U=n(52073),V=n(99615),L=n(32869),G=n(8976),O=n(80184),Q={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",borderRadius:"10px",height:"90%",overflowY:"auto",boxShadow:24,display:"flex",flexDirection:"column",justifyContent:"space-between",bgcolor:q.$_.modalbackground,gap:"10px",p:2},$={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"400px",bgcolor:q.$_.modalbackground,borderRadius:"10px",height:"auto",boxShadow:24,p:2},K={vendor:null,purchaseDate:null,purchaseDueDate:null,referenceNumber:"",products:[],offer:"",amountToPay:"",totalAmount:0,productDiscount:0,paymentMode:"",paymentStatus:"",bank:""},J={id:"",name:"",balance:0,amountToPay:0,paymentMode:"",bank:"",paymentDate:_()(new Date)},X={category:"All Categories",product:null,quantity:"",netAmount:null,discount:null,sellingPrice:null};function ee(){var e,t,n,r=(0,p.K$)(),Y=(0,L.Ds)().enqueueSnackbar,ee=(0,s.useState)(""),te=(0,u.Z)(ee,2),ne=(te[0],te[1]),re=(0,s.useState)([]),ae=(0,u.Z)(re,2),oe=ae[0],le=ae[1],ie=(0,G.E)().user,ue=(0,s.useState)((function(){return[_()("2022-04-17"),_()("2022-04-21")]})),se=(0,u.Z)(ue,2),ce=(se[0],se[1],(0,s.useRef)(null)),de=(0,s.useState)(!1),pe=(0,u.Z)(de,2),me=pe[0],he=pe[1],fe=(0,s.useState)(K),xe=(0,u.Z)(fe,2),ve=xe[0],Ze=xe[1],ye=(0,s.useState)([]),ge=(0,u.Z)(ye,2),be=ge[0],je=ge[1],Pe=(0,s.useState)([]),ke=(0,u.Z)(Pe,2),Se=(ke[0],ke[1],(0,s.useState)([])),Ce=(0,u.Z)(Se,2),we=Ce[0],De=Ce[1],Ae=(0,s.useState)([]),Me=(0,u.Z)(Ae,2),Te=Me[0],Ie=Me[1],Fe=(0,s.useState)([]),Ye=(0,u.Z)(Fe,2),_e=(Ye[0],Ye[1]),Re=(0,s.useState)(""),ze=(0,u.Z)(Re,2),Be=ze[0],He=ze[1],Ee=(0,s.useState)(X),Ne=(0,u.Z)(Ee,2),We=Ne[0],qe=Ne[1],Ue=(0,s.useState)(!1),Ve=(0,u.Z)(Ue,2),Le=Ve[0],Ge=Ve[1],Oe=(0,s.useState)([]),Qe=(0,u.Z)(Oe,2),$e=Qe[0],Ke=Qe[1],Je=(0,s.useState)({totalPurchaseAmount:0,totalPaidAmount:0,pendingAmount:0}),Xe=(0,u.Z)(Je,2),et=Xe[0],tt=Xe[1],nt=(0,s.useState)(!1),rt=(0,u.Z)(nt,2),at=rt[0],ot=rt[1],lt=(0,s.useState)(null),it=(0,u.Z)(lt,2),ut=it[0],st=it[1],ct=Boolean(ut),dt=(0,s.useState)({}),pt=(0,u.Z)(dt,2),mt=pt[0],ht=pt[1],ft=(0,s.useState)(!1),xt=(0,u.Z)(ft,2),vt=xt[0],Zt=xt[1],yt=(0,s.useState)(J),gt=(0,u.Z)(yt,2),bt=gt[0],jt=gt[1],Pt=(0,s.useState)(!1),kt=(0,u.Z)(Pt,2),St=kt[0],Ct=kt[1],wt=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(U._.keyUserToken),n=(0,q.sw)(t),e.next=5,V.ZP.post(V.Hv.vendor.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&je(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Y("Failed to fetch vendors!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Dt=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(U._.keyUserToken),n=(0,q.sw)(t),e.next=5,V.ZP.get(V.Hv.purchase.summary,{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&tt({totalPurchaseAmount:r.data.data.totalPurchaseAmount,totalPaidAmount:r.data.data.totalPaidAmount,pendingAmount:r.data.data.pendingAmount}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Y("Failed to fetch purchase summary!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),At=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(U._.keyUserToken),n=(0,q.sw)(t),e.next=5,V.ZP.post(V.Hv.product.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&Ie(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Y("Failed to fetch products!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Mt=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(U._.keyUserToken),n=(0,q.sw)(t),e.next=5,V.ZP.post(V.Hv.purchase.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&(Ge(!1),Ke(r.data.data),le(r.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),Y("Failed to fetch purchase orders!",{variant:"error"}),Ge(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Tt=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(U._.keyUserToken),n=(0,q.sw)(t),e.next=5,V.ZP.post(V.Hv.offer.list,{status:["LIVE"]},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&_e(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Y("Failed to fetch offers!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),It=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(U._.keyUserToken),n=(0,q.sw)(t),e.next=5,V.ZP.post(V.Hv.bank.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&De(r.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Y("Failed to fetch bank accounts!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){Ge(!0),Mt(),Dt(),wt(),At(),Tt(),It()}),[]);var Ft=(0,s.useState)(_()().startOf("month")),Yt=(0,u.Z)(Ft,2),_t=Yt[0],Rt=Yt[1],zt=(0,s.useState)(_()().endOf("month")),Bt=(0,u.Z)(zt,2),Ht=Bt[0],Et=Bt[1];(0,s.useEffect)((function(){if(_t&&Ht){var e=oe.filter((function(e){var t=_()(e.createdAt);return console.log(_t,Ht),t.isBetween(_t,Ht,null,"[]")}));Ke(e)}else Ke(oe)}),[_t,Ht]);var Nt=function(){Ze(K),qe(X),Ze((function(e){return(0,i.Z)((0,i.Z)({},e),{},{vendor:null})}))},Wt=function(e,t,n){"discount"===t&&(n<0?(n=0,Y("Discount should be between 0 and 100 percent.",{variant:"error"})):n>100&&(n=100,Y("Discount should be between 0 and 100 percent.",{variant:"error"})));var r=(0,a.Z)(ve.products),o=(0,i.Z)({},r[e]);o[t]=n,r[e]=o,console.log("new Product",r[e]),Ze((function(e){return(0,i.Z)((0,i.Z)({},e),{},{products:r})}))},qt=function(){st(null),console.log({tempData:mt}),Ze((function(e){return(0,i.Z)((0,i.Z)({},e),{},{vendor:mt.vendorId,purchaseDate:_()(mt.purchaseDate),purchaseDueDate:_()(mt.purchaseDueDate),products:mt.products,paymentMode:mt.payments[mt.payments.length-1].paymentID.paymentMode,paymentStatus:mt.paymentStatus})})),Ct(!0),he(!0)},Ut=[{name:"Vendor Name",selector:function(e){return e.vendorId.name}},{name:"Product Name",width:"150px",selector:function(e){return e.products.length>1?"".concat(e.products[0].name,", & ").concat(e.products.length-1," more"):e.products[0].name}},{name:"Amount",selector:function(e){return e.totalAmount.toFixed(2)}},{name:"Payment Mode",selector:function(e){return e.payments[0].paymentID.paymentMode}},{name:"Payment Status",selector:function(e){return e.paymentStatus}},{name:"Invoice Number",width:"160px",selector:function(e){return e.invoiceNumber}},{name:"Last Updated",width:"250px",selector:function(e){return(0,q.p6)(e.updatedAt)},sortable:"true"},{name:"Actions",width:"130px",cell:function(e){var t,n;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(m.Z,{onClick:function(t){st(t.currentTarget),ht(e)},disabled:!(null!==ie&&void 0!==ie&&null!==(t=ie.permissions)&&void 0!==t&&null!==(n=t.purchase)&&void 0!==n&&n.u),style:{color:q.$_.actionButton},variant:"outlined",endIcon:(0,O.jsx)(B.Z,{}),children:"Action"}),(0,O.jsxs)(h.Z,{id:"basic-menu",anchorEl:ut,open:ct,onClose:function(){st(null),ht({})},MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,O.jsx)(f.Z,{onClick:qt,children:"Edit"}),(0,O.jsx)(f.Z,{onClick:function(){},children:"Send via Email"}),(0,O.jsx)(f.Z,{onClick:function(){},children:"Send via Whatsapp"}),(0,O.jsx)(f.Z,{onClick:function(){ot(!0),st(null)},children:"Delete"}),mt.remainingAmount>0&&(0,O.jsx)(f.Z,{onClick:function(){return st(null),Zt(!0),jt((function(e){return(0,i.Z)((0,i.Z)({},e),{},{name:mt.vendorId.name,balance:mt.remainingAmount,id:mt._id})})),void ht({})},children:"Record Payment"})]})]})}}],Vt=[{name:"Product Name",selector:function(e){var t,n;return null!==(t=null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.name)&&void 0!==t?t:e.name}},{name:"Quantity",selector:function(e){return e.quantity},cell:function(e,t){return(0,O.jsx)(x.Z,{disabled:St,type:"number",autoFocus:t===ve.products.length-1,onBlur:function(n){var r=(0,a.Z)(ve.products),o=(0,i.Z)({},r[t]);(!e.quantity||parseFloat(e.quantity,10)<=0)&&(Y("Quantity cannot be empty",{variant:"error"}),o.quantity="1",r[t]=o,Ze((function(e){return(0,i.Z)((0,i.Z)({},e),{},{products:r})})))},onChange:function(e){return Wt(t,"quantity",e.target.value)},value:e.quantity,size:"small"})},center:"true"},{name:"Purchase Price",selector:function(e){return e.sellingPrice},cell:function(e,t){return(0,O.jsx)(x.Z,{type:"number",disabled:St,onBlur:function(){var n=(0,a.Z)(ve.products),r=(0,i.Z)({},n[t]);(!e.sellingPrice||parseFloat(e.sellingPrice)<=0)&&(r.sellingPrice=String(1),n[t]=r,Ze((function(e){return(0,i.Z)((0,i.Z)({},e),{},{products:n})})))},onChange:function(e){return Wt(t,"sellingPrice",e.target.value)},value:e.sellingPrice,size:"small"})},center:"true"},{name:"GST Value",selector:function(e){var t,n;return null!==(t=null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.gstValue)&&void 0!==t?t:null===e||void 0===e?void 0:e.gstValue},center:"true"},{name:"Discount",selector:function(e){return e.discount},cell:function(e,t){return(0,O.jsx)(x.Z,{value:e.discount,size:"small",disabled:St,type:"number",onBlur:function(){if(0===e.discount.length){var n=(0,a.Z)(ve.products),r=(0,i.Z)({},n[t]);r.discount="0",n[t]=r,Ze((function(e){return(0,i.Z)((0,i.Z)({},e),{},{products:n})}))}},onChange:function(e){return Wt(t,"discount",e.target.value)},InputProps:{endAdornment:(0,O.jsx)(v.Z,{position:"end",children:(0,O.jsx)(W.Z,{fontSize:"small"})})}})},center:"true"},{name:"Net Amount",selector:function(e){var t,n=parseFloat(e.quantity||0)*parseFloat(e.sellingPrice||0);return(n+parseFloat((null===e||void 0===e||null===(t=e.product)||void 0===t?void 0:t.gstValue)||(null===e||void 0===e?void 0:e.gstValue)||0)/100*n).toFixed(2)},center:"true"},{name:"Actions",cell:function(e,t){return(0,O.jsx)(Z.Z,{disabled:St,onClick:function(){return function(e,t){console.log("deleting product...");var n=(0,a.Z)(ve.products);n.splice(t,1),Ze((function(e){return(0,i.Z)((0,i.Z)({},e),{},{products:n})}))}(0,t)},color:"error",variant:"outlined",children:(0,O.jsx)(N.Z,{})})},center:"true"}],Lt=ve.products.reduce((function(e,t){var n=function(e){return parseFloat(e.sellingPrice?e.sellingPrice:0)*parseFloat(e.quantity?e.quantity:0)*(parseFloat(e.discount?e.discount:0)/100)}(t);return e+n}),0);var Gt=ve.products.reduce((function(e,t){var n,r=parseFloat(t.sellingPrice?t.sellingPrice:0),a=parseFloat(t.quantity?t.quantity:0)*r;return e+(a+parseFloat((null===t||void 0===t||null===(n=t.product)||void 0===n?void 0:n.gstValue)||(null===t||void 0===t?void 0:t.gstValue)||0)/100*a)}),0),Ot=Gt-Lt,Qt=$e.filter((function(e){var t,n;return(null===e||void 0===e||null===(t=e.vendorId.name)||void 0===t?void 0:t.toLowerCase().includes(null===Be||void 0===Be?void 0:Be.toLowerCase()))||(null===e||void 0===e||null===(n=e.invoiceNumber)||void 0===n?void 0:n.toLowerCase().includes(null===Be||void 0===Be?void 0:Be.toLowerCase()))}));return(0,O.jsxs)(c.Z,{maxWidth:!r.themeStretch&&"xl",children:[(0,O.jsx)(d.Z,{variant:"h4",children:" Purchase Order "}),(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"20px"},children:[(0,O.jsxs)(y.Z,{direction:"row",spacing:1,children:[(0,O.jsx)(g.Z,{label:"Total  ".concat(q.MG.format(et.totalPurchaseAmount)),variant:"outlined"}),(0,O.jsx)(g.Z,{label:"Paid  ".concat(q.MG.format(et.totalPaidAmount)),variant:"outlined"}),(0,O.jsx)(g.Z,{label:"Pending  ".concat(q.MG.format(et.pendingAmount)),variant:"outlined"})]}),(null===ie||void 0===ie||null===(e=ie.permissions)||void 0===e||null===(t=e.purchase)||void 0===t?void 0:t.u)&&(0,O.jsx)(y.Z,{children:(0,O.jsx)(m.Z,{variant:"contained",color:"primary",startIcon:(0,O.jsx)(I.Z,{}),onClick:function(){he(!0),Ct(!1),Ze((function(e){return(0,i.Z)((0,i.Z)({},e),{},{purchaseDate:_()(new Date)})}))},children:"CREATE PURCHASE ORDER"})})]}),(0,O.jsx)(b.Z,{open:me,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,O.jsxs)(j.Z,{sx:Q,children:[(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",backgroundColor:"white",padding:"15px",borderRadius:"10px"},children:[(0,O.jsx)(P.Z,{options:be,disabled:St,getOptionLabel:function(e){return e.name},fullWidth:!0,value:ve.vendor,onChange:function(e,t){Ze((function(e){return(0,i.Z)((0,i.Z)({},e),{},{vendor:null!==t&&void 0!==t?t:null})}))},renderInput:function(e){return(0,O.jsx)(x.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"Search Vendors",fullWidth:!0}))}}),(0,O.jsx)(R._,{dateAdapter:z.y,children:(0,O.jsx)(E.M,{label:"Purchase Date",value:ve.purchaseDate,onChange:function(e){Ze((function(t){return(0,i.Z)((0,i.Z)({},t),{},{purchaseDate:e})}))},format:"DD/MM/YYYY",disabled:St,slotProps:{textField:{fullWidth:!0}}})}),(0,O.jsx)(x.Z,{label:"Reference Number",type:"text",fullWidth:!0,value:ve.referenceNumber,onChange:function(e){return Ze((function(t){return(0,i.Z)((0,i.Z)({},t),{},{referenceNumber:e.target.value})}))}})]}),(0,O.jsx)(k.ZP,{container:!0,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px",display:"flex",justifyContent:"space-between"},alignItems:"center",children:(0,O.jsx)(k.ZP,{item:!0,xs:12,md:12,display:"flex",children:(0,O.jsx)(P.Z,{options:Te,value:null!==(n=null===We||void 0===We?void 0:We.product)&&void 0!==n?n:null,onChange:function(e,t){t?(qe((function(e){return(0,i.Z)((0,i.Z)({},e),{},{product:t})})),function(e){if(ve.products.find((function(t){return t.product.name===e.name})))Y("Product already added!",{variant:"error"});else{var t=Te.find((function(t){return t.name===e.name}));if(t&&t.quantity<e.quantity)Y("Product quantity not available!",{variant:"error"});else{var n={product:e,sellingPrice:e.purchasePrice,quantity:1,category:e.category,discount:0};Ze((function(e){return(0,i.Z)((0,i.Z)({},e),{},{products:[].concat((0,a.Z)(e.products),[n])})})),console.log(e),qe(X),ce.current&&ce.current.blur()}}}(t)):qe((function(e){return(0,i.Z)((0,i.Z)({},e),{},{product:null})}))},disabled:St,getOptionLabel:function(e){return"".concat(e.name," (").concat(e.barcode.toString(),")")},onInputChange:function(e,t){console.log("\ud83d\ude80 ~ PurchaseOrderPageView ~ newInputValue:",t),ne(t)},fullWidth:!0,renderInput:function(e){return(0,O.jsx)(x.Z,(0,i.Z)((0,i.Z)({},e),{},{inputRef:ce,label:"Search Products",fullWidth:!0}))}})})}),ve.products.length>0&&(0,O.jsx)(k.ZP,{container:!0,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px"},alignItems:"center",children:(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(H.ZP,{columns:Vt,data:ve.products})})}),(0,O.jsx)(k.ZP,{container:!0,display:"flex",justifyContent:"flex-end",children:(0,O.jsx)(k.ZP,{item:!0,xs:12,md:6,lg:6,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px"},children:(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,O.jsx)("div",{children:"Product Discount"}),(0,O.jsx)("div",{children:0===ve.products.length?q.MG.format(0):q.MG.format(Lt)})]}),(0,O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,O.jsx)("div",{children:"Total Amount"}),(0,O.jsx)("div",{children:0===ve.products.length?q.MG.format(0):q.MG.format(Gt.toFixed(2))})]})]})})}),(0,O.jsx)(k.ZP,{container:!0,display:"flex",justifyContent:"flex-end",children:(0,O.jsxs)(k.ZP,{item:!0,xs:12,md:6,lg:6,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px"},children:[(0,O.jsx)(x.Z,{fullWidth:!0,disabled:St,size:"small",label:"Enter Amount",onBlur:function(e){console.log({totalAmount:Ot}),console.log({netTotalAmountWithGST:Gt}),e.target.value>Gt&&(Y("Amount to pay cannot be greater than total amount!",{variant:"error"}),Ze((function(e){return(0,i.Z)((0,i.Z)({},e),{},{amountToPay:Gt})})))},value:ve.amountToPay,onChange:function(e){return Ze((function(t){return(0,i.Z)((0,i.Z)({},t),{},{amountToPay:e.target.value})}))}}),(0,O.jsxs)(S.Z,{fullWidth:!0,size:"small",children:[(0,O.jsx)(C.Z,{id:"demo-simple-select-label",children:"Select Payment Status"}),(0,O.jsx)(w.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Payment Status",value:ve.paymentStatus,onChange:function(e){return Ze((function(t){return(0,i.Z)((0,i.Z)({},t),{},{paymentStatus:e.target.value})}))},children:q.y0.paymentStatus.map((function(e,t){return(0,O.jsx)(f.Z,{value:e,children:e},t)}))})]})]}),(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px"},children:[(0,O.jsxs)(S.Z,{fullWidth:!0,size:"small",children:[(0,O.jsx)(C.Z,{id:"demo-simple-select-label",children:"Select Payment Mode"}),(0,O.jsx)(w.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Payment Mode",value:ve.paymentMode,disabled:St,onChange:function(e){return Ze((function(t){return(0,i.Z)((0,i.Z)({},t),{},{paymentMode:e.target.value})}))},children:["CASH","CHEQUE"].map((function(e,t){return(0,O.jsx)(f.Z,{value:e,children:e},t)}))})]}),(0,O.jsxs)(S.Z,{fullWidth:!0,size:"small",children:[(0,O.jsx)(C.Z,{id:"demo-simple-select-label",children:"Select Bank"}),(0,O.jsx)(w.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Bank",value:ve.bank,disabled:St||"CASH"===ve.paymentMode,onChange:function(e){return Ze((function(t){return(0,i.Z)((0,i.Z)({},t),{},{bank:e.target.value})}))},children:we.map((function(e,t){return(0,O.jsx)(f.Z,{value:e._id,children:e.bankName},t)}))})]})]})]})}),(0,O.jsx)(k.ZP,{container:!0,children:(0,O.jsxs)(k.ZP,{item:!0,xs:12,md:12,lg:12,sx:{backgroundColor:"white",p:"15px",borderRadius:"10px"},display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"20px"},children:[(0,O.jsx)("div",{children:"Total  :"}),(0,O.jsx)("div",{children:0===ve.products.length?q.MG.format(0):q.MG.format(Ot)})]}),(0,O.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[St?(0,O.jsx)(m.Z,{variant:"contained",onClick:function(){var e={};e.paymentStatus=ve.paymentStatus,e.id=mt._id,console.log({updatePayload:e});var t=localStorage.getItem(U._.keyUserToken),n=(0,q.sw)(t);V.ZP.post(V.Hv.purchase.update,e,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){Y("Purchase order updated successfully!",{variant:"success"}),he(!1),ht({}),Nt(),Mt(),Dt(),Ct(!1)})).catch((function(e){Y(e.error||"Something went wrong!",{variant:"error"})}))},color:"primary",disabled:!ve.paymentStatus,children:"UPDATE"}):(0,O.jsx)(m.Z,{variant:"contained",onClick:function(){if(parseFloat(ve.amountToPay)<=0)Y("Amount to pay must be greater than 0!",{variant:"error"});else{var e=(0,i.Z)({},ve);e.discount={},e.discount.productDiscount=Lt,e.totalDiscount=Lt,e.totalAmount=Number(Ot.toFixed(2)),e.purchaseDueDate=_()(e.purchaseDueDate).format("YYYY-MM-DD"),e.purchaseDate=_()(e.purchaseDate).format("YYYY-MM-DD"),e.amountToPay=parseFloat(e.amountToPay).toFixed(2),delete e.offer,delete e.purchaseDueDate,console.log(e);var t=localStorage.getItem(U._.keyUserToken),n=(0,q.sw)(t);V.ZP.post(V.Hv.purchase.add,e,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){Y("Purchase order created successfully!",{variant:"success"}),he(!1),Nt(),Mt(),Dt()})).catch((function(e){Y(e.error||"Something went wrong!",{variant:"error"})}))}},color:"primary",disabled:!ve.vendor||0===ve.products.length||!ve.amountToPay||!ve.paymentMode||!ve.paymentStatus||"CASH"!==ve.paymentMode&&!ve.bank,children:"SAVE"}),(0,O.jsx)(m.Z,{variant:"contained",color:"error",onClick:function(){Nt(),Ct(!1),he(!1)},children:"CANCEL"})]})]})})]})}),(0,O.jsxs)("div",{style:{marginTop:"20px"},children:[(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[(0,O.jsx)("div",{children:(0,O.jsx)(x.Z,{placeholder:"Search",size:"small",value:Be,onChange:function(e){return He(e.target.value)},InputProps:{startAdornment:(0,O.jsx)(v.Z,{position:"start",children:(0,O.jsx)(F.Z,{})})}})}),(0,O.jsx)("div",{children:(0,O.jsx)(R._,{dateAdapter:z.y,children:(0,O.jsxs)(j.Z,{sx:{display:"flex",flexDirection:"row",gap:"10px",alignItems:"center"},children:[(0,O.jsx)(E.M,{label:"From",format:"DD/MM/YYYY",value:_t,slotProps:{textField:{size:"small"}},onChange:function(e){Rt(e)},renderInput:function(e){return(0,O.jsx)(x.Z,(0,i.Z)({},e))}}),(0,O.jsx)(d.Z,{children:"-"}),(0,O.jsx)(E.M,{label:"To",format:"DD/MM/YYYY",value:Ht,slotProps:{textField:{size:"small"}},onChange:function(e){Et(e)},renderInput:function(e){return(0,O.jsx)(x.Z,(0,i.Z)({},e))}})]})})})]}),(0,O.jsx)("div",{style:{marginTop:"20px"},children:(0,O.jsx)(H.ZP,{columns:Ut,data:Qt,progressPending:Le,pagination:!0})})]}),(0,O.jsx)(b.Z,{id:"paymentModal",open:vt,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,O.jsx)(j.Z,{sx:$,children:(0,O.jsxs)(k.ZP,{container:!0,sx:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(d.Z,{variant:"h6",children:"Customer Details"})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(x.Z,{label:"Name",value:bt.name,disabled:!0,sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(x.Z,{label:"Balance",value:bt.balance,disabled:!0,sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(d.Z,{variant:"h6",children:"Payment Details"})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(x.Z,{label:"Amount To Pay",value:bt.amountToPay,onBlur:function(){bt.amountToPay>bt.balance&&(Y("Amount to pay cannot be greater than balance!",{variant:"error"}),jt((function(e){return(0,i.Z)((0,i.Z)({},e),{},{amountToPay:bt.balance})})))},onChange:function(e){return jt((function(t){return(0,i.Z)((0,i.Z)({},t),{},{amountToPay:e.target.value})}))},sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(R._,{dateAdapter:z.y,children:(0,O.jsx)(E.M,{label:"Payment Date",value:bt.paymentDate,maxDate:_()(new Date),onChange:function(e){jt((function(t){return(0,i.Z)((0,i.Z)({},t),{},{paymentDate:e})}))},sx:{backgroundColor:"white",borderRadius:"7px"},format:"DD/MM/YYYY",slotProps:{textField:{fullWidth:!0}}})})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsxs)(S.Z,{fullWidth:!0,children:[(0,O.jsx)(C.Z,{id:"record-payment-mode",children:"Select Payment Mode"}),(0,O.jsx)(w.Z,{labelId:"record-payment-mode",id:"demo-simple-select",label:"Select Payment Mode",sx:{backgroundColor:"white",borderRadius:"7px"},value:bt.paymentMode,onChange:function(e){return jt((function(t){return(0,i.Z)((0,i.Z)({},t),{},{paymentMode:e.target.value})}))},children:["CASH","CHEQUE"].map((function(e,t){return(0,O.jsx)(f.Z,{value:e,children:e},t)}))})]})}),"CASH"!==bt.paymentMode&&(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsxs)(S.Z,{fullWidth:!0,children:[(0,O.jsx)(C.Z,{id:"select-bank",children:"Select Bank"}),(0,O.jsx)(w.Z,{labelId:"select-bank",id:"demo-simple-select",label:"Select Bank",value:bt.bank,sx:{backgroundColor:"white",borderRadius:"7px"},onChange:function(e){return jt((function(t){return(0,i.Z)((0,i.Z)({},t),{},{bank:e.target.value})}))},children:we.map((function(e,t){return(0,O.jsx)(f.Z,{value:e._id,children:e.bankName},t)}))})]})}),(0,O.jsxs)(k.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[(0,O.jsx)(m.Z,{variant:"contained",color:"primary",onClick:function(){var e={};e.id=bt.id,e.amountToPay=bt.amountToPay,e.paymentDate=_()(bt.paymentDate).format("YYYY-MM-DD"),e.paymentMode=bt.paymentMode,bt.bank.length>0&&(e.bank=bt.bank);var t=localStorage.getItem(U._.keyUserToken),n=(0,q.sw)(t);V.ZP.post(V.Hv.purchase.recordPayment,e,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){Y("Purchase order payment recorded successfully!",{variant:"success"}),Zt(!1),jt(J),Mt(),Dt()})).catch((function(e){Y(e.error,{variant:"error"})}))},disabled:!bt.amountToPay||!bt.paymentMode||"CASH"!==bt.paymentMode&&!bt.bank,children:"Update Payment"}),(0,O.jsx)(m.Z,{variant:"contained",color:"error",onClick:function(){Zt(!1),jt(J)},children:"Cancel"})]})]})})}),(0,O.jsxs)(D.Z,{open:at,onClose:function(){return ot(!1)},children:[(0,O.jsx)(A.Z,{children:"Remove"}),(0,O.jsx)(M.Z,{children:"Are you sure you want to delete this purchase order?"}),(0,O.jsxs)(T.Z,{children:[(0,O.jsx)(m.Z,{onClick:function(){ot(!1),ht({})},children:"Cancel"}),(0,O.jsx)(m.Z,{onClick:function(){var e=localStorage.getItem(U._.keyUserToken),t=(0,q.sw)(e),n={headers:{Authorization:"Bearer ".concat(t)}};V.ZP.post(V.Hv.purchase.delete,{id:mt._id},n).then((function(e){e&&(Y("Purchase order deleted successfully!",{variant:"success"}),ot(!1),ht({}),Mt())})).catch((function(e){console.log(e),Y(e.msg||e.error,{variant:"error"})}))},variant:"contained",color:"error",children:"Delete"})]})]})]})}function te(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(r.ql,{children:(0,O.jsx)("title",{children:" Dashboard: Purchase Order"})}),(0,O.jsx)(ee,{})]})}},27247:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45649)),o=n(80184);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},93704:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45649)),o=n(80184);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11m0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6M4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"}),"Percent")},5403:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45649)),o=n(80184);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},65661:function(e,t,n){var r=n(87462),a=n(63366),o=n(72791),l=n(28182),i=n(94419),u=n(4567),s=n(66934),c=n(31402),d=n(17673),p=n(85090),m=n(80184),h=["className","id"],f=(0,s.ZP)(u.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),x=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiDialogTitle"}),u=n.className,s=n.id,x=(0,a.Z)(n,h),v=n,Z=function(e){var t=e.classes;return(0,i.Z)({root:["root"]},d.a,t)}(v),y=o.useContext(p.Z).titleId,g=void 0===y?s:y;return(0,m.jsx)(f,(0,r.Z)({component:"h2",className:(0,l.Z)(Z.root,u),ownerState:v,ref:t,variant:"h6",id:null!=s?s:g},x))}));t.Z=x}}]);
//# sourceMappingURL=636.9c0c9223.chunk.js.map