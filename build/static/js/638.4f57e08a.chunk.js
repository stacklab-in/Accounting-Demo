(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[638],{32869:function(e,t,n){"use strict";n.d(t,{Ds:function(){return r.Ds}});var r=n(58518);n(58764)},65638:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var r=n(6907),a=n(4942),i=n(74165),o=n(15861),s=n(1413),c=n(29439),u=n(72791),l=n(64554),d=n(89164),f=n(4567),p=n(57088),h=n(30439),x=n(71715),m=n(82626),Z=n(93006),y=n(63466),g=n(73590),v=n(61889),j=n(68096),b=n(50168),S=n(58406),C=n(47071),M=n(85523),D=n(53837),k=n(5574),$=n(65661),P=n(39157),T=n(97123),E=n(26759),I=n(42419),w=n(5403),A=n(18406),Y=n(99615),N=n(52073),R=n(32869),U=n(43513),_=n(71652),O=n(83932),L=n(24750),H=n(51612),B=n(97892),z=n.n(B),W=n(83027),q=n.n(W),F=n(80184);z().extend(q());var G={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",bgcolor:"background.paper",borderRadius:"10px",boxShadow:24,p:2,backgroundColor:A.$_.modalbackground,height:"auto",overflow:"auto"},K={price:"",date:null,category:"",paymentStatus:"PENDING",paymentMode:""},Q={price:!1,date:!1,category:!1,paymentStatus:!1,paymentMode:!1},X=["ELECTRICITY BILL","REPAIR AND MAINTAINANCE","INTERNET BILLS","RAW MATERIAL","RENT","PRINTING","EMPLOYEE SALARIES"],J=["CASH","CARD","UPI","NET BANKING","CHEQUE","EMI"];function V(){var e=(0,u.useState)(z()("2022-04-17")),t=(0,c.Z)(e,2),n=(t[0],t[1],z().utc("2024-01-14T18:30:00.000+00:00").local(),(0,p.K$)()),B=(0,R.Ds)().enqueueSnackbar,W=(0,u.useState)(!1),q=(0,c.Z)(W,2),V=q[0],ee=q[1],te=(0,u.useState)(!1),ne=(0,c.Z)(te,2),re=ne[0],ae=ne[1],ie=(0,u.useState)([]),oe=(0,c.Z)(ie,2),se=oe[0],ce=oe[1],ue=(0,u.useState)(K),le=(0,c.Z)(ue,2),de=le[0],fe=le[1],pe=(0,u.useState)(Q),he=(0,c.Z)(pe,2),xe=he[0],me=he[1],Ze=(0,u.useState)(!1),ye=(0,c.Z)(Ze,2),ge=ye[0],ve=ye[1],je=(0,u.useState)({}),be=(0,c.Z)(je,2),Se=be[0],Ce=be[1],Me=(0,u.useState)(""),De=(0,c.Z)(Me,2),ke=De[0],$e=De[1],Pe=(0,u.useState)(null),Te=(0,c.Z)(Pe,2),Ee=Te[0],Ie=Te[1],we=Boolean(Ee),Ae=(0,u.useState)(!1),Ye=(0,c.Z)(Ae,2),Ne=Ye[0],Re=Ye[1],Ue=function(){return ee(!1)},_e=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(N._.keyUserToken),n=(0,A.sw)(t),e.next=5,Y.ZP.post(Y.Hv.expenditure.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&(ae(!1),ce(r.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),B("Failed to fetch dataArray!",{variant:"error"}),ae(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){ae(!0),_e()}),[]);var Oe=function(e){var t=e.target,n=t.name,r=t.value;fe((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,a.Z)({},n,r))})),me((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,a.Z)({},n,!1))}))},Le=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,n,r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},de.price){e.next=4;break}return me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{price:!0})})),e.abrupt("return");case 4:if(me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{price:!1})})),de.date){e.next=8;break}return me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{date:!0})})),e.abrupt("return");case 8:if(me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{date:!1})})),de.category){e.next=12;break}return me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{category:!0})})),e.abrupt("return");case 12:if(me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{category:!1})})),de.paymentMode){e.next=16;break}return me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{paymentMode:!0})})),e.abrupt("return");case 16:me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{paymentMode:!1})})),n=de.date.format("YYYY/MM/DD"),t.price=de.price,t.date=n,t.category=de.category,t.paymentStatus=de.paymentStatus,t.paymentMode=de.paymentMode,r=localStorage.getItem(N._.keyUserToken),a=(0,A.sw)(r),Y.ZP.post(Y.Hv.expenditure.add,t,{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){B("Expense created successfully!",{variant:"success"}),Ue(),me(Q),fe(K),_e()})).catch((function(e){B(e.error||e.msg,{variant:"error"})}));case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),He=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,n,r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},de.price){e.next=4;break}return me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{price:!0})})),e.abrupt("return");case 4:if(me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{price:!1})})),de.date){e.next=8;break}return me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{date:!0})})),e.abrupt("return");case 8:if(me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{date:!1})})),de.category){e.next=12;break}return me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{category:!0})})),e.abrupt("return");case 12:if(me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{category:!1})})),de.paymentMode){e.next=16;break}return me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{paymentMode:!0})})),e.abrupt("return");case 16:me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{paymentMode:!1})})),n=de.date.format("YYYY/MM/DD"),t.price=de.price,t.date=n,t.category=de.category,t.paymentStatus=de.paymentStatus,t.paymentMode=de.paymentMode,r=localStorage.getItem(N._.keyUserToken),a=(0,A.sw)(r),Y.ZP.post(Y.Hv.expenditure.update,de,{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){B("Expenditure updated successfully!",{variant:"success"}),Ue(),me(Q),fe(K),_e()})).catch((function(e){B(e.error||e.msg,{variant:"error"})}));case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Be=[{name:"Category",selector:function(e){return e.category},sortable:!0},{name:"Amount",selector:function(e){return e.price},sortable:!0},{name:"Payment Mode",selector:function(e){return e.paymentMode},sortable:!0},{name:"Payment Status",selector:function(e){return e.paymentStatus},sortable:!0,center:"true"},{name:"Expense Date",selector:function(e){return(0,A.p6)(e.date)},sortable:!0,width:"20%"},{name:"Actions",width:"20%",cell:function(e){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(h.Z,{onClick:function(t){Ie(t.currentTarget),Ce(e)},style:{color:A.$_.actionButton},variant:"outlined",endIcon:(0,F.jsx)(E.Z,{}),children:"Action"}),(0,F.jsxs)(x.Z,{id:"basic-menu",anchorEl:Ee,open:we,onClose:function(){Ie(null),Ce({})},MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,F.jsx)(m.Z,{onClick:function(){return function(){ve(!0),Ie(null);var e={id:Se._id,price:Se.price,date:z()(Se.date),category:Se.category,paymentStatus:Se.paymentStatus,paymentMode:Se.paymentMode};fe(e),ee(!0)}()},children:"Edit Details"}),(0,F.jsx)(m.Z,{onClick:function(){return fe((function(e){return(0,s.Z)((0,s.Z)({},e),{},{id:Se._id})})),Re(!0),void Ie(null)},children:"Remove"})]})]})}}],ze=se.filter((function(e){var t;return null===e||void 0===e||null===(t=e.category)||void 0===t?void 0:t.toLowerCase().includes(null===ke||void 0===ke?void 0:ke.toLowerCase())}));return(0,F.jsxs)(d.Z,{maxWidth:!n.themeStretch&&"xl",children:[(0,F.jsx)(r.ql,{children:(0,F.jsx)("title",{children:" Dashboard : Expenditure"})}),(0,F.jsx)(f.Z,{variant:"h4",children:" Expenditure "}),(0,F.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px"},children:[(0,F.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[(0,F.jsx)(Z.Z,{placeholder:"Search",size:"small",value:ke,onChange:function(e){return $e(e.target.value)},InputProps:{startAdornment:(0,F.jsx)(y.Z,{position:"start",children:(0,F.jsx)(w.Z,{})})}}),(0,F.jsx)(_._,{dateAdapter:L.y,children:(0,F.jsx)(H.n,{size:"small",label:"Date Range"})})]}),(0,F.jsx)(h.Z,{startIcon:(0,F.jsx)(I.Z,{}),variant:"contained",color:"primary",onClick:function(){var e=(0,A.bj)();fe((function(t){return(0,s.Z)((0,s.Z)({},t),{},{code:e})})),ee(!0),ve(!1)},children:"ADD EXPENSE"})]}),(0,F.jsx)(g.Z,{open:V,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,F.jsxs)(l.Z,{sx:G,children:[(0,F.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,F.jsx)(f.Z,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Basic Details"}),(0,F.jsx)("div",{style:{padding:"10px",backgroundColor:"white",borderRadius:"10px"},children:(0,F.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,F.jsx)(v.ZP,{item:!0,xs:6,children:(0,F.jsx)(Z.Z,{label:"Expense in rupees",name:"price",type:"number",value:de.price,onChange:Oe,error:xe.price,helperText:xe.price?"Please enter expense in rupees":null,fullWidth:!0,required:!0})}),(0,F.jsx)(v.ZP,{item:!0,xs:6,children:(0,F.jsx)(_._,{dateAdapter:L.y,children:(0,F.jsx)(O.M,{label:"Expense Date",value:de.date,format:"DD/MM/YYYY",onChange:function(e){fe((function(t){return(0,s.Z)((0,s.Z)({},t),{},{date:e})})),me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{date:!1})}))},slotProps:{textField:{fullWidth:!0,error:xe.date,helperText:xe.date?"Please select expense date!.":null}}})})}),(0,F.jsx)(v.ZP,{item:!0,xs:12,children:(0,F.jsxs)(j.Z,{fullWidth:!0,children:[(0,F.jsx)(b.Z,{id:"demo-simple-select-label",children:"Category"}),(0,F.jsx)(S.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:de.category,label:"Category",name:"category",onChange:function(e){fe((function(t){return(0,s.Z)((0,s.Z)({},t),{},{category:e.target.value})})),me((function(e){return(0,s.Z)((0,s.Z)({},e),{},{category:!1})}))},error:xe.category,required:!0,children:X.map((function(e,t){return(0,F.jsx)(m.Z,{value:e,children:e},t)}))}),xe.category&&(0,F.jsx)(C.Z,{sx:{color:"red"},children:"Please Select Expense Category"})]})})]})}),(0,F.jsx)("div",{style:{padding:"10px",backgroundColor:"white",borderRadius:"10px"},children:(0,F.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,F.jsx)(v.ZP,{item:!0,xs:12,children:(0,F.jsx)(f.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Payments"})}),(0,F.jsx)(v.ZP,{item:!0,xs:6,display:"flex",justifyContent:"flex-start",alignItems:"center",children:(0,F.jsx)(j.Z,{component:"fieldset",variant:"standard",children:(0,F.jsx)(j.Z,{children:(0,F.jsx)(M.Z,{control:(0,F.jsx)(D.Z,{checked:"PAID"===(null===de||void 0===de?void 0:de.paymentStatus),onChange:function(e){fe((function(t){return(0,s.Z)((0,s.Z)({},t),{},{paymentStatus:e.target.checked?"PAID":"PENDING"})}))},name:"paymentStatus"}),label:"Mark as Paid",labelPlacement:"start"})})})}),(0,F.jsx)(v.ZP,{item:!0,xs:6,children:(0,F.jsxs)(j.Z,{fullWidth:!0,children:[(0,F.jsx)(b.Z,{id:"demo-simple-select-label",children:"Payment Type"}),(0,F.jsxs)(S.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:de.paymentMode,label:"Payment Type",name:"paymentMode",onChange:Oe,error:xe.paymentMode,required:!0,children:[J.map((function(e,t){return(0,F.jsx)(m.Z,{value:e,children:e},t)})),(0,F.jsx)(m.Z,{value:"EMI",children:"EMI"})]}),xe.paymentMode&&(0,F.jsx)(C.Z,{sx:{color:"red"},children:"Please Select Expense Payment Type"})]})})]})})]}),(0,F.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",justifyContent:"flex-end",padding:"10px"},children:[(0,F.jsx)(h.Z,{variant:"contained",color:"primary",onClick:ge?He:Le,children:ge?"Update":"Save"}),(0,F.jsx)(h.Z,{variant:"outlined",onClick:function(){ge&&(fe(K),ve(!1)),ee(!1),Ce({}),fe(K),me(Q)},children:"Cancel"})]})]})}),(0,F.jsx)("div",{style:{marginTop:"20px"},children:(0,F.jsx)(U.ZP,{columns:Be,data:ze,pagination:!0,progressPending:re})}),(0,F.jsxs)(k.Z,{open:Ne,onClose:function(){return Re(!1)},children:[(0,F.jsx)($.Z,{children:"Remove Offer"}),(0,F.jsx)(P.Z,{children:"Are you sure you want to delete this data?"}),(0,F.jsxs)(T.Z,{children:[(0,F.jsx)(h.Z,{onClick:function(){return Re(!1)},children:"Cancel"}),(0,F.jsx)(h.Z,{onClick:function(){var e=localStorage.getItem(N._.keyUserToken),t=(0,A.sw)(e),n={headers:{Authorization:"Bearer ".concat(t)}};Y.ZP.post(Y.Hv.expenditure.delete,{id:de.id},n).then((function(e){e&&(B("Offer deleted successfully!",{variant:"success"}),Re(!1),fe(K),me(Q),_e())})).catch((function(e){B(e.msg||e.error,{variant:"error"})}))},variant:"contained",color:"error",children:"Delete"})]})]})]})}function ee(){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(r.ql,{children:(0,F.jsx)("title",{children:" Dashboard: Expenditure"})}),(0,F.jsx)(V,{})]})}},65661:function(e,t,n){"use strict";var r=n(87462),a=n(63366),i=n(72791),o=n(28182),s=n(94419),c=n(4567),u=n(66934),l=n(31402),d=n(17673),f=n(85090),p=n(80184),h=["className","id"],x=(0,u.ZP)(c.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),m=i.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiDialogTitle"}),c=n.className,u=n.id,m=(0,a.Z)(n,h),Z=n,y=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},d.a,t)}(Z),g=i.useContext(f.Z).titleId,v=void 0===g?u:g;return(0,p.jsx)(x,(0,r.Z)({component:"h2",className:(0,o.Z)(y.root,c),ownerState:Z,ref:t,variant:"h6",id:null!=u?u:v},m))}));t.Z=m},83027:function(e){e.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,a,i){var o=a.prototype;i.utc=function(e){return new a({date:e,utc:!0,args:arguments})},o.utc=function(t){var n=i(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},o.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var s=o.parse;o.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),s.call(this,e)};var c=o.init;o.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else c.call(this)};var u=o.utcOffset;o.utcOffset=function(r,a){var i=this.$utils().u;if(i(r))return this.$u?0:i(this.$offset)?u.call(this):this.$offset;if("string"==typeof r&&(r=function(e){void 0===e&&(e="");var r=e.match(t);if(!r)return null;var a=(""+r[0]).match(n)||["-",0,0],i=a[0],o=60*+a[1]+ +a[2];return 0===o?0:"+"===i?o:-o}(r),null===r))return this;var o=Math.abs(r)<=16?60*r:r,s=this;if(a)return s.$offset=o,s.$u=0===r,s;if(0!==r){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(s=this.local().add(o+c,e)).$offset=o,s.$x.$localOffset=c}else s=this.utc();return s};var l=o.format;o.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,t)},o.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var d=o.toDate;o.toDate=function(e){return"s"===e&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var f=o.diff;o.diff=function(e,t,n){if(e&&this.$u===e.$u)return f.call(this,e,t,n);var r=this.local(),a=i(e).local();return f.call(r,a,t,n)}}}()}}]);
//# sourceMappingURL=638.4f57e08a.chunk.js.map