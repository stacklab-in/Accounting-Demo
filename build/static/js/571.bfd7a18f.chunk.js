"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[571],{32869:function(e,t,n){n.d(t,{Ds:function(){return r.Ds}});var r=n(58518);n(58764)},36571:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var r=n(6907),a=n(93433),o=n(74165),i=n(15861),l=n(1413),c=n(29439),s=n(72791),u=n(89164),d=n(4567),p=n(57088),f=n(30439),x=n(71715),m=n(82626),h=n(93006),Z=n(63466),y=n(13400),v=n(36314),g=n(85771),b=n(73590),j=n(64554),P=n(61889),C=n(89744),k=n(68096),D=n(50168),S=n(58406),w=n(42419),I=n(5403),A=n(97892),M=n.n(A),T=n(4560),q=n(71652),B=n(24750),R=n(51612),W=n(26759),_=n(43513),F=n(83932),O=n(27247),z=n(93704),E=n(18406),N=n(52073),Y=n(99615),H=n(32869),U=n(42716),V=n(80184),L={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",bgcolor:E.$_.modalbackground,borderRadius:"10px",height:"90%",overflowY:"auto",boxShadow:24,display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"10px",p:2},G={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"400px",bgcolor:E.$_.modalbackground,borderRadius:"10px",height:"auto",boxShadow:24,p:2},$={customer:null,mobileNumber:"",salesMan:null,invoiceDate:null,invoiceDueDate:null,products:[],offer:"",amountToPay:"",totalAmount:0,productDiscount:0,paymentMode:"",paymentStatus:"",bank:"123213123"},Q={category:"All Categories",product:null,quantity:"",netAmount:null,discount:null,sellingPrice:null},K={salesOrderId:"",name:"",balance:0,amountToPay:0,paymentMode:"",bank:"",paymentDate:M()(new Date)};function J(){var e,t,n=(0,p.K$)(),r=(0,H.Ds)().enqueueSnackbar,A=(0,s.useState)((function(){return[M()("2022-04-17"),M()("2022-04-21")]})),J=(0,c.Z)(A,2),X=J[0],ee=J[1],te=(0,s.useState)(!1),ne=(0,c.Z)(te,2),re=ne[0],ae=ne[1],oe=function(){Ie($),qe(Q),Ie((function(e){return(0,l.Z)((0,l.Z)({},e),{},{customer:null})}))},ie=(0,s.useState)([]),le=(0,c.Z)(ie,2),ce=le[0],se=le[1],ue=(0,s.useState)([]),de=(0,c.Z)(ue,2),pe=de[0],fe=de[1],xe=(0,s.useState)([]),me=(0,c.Z)(xe,2),he=me[0],Ze=me[1],ye=(0,s.useState)([]),ve=(0,c.Z)(ye,2),ge=ve[0],be=ve[1],je=(0,s.useState)([]),Pe=(0,c.Z)(je,2),Ce=Pe[0],ke=Pe[1],De=(0,s.useState)($),Se=(0,c.Z)(De,2),we=Se[0],Ie=Se[1],Ae=(0,s.useState)(Q),Me=(0,c.Z)(Ae,2),Te=Me[0],qe=Me[1],Be=(0,s.useState)(!1),Re=(0,c.Z)(Be,2),We=Re[0],_e=Re[1],Fe=(0,s.useState)([]),Oe=(0,c.Z)(Fe,2),ze=Oe[0],Ee=Oe[1],Ne=(0,s.useState)(null),Ye=(0,c.Z)(Ne,2),He=Ye[0],Ue=Ye[1],Ve=Boolean(He),Le=(0,s.useState)({}),Ge=(0,c.Z)(Le,2),$e=Ge[0],Qe=Ge[1],Ke=(0,s.useState)(!1),Je=(0,c.Z)(Ke,2),Xe=Je[0],et=Je[1],tt=(0,s.useState)(K),nt=(0,c.Z)(tt,2),rt=nt[0],at=nt[1],ot=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(N._.keyUserToken),n=(0,E.sw)(t),e.next=5,Y.ZP.post(Y.Hv.customer.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(a=e.sent)&&se(a.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r("Failed to fetch customers!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),it=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(N._.keyUserToken),n=(0,E.sw)(t),e.next=5,Y.ZP.post(Y.Hv.employee.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(a=e.sent)&&fe(a.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r("Failed to fetch employees!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),lt=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(N._.keyUserToken),n=(0,E.sw)(t),e.next=5,Y.ZP.post(Y.Hv.product.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(a=e.sent)&&be(a.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r("Failed to fetch products!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ct=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(N._.keyUserToken),n=(0,E.sw)(t),e.next=5,Y.ZP.post(Y.Hv.product.category.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(a=e.sent)&&Ze(a.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r("Failed to fetch Categories!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),st=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(N._.keyUserToken),n=(0,E.sw)(t),e.next=5,Y.ZP.post(Y.Hv.offer.list,{status:["LIVE"]},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(a=e.sent)&&ke(a.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r("Failed to fetch offers!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ut=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(N._.keyUserToken),n=(0,E.sw)(t),e.next=5,Y.ZP.post(Y.Hv.sales.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(a=e.sent)&&(console.log("calling"),_e(!1),Ee(a.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),r("Failed to fetch sales orders!",{variant:"error"}),_e(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){_e(!0),ut(),ot(),it(),lt(),ct(),st()}),[]);var dt=[{name:"Customer Name",selector:function(e){return e.customerId.name}},{name:"Product Name",selector:function(e){return e.products.length>1?"".concat(e.products[0].name,", & ").concat(e.products.length-1," more"):e.products[0].name},width:"150px"},{name:"Amount",selector:function(e){return e.totalAmount.toFixed(2)},center:"true"},{name:"Payment Mode",selector:function(e){return e.payments[0].paymentID.paymentMode},center:"true"},{name:"Payment Status",selector:function(e){return e.payments[0].paymentID.paymentStatus},center:"true"},{name:"Invoice Number",width:"160px",center:"true",selector:function(e){return e.invoiceNumber}},{name:"Last Updated",width:"220px",selector:function(e){return(0,E.p6)(e.updatedAt)},center:"true"},{name:"Actions",width:"150px",cell:function(e){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(f.Z,{onClick:function(t){Ue(t.currentTarget),Qe(e)},style:{color:E.$_.actionButton},variant:"outlined",endIcon:(0,V.jsx)(W.Z,{}),children:"Action"}),(0,V.jsxs)(x.Z,{id:"basic-menu",anchorEl:He,open:Ve,onClose:function(){Ue(null),Qe({})},MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,V.jsx)(m.Z,{onClick:function(){},children:"Edit"}),(0,V.jsx)(m.Z,{onClick:function(){},children:"View"}),(0,V.jsx)(m.Z,{onClick:function(){},children:"Send via Email"}),(0,V.jsx)(m.Z,{onClick:function(){},children:"Send via Whatsapp"}),$e.remainingAmount>0&&(0,V.jsx)(m.Z,{onClick:function(){return Ue(null),et(!0),at((function(e){return(0,l.Z)((0,l.Z)({},e),{},{name:$e.customerId.name,balance:$e.remainingAmount,salesOrderId:$e._id})})),void Qe({})},children:"Record Payment"})]})]})}}],pt=function(e,t,n){"discount"===t&&(n<0?(n=0,r("Discount should be between 0 and 100 percent.",{variant:"error"})):n>100&&(n=100,r("Discount should be between 0 and 100 percent.",{variant:"error"}))),"quantity"===t&&n>we.products[e].product.quantity&&(n=we.products[e].product.quantity,r("There are only ".concat(we.products[e].product.quantity," units available."),{variant:"error"}));var o=(0,a.Z)(we.products),i=(0,l.Z)({},o[e]);i[t]=n,o[e]=i,console.log("new Product",o[e]),Ie((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:o})}))},ft=[{name:"Product Name",selector:function(e){return e.product.name}},{name:"Quantity",selector:function(e){return e.quantity},cell:function(e,t){return(0,V.jsx)(h.Z,{type:"number",onBlur:function(n){var o=(0,a.Z)(we.products),i=(0,l.Z)({},o[t]);0===e.quantity.length&&(r("Quantity cannot be empty",{variant:"error"}),i.quantity="1",o[t]=i,Ie((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:o})})))},onChange:function(e){return pt(t,"quantity",e.target.value)},value:e.quantity,size:"small"})},center:"true"},{name:"Sell Price",selector:function(e){return e.sellingPrice},cell:function(e,t){return(0,V.jsx)(h.Z,{type:"number",onBlur:function(){var n=(0,a.Z)(we.products),o=(0,l.Z)({},n[t]);(0===e.sellingPrice.length||o.product.purchasePrice>parseInt(e.sellingPrice,10))&&(r("The product price cannot be lower than its purchase price of ".concat(xt(we.products[t].product.purchasePrice)),{variant:"error"}),o.sellingPrice=String(o.product.purchasePrice),n[t]=o,Ie((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:n})})))},onChange:function(e){return pt(t,"sellingPrice",e.target.value)},value:e.sellingPrice,size:"small"})},center:"true"},{name:"GST Value",selector:function(e){return e.product.gstValue},center:"true"},{name:"Discount",selector:function(e){return e.discount},cell:function(e,t){return(0,V.jsx)(h.Z,{value:e.discount,size:"small",type:"number",onBlur:function(){if(0===e.discount.length){var n=(0,a.Z)(we.products),r=(0,l.Z)({},n[t]);r.discount="0",n[t]=r,Ie((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:n})}))}},onChange:function(e){return pt(t,"discount",e.target.value)},InputProps:{endAdornment:(0,V.jsx)(Z.Z,{position:"end",children:(0,V.jsx)(z.Z,{fontSize:"small"})})}})},center:"true"},{name:"Net Amount",selector:function(e){return parseInt(e.quantity?e.quantity:0,10)*parseInt(e.sellingPrice?e.sellingPrice:0,10)},center:"true"},{name:"Actions",cell:function(e,t){return(0,V.jsx)(y.Z,{onClick:function(){return function(e,t){console.log("deleting product...");var n=(0,a.Z)(we.products);n.splice(t,1),Ie((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:n})}))}(0,t)},color:"error",variant:"outlined",children:(0,V.jsx)(O.Z,{})})},center:"true"}],xt=new Intl.NumberFormat("hi-In",{style:"currency",currency:"INR"}).format;var mt=we.products.reduce((function(e,t){var n=function(e){return parseInt(0===e.sellingPrice.length?0:e.sellingPrice,10)*parseInt(0===e.quantity.length?0:e.quantity,10)*(parseInt(0===e.discount.length?0:e.discount,10)/100)}(t);return e+n}),0),ht=we.products.reduce((function(e,t){return e+parseInt(0===t.sellingPrice.length?0:t.sellingPrice,10)*parseInt(0===t.quantity.length?0:t.quantity,10)}),0),Zt=0;Object.keys(we.offer).length>0&&(Zt="PERCENTAGE"===we.offer.type?ht*we.offer.typeValue/100:we.offer.typeValue);var yt=ht-(mt+Zt);return(0,V.jsxs)(u.Z,{maxWidth:!n.themeStretch&&"xl",children:[(0,V.jsx)(d.Z,{variant:"h4",children:" Sales "}),(0,V.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"20px"},children:[(0,V.jsxs)(v.Z,{direction:"row",spacing:1,children:[(0,V.jsx)(g.Z,{label:"Total \u20b9 13,500.00",variant:"contained",sx:{backgroundColor:"#CBF0FF"}}),(0,V.jsx)(g.Z,{label:"Paid \u20b9 5,500.00",variant:"contained",sx:{backgroundColor:"#CBFFE0"}}),(0,V.jsx)(g.Z,{label:"Pending \u20b9 10,000.00",variant:"contained",sx:{backgroundColor:"#FFF7CB"}})]}),(0,V.jsx)(v.Z,{children:(0,V.jsx)(f.Z,{variant:"contained",color:"primary",startIcon:(0,V.jsx)(w.Z,{}),onClick:function(){Ie((function(e){return(0,l.Z)((0,l.Z)({},e),{},{invoiceDate:M()(new Date)})})),ae(!0)},children:"CREATE SALES ORDER"})})]}),(0,V.jsxs)("div",{style:{marginTop:"20px"},children:[(0,V.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[(0,V.jsx)("div",{style:{display:"flex",marginTop:"8px"},children:(0,V.jsx)(h.Z,{placeholder:"Search",size:"small",InputProps:{startAdornment:(0,V.jsx)(Z.Z,{position:"start",children:(0,V.jsx)(I.Z,{})})}})}),(0,V.jsx)("div",{children:(0,V.jsx)(q._,{dateAdapter:B.y,children:(0,V.jsx)(T.C,{components:["SingleInputDateRangeField"],children:(0,V.jsx)(R.n,{size:"small",label:"Date Range",value:X,onChange:function(e){return ee(e)}})})})})]}),(0,V.jsx)("div",{style:{marginTop:"20px"},children:(0,V.jsx)(_.ZP,{columns:dt,data:ze,pagination:!0,progressPending:We})})]}),(0,V.jsx)(b.Z,{open:re,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,V.jsxs)(j.Z,{sx:L,children:[(0,V.jsxs)(P.ZP,{container:!0,columnGap:2,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px",display:"flex",justifyContent:"space-between",gap:"10px"},children:[(0,V.jsx)(P.ZP,{item:!0,xs:3,children:(0,V.jsx)(C.Z,{value:we.customer,options:ce,getOptionLabel:function(e){return e.name?e.name:e},fullWidth:!0,onChange:function(e,t){Ie((function(e){return(0,l.Z)((0,l.Z)({},e),{},{customer:t||null,mobileNumber:t?t.mobileNumber.slice(3):""})}))},onInputChange:function(e,t){Ie((function(e){return(0,l.Z)((0,l.Z)({},e),{},{customer:t})}))},renderInput:function(e){return(0,V.jsx)(h.Z,(0,l.Z)((0,l.Z)({},e),{},{label:"Search Customers",fullWidth:!0}))},freeSolo:!0})}),(0,V.jsx)(P.ZP,{item:!0,xs:3,children:(0,V.jsx)(h.Z,{type:"number",label:"Mobile Number",InputProps:{startAdornment:(0,V.jsxs)(Z.Z,{position:"start",children:[(0,V.jsx)(U.Z,{})," +91"]})},value:we.mobileNumber,fullWidth:!0,onChange:function(e){e.target.value.length>10||Ie((function(t){return(0,l.Z)((0,l.Z)({},t),{},{mobileNumber:e.target.value})}))}})}),(0,V.jsx)(P.ZP,{item:!0,xs:3,children:(0,V.jsx)(C.Z,{value:we.salesMan,options:pe,getOptionLabel:function(e){return e.name},fullWidth:!0,onChange:function(e,t){Ie((function(e){return(0,l.Z)((0,l.Z)({},e),{},{salesMan:t})}))},renderInput:function(e){return(0,V.jsx)(h.Z,(0,l.Z)((0,l.Z)({},e),{},{label:"Sales Man",fullWidth:!0}))}})}),(0,V.jsxs)(P.ZP,{container:!0,sx:{display:"flex",gap:"136px"},children:[(0,V.jsx)(P.ZP,{item:!0,xs:3,children:(0,V.jsx)(q._,{dateAdapter:B.y,children:(0,V.jsx)(F.M,{label:"Invoice Date",value:we.invoiceDate,onChange:function(e){Ie((function(t){return(0,l.Z)((0,l.Z)({},t),{},{invoiceDate:e})}))},format:"DD/MM/YYYY",slotProps:{textField:{fullWidth:!0}}})})}),(0,V.jsx)(P.ZP,{item:!0,xs:3,children:(0,V.jsx)(q._,{dateAdapter:B.y,children:(0,V.jsx)(F.M,{label:"Invoice Due Date",format:"DD/MM/YYYY",value:we.invoiceDueDate,minDate:we.invoiceDate,onChange:function(e){Ie((function(t){return(0,l.Z)((0,l.Z)({},t),{},{invoiceDueDate:e})}))},slotProps:{textField:{fullWidth:!0}}})})})]})]}),(0,V.jsxs)(P.ZP,{container:!0,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px",display:"flex",justifyContent:"space-between"},alignItems:"center",children:[(0,V.jsxs)(P.ZP,{item:!0,xs:12,md:7,display:"flex",children:[(0,V.jsxs)(k.Z,{sx:{width:"35%"},children:[(0,V.jsx)(D.Z,{id:"demo-simple-select-label",children:"All Categories"}),(0,V.jsxs)(S.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"All Categories",value:Te.category,onChange:function(e){qe((function(t){return(0,l.Z)((0,l.Z)({},t),{},{category:e.target.value,product:null,quantity:null})}))},children:[(0,V.jsx)(m.Z,{value:"All Categories",children:"All Categories"}),he.map((function(e,t){return(0,V.jsx)(m.Z,{value:e.name,children:e.name},t)}))]})]}),(0,V.jsx)(C.Z,{options:ge.filter((function(e){return!Te.category||"All Categories"===Te.category||e.category.name===Te.category})),value:null!==(e=null===Te||void 0===Te?void 0:Te.product)&&void 0!==e?e:null,onChange:function(e,t){qe(t?function(e){return(0,l.Z)((0,l.Z)({},e),{},{product:t})}:function(e){return(0,l.Z)((0,l.Z)({},e),{},{product:null})})},getOptionLabel:function(e){return null===e||void 0===e?void 0:e.name},fullWidth:!0,renderInput:function(e){return(0,V.jsx)(h.Z,(0,l.Z)((0,l.Z)({},e),{},{label:"Search Products",fullWidth:!0}))}})]}),(0,V.jsx)(P.ZP,{item:!0,xs:12,md:2,children:(0,V.jsx)(h.Z,{label:"Quantity",type:"number",onChange:function(e){return qe((function(t){return(0,l.Z)((0,l.Z)({},t),{},{quantity:e.target.value})}))},value:Te.quantity})}),(0,V.jsx)(P.ZP,{item:!0,xs:12,md:2,children:(0,V.jsx)(f.Z,{startIcon:(0,V.jsx)(w.Z,{}),disabled:null===Te.product||null===Te.quantity||Te.quantity<=0,variant:"contained",color:"primary",onClick:function(){if(we.products.find((function(e){return e.product.name===Te.product.name})))r("Product already added!",{variant:"error"});else{var e=ge.find((function(e){return e.name===Te.product.name}));if(e&&e.quantity<Te.quantity)r("Product quantity not available!",{variant:"error"});else{var t={product:Te.product,sellingPrice:Te.product.sellingPrice,quantity:Te.quantity,category:Te.category,discount:0};Ie((function(e){return(0,l.Z)((0,l.Z)({},e),{},{products:[].concat((0,a.Z)(e.products),[t])})})),console.log(Te),qe(Q)}}},fullWidth:!0,children:"ADD TO ORDER"})})]}),we.products.length>0&&(0,V.jsxs)(P.ZP,{container:!0,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px"},alignItems:"center",children:[(0,V.jsx)(P.ZP,{item:!0,xs:12,children:(0,V.jsx)(_.ZP,{columns:ft,data:we.products})}),(0,V.jsx)(P.ZP,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",sx:{mt:2},children:(0,V.jsxs)("div",{children:[(0,V.jsx)("div",{children:"Apply Offer to all products"}),(0,V.jsx)("div",{style:{paddingTop:"5px"},children:0===Object.keys(we.offer).length?(0,V.jsxs)(k.Z,{fullWidth:!0,size:"small",children:[(0,V.jsx)(D.Z,{id:"demo-simple-select-label",children:"Select Offer"}),(0,V.jsx)(S.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Offer",value:null!==(t=we.offer)&&void 0!==t?t:"",onChange:function(e){return Ie((function(t){return(0,l.Z)((0,l.Z)({},t),{},{offer:e.target.value})}))},children:Ce.map((function(e,t){return(0,V.jsx)(m.Z,{value:e,children:e.code},t)}))})]}):(0,V.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,V.jsx)(g.Z,{variant:"contained",color:"primary",label:"Offer Applied : ".concat(we.offer.code),onDelete:function(){Ie((function(e){return(0,l.Z)((0,l.Z)({},e),{},{offer:{}})}))}}),(0,V.jsx)(d.Z,{variant:"caption",gutterBottom:!0,children:"PERCENTAGE"===we.offer.type?"".concat(we.offer.typeValue,"% Off"):"".concat(xt(we.offer.typeValue)," Off")})]})})]})})]}),(0,V.jsx)(P.ZP,{container:!0,display:"flex",justifyContent:"flex-end",children:(0,V.jsx)(P.ZP,{item:!0,xs:12,md:6,lg:6,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px"},children:(0,V.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,V.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,V.jsx)("div",{children:"Product Discount"}),(0,V.jsx)("div",{children:0===we.products.length?xt(0):xt(mt)})]}),0!==Object.keys(we.offer).length?(0,V.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,V.jsx)("div",{children:"Offer Discount"}),(0,V.jsx)("div",{children:xt(Zt)})]}):null,(0,V.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,V.jsx)("div",{children:"Total Amount"}),(0,V.jsx)("div",{children:0===we.products.length?xt(0):xt(ht)})]})]})})}),(0,V.jsx)(P.ZP,{container:!0,display:"flex",justifyContent:"flex-end",children:(0,V.jsxs)(P.ZP,{item:!0,xs:12,md:6,lg:6,sx:{backgroundColor:"white",padding:"15px",borderRadius:"10px",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,V.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px"},children:[(0,V.jsx)(h.Z,{fullWidth:!0,size:"small",label:"Enter Amount",onBlur:function(e){e.target.value>ht&&(r("Amount to pay cannot be greater than total amount!",{variant:"error"}),Ie((function(e){return(0,l.Z)((0,l.Z)({},e),{},{amountToPay:ht})})))},value:we.amountToPay,onChange:function(e){return Ie((function(t){return(0,l.Z)((0,l.Z)({},t),{},{amountToPay:e.target.value})}))}}),(0,V.jsxs)(k.Z,{fullWidth:!0,size:"small",children:[(0,V.jsx)(D.Z,{id:"demo-simple-select-label",children:"Select Payment Status"}),(0,V.jsx)(S.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Payment Status",value:we.paymentStatus,onChange:function(e){return Ie((function(t){return(0,l.Z)((0,l.Z)({},t),{},{paymentStatus:e.target.value})}))},children:E.y0.paymentStatus.map((function(e,t){return(0,V.jsx)(m.Z,{value:e,children:e},t)}))})]})]}),(0,V.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px"},children:[(0,V.jsxs)(k.Z,{fullWidth:!0,size:"small",children:[(0,V.jsx)(D.Z,{id:"demo-simple-select-label",children:"Select Payment Mode"}),(0,V.jsx)(S.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Payment Mode",value:we.paymentMode,onChange:function(e){return Ie((function(t){return(0,l.Z)((0,l.Z)({},t),{},{paymentMode:e.target.value})}))},children:E.y0.paymentMode.map((function(e,t){return(0,V.jsx)(m.Z,{value:e,children:e},t)}))})]}),(0,V.jsxs)(k.Z,{fullWidth:!0,size:"small",children:[(0,V.jsx)(D.Z,{id:"demo-simple-select-label",children:"Select Bank"}),(0,V.jsx)(S.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Bank",value:we.bank,onChange:function(e){return Ie((function(t){return(0,l.Z)((0,l.Z)({},t),{},{bank:e.target.value})}))},disabled:"CASH"===we.paymentMode,children:(0,V.jsx)(m.Z,{value:we.bank,children:"SBI"})})]})]})]})}),(0,V.jsx)(P.ZP,{container:!0,children:(0,V.jsxs)(P.ZP,{item:!0,xs:12,md:12,lg:12,sx:{backgroundColor:"white",p:"15px",borderRadius:"10px"},display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,V.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"20px"},children:[(0,V.jsx)("div",{children:"Total  :"}),(0,V.jsx)("div",{children:0===we.products.length?xt(0):xt(yt)})]}),(0,V.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,V.jsx)(f.Z,{variant:"contained",onClick:function(){var e=(0,l.Z)({},we);e.discount={},e.discount.productDiscount=mt,Object.keys(we.offer).length>0&&(e.discount.offer={},e.discount.offer.discount=Zt,e.discount.offer.id=we.offer._id),e.totalDiscount=mt+Zt,e.totalAmount=yt,e.invoiceDueDate=M()(e.invoiceDueDate).format("YYYY-MM-DD");var t=localStorage.getItem(N._.keyUserToken),n=(0,E.sw)(t);Y.ZP.post(Y.Hv.sales.add,e,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){r("Sales order created successfully!",{variant:"success"}),ae(!1),oe(),ut()})).catch((function(e){r(e.error||e.err,{variant:"error"})}))},color:"primary",disabled:!we.customer||!we.mobileNumber||!we.salesMan||!we.invoiceDueDate||0===we.products.length||!we.amountToPay||!we.paymentMode||!we.paymentStatus||0===we.bank.length,children:"SAVE"}),(0,V.jsx)(f.Z,{variant:"contained",color:"error",onClick:function(){ae(!1),oe()},children:"CANCEL"})]})]})})]})}),(0,V.jsx)(b.Z,{id:"paymentModal",open:Xe,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,V.jsx)(j.Z,{sx:G,children:(0,V.jsxs)(P.ZP,{container:!0,sx:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,V.jsx)(P.ZP,{item:!0,xs:12,children:(0,V.jsx)(d.Z,{variant:"h6",children:"Customer Details"})}),(0,V.jsx)(P.ZP,{item:!0,xs:12,children:(0,V.jsx)(h.Z,{label:"Name",value:rt.name,disabled:!0,sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,V.jsx)(P.ZP,{item:!0,xs:12,children:(0,V.jsx)(h.Z,{label:"Balance",value:rt.balance,disabled:!0,sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,V.jsx)(P.ZP,{item:!0,xs:12,children:(0,V.jsx)(d.Z,{variant:"h6",children:"Payment Details"})}),(0,V.jsx)(P.ZP,{item:!0,xs:12,children:(0,V.jsx)(h.Z,{label:"Amount To Pay",value:rt.amountToPay,onBlur:function(){rt.amountToPay>rt.balance&&(r("Amount to pay cannot be greater than balance!",{variant:"error"}),at((function(e){return(0,l.Z)((0,l.Z)({},e),{},{amountToPay:rt.balance})})))},onChange:function(e){return at((function(t){return(0,l.Z)((0,l.Z)({},t),{},{amountToPay:e.target.value})}))},sx:{backgroundColor:"white",borderRadius:"7px"},fullWidth:!0})}),(0,V.jsx)(P.ZP,{item:!0,xs:12,children:(0,V.jsx)(q._,{dateAdapter:B.y,children:(0,V.jsx)(F.M,{label:"Payment Date",value:rt.paymentDate,maxDate:M()(new Date),onChange:function(e){at((function(t){return(0,l.Z)((0,l.Z)({},t),{},{paymentDate:e})}))},sx:{backgroundColor:"white",borderRadius:"7px"},format:"DD/MM/YYYY",slotProps:{textField:{fullWidth:!0}}})})}),(0,V.jsx)(P.ZP,{item:!0,xs:12,children:(0,V.jsxs)(k.Z,{fullWidth:!0,children:[(0,V.jsx)(D.Z,{id:"record-payment-mode",children:"Select Payment Mode"}),(0,V.jsx)(S.Z,{labelId:"record-payment-mode",id:"demo-simple-select",label:"Select Payment Mode",sx:{backgroundColor:"white",borderRadius:"7px"},value:rt.paymentMode,onChange:function(e){return at((function(t){return(0,l.Z)((0,l.Z)({},t),{},{paymentMode:e.target.value})}))},children:E.y0.paymentMode.map((function(e,t){return(0,V.jsx)(m.Z,{value:e,children:e},t)}))})]})}),"CASH"!==rt.paymentMode&&(0,V.jsx)(P.ZP,{item:!0,xs:12,children:(0,V.jsxs)(k.Z,{fullWidth:!0,children:[(0,V.jsx)(D.Z,{id:"select-bank",children:"Select Bank"}),(0,V.jsx)(S.Z,{labelId:"select-bank",id:"demo-simple-select",label:"Select Bank",value:rt.bank,sx:{backgroundColor:"white",borderRadius:"7px"},onChange:function(e){return at((function(t){return(0,l.Z)((0,l.Z)({},t),{},{paymentMode:e.target.value})}))},children:E.y0.paymentMode.map((function(e,t){return(0,V.jsx)(m.Z,{value:e,children:e},t)}))})]})}),(0,V.jsxs)(P.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[(0,V.jsx)(f.Z,{variant:"contained",color:"primary",onClick:function(){var e={};e.salesOrderId=rt.salesOrderId,e.amountToPay=rt.amountToPay,e.paymentDate=rt.paymentDate,e.paymentMode=rt.paymentMode,rt.bank.length>0&&(e.bank=rt.bank);var t=localStorage.getItem(N._.keyUserToken),n=(0,E.sw)(t);Y.ZP.post(Y.Hv.sales.recordPayment,e,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){r("Sales order payment recorded successfully!",{variant:"success"}),et(!1),at(K),ut()})).catch((function(e){r(e.error,{variant:"error"})}))},disabled:!rt.amountToPay||!rt.paymentMode||"CASH"!==rt.paymentMode&&!rt.bank,children:"Update Payment"}),(0,V.jsx)(f.Z,{variant:"contained",color:"error",onClick:function(){et(!1),at(K)},children:"Cancel"})]})]})})})]})}function X(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(r.ql,{children:(0,V.jsx)("title",{children:" Dashboard : Sales"})}),(0,V.jsx)(J,{})]})}},42716:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45649)),o=n(80184);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"}),"Phone")}}]);
//# sourceMappingURL=571.bfd7a18f.chunk.js.map