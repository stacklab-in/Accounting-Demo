(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[902],{32869:function(e,t,n){"use strict";n.d(t,{Ds:function(){return r.Ds}});var r=n(58518);n(58764)},95902:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var r=n(4942),i=n(74165),s=n(15861),a=n(1413),o=n(29439),l=n(72791),u=n(6907),c=n(64554),d=n(89164),f=n(4567),h=n(57088),p=n(30439),x=n(71715),v=n(82626),Z=n(48550),m=n(63466),g=n(73590),j=n(61889),y=n(68096),b=n(50168),C=n(58406),S=n(47071),D=n(5574),w=n(65661),T=n(39157),$=n(97123),k=n(26759),E=n(42419),P=n(5403),O=n(18406),A=n(99615),R=n(52073),M=n(32869),I=n(43513),V=n(71652),U=n(23937),Y=n(24750),z=n(97892),N=n.n(z),_=n(83027),F=n.n(_),L=n(8976),H=n(80184);N().extend(F());var B={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",bgcolor:"background.paper",borderRadius:"10px",boxShadow:24,pl:2,pr:2,pt:2,backgroundColor:O.$_.modalbackground,height:"auto",overflow:"auto"},W={code:"",description:"",type:"PERCENTAGE",typeValue:"",status:""},q={type:!1,typeValue:!1,status:!1};function G(){var e,t,n,z,_=(0,L.E)().user,F=(0,h.K$)(),G=(0,M.Ds)().enqueueSnackbar,K=(0,l.useState)(!1),J=(0,o.Z)(K,2),Q=J[0],X=J[1],ee=(0,l.useState)(!1),te=(0,o.Z)(ee,2),ne=te[0],re=te[1],ie=(0,l.useState)([]),se=(0,o.Z)(ie,2),ae=se[0],oe=se[1],le=(0,l.useState)(W),ue=(0,o.Z)(le,2),ce=ue[0],de=ue[1],fe=(0,l.useState)(q),he=(0,o.Z)(fe,2),pe=he[0],xe=he[1],ve=(0,l.useState)(!1),Ze=(0,o.Z)(ve,2),me=Ze[0],ge=Ze[1],je=(0,l.useState)([]),ye=(0,o.Z)(je,2),be=ye[0],Ce=ye[1],Se=(0,l.useState)({}),De=(0,o.Z)(Se,2),we=De[0],Te=De[1],$e=(0,l.useState)(""),ke=(0,o.Z)($e,2),Ee=ke[0],Pe=ke[1],Oe=(0,l.useState)(null),Ae=(0,o.Z)(Oe,2),Re=Ae[0],Me=Ae[1],Ie=Boolean(Re),Ve=(0,l.useState)(!1),Ue=(0,o.Z)(Ve,2),Ye=Ue[0],ze=Ue[1],Ne=function(){return X(!1)},_e=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem(R._.keyUserToken),n=(0,O.sw)(t),e.next=5,A.ZP.post(A.Hv.offer.list,{},{headers:{Authorization:"Bearer ".concat(n)}});case 5:(r=e.sent)&&(re(!1),oe(r.data.data),Ce(r.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),G("Failed to fetch offers!",{variant:"error"}),re(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){re(!0),_e()}),[]);var Fe=(0,l.useState)(N()().startOf("month")),Le=(0,o.Z)(Fe,2),He=Le[0],Be=Le[1],We=(0,l.useState)(N()().endOf("month")),qe=(0,o.Z)(We,2),Ge=qe[0],Ke=qe[1];console.log(He.toDate()),console.log(Ge.toDate()),(0,l.useEffect)((function(){if(He&&Ge){var e=be.filter((function(e){var t=N()(e.createdAt);return console.log(He,Ge),t.isBetween(He,Ge,null,"[]")}));console.log("\ud83d\ude80 ~ filteredSales ~ filteredSales:",e),oe(e)}else oe(be)}),[He,Ge]);var Je=function(e){var t=e.target,n=t.name,i=t.value;de((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},n,i))})),"type"!==n&&"status"!==n&&"typeValue"!==n||xe((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},n,!1))}))},Qe=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ce.type){e.next=3;break}return xe((function(e){return(0,a.Z)((0,a.Z)({},e),{},{type:!0})})),e.abrupt("return");case 3:if(xe((function(e){return(0,a.Z)((0,a.Z)({},e),{},{type:!1})})),ce.typeValue){e.next=7;break}return xe((function(e){return(0,a.Z)((0,a.Z)({},e),{},{typeValue:!0})})),e.abrupt("return");case 7:xe((function(e){return(0,a.Z)((0,a.Z)({},e),{},{typeValue:!1})})),t=localStorage.getItem(R._.keyUserToken),n=(0,O.sw)(t),A.ZP.post(A.Hv.offer.add,ce,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){G("Offer created successfully!",{variant:"success"}),Ne(),xe(q),de(W),_e()})).catch((function(e){G(e.error||e.msg,{variant:"error"})}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Xe=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ce.type){e.next=3;break}return xe((function(e){return(0,a.Z)((0,a.Z)({},e),{},{type:!0})})),e.abrupt("return");case 3:if(xe((function(e){return(0,a.Z)((0,a.Z)({},e),{},{type:!1})})),ce.status){e.next=7;break}return xe((function(e){return(0,a.Z)((0,a.Z)({},e),{},{status:!0})})),e.abrupt("return");case 7:xe((function(e){return(0,a.Z)((0,a.Z)({},e),{},{status:!1})})),t=localStorage.getItem(R._.keyUserToken),n=(0,O.sw)(t),A.ZP.post(A.Hv.offer.update,ce,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){G("Offer updated successfully!",{variant:"success"}),Ne(),xe(q),de(W),_e()})).catch((function(e){G(e.error||e.msg,{variant:"error"})}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),et=[{name:"Offer Code",selector:function(e){return e.code},sortable:!0},{name:"Offer Type",selector:function(e){return e.type},sortable:!0},{name:"Status",selector:function(e){return e.status},sortable:!0},{name:"Created On",selector:function(e){return(0,O.p6)(e.createdAt)},sortable:!0},{name:"Actions",width:"20%",cell:function(e){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(p.Z,{disabled:!(null!==_&&void 0!==_&&_.permissions.offer.u),onClick:function(t){Me(t.currentTarget),Te(e)},style:{color:O.$_.actionButton},variant:"outlined",endIcon:(0,H.jsx)(k.Z,{}),children:"Action"}),(0,H.jsxs)(x.Z,{id:"basic-menu",anchorEl:Re,open:Ie,onClose:function(){Me(null),Te({})},MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,H.jsx)(v.Z,{onClick:function(){return function(){ge(!0),Me(null);var e={id:we._id,code:we.code,status:we.status,typeValue:we.typeValue,type:we.type,description:we.description};de(e),X(!0)}()},children:"Edit Details"}),(0,H.jsx)(v.Z,{onClick:function(){return de((function(e){return(0,a.Z)((0,a.Z)({},e),{},{id:we._id})})),ze(!0),void Me(null)},children:"Remove"})]})]})}}],tt=ae.filter((function(e){var t;return null===e||void 0===e||null===(t=e.code)||void 0===t?void 0:t.toLowerCase().includes(null===Ee||void 0===Ee?void 0:Ee.toLowerCase())}));return(0,H.jsxs)(d.Z,{maxWidth:!F.themeStretch&&"xl",children:[(0,H.jsx)(u.ql,{children:(0,H.jsx)("title",{children:" Dashboard : Offers"})}),(0,H.jsx)(f.Z,{variant:"h4",children:" Offer Management "}),(null===_||void 0===_?void 0:_.permissions.offer.u)&&(0,H.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,H.jsx)(p.Z,{startIcon:(0,H.jsx)(E.Z,{}),variant:"contained",color:"primary",onClick:function(){var e=(0,O.bj)();de((function(t){return(0,a.Z)((0,a.Z)({},t),{},{code:e})})),X(!0),ge(!1)},children:"ADD OFFER"})}),(0,H.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",marginTop:"10px",gap:"10px",padding:"10px",backgroundColor:"#E6F2FF",borderRadius:"10px"},children:[(0,H.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"auto",borderRadius:"8px",height:"100px",backgroundColor:"white",padding:"15px"},children:[(0,H.jsx)("div",{children:(0,H.jsx)(f.Z,{variant:"subtitle1",children:"Total number of offers "})}),(0,H.jsx)("div",{children:(0,H.jsx)(f.Z,{sx:{fontSize:24},children:null!==(e=ae.length)&&void 0!==e?e:"0"})})]}),(0,H.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"auto",borderRadius:"8px",height:"100px",backgroundColor:"white",padding:"15px"},children:[(0,H.jsx)("div",{children:(0,H.jsx)(f.Z,{variant:"subtitle1",children:"Number of Live offers "})}),(0,H.jsx)("div",{children:(0,H.jsx)(f.Z,{sx:{fontSize:24},children:null!==(t=ae.filter((function(e){return"LIVE"===e.status})).length)&&void 0!==t?t:"0"})})]}),(0,H.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"auto",borderRadius:"8px",height:"100px",backgroundColor:"white",padding:"15px"},children:[(0,H.jsx)("div",{children:(0,H.jsx)(f.Z,{variant:"subtitle1",children:"Number of Draft offers"})}),(0,H.jsx)("div",{children:(0,H.jsx)(f.Z,{sx:{fontSize:24},children:null!==(n=ae.filter((function(e){return"DRAFT"===e.status})).length)&&void 0!==n?n:"0"})})]}),(0,H.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"auto",borderRadius:"8px",height:"100px",backgroundColor:"white",padding:"15px"},children:[(0,H.jsx)("div",{children:(0,H.jsx)(f.Z,{variant:"subtitle1",children:"Number of Past offers"})}),(0,H.jsx)("div",{children:(0,H.jsx)(f.Z,{sx:{fontSize:24},children:null!==(z=ae.filter((function(e){return"PAST"===e.status})).length)&&void 0!==z?z:"0"})})]})]}),(0,H.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px"},children:(0,H.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[(0,H.jsx)(Z.Z,{placeholder:"Search by offer code",size:"small",value:Ee,onChange:function(e){return Pe(e.target.value)},InputProps:{startAdornment:(0,H.jsx)(m.Z,{position:"start",children:(0,H.jsx)(P.Z,{})})}}),(0,H.jsx)("div",{children:(0,H.jsx)(V._,{dateAdapter:Y.y,children:(0,H.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"row",gap:"10px",alignItems:"center"},children:[(0,H.jsx)(U.M,{label:"From",format:"DD/MM/YYYY",value:He,slotProps:{textField:{size:"small"}},onChange:function(e){Be(e)},renderInput:function(e){return(0,H.jsx)(Z.Z,(0,a.Z)({},e))}}),(0,H.jsx)(f.Z,{children:"-"}),(0,H.jsx)(U.M,{label:"To",format:"DD/MM/YYYY",value:Ge,slotProps:{textField:{size:"small"}},onChange:function(e){Ke(e)},renderInput:function(e){return(0,H.jsx)(Z.Z,(0,a.Z)({},e))}})]})})})]})}),(0,H.jsx)(g.Z,{open:Q,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,H.jsxs)(c.Z,{sx:B,children:[(0,H.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,H.jsx)(f.Z,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Create New Offer"}),(0,H.jsx)("div",{style:{padding:"10px",backgroundColor:"white",borderRadius:"10px"},children:(0,H.jsxs)(j.ZP,{container:!0,spacing:2,children:[(0,H.jsx)(j.ZP,{item:!0,xs:6,children:(0,H.jsx)(Z.Z,{label:"Offer Code",name:"offercode",value:ce.code,disabled:!0,fullWidth:!0,required:!0})}),(0,H.jsx)(j.ZP,{item:!0,xs:6,children:(0,H.jsxs)(y.Z,{fullWidth:!0,children:[(0,H.jsx)(b.Z,{id:"demo-simple-select-label",children:"Offer Percentage Type"}),(0,H.jsxs)(C.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:ce.type,label:"Offer Percentage Type",name:"type",onChange:Je,error:pe.type,required:!0,children:[(0,H.jsx)(v.Z,{value:"PERCENTAGE",children:"Percentage Discount"}),(0,H.jsx)(v.Z,{value:"VALUE",children:"Value Discount"})]}),pe.type&&(0,H.jsx)(S.Z,{sx:{color:"red"},children:"Please Select Offer Type"})]})}),(0,H.jsx)(j.ZP,{item:!0,xs:me?6:12,children:(0,H.jsx)(Z.Z,{label:"PERCENTAGE"===ce.type?"Percentage":"Value",placeholder:"PERCENTAGE"===ce.type?"ENTER PERCENTAGE":"ENTER VALUE",name:"typeValue",type:"number",onChange:Je,value:ce.typeValue,fullWidth:!0,error:pe.typeValue,helperText:pe.typeValue?"Enter ".concat("PERCENTAGE"===ce.type?"percentage":"value"):null,required:!0})}),me&&(0,H.jsx)(j.ZP,{item:!0,xs:me?6:4,children:(0,H.jsxs)(y.Z,{fullWidth:!0,children:[(0,H.jsx)(b.Z,{id:"demo-simple-select-label",children:"Offer Status"}),(0,H.jsxs)(C.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:ce.status,label:"Offer Status",name:"status",onChange:Je,error:pe.status,required:!0,children:[(0,H.jsx)(v.Z,{value:"DRAFT",children:"Draft"}),(0,H.jsx)(v.Z,{value:"LIVE",children:"Live"}),(0,H.jsx)(v.Z,{value:"PAST",children:"Past"})]}),pe.status&&(0,H.jsx)(S.Z,{sx:{color:"red"},children:"Please Select Offer Status"})]})}),(0,H.jsx)(j.ZP,{item:!0,xs:12,children:(0,H.jsx)(Z.Z,{label:"Description",multiline:!0,rows:3,type:"text",name:"description",value:ce.description,onChange:Je,fullWidth:!0})})]})})]}),(0,H.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",justifyContent:"flex-end",padding:"10px"},children:[(0,H.jsx)(p.Z,{variant:"contained",onClick:me?Xe:Qe,color:"primary",children:me?"Update":"Save"}),(0,H.jsx)(p.Z,{variant:"outlined",onClick:function(){me&&(de(W),ge(!1)),X(!1),Te({})},children:"Cancel"})]})]})}),(0,H.jsx)("div",{style:{marginTop:"20px"},children:(0,H.jsx)(I.ZP,{columns:et,data:tt,pagination:!0,progressPending:ne})}),(0,H.jsxs)(D.Z,{open:Ye,onClose:function(){return ze(!1)},children:[(0,H.jsx)(w.Z,{children:"Remove Offer"}),(0,H.jsx)(T.Z,{children:"Are you sure you want to delete this offer?"}),(0,H.jsxs)($.Z,{children:[(0,H.jsx)(p.Z,{onClick:function(){return ze(!1)},children:"Cancel"}),(0,H.jsx)(p.Z,{onClick:function(){var e=localStorage.getItem(R._.keyUserToken),t=(0,O.sw)(e),n={headers:{Authorization:"Bearer ".concat(t)}};A.ZP.post(A.Hv.offer.delete,{id:ce.id},n).then((function(e){e&&(G("Offer deleted successfully!",{variant:"success"}),ze(!1),de(W),xe(q),_e())})).catch((function(e){G(e.msg||e.error,{variant:"error"})}))},variant:"contained",color:"error",children:"Delete"})]})]})]})}},42419:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var i=r(n(45649)),s=n(80184);t.Z=(0,i.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},5403:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var i=r(n(45649)),s=n(80184);t.Z=(0,i.default)((0,s.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},65661:function(e,t,n){"use strict";var r=n(87462),i=n(63366),s=n(72791),a=n(28182),o=n(94419),l=n(4567),u=n(66934),c=n(31402),d=n(17673),f=n(85090),h=n(80184),p=["className","id"],x=(0,u.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),v=s.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiDialogTitle"}),l=n.className,u=n.id,v=(0,i.Z)(n,p),Z=n,m=function(e){var t=e.classes;return(0,o.Z)({root:["root"]},d.a,t)}(Z),g=s.useContext(f.Z).titleId,j=void 0===g?u:g;return(0,h.jsx)(x,(0,r.Z)({component:"h2",className:(0,a.Z)(m.root,l),ownerState:Z,ref:t,variant:"h6",id:null!=u?u:j},v))}));t.Z=v},83027:function(e){e.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,i,s){var a=i.prototype;s.utc=function(e){return new i({date:e,utc:!0,args:arguments})},a.utc=function(t){var n=s(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},a.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var o=a.parse;a.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),o.call(this,e)};var l=a.init;a.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else l.call(this)};var u=a.utcOffset;a.utcOffset=function(r,i){var s=this.$utils().u;if(s(r))return this.$u?0:s(this.$offset)?u.call(this):this.$offset;if("string"==typeof r&&(r=function(e){void 0===e&&(e="");var r=e.match(t);if(!r)return null;var i=(""+r[0]).match(n)||["-",0,0],s=i[0],a=60*+i[1]+ +i[2];return 0===a?0:"+"===s?a:-a}(r),null===r))return this;var a=Math.abs(r)<=16?60*r:r,o=this;if(i)return o.$offset=a,o.$u=0===r,o;if(0!==r){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(a+l,e)).$offset=a,o.$x.$localOffset=l}else o=this.utc();return o};var c=a.format;a.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,t)},a.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var d=a.toDate;a.toDate=function(e){return"s"===e&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var f=a.diff;a.diff=function(e,t,n){if(e&&this.$u===e.$u)return f.call(this,e,t,n);var r=this.local(),i=s(e).local();return f.call(r,i,t,n)}}}()}}]);
//# sourceMappingURL=902.2a07515b.chunk.js.map