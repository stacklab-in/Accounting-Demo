"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[994],{32869:function(e,t,n){n.d(t,{Ds:function(){return r.Ds}});var r=n(58518);n(58764)},90994:function(e,t,n){n.r(t),n.d(t,{default:function(){return ne}});var r=n(6907),a=n(93433),o=n(74165),i=n(15861),l=n(1413),u=n(29439),c=n(72791),s=n(89164),d=n(4567),p=n(57088),m=n(30439),h=n(71715),f=n(82626),x=n(93006),v=n(63466),Z=n(13400),y=n(36314),g=n(85771),b=n(73590),j=n(64554),P=n(89744),k=n(61889),w=n(68096),C=n(50168),S=n(58406),A=n(5574),D=n(65661),I=n(39157),M=n(97123),T=n(42419),R=n(5403),z=n(97892),_=n.n(z),F=n(4560),U=n(71652),W=n(24750),q=n(51612),B=n(26759),N=n(43513),H=n(98265),E=n(27247),Y=n(93704),V=n(18406),G=n(52073),L=n(99615),$=n(32869),O=n(80184),Q={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",borderRadius:"10px",height:"90%",overflowY:"auto",boxShadow:24,display:"flex",flexDirection:"column",justifyContent:"space-between",bgcolor:V.$_.modalbackground,gap:"10px",p:2},K={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"400px",bgcolor:V.$_.modalbackground,borderRadius:"10px",height:"auto",boxShadow:24,p:2},J={vendor:null,purchaseDate:null,referenceNumber:"",products:[],offer:"",amountToPay:"",totalAmount:0,productDiscount:0,paymentMode:"",paymentStatus:"",bank:""},X={id:"",name:"",balance:0,amountToPay:0,paymentMode:"",bank:"",paymentDate:_()(new Date)},ee={category:"All Categories",product:null,quantity:"",netAmount:null,discount:null,sellingPrice:null};function te(){var e,t=(0,p.K$)(),n=(0,$.Ds)().enqueueSnackbar,r=(0,c.useState)((function(){return[_()("2022-04-17"),_()("2022-04-21")]})),z=(0,u.Z)(r,2),te=z[0],ne=z[1],re=(0,c.useState)(!1),ae=(0,u.Z)(re,2),oe=ae[0],ie=ae[1],le=(0,c.useState)(J),ue=(0,u.Z)(le,2),ce=ue[0],se=ue[1],de=(0,c.useState)([]),pe=(0,u.Z)(de,2),me=pe[0],he=pe[1],fe=(0,c.useState)([]),xe=(0,u.Z)(fe,2),ve=(xe[0],xe[1],(0,c.useState)([])),Ze=(0,u.Z)(ve,2),ye=Ze[0],ge=Ze[1],be=(0,c.useState)([]),je=(0,u.Z)(be,2),Pe=je[0],ke=je[1],we=(0,c.useState)([]),Ce=(0,u.Z)(we,2),Se=(Ce[0],Ce[1]),Ae=(0,c.useState)(""),De=(0,u.Z)(Ae,2),Ie=De[0],Me=De[1],Te=(0,c.useState)(ee),Re=(0,u.Z)(Te,2),ze=Re[0],_e=Re[1],Fe=(0,c.useState)(!1),Ue=(0,u.Z)(Fe,2),We=Ue[0],qe=Ue[1],Be=(0,c.useState)([]),Ne=(0,u.Z)(Be,2),He=Ne[0],Ee=Ne[1],Ye=(0,c.useState)({totalPurchaseAmount:0,totalPaidAmount:0,pendingAmount:0}),Ve=(0,u.Z)(Ye,2),Ge=Ve[0],Le=Ve[1],$e=(0,c.useState)(!1),Oe=(0,u.Z)($e,2),Qe=Oe[0],Ke=Oe[1],Je=(0,c.useState)(null),Xe=(0,u.Z)(Je,2),et=Xe[0],tt=Xe[1],nt=Boolean(et),rt=(0,c.useState)({}),at=(0,u.Z)(rt,2),ot=at[0],it=at[1],lt=(0,c.useState)(!1),ut=(0,u.Z)(lt,2),ct=ut[0],st=ut[1],dt=(0,c.useState)(X),pt=(0,u.Z)(dt,2),mt=pt[0],ht=pt[1],ft=(0,c.useState)(!1),xt=(0,u.Z)(ft,2),vt=xt[0],Zt=xt[1],yt=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(G._.keyUserToken),r=(0,V.sw)(t),e.next=5,L.ZP.post(L.Hv.vendor.list,{},{headers:{Authorization:"Bearer ".concat(r)}});case 5:(a=e.sent)&&he(a.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n("Failed to fetch vendors!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),gt=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(G._.keyUserToken),r=(0,V.sw)(t),e.next=5,L.ZP.get(L.Hv.purchaseReturn.summary,{headers:{Authorization:"Bearer ".concat(r)}});case 5:(a=e.sent)&&Le({totalPurchaseAmount:a.data.data.totalPurchaseAmount,totalPaidAmount:a.data.data.totalPaidAmount,pendingAmount:a.data.data.pendingAmount}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n("Failed to fetch purchase summary!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),bt=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(G._.keyUserToken),r=(0,V.sw)(t),e.next=5,L.ZP.post(L.Hv.product.list,{},{headers:{Authorization:"Bearer ".concat(r)}});case 5:(a=e.sent)&&ke(a.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n("Failed to fetch products!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),jt=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(G._.keyUserToken),r=(0,V.sw)(t),e.next=5,L.ZP.post(L.Hv.purchaseReturn.list,{},{headers:{Authorization:"Bearer ".concat(r)}});case 5:(a=e.sent)&&(qe(!1),Ee(a.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),n("Failed to fetch purchase orders!",{variant:"error"}),qe(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Pt=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(G._.keyUserToken),r=(0,V.sw)(t),e.next=5,L.ZP.post(L.Hv.offer.list,{status:["LIVE"]},{headers:{Authorization:"Bearer ".concat(r)}});case 5:(a=e.sent)&&Se(a.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n("Failed to fetch offers!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),kt=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(G._.keyUserToken),r=(0,V.sw)(t),e.next=5,L.ZP.post(L.Hv.bank.list,{},{headers:{Authorization:"Bearer ".concat(r)}});case 5:(a=e.sent)&&ge(a.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n("Failed to fetch bank accounts!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){qe(!0),jt(),gt(),yt(),bt(),Pt(),kt()}),[]);var wt=function(){se(J),_e(ee),se((function(e){return(0,l.Z)((0,l.Z)({},e),{},{vendor:null})}))},Ct=function(e,t,r){"discount"===t&&(r<0?(r=0,n("Discount should be between 0 and 100 percent.",{variant:"error"})):r>100&&(r=100,n("Discount should be between 0 and 100 percent.",{variant:"error"}))),"quantity"===t&&r>ce.products[e].product.quantity&&(r=ce.products[e].product.quantity,n("There are only ".concat(ce.products[e].product.quantity," units available."),{variant:"error"}));var o=(0,a.Z)(ce.products),i=(0,l.Z)({},o[e]);i[t]=r,o[e]=i,console.log("new Product",o[e]),se((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:o})}))},St=function(){tt(null),console.log({tempData:ot}),se((function(e){return(0,l.Z)((0,l.Z)({},e),{},{vendor:ot.vendorId,purchaseDate:_()(ot.purchaseDate),products:ot.products,paymentMode:ot.payments[ot.payments.length-1].paymentID.paymentMode,paymentStatus:ot.paymentStatus})})),Zt(!0),ie(!0)},At=[{name:"Vendor Name",selector:function(e){return e.vendorId.name}},{name:"Product Name",width:"150px",selector:function(e){return e.products.length>1?"".concat(e.products[0].name,", & ").concat(e.products.length-1," more"):e.products[0].name}},{name:"Amount",selector:function(e){return e.totalAmount.toFixed(2)}},{name:"Payment Mode",selector:function(e){return e.payments[0].paymentID.paymentMode}},{name:"Payment Status",selector:function(e){return e.paymentStatus}},{name:"Invoice Number",width:"160px",selector:function(e){return e.invoiceNumber}},{name:"Last Updated",width:"250px",selector:function(e){return(0,V.p6)(e.updatedAt)},sortable:"true"},{name:"Actions",width:"130px",cell:function(e){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(m.Z,{onClick:function(t){tt(t.currentTarget),it(e)},style:{color:V.$_.actionButton},variant:"outlined",endIcon:(0,O.jsx)(B.Z,{}),children:"Action"}),(0,O.jsxs)(h.Z,{id:"basic-menu",anchorEl:et,open:nt,onClose:function(){tt(null),it({})},MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,O.jsx)(f.Z,{onClick:St,children:"Edit"}),(0,O.jsx)(f.Z,{onClick:function(){},children:"Send via Email"}),(0,O.jsx)(f.Z,{onClick:function(){},children:"Send via Whatsapp"}),(0,O.jsx)(f.Z,{onClick:function(){Ke(!0),tt(null)},children:"Delete"}),ot.remainingAmount>0&&(0,O.jsx)(f.Z,{onClick:function(){return tt(null),st(!0),ht((function(e){return(0,l.Z)((0,l.Z)({},e),{},{name:ot.vendorId.name,balance:ot.remainingAmount,id:ot._id})})),void it({})},children:"Record Payment"})]})]})}}],Dt=[{name:"Product Name",selector:function(e){var t,n;return null!==(t=null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.name)&&void 0!==t?t:e.name}},{name:"Quantity",selector:function(e){return e.quantity},cell:function(e,t){return(0,O.jsx)(x.Z,{disabled:vt,type:"number",onBlur:function(r){var o=(0,a.Z)(ce.products),i=(0,l.Z)({},o[t]);(!e.quantity||parseInt(e.quantity,10)<=0)&&(n("Quantity cannot be empty",{variant:"error"}),i.quantity="1",o[t]=i,se((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:o})})))},onChange:function(e){return Ct(t,"quantity",e.target.value)},value:e.quantity,size:"small"})},center:"true"},{name:"Purchase Price",selector:function(e){return e.sellingPrice},cell:function(e,t){return(0,O.jsx)(x.Z,{type:"number",disabled:vt,onBlur:function(){var n=(0,a.Z)(ce.products),r=(0,l.Z)({},n[t]);(!e.sellingPrice||parseFloat(e.sellingPrice)<=0)&&(r.sellingPrice=String(1),n[t]=r,se((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:n})})))},onChange:function(e){return Ct(t,"sellingPrice",e.target.value)},value:e.sellingPrice,size:"small"})},center:"true"},{name:"GST Value",selector:function(e){var t,n;return null!==(t=null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.gstValue)&&void 0!==t?t:null===e||void 0===e?void 0:e.gstValue},center:"true"},{name:"Discount",selector:function(e){return e.discount},cell:function(e,t){return(0,O.jsx)(x.Z,{value:e.discount,size:"small",disabled:vt,type:"number",onBlur:function(){if(0===e.discount.length){var n=(0,a.Z)(ce.products),r=(0,l.Z)({},n[t]);r.discount="0",n[t]=r,se((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:n})}))}},onChange:function(e){return Ct(t,"discount",e.target.value)},InputProps:{endAdornment:(0,O.jsx)(v.Z,{position:"end",children:(0,O.jsx)(Y.Z,{fontSize:"small"})})}})},center:"true"},{name:"Net Amount",selector:function(e){var t;return(parseFloat(e.quantity||0)*parseFloat(e.sellingPrice||0)*(1+parseFloat((null===e||void 0===e||null===(t=e.product)||void 0===t?void 0:t.gstValue)||(null===e||void 0===e?void 0:e.gstValue)||0)/100)).toFixed(2)},center:"true"},{name:"Actions",cell:function(e,t){return(0,O.jsx)(Z.Z,{disabled:vt,onClick:function(){return function(e,t){console.log("deleting product...");var n=(0,a.Z)(ce.products);n.splice(t,1),se((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:n})}))}(0,t)},color:"error",variant:"outlined",children:(0,O.jsx)(E.Z,{})})},center:"true"}],It=ce.products.reduce((function(e,t){var n=function(e){return parseInt(e.sellingPrice?e.sellingPrice:0,10)*parseInt(e.quantity?e.quantity:0,10)*(parseInt(e.discount?e.discount:0,10)/100)}(t);return e+n}),0);var Mt=ce.products.reduce((function(e,t){var n,r=parseInt(t.sellingPrice?t.sellingPrice:0,10);return e+parseInt(t.quantity?t.quantity:0,10)*r*(1+parseFloat((null===t||void 0===t||null===(n=t.product)||void 0===n?void 0:n.gstValue)||(null===t||void 0===t?void 0:t.gstValue)||0)/100)}),0),Tt=Mt-It,Rt=He.filter((function(e){var t,n;return(null===e||void 0===e||null===(t=e.vendorId.name)||void 0===t?void 0:t.toLowerCase().includes(null===Ie||void 0===Ie?void 0:Ie.toLowerCase()))||(null===e||void 0===e||null===(n=e.invoiceNumber)||void 0===n?void 0:n.toLowerCase().includes(null===Ie||void 0===Ie?void 0:Ie.toLowerCase()))}));return(0,O.jsxs)(s.Z,{maxWidth:!t.themeStretch&&"xl",children:[(0,O.jsx)(d.Z,{variant:"h4",children:" Purchase Return Order "}),(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"20px"},children:[(0,O.jsxs)(y.Z,{direction:"row",spacing:1,children:[(0,O.jsx)(g.Z,{label:"Total  ".concat(V.MG.format(Ge.totalPurchaseAmount)),variant:"outlined"}),(0,O.jsx)(g.Z,{label:"Paid  ".concat(V.MG.format(Ge.totalPaidAmount)),variant:"outlined"}),(0,O.jsx)(g.Z,{label:"Pending  ".concat(V.MG.format(Ge.pendingAmount)),variant:"outlined"})]}),(0,O.jsx)(y.Z,{children:(0,O.jsx)(m.Z,{variant:"contained",color:"primary",startIcon:(0,O.jsx)(T.Z,{}),onClick:function(){ie(!0),Zt(!1),se((function(e){return(0,l.Z)((0,l.Z)({},e),{},{purchaseDate:_()(new Date)})}))},children:"CREATE PURCHASE RETURN ORDER"})})]}),(0,O.jsx)(b.Z,{open:oe,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,O.jsxs)(j.Z,{sx:Q,children:[(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",backgroundColor:"white",padding:"15px",borderRadius:"10px"},children:[(0,O.jsx)(P.Z,{options:me,disabled:vt,getOptionLabel:function(e){return e.name},fullWidth:!0,value:ce.vendor,onChange:function(e,t){se((function(e){return(0,l.Z)((0,l.Z)({},e),{},{vendor:null!==t&&void 0!==t?t:null})}))},renderInput:function(e){return(0,O.jsx)(x.Z,(0,l.Z)((0,l.Z)({},e),{},{label:"Search Vendors",fullWidth:!0}))}}),(0,O.jsx)(U._,{dateAdapter:W.y,children:(0,O.jsx)(H.M,{label:"Purchase Return Date",value:ce.purchaseDate,onChange:function(e){se((function(t){return(0,l.Z)((0,l.Z)({},t),{},{purchaseDate:e})}))},format:"DD/MM/YYYY",disabled:vt,slotProps:{textField:{fullWidth:!0}}})}),(0,O.jsx)(x.Z,{label:"Reference Number",type:"text",fullWidth:!0,value:ce.referenceNumber,onChange:function(e){return se((function(t){return(0,l.Z)((0,l.Z)({},t),{},{referenceNumber:e.target.value})}))}})]}),(0,O.jsx)(k.ZP,{container:!0,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px",display:"flex",justifyContent:"space-between"},alignItems:"center",children:(0,O.jsx)(k.ZP,{item:!0,xs:12,md:12,display:"flex",children:(0,O.jsx)(P.Z,{options:Pe.filter((function(e){return!ze.category||"All Categories"===ze.category||e.category.name===ze.category})),value:null!==(e=null===ze||void 0===ze?void 0:ze.product)&&void 0!==e?e:null,onChange:function(e,t){t?(_e((function(e){return(0,l.Z)((0,l.Z)({},e),{},{product:t})})),function(e){if(ce.products.find((function(t){return t.product.name===e.name})))n("Product already added!",{variant:"error"});else{var t=Pe.find((function(t){return t.name===e.name}));if(t&&t.quantity<e.quantity)n("Product quantity not available!",{variant:"error"});else{var r={product:e,sellingPrice:e.purchasePrice,quantity:1,category:e.category,discount:0};se((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:[].concat((0,a.Z)(e.products),[r])})})),console.log(e),_e(ee)}}}(t)):_e((function(e){return(0,l.Z)((0,l.Z)({},e),{},{product:null})}))},disabled:vt,getOptionLabel:function(e){return null===e||void 0===e?void 0:e.name},fullWidth:!0,renderInput:function(e){return(0,O.jsx)(x.Z,(0,l.Z)((0,l.Z)({},e),{},{label:"Search Products",fullWidth:!0}))}})})}),ce.products.length>0&&(0,O.jsx)(k.ZP,{container:!0,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px"},alignItems:"center",children:(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(N.ZP,{columns:Dt,data:ce.products})})}),(0,O.jsx)(k.ZP,{container:!0,display:"flex",justifyContent:"flex-end",children:(0,O.jsx)(k.ZP,{item:!0,xs:12,md:6,lg:6,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px"},children:(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,O.jsx)("div",{children:"Product Discount"}),(0,O.jsx)("div",{children:0===ce.products.length?V.MG.format(0):V.MG.format(It.toFixed(2))})]}),(0,O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,O.jsx)("div",{children:"Total Amount"}),(0,O.jsx)("div",{children:0===ce.products.length?V.MG.format(0):V.MG.format(Mt.toFixed(2))})]})]})})}),(0,O.jsx)(k.ZP,{container:!0,display:"flex",justifyContent:"flex-end",children:(0,O.jsxs)(k.ZP,{item:!0,xs:12,md:6,lg:6,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px"},children:[(0,O.jsx)(x.Z,{fullWidth:!0,disabled:vt,size:"small",label:"Enter Amount",onBlur:function(e){console.log({netTotalAmountWithGST:Mt}),console.log({amountToPay:ce.amountToPay}),parseFloat(ce.amountToPay)>Mt&&(n("Amount to pay cannot be greater than total amount!",{variant:"error"}),se((function(e){return(0,l.Z)((0,l.Z)({},e),{},{amountToPay:Mt})})))},value:ce.amountToPay,onChange:function(e){return se((function(t){return(0,l.Z)((0,l.Z)({},t),{},{amountToPay:e.target.value})}))}}),(0,O.jsxs)(w.Z,{fullWidth:!0,size:"small",children:[(0,O.jsx)(C.Z,{id:"demo-simple-select-label",children:"Select Payment Status"}),(0,O.jsx)(S.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Payment Status",value:ce.paymentStatus,onChange:function(e){return se((function(t){return(0,l.Z)((0,l.Z)({},t),{},{paymentStatus:e.target.value})}))},children:V.y0.paymentStatus.map((function(e,t){return(0,O.jsx)(f.Z,{value:e,children:e},t)}))})]})]}),(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px"},children:[(0,O.jsxs)(w.Z,{fullWidth:!0,size:"small",children:[(0,O.jsx)(C.Z,{id:"demo-simple-select-label",children:"Select Payment Mode"}),(0,O.jsx)(S.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Payment Mode",value:ce.paymentMode,disabled:vt,onChange:function(e){return se((function(t){return(0,l.Z)((0,l.Z)({},t),{},{paymentMode:e.target.value})}))},children:["CASH","CHEQUE"].map((function(e,t){return(0,O.jsx)(f.Z,{value:e,children:e},t)}))})]}),(0,O.jsxs)(w.Z,{fullWidth:!0,size:"small",children:[(0,O.jsx)(C.Z,{id:"demo-simple-select-label",children:"Select Bank"}),(0,O.jsx)(S.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Bank",value:ce.bank,disabled:vt||"CASH"===ce.paymentMode,onChange:function(e){return se((function(t){return(0,l.Z)((0,l.Z)({},t),{},{bank:e.target.value})}))},children:ye.map((function(e,t){return(0,O.jsx)(f.Z,{value:e._id,children:e.bankName},t)}))})]})]})]})}),(0,O.jsx)(k.ZP,{container:!0,children:(0,O.jsxs)(k.ZP,{item:!0,xs:12,md:12,lg:12,sx:{backgroundColor:"white",p:"15px",borderRadius:"10px"},display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"20px"},children:[(0,O.jsx)("div",{children:"Total  :"}),(0,O.jsx)("div",{children:0===ce.products.length?V.MG.format(0):V.MG.format(Tt)})]}),(0,O.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[vt?(0,O.jsx)(m.Z,{variant:"contained",onClick:function(){var e={};e.paymentStatus=ce.paymentStatus,e.id=ot._id,console.log({updatePayload:e});var t=localStorage.getItem(G._.keyUserToken),r=(0,V.sw)(t);L.ZP.post(L.Hv.purchaseReturn.update,e,{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){n("Purchase return order updated successfully!",{variant:"success"}),ie(!1),it({}),wt(),jt(),Zt(!1),gt()})).catch((function(e){n(e.error||"Something went wrong!",{variant:"error"})}))},color:"primary",disabled:!ce.paymentStatus,children:"UPDATE"}):(0,O.jsx)(m.Z,{variant:"contained",onClick:function(){var e=(0,l.Z)({},ce);e.discount={},e.discount.productDiscount=It,e.totalDiscount=It,e.totalAmount=Number(Tt.toFixed(2)),e.purchaseDate=_()(e.purchaseDate).format("YYYY-MM-DD"),e.amountToPay=parseFloat(e.amountToPay),delete e.offer,console.log(e);var t=localStorage.getItem(G._.keyUserToken),r=(0,V.sw)(t);L.ZP.post(L.Hv.purchaseReturn.add,e,{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){n("Purchase return order created successfully!",{variant:"success"}),ie(!1),wt(),jt(),gt()})).catch((function(e){n(e.error||"Something went wrong!",{variant:"error"})}))},color:"primary",disabled:!ce.vendor||0===ce.products.length||!ce.amountToPay||!ce.paymentMode||!ce.paymentStatus||"CASH"!==ce.paymentMode&&!ce.bank,children:"SAVE"}),(0,O.jsx)(m.Z,{variant:"contained",color:"error",onClick:function(){wt(),Zt(!1),ie(!1)},children:"CANCEL"})]})]})})]})}),(0,O.jsxs)("div",{style:{marginTop:"20px"},children:[(0,O.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[(0,O.jsx)("div",{style:{display:"flex",marginTop:"8px"},children:(0,O.jsx)(x.Z,{placeholder:"Search",size:"small",value:Ie,onChange:function(e){return Me(e.target.value)},InputProps:{startAdornment:(0,O.jsx)(v.Z,{position:"start",children:(0,O.jsx)(R.Z,{})})}})}),(0,O.jsx)("div",{children:(0,O.jsx)(U._,{dateAdapter:W.y,children:(0,O.jsx)(F.C,{components:["SingleInputDateRangeField"],children:(0,O.jsx)(q.n,{size:"small",label:"Date Range",value:te,onChange:function(e){return ne(e)}})})})})]}),(0,O.jsx)("div",{style:{marginTop:"20px"},children:(0,O.jsx)(N.ZP,{columns:At,data:Rt,progressPending:We,pagination:!0})})]}),(0,O.jsx)(b.Z,{id:"paymentModal",open:ct,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,O.jsx)(j.Z,{sx:K,children:(0,O.jsxs)(k.ZP,{container:!0,sx:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(d.Z,{variant:"h6",children:"Customer Details"})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(x.Z,{label:"Name",value:mt.name,disabled:!0,sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(x.Z,{label:"Balance",value:mt.balance,disabled:!0,sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(d.Z,{variant:"h6",children:"Payment Details"})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(x.Z,{label:"Amount To Pay",value:mt.amountToPay,onBlur:function(){mt.amountToPay>mt.balance&&(n("Amount to pay cannot be greater than balance!",{variant:"error"}),ht((function(e){return(0,l.Z)((0,l.Z)({},e),{},{amountToPay:mt.balance})})))},onChange:function(e){return ht((function(t){return(0,l.Z)((0,l.Z)({},t),{},{amountToPay:e.target.value})}))},sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsx)(U._,{dateAdapter:W.y,children:(0,O.jsx)(H.M,{label:"Payment Date",value:mt.paymentDate,maxDate:_()(new Date),onChange:function(e){ht((function(t){return(0,l.Z)((0,l.Z)({},t),{},{paymentDate:e})}))},sx:{backgroundColor:"white",borderRadius:"7px"},format:"DD/MM/YYYY",slotProps:{textField:{fullWidth:!0}}})})}),(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsxs)(w.Z,{fullWidth:!0,children:[(0,O.jsx)(C.Z,{id:"record-payment-mode",children:"Select Payment Mode"}),(0,O.jsx)(S.Z,{labelId:"record-payment-mode",id:"demo-simple-select",label:"Select Payment Mode",sx:{backgroundColor:"white",borderRadius:"7px"},value:mt.paymentMode,onChange:function(e){return ht((function(t){return(0,l.Z)((0,l.Z)({},t),{},{paymentMode:e.target.value})}))},children:V.y0.paymentMode.map((function(e,t){return(0,O.jsx)(f.Z,{value:e,children:e},t)}))})]})}),"CASH"!==mt.paymentMode&&(0,O.jsx)(k.ZP,{item:!0,xs:12,children:(0,O.jsxs)(w.Z,{fullWidth:!0,children:[(0,O.jsx)(C.Z,{id:"select-bank",children:"Select Bank"}),(0,O.jsx)(S.Z,{labelId:"select-bank",id:"demo-simple-select",label:"Select Bank",value:mt.bank,sx:{backgroundColor:"white",borderRadius:"7px"},onChange:function(e){return ht((function(t){return(0,l.Z)((0,l.Z)({},t),{},{bank:e.target.value})}))},children:ye.map((function(e,t){return(0,O.jsx)(f.Z,{value:e._id,children:e.bankName},t)}))})]})}),(0,O.jsxs)(k.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[(0,O.jsx)(m.Z,{variant:"contained",color:"primary",onClick:function(){var e={};e.id=mt.id,e.amountToPay=mt.amountToPay,e.paymentDate=_()(mt.paymentDate).format("YYYY-MM-DD"),e.paymentMode=mt.paymentMode,mt.bank.length>0&&(e.bank=mt.bank);var t=localStorage.getItem(G._.keyUserToken),r=(0,V.sw)(t);L.ZP.post(L.Hv.purchaseReturn.recordPayment,e,{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){n("Purchase order payment recorded successfully!",{variant:"success"}),st(!1),ht(X),jt(),gt()})).catch((function(e){n(e.error,{variant:"error"})}))},disabled:!mt.amountToPay||!mt.paymentMode||"CASH"!==mt.paymentMode&&!mt.bank,children:"Update Payment"}),(0,O.jsx)(m.Z,{variant:"contained",color:"error",onClick:function(){st(!1),ht(X)},children:"Cancel"})]})]})})}),(0,O.jsxs)(A.Z,{open:Qe,onClose:function(){return Ke(!1)},children:[(0,O.jsx)(D.Z,{children:"Remove"}),(0,O.jsx)(I.Z,{children:"Are you sure you want to delete this purchase order?"}),(0,O.jsxs)(M.Z,{children:[(0,O.jsx)(m.Z,{onClick:function(){Ke(!1),it({})},children:"Cancel"}),(0,O.jsx)(m.Z,{onClick:function(){var e=localStorage.getItem(G._.keyUserToken),t=(0,V.sw)(e),r={headers:{Authorization:"Bearer ".concat(t)}};L.ZP.post(L.Hv.purchaseReturn.delete,{id:ot._id},r).then((function(e){e&&(n("Purchase return order deleted successfully!",{variant:"success"}),Ke(!1),it({}),jt(),gt())})).catch((function(e){console.log(e),n(e.msg||e.error,{variant:"error"})}))},variant:"contained",color:"error",children:"Delete"})]})]})]})}function ne(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(r.ql,{children:(0,O.jsx)("title",{children:" Dashboard: Purchase Return Order"})}),(0,O.jsx)(te,{})]})}},27247:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45649)),o=n(80184);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},93704:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45649)),o=n(80184);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11m0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6M4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"}),"Percent")},65661:function(e,t,n){var r=n(87462),a=n(63366),o=n(72791),i=n(28182),l=n(94419),u=n(4567),c=n(66934),s=n(31402),d=n(17673),p=n(85090),m=n(80184),h=["className","id"],f=(0,c.ZP)(u.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),x=o.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiDialogTitle"}),u=n.className,c=n.id,x=(0,a.Z)(n,h),v=n,Z=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},d.a,t)}(v),y=o.useContext(p.Z).titleId,g=void 0===y?c:y;return(0,m.jsx)(f,(0,r.Z)({component:"h2",className:(0,i.Z)(Z.root,u),ownerState:v,ref:t,variant:"h6",id:null!=c?c:g},x))}));t.Z=x},4560:function(e,t,n){n.d(t,{C:function(){return c}});var r=n(4942),a=n(87462),o=(n(72791),n(36314)),i=n(12022),l=n(80184),u=function(e){return e.match(/^([A-Za-z]+)Range(Calendar|Clock)$/)?"multi-panel-UI-view":e.match(/^([A-Za-z]*)(DigitalClock)$/)?"Tall-UI-view":e.match(/^Static([A-Za-z]+)/)||e.match(/^([A-Za-z]+)(Calendar|Clock)$/)?"UI-view":e.match(/^MultiInput([A-Za-z]+)RangeField$/)||e.match(/^([A-Za-z]+)RangePicker$/)?"multi-input-range-field":e.match(/^SingleInput([A-Za-z]+)RangeField$/)?"single-input-range-field":"single-input-field"};function c(e){var t=e.children,n=e.components,c=e.sx,s=new Set,d=new Set;n.forEach((function(e){s.add(u(e)),d.add(function(e){return e.includes("DateTime")?"date-time":e.includes("Date")?"date":"time"}(e))}));var p,m,h=function(e){return"row"===e?s.has("UI-view")||s.has("Tall-UI-view")?3:2:s.has("UI-view")?4:3},f=(0,a.Z)({overflow:"auto",pt:1},c);return n.length>2||s.has("multi-input-range-field")||s.has("single-input-range-field")||s.has("multi-panel-UI-view")||s.has("UI-view")||d.has("date-time")?(p="column",m=h("column")):(p={xs:"column",lg:"row"},m={xs:h("column"),lg:h("row")}),s.has("UI-view")||(f=s.has("single-input-range-field")?d.has("date-time")?(0,a.Z)({},f,(0,r.Z)({},"& > .".concat(i.Z.root),{minWidth:{xs:300,md:400}})):(0,a.Z)({},f,(0,r.Z)({},"& > .".concat(i.Z.root),{minWidth:300})):d.has("date-time")?(0,a.Z)({},f,(0,r.Z)({},"& > .".concat(i.Z.root),{minWidth:270})):(0,a.Z)({},f,(0,r.Z)({},"& > .".concat(i.Z.root),{minWidth:200}))),(0,l.jsx)(o.Z,{direction:p,spacing:m,sx:f,children:t})}}}]);
//# sourceMappingURL=994.900aabba.chunk.js.map